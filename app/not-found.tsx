import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div>
        <span className="section-kicker">404 · PAGE NOT FOUND</span>
        <h1>यो पृष्ठ भेटिएन।</h1>
        <p>तपाईंले खोज्नुभएको पृष्ठ उपलब्ध छैन वा ठेगाना परिवर्तन भएको हुन सक्छ।</p>
        <Link href="/ne" className="button button-dark">गृहपृष्ठमा फर्कनुहोस्</Link>
      </div>
    </main>
  );
}