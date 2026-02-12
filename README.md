# Company Website - Frontend Assessment

A fully responsive company website showcasing legacy, innovation, and impact metrics. Built with modern web technologies including Astro, React, and Tailwind CSS.

## 🌟 Project Overview

This project is a professional, responsive website designed to showcase a company's journey, innovations, and global impact. The website features smooth animations, interactive components, and a mobile-first design approach.

**Live Demo Screenshots:**
- 🖥️ [Desktop View](https://github.com/user-attachments/assets/616691b9-4d46-4fb0-8288-5f568541032c)
- 📱 [Mobile View](https://github.com/user-attachments/assets/7d7d0738-45ac-412d-bd36-65b5f4dcde25)
- 📱 [Mobile Menu](https://github.com/user-attachments/assets/572bd952-31a3-4302-a81d-201224117767)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Development](#-development)
- [Building for Production](#-building-for-production)
- [Project Structure](#-project-structure)
- [Design Reference](#-design-reference)
- [Responsive Breakpoints](#-responsive-breakpoints)
- [Components](#-components)
- [Deployment](#-deployment)
- [Performance Optimizations](#-performance-optimizations)
- [Accessibility](#-accessibility)
- [Browser Support](#-browser-support)
- [License](#-license)

## ✨ Features

- **Fully Responsive Design** - Seamless experience across all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Component-Based Architecture** - Reusable Astro and React components
- **Smooth Scroll Animations** - Content reveals on scroll for engaging UX
- **Mobile Navigation** - Interactive hamburger menu with slide-in animation
- **Sticky Navigation** - Navbar with blur effect on scroll
- **Performance Optimized** - Fast load times and minimal bundle size
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Accessible** - WCAG compliant with keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) v4.15.0 - Static Site Generator
- **UI Library**: [React](https://react.dev/) v18.3.1 - For interactive components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.4.1 - Utility-first CSS framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) v5.5.0 - Type-safe JavaScript
- **Build Tool**: [Vite](https://vitejs.dev/) - Fast build tooling (via Astro)

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (comes with Node.js)

You can check your versions with:
```bash
node --version
npm --version
```

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/clsharma/frontend_assessment.git
   cd frontend_assessment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 💻 Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The site will be available at `http://localhost:4321/`

### Available Scripts

- `npm run dev` - Start development server
- `npm run start` - Alias for `npm run dev`
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## 🏗️ Building for Production

Build the static site for production:

```bash
npm run build
```

The build output will be in the `dist/` directory, ready to be deployed to any static hosting service.

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
frontend_assessment/
├── public/                      # Static assets
│   ├── favicon.svg             # Site favicon
│   └── robots.txt              # SEO robots file
├── src/
│   ├── components/             # Reusable components
│   │   ├── cards/             # Card components
│   │   │   ├── StatCard.astro        # Statistics display card
│   │   │   ├── FeatureCard.astro     # Feature showcase card
│   │   │   └── LegacyCard.astro      # Timeline card
│   │   ├── sections/          # Page sections
│   │   │   ├── Hero.astro            # Hero banner section
│   │   │   ├── Legacy.astro          # Company history section
│   │   │   ├── Innovation.astro      # Innovation showcase
│   │   │   ├── Impact.astro          # Impact metrics section
│   │   │   └── CTA.astro             # Call-to-action section
│   │   ├── Navbar.astro       # Main navigation bar
│   │   ├── MobileMenu.tsx     # Mobile menu (React)
│   │   └── Footer.astro       # Site footer
│   ├── layouts/
│   │   └── Layout.astro       # Base page layout
│   ├── pages/
│   │   └── index.astro        # Homepage
│   ├── styles/
│   │   └── global.css         # Global styles and Tailwind
│   └── assets/
│       └── images/            # Image assets
├── .gitignore                 # Git ignore rules
├── astro.config.mjs          # Astro configuration
├── package.json              # Project dependencies
├── tailwind.config.mjs       # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## 🎨 Design Reference

The design is based on the Figma file:
**[View Figma Design](https://www.figma.com/design/7wxFGrWQwYZRGNZZVM0azR/Assignment-Frontend?node-id=0-1&p=f&t=rosZefY3Lys2F0Yd-0)**

## 📱 Responsive Breakpoints

The website is fully responsive with the following breakpoints:

| Device | Breakpoint | Description |
|--------|-----------|-------------|
| Mobile | 320px - 767px | Optimized for smartphones |
| Tablet | 768px - 1023px | Optimized for tablets |
| Desktop | 1024px+ | Optimized for desktop screens |

Tailwind CSS default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🧩 Components

### Layout Components

#### **Layout.astro**
Base layout wrapper with:
- HTML head with meta tags
- SEO optimization
- Font preloading
- Scroll reveal script

#### **Navbar.astro**
Responsive navigation with:
- Sticky positioning
- Scroll-based backdrop blur
- Desktop menu
- Mobile toggle button

#### **MobileMenu.tsx** (React)
Mobile navigation menu with:
- Slide-in animation
- Overlay backdrop
- Touch-friendly links
- Close on navigation

#### **Footer.astro**
Multi-column footer with:
- Company info
- Quick links
- Services links
- Contact information
- Social media icons

### Section Components

#### **Hero.astro**
Full-screen hero banner featuring:
- Gradient background
- Animated headline
- CTA buttons
- Scroll indicator

#### **Legacy.astro**
Company history timeline with:
- Milestone cards
- Year-based layout
- Staggered animations

#### **Innovation.astro**
Feature showcase with:
- 6 innovation cards
- Icon-based design
- Grid layout

#### **Impact.astro**
Statistics section with:
- Key metrics display
- Large numbers
- Gradient background

#### **CTA.astro**
Call-to-action section with:
- Compelling message
- Action buttons
- Gradient card

### Card Components

All cards feature hover effects and responsive design:

- **StatCard.astro** - Display metrics and statistics
- **FeatureCard.astro** - Showcase features and innovations
- **LegacyCard.astro** - Display timeline milestones

## 🚢 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the contents of the `dist/` directory to your hosting provider.

### Deployment Configuration

The project is configured for static deployment:
- Output: `static` (pre-rendered HTML)
- Build directory: `dist/`
- No server-side rendering required

## ⚡ Performance Optimizations

- **Static Site Generation** - All pages pre-rendered at build time
- **Minimal JavaScript** - Only interactive components use React
- **CSS Purging** - Tailwind removes unused styles in production
- **Asset Optimization** - Vite optimizes all assets
- **Font Optimization** - Google Fonts preconnect and preload
- **Lazy Loading** - Images and components load as needed
- **Code Splitting** - Automatic code splitting for better caching

## ♿ Accessibility

The website follows WCAG 2.1 Level AA standards:

- **Semantic HTML** - Proper use of HTML5 elements
- **Heading Hierarchy** - Logical heading structure (h1-h6)
- **Alt Text** - All images have descriptive alt text
- **Color Contrast** - Minimum 4.5:1 contrast ratio
- **Keyboard Navigation** - Full keyboard support
- **Focus Indicators** - Visible focus states
- **ARIA Labels** - Proper ARIA attributes for interactive elements
- **Skip Links** - Smooth scroll navigation
- **Responsive Text** - Readable at all screen sizes

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🧪 Assumptions Made

During development, the following assumptions were made:

1. **Content**: Placeholder content used as Figma design provides structure but not all copy
2. **Images**: Icons and emojis used instead of custom images for rapid development
3. **Color Palette**: Primary and secondary colors defined in Tailwind config
4. **Fonts**: Google Fonts (Inter and Poppins) for clean, modern typography
5. **Animation Preferences**: Users have motion enabled (respects prefers-reduced-motion)
6. **Navigation**: Single-page design with smooth scroll to sections
7. **Mobile Menu**: React component for better state management

## 🤝 Contributing

This is an assessment project, but suggestions are welcome!

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 👨‍💻 Author

**clsharma**

Built with ❤️ using Astro, React, and Tailwind CSS

---

**Last Updated**: February 2026
