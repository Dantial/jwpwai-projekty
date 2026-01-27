import React, { useLayoutEffect, useRef, useState } from "react";

export default function LayoutEffectExample() {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (boxRef.current) {
      const measuredHeight = boxRef.current.getBoundingClientRect().height;
      setHeight(measuredHeight);
    }
  }, []);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      {}
      <div
        ref={boxRef}
        style={{
          height: "100px",
          background: "lightblue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Mierzę swoją wysokość!
      </div>

      <p style={{ marginTop: "10px", fontWeight: "bold" }}>
        Zmierzona wysokość: {height}px
      </p>
    </div>
  );
}
