
import { useEffect, useRef, useState } from "react";

export default function AnimatedHeading({
  children,
  className = "",
  as: Tag = "h2",
  threshold = 0.5,
}) {
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const headingText = String(children ?? "");

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
      }
    );

    observer.observe(heading);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={headingRef}
      aria-label={headingText}
      className={className}
    >
      {headingText.split("").map((letter, index) => (
        <span
          key={`${index}-${letter}`}
          aria-hidden="true"
          className={`inline-block transition-all duration-300 ease-out motion-reduce:transition-none ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
          style={{
            transitionDelay: isVisible ? `${index * 45}ms` : "0ms",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </Tag>
  );
}
