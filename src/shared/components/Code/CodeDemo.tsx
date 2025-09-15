import React, { useRef, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export interface CodeDemoProps {
  code: string;
  language?: string;
  children?: React.ReactNode;
}

export function CodeDemo({ code, language = "tsx", children }: CodeDemoProps) {
  const codeRef = useRef<HTMLPreElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
      <div style={{ flex: 1 }}>{children}</div>

      <div style={{ flex: 1, position: "relative" }}>
        <button
          onClick={handleCopy}
          style={{
            position: "absolute",
            right: "8px",
            top: "8px",
            background: "#444",
            color: "#fff",
            border: "none",
            padding: "4px 8px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Copy
        </button>
        <pre
          ref={codeRef}
          className={`language-${language}`}
          style={{
            background: "#1e1e1e",
            color: "#d4d4d4",
            padding: "16px",
            borderRadius: "8px",
            overflowX: "auto",
            fontFamily: "Fira Code, monospace",
            fontSize: "0.875rem",
          }}
        >
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
}
