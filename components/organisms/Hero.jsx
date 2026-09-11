import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <span className="hero-eyebrow">
          YOUR PANGASINAN TRAVEL GUIDE
        </span>

        <h1>
          Find places
          <br />
          <em>worth remembering.</em>
        </h1>

        <p>
          Discover beaches, rivers, heritage landmarks,
          cultural destinations, and local experiences
          across Pangasinan.
        </p>

        <div className="hero-actions">
          <Link
            href="/explore"
            className="button button-light"
          >
            Explore destinations
          </Link>

          <Link
            href="/about"
            className="hero-text-link"
          >
            Discover Lakbay →
          </Link>
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <span>↓</span>
      </div>
    </section>
  );
}