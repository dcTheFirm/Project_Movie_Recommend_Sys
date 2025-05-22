# Movie Recommendation System

A modern, responsive movie recommendation system built with React, TypeScript, Vite, and Tailwind CSS. This project allows users to browse, search, and get recommendations for movies, with a clean UI and interactive features.

## Features
- Browse and search for movies
- View detailed information in modals
- Filter and select preferences
- Responsive design with modern UI components
- Built using React, TypeScript, Vite, and Tailwind CSS

## Project Structure
```
src/
  App.tsx                # Main application component
  components/            # Reusable UI components
  hooks/                 # Custom React hooks
  lib/                   # Utility functions
  pages/                 # Page components (Index, NotFound, etc.)
  services/              # API service logic
  types/                 # TypeScript type definitions
public/                  # Static assets
```

## Getting Started

### 1. Install dependencies
```sh
npm install
```

### 2. Start the development server
```sh
node node_modules/vite/bin/vite.js
```

> If you want to use the npm script and it works on your system, you can also run:
> ```sh
> npm run dev
> ```

### 3. Open the app
Visit [http://localhost:8080](http://localhost:8080) in your browser.

## Build for Production
```sh
npm run build
```

## Note 
if error occurs after
```npm run build / npm run dev```
Try to  use the vite.js (inside the project) 
Run the command -> 
``` node node_modules/vite/bin/vite.js``