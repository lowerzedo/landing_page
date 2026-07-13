import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Check,
  ChevronDown,
  KeyRound,
  LockKeyhole,
  Moon,
  Search,
  ShieldCheck,
  Sun,
  WalletCards,
  Waves,
} from "lucide-react";

const screens = {
  expensesLight: "/screens/expenses-light.png",
  analyticsDark: "/screens/analytics-dark.png",
  budgetLight: "/screens/budget-light.png",
  settingsDark: "/screens/settings-dark.png",
};

const captureSteps = [
  {
    title: "Create one Wallet automation",
    copy: "In Shortcuts, choose the Wallet transaction trigger and add SyncFlo’s expense action.",
  },
  {
    title: "Pay with Apple Pay",
    copy: "Shortcuts passes the transaction fields you selected. SyncFlo never scans your Wallet history.",
  },
  {
    title: "Review only what is uncertain",
    copy: "Duplicate checks, merchant rules, and clear review states keep cleanup focused.",
  },
];

const boundaries = [
  {
    icon: WalletCards,
    title: "No bank connection",
    copy: "No account credentials and no financial-data aggregator.",
  },
  {
    icon: ShieldCheck,
    title: "No notification access",
    copy: "Capture works without reading alerts from other apps.",
  },
  {
    icon: LockKeyhole,
    title: "Local by default",
    copy: "Your expense ledger stays on your device unless you export it.",
  },
  {
    icon: KeyRound,
    title: "AI stays optional",
    copy: "Bring your own provider key, review the disclosure, or leave AI off.",
  },
];

const proFeatures = [
  {
    icon: BarChart3,
    title: "See where the month went",
    copy: "Compare weekly trends, category shares, daily averages, and peak spend.",
  },
  {
    icon: BellRing,
    title: "Know when a plan is drifting",
    copy: "Track category limits, projections, and alerts before month end.",
  },
  {
    icon: Check,
    title: "Set merchant rules once",
    copy: "Keep repeat purchases organized without correcting the same merchant again.",
  },
];

const faqs = [
  {
    question: "Does SyncFlo connect to my bank?",
    answer:
      "No. SyncFlo does not use bank credentials or account aggregators. It records the fields sent by the Wallet transaction automation you create in Shortcuts.",
  },
  {
    question: "Can it read my Apple Wallet history?",
    answer:
      "No. SyncFlo does not scrape Wallet history. New expenses arrive through your Shortcuts automation when that automation runs.",
  },
  {
    question: "Is AI required for categorization?",
    answer:
      "No. AI categorization is off by default. If you enable it, you use your own provider key and SyncFlo discloses the small set of fields included in a request.",
  },
  {
    question: "What is included free?",
    answer:
      "Capture, manual entry, local logging, review, search, filters, categories, backups, onboarding, and optional bring-your-own-key AI are part of free capture in the current app.",
  },
  {
    question: "What does SyncFlo Pro add?",
    answer:
      "Pro adds planning and insight tools: budgets, analytics, merchant rules, projections, category allocations, and budget alerts.",
  },
];

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const current = document.documentElement.dataset.theme;

  if (current === "light" || current === "dark") {
    return current;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const themeLabel =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("syncflo-theme", theme);

    const themeColor = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    );

    if (themeColor) {
      themeColor.content = theme === "dark" ? "#050608" : "#087ff5";
    }
  }, [theme]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="SyncFlo home">
          <span className="brand-mark" aria-hidden="true">
            <Waves size={19} strokeWidth={2.6} />
          </span>
          <span>SyncFlo</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#capture">How it works</a>
          <a href="#privacy">Privacy</a>
          <a href="#pro">Pro</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={themeLabel}
            title={themeLabel}
            onClick={() =>
              setTheme((current) => (current === "dark" ? "light" : "dark"))
            }
          >
            {theme === "dark" ? (
              <Sun size={18} strokeWidth={2.2} aria-hidden="true" />
            ) : (
              <Moon size={18} strokeWidth={2.2} aria-hidden="true" />
            )}
          </button>
          <a className="nav-cta" href="#launch">
            Join launch list
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-kicker">Private expense capture for iPhone and iPad</p>
            <h1 id="hero-title">
              Apple Pay spending, logged by your Shortcut.
            </h1>
            <p className="hero-intro">
              SyncFlo turns Wallet transaction automations into a clean,
              local-first ledger. No bank login, no notification reading, and
              no hosted AI requirement.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#launch">
                Get launch notice
                <ArrowRight size={18} strokeWidth={2.3} aria-hidden="true" />
              </a>
              <a className="button button-light" href="#capture">
                See how capture works
              </a>
            </div>
          </div>

          <div className="hero-product" aria-label="SyncFlo product preview">
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <img
              className="hero-phone hero-phone-back"
              src={screens.analyticsDark}
              alt="SyncFlo dark analytics screen with a monthly spending chart and category breakdown."
              width="938"
              height="1644"
              decoding="async"
              fetchPriority="high"
            />
            <img
              className="hero-phone hero-phone-front"
              src={screens.expensesLight}
              alt="SyncFlo light expenses screen with a weekly chart and recent Apple Pay expenses."
              width="1058"
              height="1704"
              decoding="async"
              fetchPriority="high"
            />
            <div className="capture-toast">
              <span className="toast-icon" aria-hidden="true">
                <Check size={17} strokeWidth={3} />
              </span>
              <span>
                <small>Shortcut added</small>
                <strong>Coffee · USD 2.00</strong>
              </span>
            </div>
          </div>

          <ul className="hero-proof" aria-label="SyncFlo privacy highlights">
            <li>No bank connection</li>
            <li>On-device by default</li>
            <li>Your Shortcut, your fields</li>
          </ul>
        </section>

        <section className="capture-section" id="capture" aria-labelledby="capture-title">
          <div className="section-heading">
            <p className="section-label">A three-step handoff</p>
            <h2 id="capture-title">From payment to a useful expense row.</h2>
            <p>
              The automation belongs to you. SyncFlo receives structured
              fields, checks the row, and keeps your attention on exceptions.
            </p>
          </div>

          <ol className="capture-flow">
            {captureSteps.map((step, index) => (
              <li key={step.title}>
                <span className="step-number" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="capture-receipt" aria-label="Example captured expense">
            <div>
              <span className="receipt-status">
                <Check size={15} strokeWidth={3} aria-hidden="true" />
                Added to Expenses
              </span>
              <strong>Coffee</strong>
              <small>Food &amp; Drink · Today at 4:34 PM</small>
            </div>
            <b>USD 2.00</b>
          </div>
        </section>

        <section className="privacy-section" id="privacy" aria-labelledby="privacy-title">
          <div className="privacy-visual">
            <span className="privacy-halo" aria-hidden="true" />
            <img
              src={screens.settingsDark}
              alt="SyncFlo dark settings screen explaining on-device storage and optional AI categorization."
              width="914"
              height="1670"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="privacy-content">
            <ShieldCheck size={32} strokeWidth={2} aria-hidden="true" />
            <h2 id="privacy-title">You decide what leaves your phone.</h2>
            <p className="privacy-lede">
              SyncFlo’s boundary is visible in the app, before any optional
              service is enabled.
            </p>

            <div className="boundary-list">
              {boundaries.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title}>
                    <Icon size={20} strokeWidth={2.15} aria-hidden="true" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.copy}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pro-section" id="pro" aria-labelledby="pro-title">
          <div className="pro-heading">
            <p className="section-label">SyncFlo Pro</p>
            <h2 id="pro-title">Capture stays free. Pro helps you plan.</h2>
            <p>
              Build the ledger first. When you want a wider view, Pro adds
              budgets, analytics, projections, alerts, and merchant rules.
            </p>
          </div>

          <div className="pro-gallery">
            <figure className="screen-figure screen-analytics">
              <img
                src={screens.analyticsDark}
                alt="SyncFlo dark analytics screen showing a monthly trend chart."
                width="938"
                height="1644"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Weekly trends and category patterns</figcaption>
            </figure>

            <figure className="screen-figure screen-budget">
              <img
                src={screens.budgetLight}
                alt="SyncFlo light budget screen showing monthly progress, projections, and category limits."
                width="1046"
                height="1688"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Budgets that show what is left</figcaption>
            </figure>
          </div>

          <div className="pro-feature-list">
            {proFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title}>
                  <Icon size={21} strokeWidth={2.15} aria-hidden="true" />
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.copy}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="find-section" aria-labelledby="find-title">
          <div className="find-icon" aria-hidden="true">
            <Search size={27} strokeWidth={2.2} />
          </div>
          <h2 id="find-title">The transaction you need stays findable.</h2>
          <p>
            Search by merchant, category, review state, or time range. Export a
            SyncFlo JSON backup when you want your own copy elsewhere.
          </p>
          <ul>
            <li>Duplicate detection</li>
            <li>Needs-review workflow</li>
            <li>Manual expense entry</li>
            <li>JSON backup</li>
          </ul>
        </section>

        <section className="launch-section" id="launch" aria-labelledby="launch-title">
          <div>
            <p className="launch-note">Coming to iPhone and iPad</p>
            <h2 id="launch-title">Get one email when SyncFlo is ready.</h2>
            <p>
              Launch updates will stay focused on availability, privacy notes,
              and important early product changes.
            </p>
          </div>

          <form
            className="launch-form"
            action="mailto:launch@syncflo.app"
            method="post"
            encType="text/plain"
          >
            <label htmlFor="launch-email">Email address</label>
            <div>
              <input
                id="launch-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
              <button type="submit">
                Join launch list
                <ArrowRight size={18} strokeWidth={2.3} aria-hidden="true" />
              </button>
            </div>
            <small>Used only for SyncFlo launch updates.</small>
          </form>
        </section>

        <section className="faq-section" id="faq" aria-labelledby="faq-title">
          <div className="faq-heading">
            <h2 id="faq-title">A few clear answers.</h2>
            <p>
              The short version: SyncFlo works with the automation you create,
              not with a hidden feed of your financial activity.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <ChevronDown size={19} strokeWidth={2.2} aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#top" aria-label="Back to SyncFlo home">
          <span className="brand-mark" aria-hidden="true">
            <Waves size={19} strokeWidth={2.6} />
          </span>
          <span>SyncFlo</span>
        </a>
        <p>Private Apple Pay expense capture through your own Shortcut.</p>
        <a href="mailto:hello@syncflo.app">hello@syncflo.app</a>
      </footer>
    </>
  );
}

export default App;
