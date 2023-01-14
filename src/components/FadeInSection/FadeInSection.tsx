import React, { useState, useRef, useEffect } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const curr: Element = domRef.current as Element;

    const observer = new IntersectionObserver((entries) => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);

        // No need to keep observing:
        observer.unobserve(curr);
      }
    });

    observer.observe(curr);

    return () => observer.unobserve(curr);
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
