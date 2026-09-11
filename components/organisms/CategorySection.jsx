import Link from "next/link";

const categories = [
  {
    icon: "◉",
    name: "Beach",
    description:
      "Relax along Pangasinan's beautiful coastline and beaches.",
  },
  {
    icon: "◈",
    name: "Nature",
    description:
      "Explore rivers, caves, ecosystems, and natural attractions.",
  },
  {
    icon: "✦",
    name: "Culture",
    description:
      "Discover landmarks, traditions, and local identity.",
  },
  {
    icon: "○",
    name: "Agriculture",
    description:
      "Experience farming, food, and Pangasinan's rural life.",
  },
  {
    icon: "◇",
    name: "History",
    description:
      "Visit places connected to Pangasinan's historical story.",
  },
];

export default function CategorySection() {
  return (
    <section className="category-section">
      <div className="section-heading">
        <span className="eyebrow">
          EXPLORE YOUR WAY
        </span>

        <h2>
          What kind of
          <br />
          experience?
        </h2>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <Link
            href={`/explore?category=${encodeURIComponent(
              category.name
            )}`}
            className="category-card"
            key={category.name}
          >
            <span
              className="category-icon"
              aria-hidden="true"
            >
              {category.icon}
            </span>

            <h3>{category.name}</h3>

            <p>{category.description}</p>

            <span
              className="category-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}