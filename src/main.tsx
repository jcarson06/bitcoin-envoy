import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { cleanupIntersectionObservers } from './hooks/useOptimizedIntersectionObserver'

// Cleanup observers on page unload
window.addEventListener('beforeunload', cleanupIntersectionObservers);

createRoot(document.getElementById("root")!).render(<App />);
