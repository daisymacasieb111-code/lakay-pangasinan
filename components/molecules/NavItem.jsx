import Link from "next/link";

export default function NavItem({ href, children }) {
  return (
    <Link href={href} className="nav-item">
      {children}
    </Link>
  );
}