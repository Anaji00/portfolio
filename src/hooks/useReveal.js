import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to reveal elements using IntersectionObserver as they scroll into view.
 * @param {number} threshold - Intersection threshold (0.0 to 1.0)
 * @param {string} rootMargin - Viewport margin offset
 * @returns {[React.RefObject, boolean]} - Ref to attach to element, and visibility boolean
 */
export function useReveal(threshold = 0.15, rootMargin = '0px') {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if IntersectionObserver is supported
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible];
}

export default useReveal;
