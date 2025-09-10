import React from "react";
import LiquidGlass from "./components/liquidGlass";
import bg from "./assets/bg.jpg";

function App() {
  return (
    <>
      <div className="app" style={{ "--bg-image": `url(${bg})` }}>
        <header className="hero">
          <h2>Liquid Glass Demo</h2>
          <p>Move your mouse - the glass bends and frosts.</p>
        </header>
        <main>
          <LiquidGlass
            title="Liquid Glass"
            subtitle="🍎-like refractive card"
          />
        </main>
        <footer className="foot">Made with CSS, SVG filters & ❣️ </footer>
      </div>
    </>
  );
}

export default App;
