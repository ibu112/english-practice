/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#cc0df2",
        "accent-cyan": "#00FFFF",
        "accent-yellow": "#FFE81F",
        "background-light": "#f8f5f8",
        "background-dark": "#1f1022",
        "ink-black": "#0a0a0a",
        "correct-green": "#39ff14",
        "wrong-red": "#ff3131",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"]
      },
      backgroundImage: {
        'halftone': 'radial-gradient(circle, #503b54 1px, transparent 1px)',
      },
      boxShadow: {
        'comic': '4px 4px 0px 0px #000000',
        'comic-hover': '6px 6px 0px 0px #000000',
        'comic-glitch': '-2px 2px 0px 0px #00FFFF, 2px -2px 0px 0px #cc0df2',
        'glow-green': '0 0 20px rgba(57, 255, 20, 0.8), 0 0 40px rgba(57, 255, 20, 0.4)',
        'glow-red': '0 0 20px rgba(255, 49, 49, 0.8), 0 0 40px rgba(255, 49, 49, 0.4)',
      }
    },
  },
  plugins: [],
}
