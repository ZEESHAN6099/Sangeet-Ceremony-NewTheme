import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Fix for mobile 100vh issues: set a CSS variable `--vh` to represent 1% of the
// viewport height and update on resize/orientation change. Components and CSS
// use `calc(var(--vh, 1vh) * 100)` instead of `100vh` to avoid clipping.
function setVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVh();
window.addEventListener('resize', setVh);
window.addEventListener('orientationchange', setVh);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
