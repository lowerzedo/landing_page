import {
  ArrowRight,
  BookOpenText,
  ChevronDown,
  CircleDollarSign,
  PiggyBank,
  ReceiptText,
} from "lucide-react";
import { plannedGuides, publishedGuides } from "./guides";

const topics = [
  {
    icon: CircleDollarSign,
    title: "Budgeting",
    copy: "Give each part of your income a clear job without making the plan too rigid to follow.",
  },
  {
    icon: PiggyBank,
    title: "Saving",
    copy: "Turn large goals into smaller routines that fit the money and time you have now.",
  },
  {
    icon: ReceiptText,
    title: "Spending habits",
    copy: "Read your own patterns more clearly and make considered changes without guilt or hype.",
  },
];

function GuidesPage() {
  return (
    <>
      <section className="guides-hero" aria-labelledby="guides-title">
        <div className="guides-hero-copy">
          <p className="guides-kicker">
            <BookOpenText size={17} strokeWidth={2.3} aria-hidden="true" />
            SyncFlo Guides
          </p>
          <h1 id="guides-title">Practical money skills for everyday life.</h1>
          <p>
            Clear guides to saving, budgeting, and understanding your spending.
            No stock tips, product picks, or pressure to optimise every penny.
          </p>
        </div>

      </section>

      <section className="guides-library" aria-labelledby="library-title">
        <div className="guides-library-heading">
          <div>
            <h2 id="library-title">Start with the everyday.</h2>
            <p>
              Four practical guides to recording expenses, spotting patterns,
              and finding a budgeting rhythm you can keep.
            </p>
          </div>
          <span className="guides-status">
            <BookOpenText size={16} strokeWidth={2.3} aria-hidden="true" />
            {publishedGuides.length} guides to read
          </span>
        </div>

        <div className="guides-upcoming" aria-label="Available guides">
          {publishedGuides.map((guide) => (
            <article className="upcoming-guide published-guide" key={guide.slug}>
              <span className="upcoming-mark" aria-hidden="true">
                <BookOpenText size={19} strokeWidth={2.15} />
              </span>
              <div className="upcoming-copy">
                <div className="upcoming-meta">
                  <span>{guide.topic}</span>
                  <span>{guide.readingTime}</span>
                </div>
                <h3><a className="guide-title-link" href={`/guides/${guide.slug}`}>{guide.title}</a></h3>
                <p>{guide.summary}</p>
              </div>
              <span className="guide-read" aria-hidden="true">Read guide <ArrowRight size={18} /></span>
            </article>
          ))}
        </div>

        <details className="guides-planned">
          <summary>What we’re writing next <ChevronDown size={18} aria-hidden="true" /></summary>
          <ul>{plannedGuides.map((guide) => <li key={guide.slug}><span>{guide.title}</span><small>In progress</small></li>)}</ul>
        </details>
      </section>

      <section className="guide-topics" aria-labelledby="topics-title">
        <div className="guide-topics-intro">
          <h2 id="topics-title">A small library with a clear purpose.</h2>
          <p>
            The collection will grow around foundational habits, written for
            people who want a steadier relationship with day-to-day money.
          </p>
        </div>

        <div className="topic-list">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <article key={topic.title}>
                <Icon size={22} strokeWidth={2.05} aria-hidden="true" />
                <h3>{topic.title}</h3>
                <p>{topic.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="guides-standard" aria-labelledby="standard-title">
        <div>
          <p>Our standard</p>
          <h2 id="standard-title">Useful guidance, carefully bounded.</h2>
        </div>
        <ul>
          <li>Plain language and steps you can adapt to your circumstances.</li>
          <li>Examples that explain a concept without prescribing a purchase.</li>
          <li>Clear limits when a topic needs professional financial advice.</li>
        </ul>
      </section>

      <section className="guides-cta" aria-labelledby="guides-cta-title">
        <div>
          <h2 id="guides-cta-title">Start with a clearer view of your spending.</h2>
          <p>
            SyncFlo turns the Wallet automation you create into a private,
            local-first expense ledger.
          </p>
        </div>
        <a className="button button-dark" href="/#capture">
          See how SyncFlo works
          <ArrowRight size={18} strokeWidth={2.3} aria-hidden="true" />
        </a>
      </section>
    </>
  );
}

export default GuidesPage;
