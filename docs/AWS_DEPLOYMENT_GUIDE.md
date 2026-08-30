# AWS Deployment Guide

This guide provides step-by-step instructions for deploying the Priyanshu Garg Portfolio to AWS using various AWS services.

## Prerequisites

- AWS Account with appropriate permissions
- AWS CLI installed and configured
- Node.js 18+ installed locally
- Git installed
- Domain name (optional, for custom domain)

## Deployment Options

### Option 1: AWS Amplify (Recommended - Easiest)

Amplify provides a fully managed CI/CD pipeline for Next.js applications.

#### Steps:

1. **Create AWS Amplify App**
   ```bash
   # Login to AWS Console
   # Navigate to AWS Amplify
   # Click "New app" → "Host web app"
   ```

2. **Connect Repository**
   - Choose "GitHub" (or your Git provider)
   - Authorize AWS to access your repository
   - Select the repository: `priyanshu-portfolio`

3. **Configure Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
       cache:
         paths:
           - node_modules/**/*
   ```

4. **Environment Variables**
   - Add any required environment variables in Amplify console
   - Example:
     - `NODE_ENV`: `production`

5. **Deploy**
   - Click "Save and deploy"
   - Amplify will automatically build and deploy
   - Wait for deployment to complete (~5-10 minutes)

6. **Custom Domain (Optional)**
   - Go to "Domain management" in Amplify
   - Add your custom domain
   - Configure DNS settings with your domain provider

### Option 2: AWS S3 + CloudFront (Static Export)

For static site deployment with global CDN.

#### Steps:

1. **Configure Next.js for Static Export**
   
   Update `next.config.js`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   
   module.exports = nextConfig;
   ```

2. **Build Static Export**
   ```bash
   npm run build
   # Output will be in /out directory
   ```

3. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://priyanshu-portfolio --region us-east-1
   aws s3api put-bucket-policy --bucket priyanshu-portfolio --policy file://policy.json
   ```
   
   Create `policy.json`:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::priyanshu-portfolio/*"
       }
     ]
   }
   ```

4. **Upload to S3**
   ```bash
   aws s3 sync out/ s3://priyanshu-portfolio --delete
   ```

5. **Create CloudFront Distribution**
   ```bash
   aws cloudfront create-distribution \
     --origin-domain-name priyanshu-portfolio.s3.amazonaws.com \
     --default-root-object index.html \
     --default-cache-behavior TargetOriginId=priyanshu-portfolio,ViewerProtocolPolicy=redirect-to-https
   ```

6. **Setup Custom Domain (Optional)**
   - Add CNAME record in DNS pointing to CloudFront domain
   - Update CloudFront distribution with custom domain

### Option 3: AWS EC2 + Nginx (Full Server Control)

For complete server control and custom configurations.

#### Steps:

1. **Launch EC2 Instance**
   ```bash
   # Ubuntu 22.04 LTS
   # t3.medium or t3.large (recommended)
   # Security Group: Allow HTTP (80), HTTPS (443), SSH (22)
   ```

2. **Connect to Instance**
   ```bash
   ssh -i your-key.pem ubuntu@your-ec2-public-ip
   ```

3. **Install Dependencies**
   ```bash
   sudo apt update
   sudo apt install -y nodejs npm nginx
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs
   ```

4. **Clone Repository**
   ```bash
   cd /var/www
   sudo git clone https://github.com/Priyanshu-2545/priyanshu-portfolio.git
   cd priyanshu-portfolio
   sudo npm install
   sudo npm run build
   sudo npm start
   ```

5. **Setup PM2 for Process Management**
   ```bash
   sudo npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

6. **Configure Nginx**
   ```bash
   sudo nano /etc/nginx/sites-available/portfolio
   ```
   
   Add:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. **Enable Site**
   ```bash
   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

8. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

### Option 4: AWS App Runner (Container-based)

Modern container deployment with automatic scaling.

#### Steps:

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Push to ECR (Elastic Container Registry)**
   ```bash
   aws ecr create-repository --repository-name priyanshu-portfolio
   docker build -t priyanshu-portfolio .
   docker tag priyanshu-portfolio:latest <account-id>.dkr.ecr.region.amazonaws.com/priyanshu-portfolio:latest
   aws ecr get-login-password --region region | docker login --username AWS --password-stdin <account-id>.dkr.ecr.region.amazonaws.com
   docker push <account-id>.dkr.ecr.region.amazonaws.com/priyanshu-portfolio:latest
   ```

3. **Create App Runner Service**
   - Go to AWS App Runner console
   - Click "Create service"
   - Select "Image repository" → "ECR"
   - Choose your repository
   - Configure environment variables
   - Deploy

## Environment Variables

Create `.env` file (add to .gitignore):

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Cost Estimation

- **Amplify**: Free tier + $0.10/GB storage + $0.15/GB data transfer
- **S3 + CloudFront**: ~$5-10/month for typical portfolio
- **EC2**: ~$15-30/month (t3.medium)
- **App Runner**: ~$10-25/month depending on usage

## Monitoring & Logging

### CloudWatch (for EC2/App Runner)
```bash
# Install CloudWatch agent
sudo apt install amazon-cloudwatch-agent
# Configure and start
sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl \
  -a fetch-config -m ec2 -s -c file://config.json
```

### Amplify Monitoring
- Built-in monitoring in Amplify console
- View build logs, deployment status, and metrics

## Troubleshooting

### Build Failures
- Check build logs in AWS console
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

### Deployment Issues
- Check security group settings
- Verify IAM permissions
- Review CloudWatch logs for errors

### Performance Issues
- Enable CloudFront caching
- Optimize images
- Use AWS CDN for static assets

## Security Best Practices

1. **Never commit sensitive data**
   - Use environment variables for secrets
   - Keep .env files in .gitignore

2. **Use HTTPS**
   - Enable SSL/TLS certificates
   - Force HTTPS redirects

3. **Restrict Access**
   - Use security groups properly
   - Limit SSH access
   - Use IAM roles instead of access keys

4. **Regular Updates**
   - Keep dependencies updated
   - Apply security patches
   - Monitor AWS security advisories

## Backup & Recovery

### S3 Versioning
```bash
aws s3api put-bucket-versioning \
  --bucket priyanshu-portfolio \
  --versioning-configuration Status=Enabled
```

### Database Backups (if applicable)
- Use AWS Backup service
- Configure automated backups
- Test restore procedures

## Support Resources

- AWS Documentation: https://docs.aws.amazon.com/
- Next.js Deployment: https://nextjs.org/docs/deployment
- AWS Support Center: https://console.aws.amazon.com/support/

## Quick Start Checklist

- [ ] AWS account created and configured
- [ ] Repository connected to AWS
- [ ] Build settings configured
- [ ] Environment variables set
- [ ] Domain configured (if using custom domain)
- [ ] SSL certificate installed
- [ ] Monitoring enabled
- [ ] Backup strategy implemented
- [ ] Security review completed
