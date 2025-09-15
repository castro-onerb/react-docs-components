export interface CodeRootProps {
  children: string;
  language?: string;
}

export function CodeRoot({ children, language = "tsx" }: CodeRootProps) {
  return (
    <pre
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
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
}
