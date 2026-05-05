import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reveal = (el: Element) => el.classList.add("is-visible");

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    const observe = () => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          reveal(el);
        } else {
          io.observe(el);
        }
      });
    };

    observe();
    // Safety net: ensure everything becomes visible eventually
    const t = window.setTimeout(() => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach(reveal);
    }, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);
}