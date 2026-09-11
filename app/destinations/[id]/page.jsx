import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "../../../components/atoms/Image";
import destinations from "../../../data/destinations";

export function generateStaticParams() {
  return destinations.map(
    (destination) => ({
      id: destination.id,
    })
  );
}

export default function DestinationPage({
  params,
}) {
  const { id } = params;

  const destination =
    destinations.find(
      (item) => item.id === id
    );

  if (!destination) {
    notFound();
  }

  return (
    <main className="detail-page">
      <section className="detail-hero">
        <Image
          src={`/lakay-pangasinan${destination.image}`}
          alt={`${destination.name}, ${destination.location}`}
          width={1600}
          height={900}
          className="detail-image"
        />

        <div className="detail-overlay"></div>

        <div className="detail-heading">
          <span className="eyebrow">
            {destination.category}
          </span>

          <h1>
            {destination.name}
          </h1>

          <p>
            📍 {destination.location},
            Pangasinan
          </p>
        </div>
      </section>

      <section className="detail-content">
        <Link
          href="/explore"
          className="back-link"
        >
          ← Back to destinations
        </Link>

        <div className="detail-layout">
          <div>
            <span className="eyebrow">
              ABOUT THE DESTINATION
            </span>

            <h2>
              Experience
              <br />
              {destination.name}.
            </h2>
          </div>

          <div>
            <p className="detail-description">
              {destination.longDescription}
            </p>

            <div className="location-box">
              <span>LOCATION</span>

              <strong>
                {destination.location},
                Pangasinan
              </strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}