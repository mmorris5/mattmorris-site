# Matt Morris Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and [morris-ui](https://www.npmjs.com/package/morris-ui).

## Features

- ✨ Beautiful, modern UI with glassmorphism effects
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎨 Tailwind CSS for styling
- 🔵 morris-ui component library integration
- 🌙 Dark mode optimized
- ♿ Accessibility focused

## Sections

- **Hero** - Striking introduction with call-to-action buttons
- **About** - Personal background and quick facts
- **Skills** - Categorized technical expertise
- **Projects** - Showcase of featured projects
- **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

## Customization

### Update Personal Information

Edit the following files to personalize the content:

- [src/components/Hero.tsx](src/components/Hero.tsx) - Main headline and introduction
- [src/components/About.tsx](src/components/About.tsx) - Biography and facts
- [src/components/Skills.tsx](src/components/Skills.tsx) - Technical skills
- [src/components/Projects.tsx](src/components/Projects.tsx) - Project showcase
- [src/components/Contact.tsx](src/components/Contact.tsx) - Contact information

### Styling

The site uses Tailwind CSS for styling. Update colors and themes in:

- [tailwind.config.js](tailwind.config.js) - Theme configuration
- [src/index.css](src/index.css) - Global styles

## Technologies

- **React** 18 - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **morris-ui** - React component library
- **Autoprefixer & PostCSS** - CSS processing

## Deploying

This site can be deployed to various platforms:

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Then drag the dist folder to Netlify
```

### GitHub Pages

Update `vite.config.ts` with your repository name and follow Vercel/Netlify deployment.

## License

This project is open source and available under the MIT License.

## Contact

- 📧 Email: matt.m.morris2@gmail.com
- 🐙 GitHub: [github.com](https://github.com/mmorris5)
- 💼 LinkedIn: [linkedin.com](https://linkedin.com/in/matt-morris2)

---

Made with ❤️ using [morris-ui](https://www.npmjs.com/package/morris-ui)
