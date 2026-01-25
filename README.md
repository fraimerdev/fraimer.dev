# fraimer.dev

Personal portfolio website built with [TanStack Start](https://tanstack.com/start) and [Tailwind CSS](https://tailwindcss.com).

## Tech Stack

- **Framework**: TanStack Start (React)
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ or Bun

### Installation

```bash
# Install dependencies
bun install
# or
npm install
```

### Development

```bash
# Start development server
bun run dev
# or
npm run dev
```

The app will be available at [http://localhost:7000](http://localhost:7000).

### Build

```bash
# Build for production
bun run build
# or
npm run build
```

### Production

```bash
# Start production server
bun run start
# or
npm run start
```

## Project Structure

```
src/
├── routes/
│   ├── __root.tsx      # Root layout with head metadata
│   ├── index.tsx       # Home page
│   ├── terms.tsx       # Commission terms page
│   └── $pathname.tsx   # Dynamic redirects
├── styles/
│   └── app.css         # Global styles & Tailwind
└── router.tsx          # Router configuration
```

## Routes

- `/` - Home page with profile and projects
- `/terms` - Commission terms and conditions
- `/proton` - Redirects to prtn.xyz
- `/x` - Redirects to X/Twitter profile
- `/github` - Redirects to GitHub profile
- `/donate` - Redirects to Ko-fi page
