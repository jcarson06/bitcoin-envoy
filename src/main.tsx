import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { cleanupIntersectionObservers } from './hooks/useOptimizedIntersectionObserver'

// Cleanup observers on page unload (browser only)
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', cleanupIntersectionObservers);
}

const rootElement = document.getElementById("root")!;

// If react-snap has prerendered HTML into the root, hydrate it.
// Otherwise (dev, first visit without prerender), do a normal client render.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}
