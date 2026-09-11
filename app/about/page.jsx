export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <span className="eyebrow">
          ABOUT LAKBAY
        </span>

        <h1>
          Discover Pangasinan
          <br />
          <em>with purpose.</em>
        </h1>

        <p>
          Lakbay Pangasinan is a digital tourism
          guide created to make discovering the
          province&apos;s destinations easier, faster,
          and more accessible.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <span>01</span>

          <h2>Discover</h2>

          <p>
            Find beaches, natural attractions,
            cultural landmarks, and local
            destinations across Pangasinan.
          </p>
        </div>

        <div className="about-card">
          <span>02</span>

          <h2>Experience</h2>

          <p>
            Learn about the destinations you
            visit and discover the character
            of local communities.
          </p>
        </div>

        <div className="about-card">
          <span>03</span>

          <h2>Remember</h2>

          <p>
            Create meaningful travel experiences
            through local exploration and
            responsible tourism.
          </p>
        </div>
      </section>
    </main>
  );
}