
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { useEffect } from 'react'
import { initializePathAnimations } from './components/howItWorks/AnimationUtils'

// Initialize animations after component mount
const AppWithAnimations = () => {
  useEffect(() => {
    // Small timeout to ensure DOM is fully rendered
    setTimeout(() => {
      const paths = document.querySelectorAll('#segmentA1, #segmentA2, #segmentA3, #segmentA4, #segmentA5');
      paths.forEach(path => {
        // Initialize each path
        const pathElement = path as unknown as SVGPathElement;
        if (pathElement) {
          const length = pathElement.getTotalLength();
          pathElement.style.strokeDasharray = `${length}`;
          pathElement.style.strokeDashoffset = `${length}`;
          pathElement.style.transition = 'stroke-dashoffset 1.6s ease-in-out';
          
          // Animate in
          setTimeout(() => {
            pathElement.style.strokeDashoffset = '0';
          }, 300);
        }
      });
    }, 500);
  }, []);

  return <App />;
};

createRoot(document.getElementById("root")!).render(<AppWithAnimations />);
