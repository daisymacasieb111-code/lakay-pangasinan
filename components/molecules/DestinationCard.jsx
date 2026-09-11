import Link from "next/link";
import Image from "../atoms/Image";

export default function DestinationCard({ destination }) {
  return (
    <article className="destination-card">
      <Link
        href={`/destinations/${destination.id}`}
        className="destination-image-link"
      >
        <div className="destination-image-wrapper">
          <Image
             src={`/lakay-pangasinan${destination.image}`}
            alt={`${destination.name} in ${destination.location}`}
            width={900}
            height={650}
            className="destination-image"
          />

          <span className="destination-category">
            {destination.category}
          </span>
        </div>
      </Link>

      <div className="destination-content">
        <p className="destination-location">
          📍 {destination.location}, Pangasinan
        </p>

        <h3>{destination.name}</h3>

        <p>{destination.description}</p>

        <Link
          href={`/destinations/${destination.id}`}
          className="card-link"
        >
          Explore destination →
        </Link>
      </div>
    </article>
  );
}