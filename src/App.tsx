import { lazy, Suspense, useEffect, useId, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  BookOpenText,
  Check,
  ChevronDown,
  KeyRound,
  LockKeyhole,
  Menu,
  Moon,
  Search,
  ShieldCheck,
  Sun,
  WalletCards,
  Waves,
  X,
} from "lucide-react";
import GuidesPage from "./GuidesPage";
import CaptureDemo from "./CaptureDemo";
import AppPhone from "./AppPhone";
import { publishedGuides } from "./guides";

const PrivacyPolicyPage = lazy(() => import("./PrivacyPolicyPage"));

const GuideArticlePage = lazy(() => import("./GuideArticlePage"));

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
    copy: "Your ledger is stored on-device. Exports and optional AI share only what you choose.",
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

type Faq = (typeof faqs)[number];

function FaqItem({ faq }: { faq: Faq }) {
  const [isOpen, setIsOpen] = useState(false);
  const answerId = useId();

  return (
    <article className="faq-item" data-open={isOpen}>
      <h3>
        <button
          className="faq-question"
          type="button"
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={() => setIsOpen((current) => !current)}
        >
          {faq.question}
          <ChevronDown size={19} strokeWidth={2.2} aria-hidden="true" />
        </button>
      </h3>
      <div
        className="faq-answer"
        id={answerId}
        aria-hidden={!isOpen}
      >
        <div>
          <p>{faq.answer}</p>
        </div>
      </div>
    </article>
  );
}

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [launchRequested, setLaunchRequested] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const route = window.location.pathname.replace(/\/+$/, "");
  const isPrivacyPolicy = route === "/privacy";
  const isGuideArticle = route.startsWith("/guides/");
  const isGuidesPage = route === "/guides" || isGuideArticle;
  const currentGuide = isGuideArticle
    ? publishedGuides.find((guide) => guide.slug === route.slice("/guides/".length))
    : undefined;
  const [activeSection, setActiveSection] = useState<string | null>(() =>
    isGuidesPage ? "guides" : null,
  );
  const themeLabel =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("syncflo-theme", theme); } catch { /* Storage can be disabled. */ }

    const themeColor = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    );

    if (themeColor) {
      themeColor.content = theme === "dark" ? "#050608" : "#087ff5";
    }
  }, [theme]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 981px)");
    const onDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (isGuidesPage) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations: Animation[] = [];
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        if (!preference.matches) {
          animations.push(entry.target.animate(
            [{ translate: "0 36px" }, { translate: "0 0" }],
            { duration: 750, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
          ));
        }
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15 });
    document.querySelectorAll(".privacy-visual .app-phone, .screen-figure").forEach((element) => observer.observe(element));
    const cancelMotion = () => { if (preference.matches) animations.forEach((animation) => animation.cancel()); };
    preference.addEventListener("change", cancelMotion);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", cancelMotion);
    };
  }, [isGuidesPage]);

  useEffect(() => {
    document.title = isPrivacyPolicy
      ? "Privacy Policy | SyncFlo"
      : isGuideArticle
      ? currentGuide ? `${currentGuide.title} | SyncFlo Guides` : "Guide not found | SyncFlo Guides"
      : isGuidesPage
      ? "SyncFlo Guides | Practical Money Skills"
      : "SyncFlo | Private Apple Pay Expense Capture";

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    if (description) {
      description.content = isPrivacyPolicy
        ? "How SyncFlo handles on-device expense data, optional AI, subscriptions, backups, and your privacy choices."
        : currentGuide
        ? currentGuide.description ?? currentGuide.summary
        : isGuidesPage
        ? "Practical SyncFlo guides to saving, budgeting, and understanding everyday spending."
        : "SyncFlo turns Apple Pay Wallet transaction automations into a private local-first expense ledger for iPhone and iPad.";
    }
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = `https://syncflo.pages.dev${isGuidesPage || isPrivacyPolicy ? route : "/"}`;
  }, [isGuidesPage, isGuideArticle, isPrivacyPolicy, currentGuide, route]);

  useEffect(() => {
    if (isGuidesPage) {
      setActiveSection("guides");
      return;
    }

    const sectionIds = ["capture", "privacy", "pro", "faq"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const scrollToCurrentHash = () => {
      let hash: string;
      try { hash = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }

      if (![...sectionIds, "launch"].includes(hash)) {
        return;
      }

      document.getElementById(hash)?.scrollIntoView({ block: "start" });
      setActiveSection(hash);
    };

    const updateActiveSection = () => {
      const firstSection = sections[0];

      if (!firstSection || window.scrollY < firstSection.offsetTop - 240) {
        setActiveSection(null);
        return;
      }

      const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 300);
      let currentSection = sections[0].id;

      for (const section of sections) {
        if (section.offsetTop <= marker) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    const frame = window.requestAnimationFrame(() => {
      scrollToCurrentHash();
      updateActiveSection();
    });

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", scrollToCurrentHash);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", scrollToCurrentHash);
    };
  }, [isGuidesPage]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header" ref={headerRef}>
        <a className="brand" href="/" aria-label="SyncFlo home">
          <span className="brand-mark" aria-hidden="true">
            <Waves size={19} strokeWidth={2.6} />
          </span>
          <span>SyncFlo</span>
        </a>


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
            <span className="theme-icon" key={theme} aria-hidden="true">
              {theme === "dark" ? (
                <Sun size={18} strokeWidth={2.2} />
              ) : (
                <Moon size={18} strokeWidth={2.2} />
              )}
            </span>
          </button>
          <a className="nav-cta" href="/#launch">
            Join launch list
          </a>
          <button className="menu-toggle" type="button" ref={menuButtonRef} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
        <nav className="site-nav" id="primary-navigation" data-open={menuOpen} aria-label="Primary navigation" onClick={() => setMenuOpen(false)}>
          <a
            href="/#capture"
            aria-current={activeSection === "capture" ? "location" : undefined}
          >
            How it works
          </a>
          <a
            href="/#privacy"
            aria-current={activeSection === "privacy" ? "location" : undefined}
          >
            Privacy
          </a>
          <a
            href="/#pro"
            aria-current={activeSection === "pro" ? "location" : undefined}
          >
            Pro
          </a>
          <a
            href="/guides"
            aria-current={activeSection === "guides" ? "page" : undefined}
          >
            Guides
          </a>
          <a
            href="/#faq"
            aria-current={activeSection === "faq" ? "location" : undefined}
          >
            FAQ
          </a>
        </nav>
      </header>

      <main id="main" tabIndex={-1} className={isGuidesPage || isPrivacyPolicy ? "guides-main" : undefined}>
        {isPrivacyPolicy ? (
          <Suspense fallback={<div className="guide-loading" role="status">Opening privacy policy…</div>}>
            <PrivacyPolicyPage />
          </Suspense>
        ) : isGuideArticle ? (
          <Suspense fallback={<div className="guide-loading" role="status">Opening guide…</div>}>
            <GuideArticlePage guide={currentGuide} />
          </Suspense>
        ) : isGuidesPage ? (
          <GuidesPage />
        ) : (
          <>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-kicker"><span aria-hidden="true" /> Your everyday spending, privately</p>
            <h1 id="hero-title">
              <span>Tap to pay.</span>
              <span className="hero-emphasis">See it clearly.</span>
            </h1>
            <p className="hero-intro">
              Turn your Apple Pay purchases into a clear expense log.
              One Wallet automation in Shortcuts. A little less life admin.
              All on your terms.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#launch">
                Join the launch list
                <ArrowRight size={18} strokeWidth={2.3} aria-hidden="true" />
              </a>
              <a className="button button-light" href="#capture">
                See how it works
                <ChevronDown size={17} aria-hidden="true" />
              </a>
            </div>
            <p className="hero-availability">Coming to iPhone &amp; iPad <span aria-hidden="true">·</span> Expense capture stays free</p>
          </div>

          <div className="hero-product" aria-label="SyncFlo product preview">
            <div className="orbit orbit-one" aria-hidden="true" />
            <AppPhone
              className="hero-phone hero-phone-back"
              src={screens.analyticsDark}
              alt="SyncFlo Analytics in dark mode, showing weekly spending trends and a category breakdown with sample data."
              priority
            />
            <AppPhone
              className="hero-phone hero-phone-front"
              src={screens.expensesLight}
              alt="SyncFlo Expenses in light mode, showing a weekly chart and recent Apple Pay expenses with sample data."
              priority
            />
            <div className="capture-toast">
              <span className="toast-icon" aria-hidden="true">
                <Check size={17} strokeWidth={3} />
              </span>
              <span>
                <small>Saved by your Shortcut</small>
                <strong>Starbucks · USD 4.80</strong>
              </span>
            </div>
          </div>

          <ul className="hero-proof" aria-label="SyncFlo privacy highlights">
            <li><ShieldCheck size={17} aria-hidden="true" /> No bank connection</li>
            <li><LockKeyhole size={17} aria-hidden="true" /> On-device by default</li>
            <li><WalletCards size={17} aria-hidden="true" /> Your Shortcut, your fields</li>
          </ul>
        </section>

        <section className="capture-section" id="capture" aria-labelledby="capture-title">
          <div className="section-heading">
            <h2 id="capture-title">A small setup.<br />A lighter routine.</h2>
            <p>
              Connect your own Wallet automation once. SyncFlo turns the fields
              you choose into an expense you can find, review, and understand.
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

          <CaptureDemo />
        </section>

        <aside className="guides-promo" aria-labelledby="guides-promo-title">
          <span className="guides-promo-icon" aria-hidden="true">
            <BookOpenText size={22} strokeWidth={2.15} />
          </span>
          <div>
            <p>SyncFlo Guides</p>
            <h2 id="guides-promo-title">Build steadier money habits.</h2>
            <span>
              Practical reading on budgeting, saving, and understanding your
              everyday spending.
            </span>
          </div>
          <a href="/guides">
            Browse the guides
            <ArrowRight size={18} strokeWidth={2.3} aria-hidden="true" />
          </a>
        </aside>

        <section className="privacy-section" id="privacy" aria-labelledby="privacy-title">
          <div className="privacy-visual">
            <span className="privacy-halo" aria-hidden="true" />
            <AppPhone
              src={screens.settingsDark}
              alt="SyncFlo dark settings screen explaining on-device storage and optional AI categorization."
            />
          </div>

          <div className="privacy-content">
            <ShieldCheck size={32} strokeWidth={2} aria-hidden="true" />
            <h2 id="privacy-title">Your money.<br />Your phone.<br /><span>Your business.</span></h2>
            <p className="privacy-lede">
              Your ledger lives on your device by default. You decide what
              to export and whether to enable an optional AI provider.
            </p>

            <a className="policy-summary-link" href="/privacy">Read the full privacy policy <ArrowRight size={17} aria-hidden="true" /></a>

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
            <p className="pro-badge">SyncFlo <span>Pro</span></p>
            <h2 id="pro-title">See the pattern.<br />Plan the next step.</h2>
            <p>
              Build the ledger first. When you want a wider view, Pro adds
              budgets, analytics, projections, alerts, and merchant rules.
            </p>
            <a className="text-link" href="#faq">Explore what’s included <ArrowRight size={17} aria-hidden="true" /></a>
          </div>

          <div className="pro-gallery">
            <figure className="screen-figure screen-analytics">
              <AppPhone
                src={screens.analyticsDark}
                alt="SyncFlo Analytics in dark mode, showing a weekly trend chart and spending by category with sample data."
              />
              <figcaption>Weekly trends and category patterns</figcaption>
            </figure>

            <figure className="screen-figure screen-budget">
              <AppPhone
                src={screens.budgetLight}
                alt="SyncFlo Budget in light mode, showing monthly progress, projections, and category limits with sample data."
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
            <h2 id="find-title">Find that one purchase.</h2>
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
            <h2 id="launch-title">A clearer picture is on its way.</h2>
            <p>
              Get an email when SyncFlo is ready for your iPhone or iPad.
              Capture stays free. Your ledger stays yours.
            </p>
          </div>

          <form
            className="launch-form"
            action="mailto:dev.amir.mambetaliev@gmail.com"
            method="post"
            encType="text/plain"
            onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const email = String(data.get("email") ?? "");
              window.location.href = `mailto:dev.amir.mambetaliev@gmail.com?subject=${encodeURIComponent("SyncFlo launch list")}&body=${encodeURIComponent(`Please notify me when SyncFlo launches.\n\nEmail: ${email}`)}`;
              setLaunchRequested(true);
            }}
          >
            <label htmlFor="launch-email">Email address</label>
            <div>
              <input
                id="launch-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                aria-describedby="launch-help"
                required
              />
              <button type="submit">
                Request launch email
                <ArrowRight size={18} strokeWidth={2.3} aria-hidden="true" />
              </button>
            </div>
            <small id="launch-help">Opens your email app. Send the message to join the launch list.</small>
            <p className="launch-feedback" role="status">{launchRequested ? "Send the draft in your email app to join. If no draft opened, email dev.amir.mambetaliev@gmail.com." : ""}</p>
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
            {faqs.map((faq) => <FaqItem faq={faq} key={faq.question} />)}
          </div>
        </section>
          </>
        )}
      </main>

      <footer className="site-footer">
        <a className="brand" href="/" aria-label="Back to SyncFlo home">
          <span className="brand-mark" aria-hidden="true">
            <Waves size={19} strokeWidth={2.6} />
          </span>
          <span>SyncFlo</span>
        </a>
        <p>Private Apple Pay expense capture through your own Shortcut.<br /><a className="footer-policy-link" href="/privacy">Privacy policy</a></p>
        <a href="mailto:dev.amir.mambetaliev@gmail.com">dev.amir.mambetaliev@gmail.com</a>
      </footer>
    </>
  );
}

export default App;
