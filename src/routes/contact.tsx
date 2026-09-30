import { createFileRoute, Link } from "@tanstack/react-router";
import { CONTACT_EMAIL, contactReasons } from "@/data/site";
import { ContactForm, Eyebrow, PageHeader, SectionHead } from "@/components/site";
import { pageMeta } from "@/lib/seo";

type ContactSearch = { reason?: string | undefined };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    reason:
      typeof search["reason"] === "string" && contactReasons.some((r) => r.id === search["reason"])
        ? search["reason"]
        : undefined,
  }),
  head: () =>
    pageMeta(
      "Contact",
      "Connect With Embrowerment Foundation. Select the reason for your inquiry so we can direct your message to the appropriate person.",
    ),
  component: ContactPage,
});

function ContactPage() {
  const { reason } = Route.useSearch();
  return (
    <>
      <PageHeader
        num="08"
        section="Contact"
        title="Connect With Embrowerment Foundation"
        dek="Select the reason for your inquiry so we can direct your message to the appropriate person."
      />

      <section className="section container">
        <SectionHead num="I" label="How Can We Help?" title="How Can We Help?" />
        <div className="card-grid card-grid--3">
          {contactReasons.map((r) => (
            <Link
              key={r.id}
              to="/contact"
              search={{ reason: r.id }}
              hash="message"
              className={r.id === reason ? "card card--link is-selected" : "card card--link"}
            >
              <h3 className="h3">{r.title}</h3>
              <p className="body">{r.text}</p>
              {"note" in r && <p className="card-note">{r.note}</p>}
            </Link>
          ))}
        </div>
      </section>

      <section id="message" className="section section--tint">
        <div className="container contact-layout">
          <aside className="contact-aside">
            <Eyebrow num="II">Send Us a Message</Eyebrow>
            <h2 className="h2">Send Us a Message</h2>
            <div className="contact-block">
              <h3 className="h3">Email Us</h3>
              <p className="body">For general inquiries:</p>
              <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="contact-block">
              <h3 className="h3">Stay Connected</h3>
              <p className="body">
                Follow Embrowerment Foundation for program updates, stories, opportunities, and
                organizational news.
              </p>
            </div>
          </aside>
          <ContactForm reason={reason} />
        </div>
      </section>

      <section className="section container center-block">
        <h2 className="h2">We Look Forward to Hearing From You.</h2>
      </section>
    </>
  );
}
