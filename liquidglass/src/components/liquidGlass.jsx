import React, { useEffect, useRef } from "react";
import "./liquidGlass.css";

export default function LiquidGlass({ title, subtitle }) {
  const wrapperRef = useRef(null);
  const dispRef = useRef(null);

  useEffect(() => {
    const el = wrapperRef.current;
    const disp = dispRef.current;

    function updateBgPos() {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--bg-pos-x", `${-r.left}px`);
      el.style.setProperty("--bg-pos-y", `${-r.top}px`);
    }

    updateBgPos();
    window.addEventListener("resize", updateBgPos);
    window.addEventListener("scroll", updateBgPos);

    function onPointerMove(e) {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      el.style.setProperty("--mouse-x", `${x}px`);
      el.style.setProperty("--mouse-y", `${y}px`);

      const nx = (x / r.width - 0.5) * 2; // -1 to 1
      const ny = (y / r.height - 0.5) * 2; // -1 to 1
      const dist = Math.min(1, Math.hypot(nx, ny));
      const scale = 8 + dist * 36;
      if (disp) disp.setAttribute("scale", String(scale));
    }

    window.addEventListener("pointermove", onPointerMove);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches && disp) {
      disp.setAttribute("scale", "2");
    }

    return () => {
      window.removeEventListener("resize", updateBgPos);
      window.removeEventListener("scroll", updateBgPos);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div className="liquid-wrapper" ref={wrapperRef}>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
        <filter id="liquidFilter" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.82"
            numOctaves="2"
            stitchTiles="stitch"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="0.5" result="nblur" />
          <feDisplacementMap
            ref={dispRef}
            in="SourceGraphic"
            in2="nblur"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div
        className="glass-card"
        role="region"
        aria-label="Liquid glass demo card"
      >
        <div
          className="glass-card__bg"
          style={{ backgroundImage: "var(--bg-image)" }}
        />

        <div className="glass-card__frost" />

        <div className="glass-card__content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className="controls">
            <button
              onClick={() =>
                alert("🌊 Exploring Liquid Glass... more demos coming soon!")
              }
            >
              Explore
            </button>
            <button
              className="ghost"
              onClick={() =>
                window.open(
                  "https://developer.apple.com/design/human-interface-guidelines/materials#Liquid-Glass",
                  "_blank"
                )
              }
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
