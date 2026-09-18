import { ArrowLeft, ChevronDown } from "lucide-react";

const operator = "Amir Mambetaliev";
const privacyEmail = "dev.amir.mambetaliev@gmail.com";

const sections = [
  {
    id: "local-data", title: "Your expense data",
    paragraphs: [
      "SyncFlo stores your expense ledger, categories, budgets, merchant rules, and preferences on your device. Records can include merchant names, amounts, currencies, dates, categories, notes, and payment-account labels that you enter or pass through Shortcuts. You do not need a SyncFlo account to keep a ledger.",
      "SyncFlo does not connect to your bank, read notifications from other apps, or retrieve your Apple Wallet transaction history. Wallet capture uses a transaction automation that you create in Apple’s Shortcuts app. SyncFlo receives only the fields your automation passes to its expense action.",
      "The app does not upload your ledger to a SyncFlo server. Optional AI requests and exports can share information as described below. The app does not include advertising or cross-app tracking SDKs.",
    ],
  },
  {
    id: "optional-ai", title: "Optional AI services",
    paragraphs: [
      "AI features are optional. You choose a provider, model, and endpoint, and supply your own API key. SyncFlo stores the key in your device’s Keychain and sends it to your selected endpoint to authenticate requests. Core expense tracking works without AI.",
      "Your provider can associate requests with your provider account or project. Providers may record API usage, request or token counts, execution and error logs, and connection information to operate, secure, and improve their services. These records follow the provider’s policies and account settings.",
      "If you enable AI categorization and accept its disclosure, requests send the merchant name, amount, currency, optional expense note, and available categories to the provider you select. The provider returns a proposed category.",
      "AI spending chat requires separate consent. When you ask a question, SyncFlo sends the conversation and a summary for the selected currency: current and previous month spending, top category and merchant totals, transaction counts, and budget information when available. Raw expense records, transaction notes, and payment-account details are not automatically included in this summary. Anything you type into chat is sent to the provider.",
      "Chat conversations stay in app memory for the session and can be cleared with New chat. Providers may retain requests, use them for model improvement, or process them in other countries according to their terms, privacy policies, and your account settings. Review those policies before enabling AI or entering sensitive information. SyncFlo does not control a provider’s retention or training settings.",
      "Categorization and chat have separate controls. Turning either feature off stops future requests from that feature; it does not erase information already received by a provider. To remove provider-held information, use that provider’s deletion tools or contact it directly.",
    ],
  },
  {
    id: "exchange-rates", title: "Exchange rates",
    paragraphs: [
      "For supported currency conversions, SyncFlo requests reference exchange rates from Frankfurter. These requests contain currency codes and a date, but not the expense amount, merchant, note, or payment-account label. Rates are cached on your device, and completed conversions are saved with the expense.",
      "Network services, including your AI provider and the exchange-rate service, receive connection information such as your IP address as part of handling a request. Their processing is governed by their own practices.",
    ],
  },
  {
    id: "purchases", title: "Subscriptions and Apple services",
    paragraphs: [
      "Apple processes SyncFlo Pro purchases through the App Store. SyncFlo uses StoreKit transaction and entitlement information to determine your subscription status and unlock paid features. SyncFlo does not receive your payment-card number from Apple.",
      "You manage subscriptions, billing, and purchase-related requests through your Apple account. Apple’s privacy policy applies to information Apple processes for these services and for any device diagnostics you choose to share.",
    ],
  },
  {
    id: "backups", title: "Exports, backups, and security",
    paragraphs: [
      "You can export and import JSON backups containing expense and planning data. When you export, the destination and any sharing are your choice. A file saved to a cloud drive or sent to someone else is handled by that service or recipient. Deleting an expense from SyncFlo does not delete exported copies.",
      "Your device’s backup settings may also include app data in device backups. You can manage those copies through your Apple device and account settings. Keep your device protected and store exported files carefully; they may contain sensitive financial information.",
      "SyncFlo uses the device Keychain for provider API keys and HTTPS for its built-in network services. No storage or transmission method can guarantee absolute security. If you configure a custom provider endpoint, choose one you trust.",
    ],
  },
  {
    id: "website", title: "This website and email",
    paragraphs: [
      "Cloudflare hosts syncflo.pages.dev and processes web requests to deliver and protect the site. Requests can include your IP address, browser information, and the page requested. Cloudflare’s privacy policy explains its processing.",
      "The website stores your light or dark theme choice in your browser’s local storage. You can clear this through your browser settings. The site’s own code does not install advertising or analytics cookies.",
      "The launch-list form opens a draft in your email app. Typing an address into the form does not submit it to a SyncFlo database; a request reaches the recipient only if you send the email. If you email us for support, privacy questions, or launch updates, we receive your address and the information in your message. Please do not send API keys, payment credentials, or an entire expense backup unless necessary for a request.",
      "We use correspondence to handle your request and, when you request them, send launch updates. We keep it for as long as needed for those purposes and any applicable legal obligations. You can ask us to delete correspondence or stop launch emails using the contact below.",
    ],
  },
  {
    id: "your-controls", title: "Retention, deletion, and your choices",
    paragraphs: [
      "Local expense and planning data stays on your device until you remove it. You can edit or delete expenses in the app. Deleting the app removes its local app data from that device; offloading the app can preserve it. Exported files, device backups, Apple purchase records, and information already sent to providers are separate copies.",
      "You can disable AI features and delete a saved provider key in Settings. Remove saved keys before uninstalling if you want to clear them, because device Keychain items may persist after an app is removed. You can also revoke the key with your provider.",
      "Depending on where you live, you may have rights to access, correct, export, or delete personal information, object to or restrict certain uses, withdraw consent, or complain to your local data-protection authority. Contact us to exercise rights concerning information we hold. We cannot retrieve or remotely delete a ledger stored only on your device. Requests about a provider’s or Apple’s records may need to go directly to that service.",
    ],
  },
  {
    id: "updates", title: "Changes to this policy",
    paragraphs: [
      "We will update this page when our data practices change and revise the date above. Where required, we will provide additional notice or request consent before a new use of your information.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  const contents = <>{sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}<a href="#contact">Contact</a></>;
  return (
    <article className="guide-article privacy-policy" aria-labelledby="policy-title">
      <header className="article-header">
        <a className="article-back" href="/"><ArrowLeft size={17} aria-hidden="true" /> Back to SyncFlo</a>
        <h1 id="policy-title">Privacy policy</h1>
        <p className="article-summary">What stays on your device, what you choose to share, and the controls you have.</p>
        <p className="policy-date">Effective September 18, 2026</p>
      </header>
      <div className="article-layout">
        <aside className="article-sidebar"><nav className="article-toc" aria-label="In this policy"><p>In this policy</p>{contents}</nav></aside>
        <div className="article-body">
          <details className="article-mobile-toc"><summary>In this policy <ChevronDown size={18} aria-hidden="true" /></summary><nav aria-label="In this policy">{contents}</nav></details>
          <div className="article-intro"><p>This policy covers the SyncFlo iPhone and iPad app and the website at syncflo.pages.dev. SyncFlo is operated by {operator}. For privacy questions, contact <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>.</p></div>
          {sections.map((section) => <section className="article-section" id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}><h2 id={`${section.id}-title`}>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
          <section className="article-section" id="contact" aria-labelledby="contact-title"><h2 id="contact-title">Contact</h2><p>{operator}<br /><a href={`mailto:${privacyEmail}`}>{privacyEmail}</a></p><p>Describe your request and the information concerned. You do not need to send your ledger or provider API key to ask a privacy question.</p></section>
          <aside className="article-sources" aria-label="Service privacy information"><h2>Service privacy information</h2><ul><li><a href="https://www.apple.com/legal/privacy/">Apple privacy policy</a></li><li><a href="https://www.cloudflare.com/privacypolicy/">Cloudflare privacy policy</a></li><li><a href="https://frankfurter.dev/">Frankfurter exchange-rate service</a></li></ul><p>For AI, consult the policy of the provider and endpoint you select.</p></aside>
        </div>
      </div>
    </article>
  );
}
