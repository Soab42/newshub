import { useEffect, useRef, useState } from "react";

// Function to update scroll position
export default function useInterSectionObserver() {
  const nodeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // console.log(isVisible);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );
    // console.log(observer);
    observer.observe(nodeRef.current);
    return () => observer.unobserve(nodeRef.current);
  }, [isVisible]);

  return { isVisible, nodeRef };
}
