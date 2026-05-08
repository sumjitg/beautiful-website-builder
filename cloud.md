# Cloud Deployment Guide

This document provides comprehensive information for deploying the Beautiful Website Builder project to various cloud platforms.

## Project Overview

**Project Name:** Beautiful Website Builder
**Framework:** TanStack Start (React-based SSR framework)
**Build Tool:** Vite
**Package Manager:** npm (with bun.lock also present)

## Supported Deployment Platforms

### 1. Vercel

**Configuration File:** `vercel.json`

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".vercel/output",
  "framework": "vite"
}
```

**Build Command:**
```bash
NITRO_PRESET=vercel vite build
```

**Deployment Steps:**
1. Connect your repository to Vercel
2. Vercel will automatically detect the configuration
3. The build command uses Nitro with Vercel preset for optimal deployment
4. Deploy automatically on push to main branch

**Environment Variables (if needed):**
- Set any required environment variables in Vercel dashboard

---

### 2. Cloudflare Workers/Pages

**Configuration File:** `wrangler.jsonc`

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "tanstack-start-app",
  "compatibility_date": "2025-09-24",
  "compatibility_flags": ["nodejs_compat"],
  "main": "src/server.ts"
}
```

**Build Command:**
```bash
npm run build
```

**Deployment Steps:**
1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Login to Cloudflare:
   ```bash
   wrangler login
   ```

3. Deploy to Cloudflare Workers:
   ```bash
   wrangler deploy
   ```

**For Cloudflare Pages:**
1. Connect your Git repository
2. Set build command: `npm run build`
3. Set output directory: `.vercel/output` or appropriate build output
4. Deploy automatically on push

---

### 3. Local Development

**Install Dependencies:**
```bash
npm install
# or
bun install
```

**Run Development Server:**
```bash
npm run dev
```

The dev server will start on the default port (usually 5173 or 3000).

**Build for Production:**
```bash
npm run build
```

**Preview Production Build:**
```bash
npm run preview
```

---

## Project Structure

```
beautiful-website-builder/
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # React components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility libraries
│   ├── routes/         # Route definitions
│   ├── server.ts       # Server entry point
│   ├── start.ts        # TanStack Start configuration
│   ├── router.tsx      # Router configuration
│   └── styles.css      # Global styles
├── .lovable/           # Lovable IDE configuration
├── vercel.json         # Vercel deployment config
├── wrangler.jsonc      # Cloudflare Workers config
├── vite.config.ts      # Vite build configuration
├── package.json        # Dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

---

## Key Technologies

- **React 19.2.0** - UI library
- **TanStack Start** - Full-stack React framework
- **TanStack Router** - File-based routing
- **TanStack Query** - Data fetching and caching
- **Vite** - Build tool and dev server
- **Tailwind CSS 4.2.1** - Styling
- **Radix UI** - Accessible component primitives
- **TypeScript** - Type safety

---

## Additional Scripts

```bash
npm run lint          # Run ESLint
npm run format        # Format code with Prettier
npm run build:dev     # Build in development mode
```

---

## Notes

- The project uses Nitro for server-side rendering with multiple deployment presets
- Both Vercel and Cloudflare Workers are officially supported deployment targets
- The `@cloudflare/vite-plugin` is included for Cloudflare-specific optimizations
- Node.js compatibility is enabled for Cloudflare Workers via `nodejs_compat` flag
