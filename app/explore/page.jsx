"use client";

import { useEffect, useState } from "react";
import DestinationGrid from "../../components/organisms/DestinationGrid";
import SearchForm from "../../components/molecules/SearchForm";
import destinations from "../../data/destinations";

const categories = [
  "All",
  "Beach",
  "Nature",
  "History",
  "Culture",
  "Agriculture",
];

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search
    );

    const categoryFromUrl =
      params.get("category");

    if (
      categoryFromUrl &&
      categories.includes(categoryFromUrl)
    ) {
      setCategory(categoryFromUrl);
    }
  }, []);

  const filteredDestinations =
    destinations.filter((destination) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        destination.name
          .toLowerCase()
          .includes(searchText) ||
        destination.location
          .toLowerCase()
          .includes(searchText) ||
        destination.category
          .toLowerCase()
          .includes(searchText);

      const matchesCategory =
        category === "All" ||
        destination.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  return (
    <main className="explore-page">
      <section className="explore-header">
        <span className="eyebrow">
          THE DESTINATION GUIDE
        </span>

        <h1>
          Explore
          <br />
          Pangasinan.
        </h1>

        <p>
          Find your next place to visit.
        </p>

        <SearchForm
          onSearch={setSearch}
        />
      </section>

      <section className="explore-results">
        <div className="filter-row">
          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() =>
                setCategory(item)
              }
            >
              {item}
            </button>
          ))}
        </div>

        <p className="result-count">
          {filteredDestinations.length}{" "}
          {filteredDestinations.length === 1
            ? "destination"
            : "destinations"}{" "}
          found
        </p>

        <DestinationGrid
          destinations={filteredDestinations}
        />
      </section>
    </main>
  );
}

