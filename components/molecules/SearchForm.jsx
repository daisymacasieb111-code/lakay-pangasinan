"use client";

import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(query);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <span className="search-icon" aria-hidden="true">
        ⌕
      </span>

      <input
        type="search"
        placeholder="Search destinations..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        aria-label="Search destinations"
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}