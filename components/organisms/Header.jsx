import Link from "next/link";
import NavItem from "../molecules/NavItem";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link href="/" className="brand" aria-label="Lakbay Pangasinan Home">
          <span className="brand-mark">L</span>

          <span className="brand-text">
            <strong>LAKBAY</strong>
            <small>PANGASINAN</small>
          </span>
        </Link>

        <nav
          className="desktop-nav"
          aria-label="Main navigation"
        >
          <NavItem href="/">Home</NavItem>
          <NavItem href="/explore">Explore</NavItem>
          <NavItem href="/about">About</NavItem>
        </nav>

        <Link
          href="/explore"
          className="header-button"
        >
          Start Exploring
        </Link>
      </div>
    </header>
  );
}