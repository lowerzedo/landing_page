import { useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, Clock3 } from "lucide-react";
import { publishedGuides, type Guide } from "./guides";
import { guideContent } from "./guideContent";

export function GuideNotFound() {
  return (
    <section className="guide-not-found">
      <p>SyncFlo Guides</p>
      <h1>We couldn’t find that guide.</h1>
      <p>Browse the library to find a guide on spending or budgeting.</p>
      <a className="button button-dark" href="/guides">Browse all guides <ArrowRight size={18} aria-hidden="true" /></a>
    </section>
  );
}

export default function GuideArticlePage({ guide }: { guide: Guide | undefined }) {
  const content = guide ? guideContent[guide.slug] : undefined;

  useEffect(() => {
    if (!content || !window.location.hash) return;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [content]);

  if (!guide || !content) return <GuideNotFound />;

  const related = publishedGuides.filter((item) => item.slug !== guide.slug);
  const contentsLinks = (
    <>
      {content.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.heading}</a>)}
      <a href="#article-faq">Frequently asked questions</a>
      <a href="#article-sources">Sources and scope</a>
    </>
  );

  return (
    <article className="guide-article" aria-labelledby="article-title">
      <header className="article-header">
        <a className="article-back" href="/guides"><ArrowLeft size={17} aria-hidden="true" /> All guides</a>
        <div className="article-meta"><span>{guide.topic}</span><span><Clock3 size={15} aria-hidden="true" /> {guide.readingTime}</span></div>
        <h1 id="article-title">{guide.title}</h1>
        <p className="article-summary">{guide.summary}</p>
      </header>

      <div className="article-layout">
        <aside className="article-sidebar">
          <nav className="article-toc" aria-label="In this guide"><p>In this guide</p>{contentsLinks}</nav>
        </aside>
        <div className="article-body">
          <details className="article-mobile-toc">
            <summary>In this guide <ChevronDown size={18} aria-hidden="true" /></summary>
            <nav aria-label="In this guide">{contentsLinks}</nav>
          </details>
          <div className="article-intro">{content.intro.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
          {content.sections.map((section) => (
            <section className="article-section" id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
              <h2 id={`${section.id}-title`}>{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </section>
          ))}

          <section className="article-section article-faq" id="article-faq" aria-labelledby="article-faq-title">
            <h2 id="article-faq-title">Frequently asked questions</h2>
            {content.faqs.map((faq) => <div className="article-faq-item" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}
          </section>

          <section className="article-sources" id="article-sources" aria-labelledby="article-sources-title">
            <h2 id="article-sources-title">Sources and scope</h2>
            <p>{content.scopeNote}</p>
            <p className="article-disclaimer">General educational information, not personalised financial advice.</p>
            <ul>{content.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}<ArrowUpRight size={16} aria-label="Opens in a new tab" /></a></li>)}</ul>
          </section>

          <aside className="article-product-note" aria-label="About SyncFlo">
            <p>{content.productNote}</p>
            <a className="text-link" href="/#capture">See how SyncFlo works <ArrowRight size={17} aria-hidden="true" /></a>
          </aside>
        </div>
      </div>

      <nav className="article-related" aria-labelledby="related-title">
        <div><h2 id="related-title">Keep the picture growing.</h2><p>More guides for your next question.</p></div>
        <ul>{related.map((item) => <li key={item.slug}><a href={`/guides/${item.slug}`}><span><small>{item.topic} · {item.readingTime}</small><strong>{item.title}</strong></span><ArrowRight size={21} aria-hidden="true" /></a></li>)}</ul>
      </nav>
    </article>
  );
}
