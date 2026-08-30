# FREE AWS Deployment Architecture

## Overview

This document outlines a complete FREE deployment architecture using AWS Free Tier, AWS Credits (150 total), and free services to deploy the portfolio with advanced DevOps features.

## Free Services Used

| Service | Free Tier Limit | Cost After Free Tier | Notes |
|---------|----------------|---------------------|-------|
| AWS Amplify | Free for personal use | $0.10/GB storage | Includes CI/CD, SSL, custom domain |
| AWS S3 | 5GB storage, 20K requests/month | $0.023/GB | Static file storage |
| AWS CloudFront | 1TB data transfer/month | $0.085/GB | CDN, caching |
| AWS Certificate Manager | FREE | FREE | SSL/TLS certificates |
| AWS CloudWatch | 10 custom metrics, 1GB logs | $0.50/GB | Monitoring & logging |
| AWS ECR | 500MB storage | $0.10/GB/month | Docker registry |
| GitHub Actions | 2000 minutes/month (free) | Paid tiers | CI/CD pipeline |
| Docker Hub | Unlimited public repos | Paid for private | Docker image hosting |
| Terraform | FREE | FREE | Infrastructure as Code |

## Architecture Diagram

```
GitHub Repository
    ↓ (Push)
GitHub Actions (CI/CD)
    ↓ (Build & Test)
Docker Hub (Public)
    ↓ (Push Image)
AWS ECR (Optional)
    ↓ (Pull)
AWS Amplify (Primary Deployment)
    ↓ (Deploy)
CloudFront (CDN)
    ↓ (Cache)
S3 (Static Assets)
    ↓ (Serve)
Route 53 (DNS - Optional)
    ↓ (Resolve)
Custom Domain (User-provided)
```

## Deployment Options (FREE)

### Option 1: AWS Amplify (Recommended - Easiest & Free)

**Pros:**
- Completely FREE for personal use
- Built-in CI/CD
- Automatic SSL certificates
- Custom domain support
- Preview deployments
- Rollback capability

**Cons:**
- Less control over infrastructure
- Limited customization

**Cost: $0/month**

### Option 2: S3 + CloudFront + GitHub Actions

**Pros:**
- Full control over CI/CD
- Static site optimization
- Global CDN
- Infrastructure as Code ready

**Cons:**
- More complex setup
- Manual SSL configuration

**Cost: $0/month (within free tier)**

### Option 3: Docker + ECR + App Runner

**Pros:**
- Container-based deployment
- Auto-scaling
- Modern deployment approach

**Cons:**
- More complex
- May exceed free tier with high traffic

**Cost: $0-10/month (depending on usage)**

## What's NOT Free (Alternatives Provided)

### Kubernetes (EKS) - NOT FREE
- **Cost**: ~$73/month minimum for EKS cluster
- **Alternative**: Use AWS Amplify or App Runner (serverless)
- **Reason**: Kubernetes is overkill for a static portfolio

### Route 53 Hosted Zone - NOT FREE
- **Cost**: ~$0.50/month per hosted zone
- **Alternative**: Use Cloudflare FREE DNS or domain registrar DNS
- **Reason**: Can save money with free DNS providers

### Domain Name - NOT FREE
- **Cost**: ~$10-15/year
- **Alternative**: Use free subdomain (e.g., portfolio.vercel.app)
- **Reason**: Domain names always cost money

## Recommended FREE Architecture

### Primary Deployment: AWS Amplify

1. **GitHub Actions** - CI/CD pipeline (FREE)
2. **Docker** - Containerization (FREE)
3. **AWS Amplify** - Deployment platform (FREE)
4. **CloudFront** - CDN (FREE tier)
5. **Certificate Manager** - SSL (FREE)
6. **CloudWatch** - Monitoring (FREE tier)
7. **Terraform** - IaC (FREE)

### Backup Strategy

1. **GitHub** - Code backup (FREE)
2. **S3 Versioning** - Asset backup (FREE tier)
3. **Amplify Rollbacks** - Deployment backup (FREE)

## Cost Breakdown

### Monthly Costs (FREE Tier)
- AWS Amplify: $0
- S3 Storage: $0 (5GB free)
- CloudFront: $0 (1TB free)
- Certificate Manager: $0
- CloudWatch: $0 (10 metrics free)
- GitHub Actions: $0 (2000 minutes free)
- Docker Hub: $0 (public repo)
- Terraform: $0

**Total Monthly Cost: $0**

### One-Time Costs
- Domain Name: $10-15/year (optional)
- AWS Credits: Using existing 150 credits

## Features Implemented

### 1. Automations (GitHub Actions)
- Automated builds on push
- Automated testing
- Automated deployment
- Rollback automation

### 2. Observability (CloudWatch)
- Custom metrics
- Log aggregation
- Alarm notifications
- Performance monitoring

### 3. DevSecOps (GitHub Actions)
- Dependency scanning (Snyk)
- Security scanning (Trivy)
- Code quality checks (ESLint)
- Secret scanning

### 4. Backup Scripts
- Automated S3 backups
- Database backups (if needed)
- Configuration backups
- Disaster recovery

### 5. Optimized Docker
- Multi-stage builds
- Alpine Linux base
- Layer caching
- Minimal image size

### 6. Infrastructure as Code (Terraform)
- Reproducible infrastructure
- Version control
- Automated provisioning
- Easy rollback

### 7. Kubernetes Alternative
- **Note**: Kubernetes is NOT free
- **Alternative**: AWS Amplify (serverless)
- **Benefits**: Same auto-scaling, no cost

### 8. CI/CD (GitHub Actions)
- Build automation
- Test automation
- Deploy automation
- Notification automation

### 9. Custom Domain
- SSL certificate (FREE via ACM)
- DNS configuration (Cloudflare FREE)
- HTTPS redirect (FREE)

## Implementation Priority

### Phase 1: Basic Deployment (Day 1)
1. Set up AWS Amplify
2. Connect GitHub repository
3. Configure build settings
4. Deploy to production

### Phase 2: CI/CD (Day 2)
1. Create GitHub Actions workflow
2. Add automated testing
3. Add automated deployment
4. Configure notifications

### Phase 3: Docker & Optimization (Day 3)
1. Create optimized Dockerfile
2. Set up Docker Hub
3. Configure multi-stage builds
4. Test image size

### Phase 4: IaC & Security (Day 4)
1. Create Terraform configuration
2. Add security scanning
3. Set up monitoring
4. Configure backups

### Phase 5: Advanced Features (Day 5)
1. Set up CloudWatch
2. Configure alarms
3. Add custom domain
4. Optimize performance

## AWS Credits Usage

### Available Credits
- AWS Credits: 100
- Challenge Credits: 50
- **Total: 150 credits**

### Credit Allocation
- Amplify: $0 (free)
- S3: $0 (free tier)
- CloudFront: $0 (free tier)
- CloudWatch: $0 (free tier)
- **Credits Reserved**: For future scaling or paid features

## Free Tier Limits to Monitor

### S3
- 5GB storage
- 20,000 requests/month
- 2,000 PUT requests/month

### CloudFront
- 1TB data transfer/month
- 10,000 requests/month

### CloudWatch
- 10 custom metrics
- 1GB log data
- 1 million API requests

### GitHub Actions
- 2000 minutes/month
- 500MB storage

## Monitoring Free Tier Usage

### CloudWatch Alarms
Set up alarms for:
- S3 storage usage (>4GB)
- CloudFront data transfer (>900GB)
- CloudWatch log ingestion (>900MB)
- GitHub Actions minutes (>1800)

### Cost Alerts
- AWS Budgets: Set $0 budget alert
- Billing alerts: Notify at 80% of free tier

## Scaling Beyond Free Tier

If you exceed free tier limits:

1. **S3**: $0.023/GB - optimize images, use CDN
2. **CloudFront**: $0.085/GB - already very cheap
3. **CloudWatch**: $0.50/GB - reduce log verbosity
4. **GitHub Actions**: Use self-hosted runners

## Alternative Free Services

### DNS
- Cloudflare DNS (FREE)
- Google Domains DNS (FREE)
- Namecheap DNS (FREE with domain)

### Monitoring
- UptimeRobot (FREE)
- Pingdom (FREE tier)
- New Relic (FREE tier)

### CI/CD
- GitLab CI (FREE)
- CircleCI (FREE tier)
- Travis CI (FREE tier)

## Conclusion

This architecture provides:
- ✅ Complete FREE deployment
- ✅ Advanced DevOps features
- ✅ CI/CD automation
- ✅ Security scanning
- ✅ Monitoring & observability
- ✅ Infrastructure as Code
- ✅ Backup automation
- ✅ Custom domain support
- ✅ SSL certificates
- ✅ Optimized Docker images

**Total Monthly Cost: $0**
**Using AWS Credits: 0 (reserved for future)**
**Deployment Time: 5 days (phased approach)**
