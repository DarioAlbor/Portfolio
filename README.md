# Portfolio - Darío Albor

Modern portfolio website showcasing software engineering projects and experience.

🌐 **Live Site**: [darioalbor.dev.ar](https://darioalbor.dev.ar)

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: i18next (English/Spanish)
- **Contact Form**: Formspree with reCAPTCHA v3

## Features

- 🌍 **Bilingual Support** - English and Spanish
- 📱 **Responsive Design** - Mobile-first approach
- ✨ **Smooth Animations** - Framer Motion transitions
- 📧 **Contact Form** - Integrated with Formspree
- 🛡️ **Security** - reCAPTCHA v3 protection
- ⚡ **Fast Loading** - Optimized performance
- 🎨 **Modern UI** - Clean and professional design

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DarioAlbor/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.default .env
   ```

4. **Configure your environment**
   
   Edit `.env` file with your information:
   ```env
   REACT_APP_GITHUB_USERNAME=YOUR_NAME
   REACT_APP_GITHUB_URL=https://github.com/YOUR_USERNAME
   REACT_APP_LINKEDIN_URL=https://linkedin.com/in/YOUR_LINKEDIN
   REACT_APP_EMAIL=your@email.com
   REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   REACT_APP_RECAPTCHA_SITE_KEY=YOUR_RECAPTCHA_SITE_KEY
   ```

5. **Start development server**
   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The build folder will contain the production-ready files.

## Configuration

### Contact Form Setup

1. Create a [Formspree](https://formspree.io) account
2. Get your form endpoint and add it to `.env`
3. Setup [Google reCAPTCHA v3](https://www.google.com/recaptcha)
4. Add your reCAPTCHA site key to `.env`

### Customization

- **Content**: Edit translation files in `src/i18n/locales/`
- **Styling**: Modify Tailwind classes or `src/index.css`
- **Components**: Update React components in `src/components/`
- **SEO**: Configure meta tags in `public/index.html`

## Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Add environment variables in Netlify dashboard
5. Deploy automatically on git push

### Manual Deployment

1. Run `npm run build`
2. Upload `build` folder contents to your hosting provider

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Website**: [darioalbor.dev.ar](https://darioalbor.dev.ar)

---

Made with ❤️ by Darío Albor
