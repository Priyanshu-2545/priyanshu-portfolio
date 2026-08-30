# Terraform configuration for AWS Infrastructure as Code
# EC2 + Docker based deployment (Free Tier eligible: t2.micro, 750 hrs/month for 12 months)

provider "aws" {
  region = var.aws_region
}

# Get latest Amazon Linux 2023 AMI
data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["al2023-ami-*-x86_64"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

# Security Group - allow SSH, HTTP, HTTPS
resource "aws_security_group" "portfolio_sg" {
  name        = "${var.project_name}-sg-${var.environment}"
  description = "Allow SSH, HTTP, HTTPS for portfolio server"

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name        = "${var.project_name}-sg"
    Environment = var.environment
    Project     = var.project_name
  }
}

# EC2 instance with Docker + Nginx pre-installed via user_data
resource "aws_instance" "portfolio_server" {
  ami                    = data.aws_ami.amazon_linux.id
  instance_type          = var.instance_type
  key_name               = var.key_pair_name
  vpc_security_group_ids = [aws_security_group.portfolio_sg.id]

  user_data = <<-EOF
              #!/bin/bash
              dnf update -y
              dnf install -y docker nginx
              systemctl enable docker
              systemctl start docker
              usermod -aG docker ec2-user
              systemctl enable nginx
              systemctl start nginx
              EOF

  tags = {
    Name        = "${var.project_name}-server"
    Environment = var.environment
    Project     = var.project_name
  }
}

# Elastic IP so the public address stays fixed across restarts
resource "aws_eip" "portfolio_eip" {
  instance = aws_instance.portfolio_server.id
  domain   = "vpc"

  tags = {
    Name        = "${var.project_name}-eip"
    Environment = var.environment
    Project     = var.project_name
  }
}

# CloudWatch Log Group (Free tier: 5GB logs ingestion + storage)
resource "aws_cloudwatch_log_group" "portfolio_logs" {
  name              = "/aws/${var.project_name}/${var.environment}"
  retention_in_days = 7

  tags = {
    Name        = "${var.project_name}-logs"
    Environment = var.environment
    Project     = var.project_name
  }
}

# CloudWatch Dashboard
resource "aws_cloudwatch_dashboard" "portfolio_dashboard" {
  dashboard_name = "${var.project_name}-${var.environment}"

  dashboard_body = jsonencode({
    widgets = [
      {
        type   = "metric"
        x      = 0
        y      = 0
        width  = 12
        height = 6

        properties = {
          metrics = [
            ["AWS/EC2", "CPUUtilization", "InstanceId", aws_instance.portfolio_server.id, { "stat" : "Average", "period" : 300 }]
          ]
          period = 300
          stat   = "Average"
          region = var.aws_region
          title  = "EC2 CPU Utilization"
        }
      },
      {
        type   = "metric"
        x      = 0
        y      = 6
        width  = 12
        height = 6

        properties = {
          metrics = [
            ["AWS/EC2", "NetworkIn", "InstanceId", aws_instance.portfolio_server.id, { "stat" : "Sum", "period" : 300 }],
            ["AWS/EC2", "NetworkOut", "InstanceId", aws_instance.portfolio_server.id, { "stat" : "Sum", "period" : 300 }]
          ]
          period = 300
          stat   = "Sum"
          region = var.aws_region
          title  = "Network Traffic"
        }
      }
    ]
  })
}

# CloudWatch Alarm - alert if CPU stays high (possible issue with the app/instance)
resource "aws_cloudwatch_metric_alarm" "cpu_alarm" {
  alarm_name          = "${var.project_name}-high-cpu-${var.environment}"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "2"
  metric_name         = "CPUUtilization"
  namespace           = "AWS/EC2"
  period              = "300"
  statistic           = "Average"
  threshold           = "80"
  alarm_description   = "This metric monitors EC2 CPU utilization"
  alarm_actions       = [aws_sns_topic.alerts.arn]

  dimensions = {
    InstanceId = aws_instance.portfolio_server.id
  }
}

# SNS Topic for alerts (Free tier: 1000 notifications/month)
resource "aws_sns_topic" "alerts" {
  name = "${var.project_name}-alerts-${var.environment}"
}

# SNS Topic subscription (email)
resource "aws_sns_topic_subscription" "email_alerts" {
  topic_arn = aws_sns_topic.alerts.arn
  protocol  = "email"
  endpoint  = var.alert_email
}

# Outputs
output "instance_public_ip" {
  description = "Public IP of the portfolio EC2 server (use this to SSH and to set EC2_HOST GitHub secret)"
  value       = aws_eip.portfolio_eip.public_ip
}

output "instance_id" {
  description = "EC2 instance ID"
  value       = aws_instance.portfolio_server.id
}

output "cloudwatch_log_group" {
  description = "CloudWatch log group name"
  value       = aws_cloudwatch_log_group.portfolio_logs.name
}