import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const revealSelectors = [
  "main > section",
  ".simple-card",
  ".program-summary",
  ".classes-audience-card",
  ".classes-step-grid article",
  ".cc-benefit-simple-grid article",
  ".about-values-grid article",
  ".contact-reasons-grid article",
  ".about-proof-grid article",
  ".classes-proof-grid article",
];

export default function SiteMotion() {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = [...new Set(revealSelectors.flatMap((selector) => [...document.querySelectorAll(selector)]))];

    elements.forEach((element, index) => {
      element.classList.add("reveal-item");
      element.style.setProperty("--reveal-delay", `${Math.min(index * 35, 220)}ms`);

      if (prefersReducedMotion) {
        element.classList.add("is-visible");
      }
    });

    if (prefersReducedMotion) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
