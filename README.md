# Taylor Floors Inc - Next.js Conversion

This project is a conversion of the original Taylor Floors Inc website to a Next.js application.

## Overview

The original static HTML/CSS/JavaScript website has been converted to a modern Next.js application with React components. All functionality has been preserved, including:

- Responsive design
- Interactive elements (navigation, forms, sliders)
- Animations and transitions
- Mobile menu toggle
- Scroll effects

## Changes Made

1. **Project Structure**: Converted from static files to Next.js app directory structure
2. **Components**: Broke down the single HTML file into React components
3. **State Management**: Used React hooks for state management (useState, useEffect)
4. **Event Handling**: Converted JavaScript event listeners to React event handlers
5. **Styling**: Moved all CSS to global stylesheets
6. **Fonts and Icons**: Integrated Google Fonts and Font Awesome via CDN

## How to Start the Site

There are two ways to run the site locally:

### Development Mode

For development and testing purposes:
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

If port 3000 is already in use, the application will automatically start on the next available port (e.g., 3001, 3002, etc.) and display the new port in the terminal.

To manually specify a port:
```bash
npx next dev -p 3001
```

### Production Mode

To run the site in production mode (requires building first):
```bash
npm run build
npm start
```
By default, the application will start on port 3000. To specify a different port:
```bash
PORT=3001 npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser (replace 3000 with your chosen port).

## Getting Started

### Prerequisites

- Node.js (version 18 or later)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If port 3000 is occupied, check the terminal output for the actual port being used.

### Troubleshooting Port Conflicts on Windows

If you encounter a port conflict on Windows, you can either:

1. Use a different port as shown above, or
2. Free up port 3000 by terminating the process using it:
   ```bash
   netstat -ano | findstr :3000
   taskkill /PID <process_id> /F
   ```

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
taylors-floors-next/
├── public/              # Static assets
├── src/
│   └── app/             # App router directory
│       ├── layout.tsx   # Root layout
│       └── page.tsx     # Home page
├── styles/              # Global styles
└── package.json         # Dependencies and scripts
```

## Features

- **Responsive Design**: Works on all device sizes
- **Smooth Animations**: CSS animations and transitions
- **Interactive UI**: Form validation and user feedback
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Server-side rendering for better SEO

## Dependencies

- Next.js 15