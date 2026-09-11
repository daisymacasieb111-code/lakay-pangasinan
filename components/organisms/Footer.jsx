export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <div className="footer-brand">
            <span className="brand-mark">L</span>

            <strong>
              LAKBAY PANGASINAN
            </strong>
          </div>

          <p>
            Discover the places, stories, and
            experiences that make Pangasinan worth
            exploring.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <a href="/explore">Destinations</a>
          <a href="/about">About Lakbay</a>
        </div>

        <div>
          <h3>Categories</h3>
          <p>Beaches</p>
          <p>Nature</p>
          <p>Culture</p>
          <p>History</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © 2026 Lakbay Pangasinan
        </span>

        <span>
          Discover locally. Travel meaningfully.
        </span>
      </div>
    </footer>
  );
}