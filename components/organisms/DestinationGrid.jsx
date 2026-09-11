import DestinationCard from "../molecules/DestinationCard";

export default function DestinationGrid({
  destinations,
}) {
  if (!destinations || destinations.length === 0) {
    return (
      <div className="empty-state">
        <h3>No destinations found.</h3>
        <p>
          Try searching for another place or selecting
          another category.
        </p>
      </div>
    );
  }

  return (
    <div className="destination-grid">
      {destinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
        />
      ))}
    </div>
  );
}