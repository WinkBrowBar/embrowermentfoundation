import { useState } from "react";
import { donationAmounts, donationDesignations, donationFrequencies } from "@/data/site";
import { cn } from "@/lib/utils";

const FEE_RATE = 0.03;
const money = (n: number) => `$${n.toFixed(2)}`;

export function DonateForm({
  className,
  defaultDesignation = donationDesignations[0],
}: {
  className?: string;
  defaultDesignation?: string;
}) {
  const [designation, setDesignation] = useState<string>(defaultDesignation ?? "");
  const [preset, setPreset] = useState<number | null>(donationAmounts[1] ?? 20);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<string>("One-Time");
  const [coverFee, setCoverFee] = useState(true);

  const amount = preset ?? (Number.parseFloat(custom) || 0);
  const fee = coverFee ? amount * FEE_RATE : 0;
  const period = donationFrequencies.find((f) => f.label === frequency)?.period ?? "donation";

  return (
    <form
      className={cn("donate-form", className)}
      onSubmit={(e) => {
        e.preventDefault();
        window.alert("Donation processing is not connected yet.");
      }}
    >
      <fieldset>
        <legend className="field-label">Direct my gift to</legend>
        <div className="seg">
          {donationDesignations.map((d) => (
            <button
              key={d}
              type="button"
              className={cn("chip chip--text", designation === d && "is-selected")}
              aria-pressed={designation === d}
              onClick={() => setDesignation(d)}
            >
              {d}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="field-label">Amount</legend>
        <div className="amount-grid">
          {donationAmounts.map((v) => (
            <button
              key={v}
              type="button"
              className={cn("chip", preset === v && "is-selected")}
              aria-pressed={preset === v}
              onClick={() => {
                setPreset(v);
                setCustom("");
              }}
            >
              ${v}
            </button>
          ))}
        </div>
        <label className="custom-amount">
          <span className="sr-only">Custom amount</span>
          <span aria-hidden="true">$</span>
          <input
            type="number"
            inputMode="decimal"
            min="1"
            step="0.01"
            placeholder="Custom amount"
            value={custom}
            onFocus={() => setPreset(null)}
            onChange={(e) => {
              setPreset(null);
              setCustom(e.target.value);
            }}
          />
        </label>
      </fieldset>

      <fieldset>
        <legend className="field-label">Frequency</legend>
        <div className="freq-grid" role="radiogroup">
          {donationFrequencies.map((f) => (
            <button
              key={f.label}
              type="button"
              role="radio"
              aria-checked={frequency === f.label}
              className={cn("chip chip--text", frequency === f.label && "is-selected")}
              onClick={() => setFrequency(f.label)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="check-row">
        <input type="checkbox" checked={coverFee} onChange={(e) => setCoverFee(e.target.checked)} />
        <span>Cover the 3% transaction fee so more of my gift goes to the mission</span>
      </label>

      <dl className="totals">
        <div>
          <dt>Transaction fee</dt>
          <dd>{money(fee)}</dd>
        </div>
        <div className="totals-grand">
          <dt>Total per {period}</dt>
          <dd>{money(amount + fee)}</dd>
        </div>
      </dl>

      <button type="submit" className="btn btn-solid btn-block" disabled={amount <= 0}>
        Donate Now
      </button>
      <p className="form-note">
        Embrowerment Foundation is an IRS-recognized 501(c)(3) public charity. Donations are
        tax-deductible to the fullest extent permitted by law.
      </p>
    </form>
  );
}
