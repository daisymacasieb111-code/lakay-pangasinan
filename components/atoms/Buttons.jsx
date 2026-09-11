import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
}) {
  const className = `button button-${variant}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className}>
      {children}
    </button>
  );
}