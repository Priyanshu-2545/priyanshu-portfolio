# Priyanshu Garg - Professional Portfolio

A modern, professional portfolio website showcasing DevOps expertise, full-stack development skills, and cloud infrastructure projects.

## Features

- **Modern Design**: Clean, professional dark-mode optimized interface
- **Responsive Layout**: Fully responsive across desktop, tablet, and mobile devices
- **Interactive Terminal Demo**: Live demonstration of DevOps commands and workflows
- **Project Showcase**: Detailed project cards with tech stack and achievements
- **Skills Visualization**: Categorized technical skills with proficiency indicators
- **Experience Timeline**: Professional experience and certifications
- **Contact Form**: Direct contact integration
- **Performance Optimized**: Built with Next.js for optimal performance

## Tech Stack

- **Frontend**: Next.js 13+ with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Lucide React icons
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Build & Deployment

### Local Build
```bash
npm run build
npm run start
```

### Deploy to Vercel

1. Push to GitHub:
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel will automatically:
- Build your Next.js application
- Deploy to a live URL
- Enable automatic deployments on git push

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles
├── components/
│   ├── projects-section.tsx      # Featured projects
│   ├── skills-section.tsx        # Technical skills
│   ├── experience-section.tsx    # Experience & achievements
│   ├── terminal-section.tsx      # Interactive terminal demo
│   ├── contact-section.tsx       # Contact form
│   ├── footer.tsx                # Footer
│   └── ui/                       # shadcn/ui components
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Customization

### Update Personal Information
Edit the contact information in:
- `components/contact-section.tsx` - Email, phone, location
- `components/projects-section.tsx` - Project details
- `components/experience-section.tsx` - Experience and achievements

### Modify Colors
Update Tailwind color classes in components or modify CSS variables in `app/globals.css`

### Add/Remove Sections
Components are modular and can be easily added or removed from `app/page.tsx`

## Performance

- Optimized for Core Web Vitals
- Automatic image optimization
- Zero-downtime deployments
- CDN-backed static files

## SEO

- Optimized metadata and Open Graph tags
- Semantic HTML structure
- Mobile-friendly design
- Fast page load times

## License

MIT

## Connect

- Email: priyanshugarg2525@gmail.com
- Phone: +91 7791994483
- GitHub: @priyanshugarg
- LinkedIn: /in/priyanshu-garg
