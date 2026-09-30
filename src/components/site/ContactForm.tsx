import { useEffect, useState, type FormEvent } from "react";
import { CONTACT_EMAIL, contactReasons } from "@/data/site";

export function ContactForm({ reason }: { reason?: string | undefined }) {
  const [selected, setSelected] = useState<string>(reason ?? "");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (reason) setSelected(reason);
  }, [reason]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const d = new FormData(event.currentTarget);
    // Honeypot spam protection: real visitors never fill this hidden field.
    if (String(d.get("website") ?? "")) return;

    const label = contactReasons.find((r) => r.id === selected)?.label ?? "General Inquiry";
    const name = String(d.get("name") ?? "");
    const lines = [
      `Reason for Contact: ${label}`,
      `Name: ${name}`,
      `Organization: ${d.get("organization") || "—"}`,
      `Email: ${d.get("email")}`,
      `Phone: ${d.get("phone") || "—"}`,
      "",
      String(d.get("message") ?? ""),
    ];
    const subject = encodeURIComponent(`[${label}] ${name}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-confirmation" role="status" aria-live="polite">
        <p className="eyebrow">Thank you</p>
        <h3 className="h2">We Look Forward to Hearing From You.</h3>
        <p className="body">
          Your message has been prepared in your email app. Once it is sent, a member of our team
          will direct it to the appropriate person.
        </p>
        <button type="button" className="arrow-link" onClick={() => setSent(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate={false}>
      <p className="form-required-note">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>
      <div className="field-pair">
        <div className="field">
          <label htmlFor="cf-name">
            Name <span className="req">*</span>
          </label>
          <input id="cf-name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="cf-org">
            Organization <span className="opt">(Optional)</span>
          </label>
          <input id="cf-org" name="organization" autoComplete="organization" />
        </div>
      </div>
      <div className="field-pair">
        <div className="field">
          <label htmlFor="cf-email">
            Email <span className="req">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="cf-phone">
            Phone <span className="opt">(Optional)</span>
          </label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-reason">
          Reason for Contact <span className="req">*</span>
        </label>
        <select
          id="cf-reason"
          name="reason"
          required
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="" disabled>
            Select a reason
          </option>
          {contactReasons.map((r) => (
            <option key={r.id} value={r.id}>
              {r.label}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="cf-msg">
          Message <span className="req">*</span>
        </label>
        <textarea id="cf-msg" name="message" rows={5} required />
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="privacy-note">
        <strong>Privacy note:</strong> Please do not submit medical records, financial information,
        or other sensitive personal information through this form. If additional information is
        needed, our team will provide appropriate instructions.
      </p>
      <button type="submit" className="btn btn-solid">
        Send Message
      </button>
    </form>
  );
}
