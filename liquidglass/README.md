# 🌊 Liquid Glass UI Demo (React + Vite)

A demo project that recreates **Apple’s new “Liquid Glass” design language** in a React app.  
It combines **glassmorphism**, **blur effects**, and **SVG displacement maps** to create a refractive, frosted, liquid-like card effect.

✨ Built with **React + Vite** for speed and simplicity.

---

## 🚀 Features
- 🌌 Full-screen background with a frosted glass card  
- 🔮 **Liquid Glass effect** using `backdrop-filter` + SVG `feDisplacementMap`  
- 🖱️ Interactive card: distortion reacts to mouse movement  
- 🎨 Explore & Learn More buttons with hover animations  
- ♿ Accessibility: respects `prefers-reduced-motion`, ARIA labels, and high-contrast text  
- 📱 Responsive and works on all modern browsers  

---

## 📂 Project Structure
```bash
src/
├── App.jsx # Main App component
├── main.jsx # Entry point
├── index.css # Global styles
├── assets/bg.jpg # Background image (replace with your own)
└── components/
├── LiquidGlass.jsx # Liquid Glass React component
└── LiquidGlass.css # Component styles
```

## 🛠️ Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/yourusername/liquid-glass-demo.git
cd liquid-glass-demo
npm install
```

### 2. Run the Dev Server
```bash
npm run dev
```
---

## 🎨 Customization
- Replace src/assets/bg.jpg with your own background image
- Edit LiquidGlass.css to tweak blur, border radius, and glass saturation
- Add more cards or sections to make a full UI layout

---

## 🌐 Browser Support
- ✅ Chrome, Edge, Firefox, Safari (latest versions)
- ⚠️ Some older browsers may not fully support backdrop-filter or SVG filters
- Fallback styles (semi-transparent backgrounds) are included

---

## 📸 Preview

<img width="828" height="1017" alt="Demo" src="https://github.com/user-attachments/assets/ba00d5cd-89dc-4578-93e0-d3eac50dfb65" />

---

Made with ❤️ by Utkarsh

---
