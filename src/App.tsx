import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Database,
  FileDown,
  KeyRound,
  ListChecks,
  LockKeyhole,
  Moon,
  Repeat2,
  Search,
  ShieldCheck,
  Sun,
  Wallet,
} from "lucide-react";

const screens = {
  expenses: "/screens/expenses.png",
  analytics: "/screens/analytics.png",
  budget: "/screens/budget.png",
  settings: "/screens/settings-ai.png",
  setup: "/screens/setup-shortcuts.png",
};

const privacyPoints = [
  {
    icon: ShieldCheck,
    label: "No bank connection",
    copy: "SyncFlo never asks for account credentials.",
  },
  {
    icon: LockKeyhole,
    label: "No notification reading",
    copy: "Purchase capture does not rely on notification access.",
  },
  {
    icon: Wallet,
    label: "No Wallet scraping",
    copy: "Your Shortcut sends only the fields you choose.",
  },
  {
    icon: Database,
    label: "Local-first ledger",
    copy: "Expenses are stored on your device by default.",
  },
];

const freeFeatures = [
  "Wallet transaction automation import",
  "Manual expense entry",
  "Needs-review workflow",
  "Search, filters, and categories",
  "Duplicate detection",
  "JSON backup export and import",
  "Optional BYO-key AI categorization",
];

const proFeatures = [
  {
    icon: BarChart3,
    title: "Full analytics",
    copy: "Week and month trends, peak spend, averages, transaction count, and category slices.",
  },
  {
    icon: Bell,
    title: "Budgets and alerts",
    copy: "Plan monthly limits, split categories, and see when spending is heading over.",
  },
  {
    icon: Repeat2,
    title: "Merchant rules",
    copy: "Teach repeat merchants once so future imports land in the right category.",
  },
];

const flowSteps = [
  {
    title: "Create the Wallet automation",
    copy: "Shortcuts listens for Wallet transactions and calls SyncFlo's Add Expense from Wallet action.",
  },
  {
    title: "Pay with Apple Pay",
    copy: "Merchant, amount, currency, account, and date arrive as structured fields when available.",
  },
  {
    title: "Review only the uncertain rows",
    copy: "SyncFlo saves the expense, checks duplicates, applies rules or optional AI, then flags anything incomplete.",
  },
];

const faqs = [
  {
    question: "Does SyncFlo connect to my bank?",
    answer:
      "No. SyncFlo does not connect to banks or account aggregators. It records what your Shortcuts automation sends.",
  },
  {
    question: "Does it read my Apple Wallet history?",
    answer:
      "No. SyncFlo does not scrape Wallet history. Capture works through a Wallet transaction automation you create in Shortcuts.",
  },
  {
    question: "Is AI required?",
    answer:
      "No. AI categorization is optional, uses your configured provider and key, and only sends the small set of fields disclosed in Settings.",
  },
  {
    question: "What stays free?",
    answer:
      "Capture, manual add, local logging, review, search, filters, categories, backups, onboarding, and optional BYO-key AI are free in the current app.",
  },
];

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const current = document.documentElement.dataset.theme;

  if (current === "dark" || current === "light") {
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

    const metaThemeColor = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    );
    if (metaThemeColor) {
      metaThemeColor.content = theme === "dark" ? "#111820" : "#ffffff";
    }
  }, [theme]);

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);

      if (!id) {
        return;
      }

      document.getElementById(id)?.scrollIntoView();
    };

    window.requestAnimationFrame(scrollToHash);
    const settledScroll = window.setTimeout(scrollToHash, 300);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.clearTimeout(settledScroll);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="SyncFlo home">
          <span className="brand-mark" aria-hidden="true">
            S
          </span>
          <span>SyncFlo</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#privacy">Privacy</a>
          <a href="#capture">Capture</a>
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
              <Sun size={17} strokeWidth={2.25} aria-hidden="true" />
            ) : (
              <Moon size={17} strokeWidth={2.25} aria-hidden="true" />
            )}
            <span className="sr-only">{themeLabel}</span>
          </button>
          <a className="nav-cta" href="#pricing">
            See plans
            <ArrowUpRight size={16} strokeWidth={2.25} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-river" aria-hidden="true">
            <svg viewBox="0 0 1220 780" role="img">
              <path d="M-24 578C128 476 229 554 362 422C503 282 620 370 740 250C864 125 1018 155 1244 42" />
              <path d="M-40 662C144 544 304 672 468 496C636 316 792 438 934 276C1026 170 1120 128 1260 116" />
            </svg>
          </div>

          <div className="hero-stage" aria-hidden="true">
            <img
              className="phone-shot phone-shot-a"
              src={screens.expenses}
              alt=""
              width="978"
              height="1660"
              decoding="async"
              fetchPriority="high"
            />
            <img
              className="phone-shot phone-shot-b"
              src={screens.analytics}
              alt=""
              width="924"
              height="1668"
              decoding="async"
              fetchPriority="high"
            />
            <img
              className="phone-shot phone-shot-c"
              src={screens.budget}
              alt=""
              width="846"
              height="1638"
              decoding="async"
            />
          </div>

          <div className="hero-content">
            <p className="hero-kicker">Private Apple Pay expense capture</p>
            <h1 id="hero-title">SyncFlo</h1>
            <p className="hero-tagline">Tap. Pay. Tracked.</p>
            <p className="hero-copy">
              Turn a Wallet transaction automation you create in Shortcuts into
              a tidy local expense ledger, without connecting a bank.
            </p>
            <div className="hero-actions" aria-label="Hero actions">
              <a className="button button-primary" href="#capture">
                See how capture works
                <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="#privacy">
                Read privacy boundary
              </a>
            </div>
            <ul className="hero-proof" aria-label="SyncFlo privacy highlights">
              <li>No bank login</li>
              <li>No notification access</li>
              <li>Local by default</li>
            </ul>
          </div>
        </section>

        <section className="privacy-strip" id="privacy" aria-label="Privacy guarantees">
          {privacyPoints.map((item) => {
            const Icon = item.icon;
            return (
              <article className="privacy-item" key={item.label}>
                <Icon size={21} strokeWidth={2.1} aria-hidden="true" />
                <div>
                  <h2>{item.label}</h2>
                  <p>{item.copy}</p>
                </div>
              </article>
            );
          })}
        </section>

        <section className="flow-section" id="capture" aria-labelledby="capture-title">
          <div className="section-copy section-copy-narrow">
            <p className="section-tag">Your Shortcut, your ledger</p>
            <h2 id="capture-title">Capture starts in Shortcuts, then stays organized in SyncFlo.</h2>
            <p>
              SyncFlo is not bank aggregation. It receives fields from the
              automation you create, turns them into expenses, and keeps the
              cleanup loop short.
            </p>
          </div>

          <div className="flow-grid">
            <div className="setup-frame">
              <img
                src={screens.setup}
                alt="SyncFlo setup screen showing steps to connect a Shortcuts Wallet transaction automation."
                width="854"
                height="1620"
                loading="lazy"
                decoding="async"
              />
            </div>
            <ol className="flow-list">
              {flowSteps.map((step, index) => (
                <li key={step.title}>
                  <span className="flow-index" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="review-section" aria-labelledby="review-title">
          <div className="screen-ledger">
            <img
              src={screens.expenses}
              alt="SyncFlo expenses screen with weekly spending chart and latest expense rows."
              width="978"
              height="1660"
              loading="lazy"
              decoding="async"
            />
            <div className="ledger-note ledger-note-top">
              <ListChecks size={19} strokeWidth={2.2} aria-hidden="true" />
              Needs review when fields are missing
            </div>
            <div className="ledger-note ledger-note-bottom">
              <Search size={19} strokeWidth={2.2} aria-hidden="true" />
              Find a transaction by merchant, category, state, or time range
            </div>
          </div>

          <div className="section-copy">
            <p className="section-tag">Review the exceptions</p>
            <h2 id="review-title">Most purchases should land quietly. The uncertain ones get a human pass.</h2>
            <p>
              Imports can be provisional when Shortcuts sends incomplete fields
              or categorization needs help. SyncFlo marks those rows clearly, so
              you correct the right expense instead of grooming every purchase.
            </p>
            <div className="feature-cloud" aria-label="Included capture features">
              {freeFeatures.map((feature) => (
                <span key={feature}>
                  <CheckCircle2 size={16} strokeWidth={2.35} aria-hidden="true" />
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="pro-section" id="pro" aria-labelledby="pro-title">
          <div className="section-copy">
            <p className="section-tag">SyncFlo Pro</p>
            <h2 id="pro-title">Planning tools for the spending you actually captured.</h2>
            <p>
              Capture stays free. Pro is positioned around monthly budgets,
              deeper analytics, and merchant rules for repeat cleanup.
            </p>
          </div>

          <div className="pro-showcase">
            <img
              className="pro-phone pro-phone-budget"
              src={screens.budget}
              alt="SyncFlo budget screen with monthly budget, progress, alert, and category budget controls."
              width="846"
              height="1638"
              loading="lazy"
              decoding="async"
            />
            <img
              className="pro-phone pro-phone-analytics"
              src={screens.analytics}
              alt="SyncFlo analytics screen with month trend chart and category breakdown preview."
              width="924"
              height="1668"
              loading="lazy"
              decoding="async"
            />
            <div className="pro-panel">
              {proFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title}>
                    <Icon size={22} strokeWidth={2.1} aria-hidden="true" />
                    <div>
                      <h3>{feature.title}</h3>
                      <p>{feature.copy}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="ai-section" aria-labelledby="ai-title">
          <div className="section-copy">
            <p className="section-tag">Optional AI boundary</p>
            <h2 id="ai-title">Rules first. Optional AI second. You stay in control.</h2>
            <p>
              AI categorization is off unless you enable it, accept the
              disclosure, and store your own provider key in Keychain. Requests
              are limited to merchant name, amount, currency, and optional note.
            </p>
            <div className="ai-boundary">
              <span>
                <KeyRound size={17} strokeWidth={2.3} aria-hidden="true" />
                Bring your own API key
              </span>
              <span>
                <ClipboardCheck size={17} strokeWidth={2.3} aria-hidden="true" />
                Test setup before relying on it
              </span>
              <span>
                <FileDown size={17} strokeWidth={2.3} aria-hidden="true" />
                Export data as SyncFlo JSON
              </span>
            </div>
          </div>

          <div className="ai-screen">
            <img
              src={screens.settings}
              alt="SyncFlo settings screen showing AI categorization provider, API key fields, and disclosure controls."
              width="872"
              height="1644"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        <section className="pricing-section" id="pricing" aria-labelledby="pricing-title">
          <div className="pricing-copy">
            <p className="section-tag">Simple split</p>
            <h2 id="pricing-title">Capture is free. Pro is for planning.</h2>
            <p>
              Public App Store pricing should be confirmed before launch. The
              current local StoreKit configuration lists monthly and annual Pro
              subscriptions.
            </p>
          </div>

          <div className="pricing-table" aria-label="SyncFlo plans">
            <article>
              <h3>Free capture</h3>
              <p className="price">Included</p>
              <p>Wallet automation capture, manual add, local ledger, review, search, categories, backups, and optional BYO-key AI.</p>
            </article>
            <article className="featured-plan">
              <h3>SyncFlo Pro</h3>
              <p className="price">$2.99 <span>/ month</span></p>
              <p>Budgets, full analytics, merchant rules, projections, category allocations, and budget alerts.</p>
            </article>
            <article>
              <h3>Annual Pro</h3>
              <p className="price">$24.99 <span>/ year</span></p>
              <p>The same Pro tools with the annual product defined in the current StoreKit configuration.</p>
            </article>
          </div>
        </section>

        <section className="faq-section" id="faq" aria-labelledby="faq-title">
          <div className="section-copy section-copy-narrow">
            <p className="section-tag">Common questions</p>
            <h2 id="faq-title">What SyncFlo does, and what it does not touch.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <ChevronDown size={18} strokeWidth={2.2} aria-hidden="true" />
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
            S
          </span>
          <span>SyncFlo</span>
        </a>
        <p>
          Private Apple Pay expense capture through a Shortcuts automation you
          create.
        </p>
      </footer>
    </>
  );
}

export default App;
