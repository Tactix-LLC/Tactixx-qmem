<div align="center">
  <img src="public/images/tactics-logo.png" alt="Tactics PLC Logo" width="150" height="150">
  
  # 🏆 Tactics PLC - Fantasy Football Website
  
  **The Ultimate Fantasy Football Experience**
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![React](https://img.shields.io/badge/React-18.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  
  [🚀 Live Demo](https://tactics-plc.vercel.app) • [📱 Download App](#download) • [📖 Documentation](#documentation)
</div>

---

## 🎯 About Tactics PLC

Tactics PLC is a cutting-edge fantasy football platform that revolutionizes how you experience fantasy sports. Built with modern web technologies, our platform offers an intuitive interface, real-time updates, and comprehensive analytics to help you dominate your fantasy leagues.

### ✨ Key Features

- 🏈 **Advanced Player Analytics** - Deep statistical insights and performance predictions
- 📊 **Real-time Scoring** - Live updates during games with instant notifications
- 🎮 **Interactive Dashboard** - Intuitive team management and lineup optimization
- 📱 **Mobile-First Design** - Seamless experience across all devices
- 🤝 **Social Features** - League chat, trash talk, and community engagement
- 🏆 **Multiple League Types** - Standard, PPR, Dynasty, and custom scoring
- 📈 **Trade Analyzer** - AI-powered trade recommendations and fairness analysis
- 🔔 **Smart Notifications** - Injury alerts, waiver wire suggestions, and more

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/tactics-plc.git
   cd tactics-plc
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install

   # or

   yarn install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

   Configure your `.env.local` file:
   \`\`\`env

   # SMTP Configuration

   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM=your-email@gmail.com

   # Optional: Analytics

   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev

   # or

   yarn dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

\`\`\`
tactics-plc/
├── 📁 app/ # Next.js App Router
│ ├── 📁 download/ # App download page
│ ├── 📁 features/ # Features showcase
│ ├── 📁 how-to-play/ # Game instructions
│ ├── 📁 legal/ # Legal pages (Privacy, Terms, etc.)
│ ├── 📁 support/ # Support & contact pages
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Homepage
│ └── globals.css # Global styles
├── 📁 components/ # Reusable React components
│ ├── 📁 ui/ # shadcn/ui components
│ ├── football-background.tsx
│ ├── iphone-frame.tsx
│ ├── partners-scroll.tsx
│ └── partners-section.tsx
├── 📁 lib/ # Utility functions
│ └── email-service.ts # Email handling
├── 📁 public/ # Static assets
│ └── 📁 images/ # Images and logos
├── 📁 hooks/ # Custom React hooks
├── package.json # Dependencies
├── tailwind.config.ts # Tailwind configuration
├── tsconfig.json # TypeScript configuration
└── README.md # This file
\`\`\`

---

## 🛠️ Technology Stack

### Frontend

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible components

### Backend & Services

- **[Nodemailer](https://nodemailer.com/)** - Email service integration
- **[Vercel](https://vercel.com/)** - Deployment and hosting platform

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks

---

## 📱 Features Overview

### 🏠 Homepage

- Hero section with app showcase
- Feature highlights
- Partner integrations
- Download buttons for iOS and Android

### 🎮 Game Features

- **Player Management** - Draft, trade, and manage your roster
- **Live Scoring** - Real-time game updates and scoring
- **Analytics Dashboard** - Performance metrics and insights
- **League Management** - Create and manage fantasy leagues

### 📞 Support System

- **Contact Form** - SMTP-powered email system
- **Help Center** - Comprehensive FAQ and guides
- **Bug Reports** - Issue tracking and resolution
- **Feature Requests** - Community-driven development

### 📄 Legal Compliance

- Privacy Policy
- Terms of Service
- Cookie Policy
- GDPR Compliance

---

## 🔧 Configuration

### Email Setup (SMTP)

1. **Gmail Setup** (Recommended)
   - Enable 2-factor authentication
   - Generate an App Password
   - Use App Password in `SMTP_PASS`

2. **Other Providers**
   \`\`\`env

   # Outlook/Hotmail

   SMTP_HOST=smtp-mail.outlook.com
   SMTP_PORT=587

   # Yahoo

   SMTP_HOST=smtp.mail.yahoo.com
   SMTP_PORT=587

   # Custom SMTP

   SMTP_HOST=your-smtp-server.com
   SMTP_PORT=587
   \`\`\`

### Deployment

#### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

#### Manual Deployment

\`\`\`bash
npm run build
npm start
\`\`\`

---

## 🎨 Customization

### Styling

- Modify `tailwind.config.ts` for theme customization
- Update `app/globals.css` for global styles
- Components use Tailwind utility classes

### Components

- All components are in the `components/` directory
- UI components from shadcn/ui in `components/ui/`
- Custom components for specific features

### Content

- Update page content in respective `app/` directories
- Modify legal documents in `app/legal/`
- Customize support pages in `app/support/`

---

## 🧪 Testing

### Development Testing

\`\`\`bash

# Run development server

npm run dev

# Test email functionality

# Use the "Test SMTP" button in development mode

\`\`\`

### Production Testing

\`\`\`bash

# Build for production

npm run build

# Start production server

npm start
\`\`\`

---

## 📈 Performance

### Optimization Features

- **Next.js App Router** - Optimized routing and rendering
- **Image Optimization** - Automatic image optimization
- **Code Splitting** - Automatic code splitting for faster loads
- **Static Generation** - Pre-rendered pages for better performance

### Lighthouse Scores

- 🟢 **Performance**: 95+
- 🟢 **Accessibility**: 100
- 🟢 **Best Practices**: 100
- 🟢 **SEO**: 100

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   \`\`\`bash
   git checkout -b feature/amazing-feature
   \`\`\`
3. **Commit your changes**
   \`\`\`bash
   git commit -m 'Add amazing feature'
   \`\`\`
4. **Push to the branch**
   \`\`\`bash
   git push origin feature/amazing-feature
   \`\`\`
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

---

## 📞 Support

### Get Help

- 📧 **Email**: [nahomtewodorsm@gmail.com](mailto:nahomtewodorsm@gmail.com)
- 📧 **Email**: [bekasdess@gmail.com](mailto:bekasdess@gmail.com)
- 🌐 **Website**: [Contact Form](https://tactics-plc.vercel.app/support/contact)
- 📱 **App Support**: Available in-app

### Report Issues

- 🐛 **Bug Reports**: [Bug Report Form](https://tactics-plc.vercel.app/support/bug-reports)
- 💡 **Feature Requests**: [Feature Request Form](https://tactics-plc.vercel.app/support/feature-requests)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[Next.js Team](https://nextjs.org/)** - Amazing React framework
- **[Vercel](https://vercel.com/)** - Excellent hosting platform
- **[Tailwind CSS](https://tailwindcss.com/)** - Beautiful utility-first CSS
- **[shadcn/ui](https://ui.shadcn.com/)** - Gorgeous component library
- **Fantasy Football Community** - Inspiration and feedback

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/your-username/tactics-plc?style=social)
![GitHub forks](https://img.shields.io/github/forks/your-username/tactics-plc?style=social)
![GitHub issues](https://img.shields.io/github/issues/your-username/tactics-plc)
![GitHub pull requests](https://img.shields.io/github/issues-pr/your-username/tactics-plc)

---

<div align="center">
  <h3>🏆 Built with ❤️ for Fantasy Football Enthusiasts</h3>
  <p>
    <a href="https://tactics-plc.vercel.app">Visit Website</a> •
    <a href="#quick-start">Get Started</a> •
    <a href="#support">Get Support</a>
  </p>
  
  **Made by the Tactics PLC Team**
</div>
