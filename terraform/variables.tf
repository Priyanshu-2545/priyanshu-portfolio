variable "aws_region" {
  description = "AWS region for deployment"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Name of the project"
  type        = string
  default     = "priyanshu-portfolio"
}

variable "environment" {
  description = "Environment (dev, staging, prod)"
  type        = string
  default     = "prod"
}

variable "alert_email" {
  description = "Email address for alerts"
  type        = string
  default     = "priyanshugarg2525@gmail.com"
}

variable "key_pair_name" {
  description = "EC2 key pair name (must already exist in AWS)"
  type        = string
  default     = "portfolio-key"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}