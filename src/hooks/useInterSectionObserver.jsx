import { useEffect, useRef, useState } from "react";

// Function to update scroll position
export default function useInterSectionObserver() {
  const [scroll, setScroll] = useState(false);
  const nodeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Add scroll event listener on component mount
  useEffect(() => {
    const updateScrollPosition = () => {
      const currentPosition = document.documentElement.scrollTop;
      if (currentPosition >= 600) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", () => {
      updateScrollPosition();
    });
    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

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

  return { scroll, isVisible, nodeRef };
}
