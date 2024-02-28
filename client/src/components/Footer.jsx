import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div
        className="logo"
        style={{ display: "flex", gap: "2px", alignItems: "baseline" }}
      >
        <span style={{ color: "#5f0f40", fontSize: "24px" }}>Vibe</span>
        <div>
          <span style={{ color: "#297373", fontSize: "24px" }}>S</span>
          <span style={{ color: "#297373", fontSize: "20px" }}>cribe</span>
        </div>
      </div>

      <span>
        Made with ❤️ and <b>React.js</b>
      </span>

    </footer>
  );
}
