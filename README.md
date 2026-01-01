# 🌐 Eliseo.page

Personal portfolio website built with Next.js 16, featuring industry-standard theming, internationalization, and accessibility.

## ✨ Features

- 🎨 **Theme System** - Dark/Light/System modes with smooth transitions and localStorage persistence
- 🌍 **Internationalization (i18n)** - Support for English, Spanish, and Portuguese with dynamic content translation
- ⌨️ **Full Keyboard Navigation** - Complete accessibility with visible focus states and keyboard shortcuts
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🎯 **Accessible Components** - Built with Radix UI primitives for WCAG compliance
- 🚀 **Next.js 16** - App Router with Turbopack for blazing-fast development
- 🔷 **TypeScript** - Full type safety across the entire codebase
- 🎭 **Custom Scrollbar** - Styled scrollbar that adapts to the theme
- 🧩 **Component Architecture** - Modular, reusable components with CVA
- 📦 **Optimized Build** - Automatic code splitting and optimization

## 🛠️ Tech Stack

```json
{
  "framework": "Next.js 16.1.0",
  "language": "TypeScript 5",
  "styling": "Tailwind CSS v4 + CVA",
  "ui": "Radix UI",
  "icons": "Lucide React",
  "fonts": "Commit Mono (custom)",
  "state": "React Context API",
  "utilities": "clsx + tailwind-merge"
}
```

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── globals.css   # Global styles and theme variables
│   ├── layout.tsx    # Root layout with providers
│   └── page.tsx      # Home page
├── components/
│   ├── ui/          # Reusable UI components
│   └── config-menu.tsx  # Theme/language selector
├── contexts/        # React Context providers
│   ├── theme-provider.tsx
│   └── language-provider.tsx
├── config/          # Site configuration
├── hooks/           # Custom React hooks
├── lib/             # Utilities and helpers
│   └── i18n.ts      # Translation dictionaries
└── types/           # TypeScript type definitions
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/eliseo.page.git
cd eliseo.page

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Features Deep Dive

### Theme System

The site implements a production-ready theme system with:

- **3 modes**: Dark (default), Light, and System (auto-detects OS preference)
- **Persistent state**: Theme preference saved in localStorage
- **CSS Variables**: Custom color palette that changes with theme
- **Smooth transitions**: All color changes are animated
- **Keyboard accessible**: Fully navigable with Tab and Enter keys

**Usage:**

- Click the ⚙️ Config button in the navbar
- Select your preferred theme
- Changes apply instantly and persist across sessions

### Internationalization (i18n)

Full translation support for 3 languages:

- 🇬🇧 **English** - Default
- 🇪🇸 **Spanish** - Español
- 🇧🇷 **Portuguese** - Português

**Features:**

- Dynamic content translation without page reload
- Language preference saved in localStorage
- Automatic `lang` attribute update on `<html>`
- All UI text, navigation, and content translated

**Adding new translations:**

1. Open `src/lib/i18n.ts`
2. Add your translations to the `translations` object
3. Use `useTranslations(language)` hook in components

### Keyboard Navigation

Full keyboard accessibility:

- **Tab**: Navigate through interactive elements
- **Enter/Space**: Activate buttons and links
- **Escape**: Close dropdown menus
- **Arrow keys**: Navigate within menus
- **Visible focus indicators**: Clear blue ring on focused elements

### Custom Scrollbar

Themed scrollbar that adapts to dark/light mode:

- Custom width and styling
- Smooth hover effects
- Consistent across browsers

## 📦 Available Scripts

```bash
npm run dev          # Development server with Turbopack
npm run build        # Production build
npm start            # Run production build
npm run lint         # Run ESLint
```

## 🎯 Best Practices Implemented

✅ **Strict TypeScript** configuration  
✅ **Client Components** only where needed for interactivity  
✅ **Automatic code splitting** with App Router  
✅ **Custom font optimization** with Commit Mono  
✅ **SEO optimized** with complete metadata  
✅ **WCAG compliant** with Radix UI components  
✅ **Scalable architecture** ready to grow  
✅ **CSS Variables** for dynamic theming  
✅ **Context API** for global state management  
✅ **Type-safe** translation system

## 🔧 Tech Details

### Tailwind CSS v4

Using the new Tailwind CSS v4 with:

- `@import "tailwindcss"` syntax
- `@theme` directive for custom variables
- Custom color utilities (`bg-bg`, `text-fg-muted`, etc.)
- No `@apply` or `@layer` (pure CSS for compatibility)

### Component Architecture

```typescript
// Example: ConfigMenu component
- Uses Radix UI DropdownMenu for accessibility
- Integrates with theme and language contexts
- Keyboard navigable out of the box
- Fully typed with TypeScript
```

### State Management

Simple and effective with React Context:

- `ThemeProvider`: Manages dark/light/system mode
- `LanguageProvider`: Handles i18n state
- No external state library needed
- Type-safe context hooks

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

Construido con ❤️ usando las mejores herramientas de la industria

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
