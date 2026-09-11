export function Eyebrow({ children }) {
  return <span className="eyebrow">{children}</span>;
}

export function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}

export function SectionDescription({ children }) {
  return (
    <p className="section-description">
      {children}
    </p>
  );
}