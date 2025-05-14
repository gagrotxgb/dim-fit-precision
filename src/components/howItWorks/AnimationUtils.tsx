
import React, { useEffect, useRef } from 'react';

// Animation hook for path animations
export const usePathAnimation = () => {
  const animationRef = useRef<{ active: boolean }>({ active: true });
  const animatedPaths = useRef<Set<string>>(new Set());
  const observer = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // IDs of the animated paths
    const ids = ['segmentA1', 'segmentA2', 'segmentA3', 'segmentA4', 'segmentA5'];
    
    // Initialize all path segments on mount
    initializePaths();
    
    // Create intersection observer to trigger animations only when visible
    observer.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animatedPaths.current.size) {
          // Only start animations when the section is visible
          startAnimations(ids);
        }
      },
      { threshold: 0.2 } // Start when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.current.observe(sectionRef.current);
    }

    // Also initialize any paths that might be in the hero section
    // This ensures the animation works in both sections
    function initializePaths() {
      ids.forEach(id => {
        const paths = document.querySelectorAll(`#${id}`);
        paths.forEach(path => {
          const pathElement = path as unknown as SVGPathElement;
          if (pathElement) {
            const length = pathElement.getTotalLength();
            pathElement.style.strokeDasharray = `${length}`;
            pathElement.style.strokeDashoffset = `${length}`;
            pathElement.style.transition = 'stroke-dashoffset 1.6s ease-in-out';
          }
        });
      });
    }

    // Optimized animation that doesn't use requestAnimationFrame during scroll
    function startAnimations(pathIds: string[]) {
      pathIds.forEach((id, idx) => {
        setTimeout(() => {
          if (!animationRef.current.active) return;
          
          const paths = document.querySelectorAll(`#${id}`);
          paths.forEach(pathElement => {
            const path = pathElement as unknown as SVGPathElement;
            if (!path) return;
            
            // Use CSS transitions instead of JS animation
            path.style.strokeDashoffset = '0';
            animatedPaths.current.add(id);
            
            // Reset animation after delay
            setTimeout(() => {
              if (!animationRef.current.active) return;
              
              // Briefly pause at full visibility
              path.style.transition = 'none';
              
              setTimeout(() => {
                if (!animationRef.current.active) return;
                
                // Reset and prepare for next animation
                const length = path.getTotalLength();
                path.style.strokeDashoffset = `${length}`;
                
                setTimeout(() => {
                  if (!animationRef.current.active) return;
                  
                  // Restore transition for next animation
                  path.style.transition = 'stroke-dashoffset 1.6s ease-in-out';
                  path.style.strokeDashoffset = '0';
                }, 50);
              }, 1000);
            }, 1600);
          });
        }, idx * 200);
      });
    }

    // Cleanup
    return () => {
      animationRef.current.active = false;
      if (observer.current && sectionRef.current) {
        observer.current.unobserve(sectionRef.current);
        observer.current.disconnect();
      }
      animatedPaths.current.clear();
    };
  }, []);

  return { sectionRef };
};

// Export a function to initialize path animations for any section
export const initializePathAnimations = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const paths = element.querySelectorAll('path');
  paths.forEach(path => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    path.style.transition = 'stroke-dashoffset 1.6s ease-in-out';
    
    // Animate in
    setTimeout(() => {
      path.style.strokeDashoffset = '0';
    }, 300);
  });
};
