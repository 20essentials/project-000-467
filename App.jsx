import React from "react";
import { createRoot } from "react-dom/client";
import { createStitches, keyframes } from "@stitches/react";

const { styled } = createStitches({
  global: {
    "*": { boxSizing: "border-box", margin: 0, padding: 0, fontFamily: "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'" },
    "*::after": { boxSizing: "border-box", margin: 0, padding: 0 },
    "*::before": { boxSizing: "border-box", margin: 0, padding: 0 },
    a: { WebkitTapHighlightColor: "transparent" },
    html: { scrollBehavior: "smooth", scrollbarWidth: "thin", scrollbarColor: "transparent transparent" },
    body: { height: "100vh", width: "100%", display: "flex", flexWrap: "wrap", placeContent: "center", overflow: "hidden", backgroundColor: "#000" },
  }
});

const upAndDown = keyframes({
  "0%, 100%": { transform: "translateZ(-100px) rotate(0deg)" },
  "50%": { transform: "translateZ(100px) rotate(90deg)" },
});

const ContainerLoader = styled("aside", {
  width: "300px",
  height: "300px",
  position: "relative",
  transformStyle: "preserve-3d",
  transform: "perspective(500px) rotateX(60deg)",
  "@media (width <= 1111px)": { zoom: 0.7 }
});

const Aro = styled("div", {
  position: "absolute",
  boxShadow: "inset 0 0 80px mediumturquoise",
  clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
  animation: `${upAndDown} 3s infinite ease-in-out both`,
  variants: {
    s: {
      0: { animationDelay: "calc(0 * -0.1s)" },
      1: { animationDelay: "calc(1 * -0.1s)" },
      2: { animationDelay: "calc(2 * -0.1s)" },
      3: { animationDelay: "calc(3 * -0.1s)" },
      4: { animationDelay: "calc(4 * -0.1s)" },
      5: { animationDelay: "calc(5 * -0.1s)" },
      6: { animationDelay: "calc(6 * -0.1s)" },
      7: { animationDelay: "calc(7 * -0.1s)" },
      8: { animationDelay: "calc(8 * -0.1s)" },
      9: { animationDelay: "calc(9 * -0.1s)" },
      10: { animationDelay: "calc(10 * -0.1s)" },
      11: { animationDelay: "calc(11 * -0.1s)" },
      12: { animationDelay: "calc(12 * -0.1s)" },
      13: { animationDelay: "calc(13 * -0.1s)" },
      14: { animationDelay: "calc(14 * -0.1s)" }
    }
  },
  variantsDefault: { s: 0 }
});

function App() {
  return (
    <ContainerLoader>
      {Array.from({ length: 15 }, (_, i) => (
        <Aro key={i} s={i} style={{ inset: `calc(${i} * 10px)` }} />
      ))}
    </ContainerLoader>
  );
}

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
