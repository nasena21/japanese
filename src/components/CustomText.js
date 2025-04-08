import React from "react";
import "@site/src/css/custom.css"; // Import custom CSS

export default function BT({ children }) {
  return <span className="custom-text">{children}</span>;
}
