# SPHR Website

Official SPHR portfolio website built with Next.js App Router.

## Project Structure

```
src/
 ├─ app/
 │   ├─ layout.tsx         # Root layout (imports global styles, Header, Footer)
 │   ├─ page.tsx           # Main page (imports all sections)
 │   ├─ welcome/
 │   │   └─ WelcomeSection.tsx       # Welcome section
 │   ├─ service/
 │   │   └─ ServiceSection.tsx       # Service section
 │   ├─ contact/
 │   │   └─ ContactSection.tsx       # Contact section
 │   └─ globals.css        # Tailwind global styles
 │
 ├─ components/
 │   ├─ layout/
 │   │   ├─ Header.tsx     # Sticky header with navigation
 │   │   ├─ Footer.tsx     # Footer
 │   │   └─ LogoPlaceholder.tsx
 │   └─ index.ts           # Exporting layouts files
 │
 └─ constants/
     └─ nav_links.json     # Navigation links config
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npx next dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Modular, scrollable one-page layout (Welcome, Service, Contact)
- Navigation links managed in `src/constants/nav_links.json`
- Reusable Header and Footer components in `src/components/layout/`
- Tailwind CSS for rapid, scalable styling (see `globals.css`)
- TypeScript for type safety
- Path aliases for clean imports (see `tsconfig.json`)
- Barrel files for organized imports

## Usage

- To add a new section, create a folder in `src/app/` and add a `page.tsx` file.
- To update navigation, edit `src/constants/nav_links.json`.
- Import shared components using path aliases, e.g.:
  ```tsx
  import Header from "@components";
  import navLinks from "@constants";
  ```
- All main layout and style logic is in `src/components/layout/` and `src/app/globals.css`.

## Contributing

Contact Angelo, Josh, Lee, or Dylan for further information.
# sphr-website
