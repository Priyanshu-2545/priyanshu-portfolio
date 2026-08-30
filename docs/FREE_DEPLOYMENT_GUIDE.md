# FREE AWS Deployment Guide

This guide provides step-by-step instructions to deploy the portfolio to AWS using FREE services only.

## Prerequisites

- AWS Account with 150 credits (100 + 50 challenge)
- GitHub account
- Docker Hub account
- Node.js 18+ installed locally
- AWS CLI installed and configured

## Step 1: GitHub Repository Setup

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Priyanshu-2545/priyanshu-portfolio.git
   git push -u origin main
   ```

## Step 2: AWS Amplify Setup (FREE)

1. **Create AWS Amplify App**
   - Go to AWS Console → Amplify
   - Click "New app" → "Host web app"
   - Select GitHub and authorize
   - Choose repository: `priyanshu-portfolio`
   - Branch: `main`

2. **Configure Build Settings**
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
   ```

3. **Deploy**
   - Click "Save and deploy"
   - Wait for deployment (~5 minutes)
   - Your site will be live at: `https://xxxxx.amplifyapp.com`

## Step 3: GitHub Actions CI/CD (FREE)

1. **Add GitHub Secrets**
   - Go to repository → Settings → Secrets
   - Add these secrets:
     - `AWS_ACCESS_KEY_ID`
     - `AWS_SECRET_ACCESS_KEY`
     - `DOCKER_USERNAME`
     - `DOCKER_PASSWORD`
     - `AMPLIFY_APP_ID`
     - `SNYK_TOKEN` (optional)
     - `SLACK_WEBHOOK_URL` (optional)

2. **Push to trigger CI/CD**
   ```bash
   git add .
   git commit -m "Add CI/CD pipeline"
   git push
   ```

3. **Monitor pipeline**
   - Go to repository → Actions tab
   - Watch the pipeline run
   - All jobs should complete successfully

## Step 4: Docker Optimization (FREE)

1. **Build Docker image**
   ```bash
   docker build -t priyanshu-portfolio .
   ```

2. **Test Docker image**
   ```bash
   docker run -p 3000:3000 priyanshu-portfolio
   ```

3. **Push to Docker Hub**
   ```bash
   docker tag priyanshu-portfolio yourusername/priyanshu-portfolio:latest
   docker push yourusername/priyanshu-portfolio:latest
   ```

## Step 5: Terraform IaC (FREE)

1. **Install Terraform**
   ```bash
   brew install terraform  # macOS
   # or download from terraform.io
   ```

2. **Initialize Terraform**
   ```bash
   cd terraform
   terraform init
   ```

3. **Plan infrastructure**
   ```bash
   terraform plan \
     -var="environment=prod" \
     -var="aws_region=us-east-1"
   ```

4. **Apply infrastructure**
   ```bash
   terraform apply \
     -var="environment=prod" \
     -var="aws_region=us-east-1"
   ```

## Step 6: CloudWatch Monitoring (FREE)

1. **Run monitoring setup script**
   ```bash
   chmod +x scripts/monitoring-setup.sh
   ./scripts/monitoring-setup.sh
   ```

2. **View CloudWatch Dashboard**
   - Go to AWS Console → CloudWatch → Dashboards
   - View `priyanshu-portfolio-prod` dashboard

## Step 7: Security Scanning (FREE)

1. **Run security scan script**
   ```bash
   chmod +x scripts/security-scan.sh
   ./scripts/security-scan.sh
   ```

2. **Review findings**
   - Address any critical vulnerabilities
   - Update dependencies if needed

## Step 8: Backup Automation (FREE)

1. **Setup S3 backup cron job**
   ```bash
   chmod +x scripts/backup-s3.sh
   # Add to crontab for daily backups
   crontab -e
   # Add: 0 2 * * * /path/to/scripts/backup-s3.sh
   ```

## Step 9: Custom Domain (Optional - Costs Money)

1. **Purchase domain** (~$10-15/year)
2. **Get free SSL from AWS Certificate Manager**
3. **Configure DNS** (use Cloudflare FREE DNS)
4. **Update Amplify domain settings**

## Step 10: Observability & Reliability

### CloudWatch Metrics (FREE)
- S3 storage usage
- CloudFront requests
- Error rates
- Response times

### Alarms (FREE)
- S3 storage > 4GB
- CloudFront error rate > 5%
- Deployment failures

### Logging (FREE)
- Application logs
- Build logs
- Error logs

## Cost Summary

### Monthly Costs (FREE Tier)
- AWS Amplify: $0
- S3 Storage: $0 (5GB free)
- CloudFront: $0 (1TB free)
- CloudWatch: $0 (10 metrics free)
- GitHub Actions: $0 (2000 minutes free)
- Docker Hub: $0 (public repo)
- Terraform: $0

**Total Monthly Cost: $0**

### One-Time Costs
- Domain Name: $10-15/year (optional)

## AWS Credits Usage

- **Available**: 150 credits (100 + 50)
- **Used**: $0 (all services are free)
- **Remaining**: 150 credits (reserved for future scaling)

## Verification Checklist

- [ ] Site deployed to AWS Amplify
- [ ] GitHub Actions CI/CD working
- [ ] Docker image built and pushed
- [ ] Terraform infrastructure deployed
- [ ] CloudWatch monitoring active
- [ ] Security scans passing
- [ ] Backup scripts configured
- [ ] Custom domain configured (optional)

## Troubleshooting

### Amplify Build Fails
- Check build logs in Amplify console
- Verify Node.js version compatibility
- Ensure all dependencies are in package.json

### GitHub Actions Fails
- Check Actions tab for error logs
- Verify all secrets are set correctly
- Check AWS credentials permissions

### Terraform Fails
- Run `terraform plan` to see changes
- Check AWS credentials
- Verify region configuration

### CloudWatch Alarms
- Check alarm configuration
- Verify metric names match
- Check IAM permissions

## Next Steps

1. Monitor CloudWatch dashboard regularly
2. Review security scan findings
3. Test backup restoration
4. Update documentation as needed
5. Scale up if exceeding free tier limits

## Support

- AWS Documentation: https://docs.aws.amazon.com/
- GitHub Actions: https://docs.github.com/actions
- Terraform: https://www.terraform.io/docs
- Docker: https://docs.docker.com/

---

**Total Deployment Time: ~2 hours**
**Total Monthly Cost: $0**
**AWS Credits Used: 0 (all free tier)**
