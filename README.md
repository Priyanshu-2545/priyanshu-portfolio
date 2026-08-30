# Priyanshu Garg - Professional Portfolio

A modern, professional portfolio website showcasing DevOps expertise, full-stack development skills, and cloud infrastructure projects.

## 🚀 Features

- **Modern Design**: Clean, professional UI with dark/light theme toggle
- **Responsive**: Fully responsive design for all devices
- **Animations**: Smooth scroll reveal animations and particle effects
- **Interactive**: Typing effects, hover animations, and interactive components
- **SEO Optimized**: Proper meta tags and structured data
- **Performance**: Optimized for fast loading and smooth interactions

### Key Sections

1. **Hero Section** - Animated typing effect with certification badges
2. **Skills Section** - Categorized skills with real emoji icons
3. **Projects Section** - Featured projects with tech stack and links
4. **Experience Section** - Professional experience timeline
5. **Credentials & Achievements** - Unified section for certifications, achievements, and badges
6. **Timeline Journey** - Career timeline with certificate images
7. **Terminal Section** - Animated terminal effect
8. **Contact Section** - Contact form and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Custom CSS + React hooks

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Priyanshu-2545/priyanshu-portfolio.git
   cd priyanshu-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   Navigate to http://localhost:3000
   ```

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
priyanshu-portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── typing-hero.tsx    # Hero section
│   ├── skills-section.tsx # Skills showcase
│   ├── projects-section.tsx
│   ├── experience-section.tsx
│   ├── credentials-showcase.tsx
│   ├── timeline-achievements.tsx
│   └── ...
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
│   ├── kavachh.jpeg
│   ├── hack-avishkar.jpeg
│   └── Gdggroups.jpeg
├── docs/                  # Documentation
│   ├── AWS_DEPLOYMENT_GUIDE.md
│   ├── PROJECT_DOCUMENTATION.md
│   └── DEPLOYMENT_CHECKLIST.md
└── README.md
```

## Customization

### Update Skills
Edit `components/skills-section.tsx` to add/modify skills.

### Update Projects
Edit `components/projects-section.tsx` to add/modify projects.

### Update Credentials
Edit `components/credentials-showcase.tsx` to add/modify certifications and achievements.

### Update Timeline
Edit `components/timeline-achievements.tsx` to add/modify timeline events.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### AWS
See [AWS Deployment Guide](docs/AWS_DEPLOYMENT_GUIDE.md) for detailed AWS deployment instructions.

## 📚 Documentation

- [AWS Deployment Guide](docs/AWS_DEPLOYMENT_GUIDE.md) - Complete AWS deployment instructions
- [Project Documentation](docs/PROJECT_DOCUMENTATION.md) - Detailed project documentation
- [Deployment Checklist](docs/DEPLOYMENT_CHECKLIST.md) - Pre and post-deployment checklist

## 🔐 Security

- Environment variables are used for sensitive data
- `.env` files are included in `.gitignore`
- No API keys or secrets are committed to the repository
- AWS credentials are protected in `.gitignore`

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Priyanshu Garg**
- GitHub: [@Priyanshu-2545](https://github.com/Priyanshu-2545)
- Email: priyanshugarg2525@gmail.com
- Phone: +91 7791994483
- LinkedIn: /in/priyanshu-garg

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- shadcn/ui for beautiful UI components
- Tailwind CSS for utility-first styling
- Lucide React for icon library

---

**Note**: This portfolio is ready for deployment to AWS, Vercel, or Netlify. See the documentation folder for detailed deployment guides.
