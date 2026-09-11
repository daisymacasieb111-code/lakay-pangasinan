import Link from "next/link";

export default function NotFound() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <span className="eyebrow">
          404 — DESTINATION NOT FOUND
        </span>

        <h1>
          Looks like
          <br />
          <em>you wandered off.</em>
        </h1>

        <p>
          The destination you are looking for
          does not exist or may have moved
          somewhere else.
        </p>

        <Link
          href="/"
          className="button button-primary"
        >
          Return home
        </Link>
      </section>
    </main>
  );
}