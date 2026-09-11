import Hero from "../components/organisms/Hero";
import CategorySection from "../components/organisms/CategorySection";
import DestinationGrid from "../components/organisms/DestinationGrid";
import destinations from "../data/destinations";

export default function Home() {
  const featuredDestinations =
    destinations.filter(
      (destination) => destination.featured
    );

  return (
    <main>
      <Hero />

      <section className="intro-section">
        <div>
          <span className="eyebrow">
            THE LAKBAY GUIDE
          </span>

          <h2>
            A different way
            <br />
            to see Pangasinan.
          </h2>
        </div>

        <div className="intro-copy">
          <p>
            From peaceful beaches and rivers to
            cultural landmarks and agricultural
            destinations, Lakbay Pangasinan helps
            you discover places worth experiencing.
          </p>
        </div>
      </section>

      <CategorySection />

      <section className="featured-section">
        <div className="section-heading-row">
          <div>
            <span className="eyebrow">
              PLACES TO GO
            </span>

            <h2 className="section-title">
              Start your journey.
            </h2>
          </div>

          <a
            href="/explore"
            className="view-all"
          >
            View all destinations 
          </a>
        </div>

        <DestinationGrid
          destinations={featuredDestinations}
        />
      </section>

      <section className="quote-section">
        <p>
          Every destination has a story.
          Go find yours.
        </p>
      </section>
    </main>
  );
}