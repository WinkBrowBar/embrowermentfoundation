import { createFileRoute } from "@tanstack/react-router";
import heroAsset from "@/assets/hero.jpg.asset.json";
import { leaders } from "@/data/site";
import {
  Brush,
  Callout,
  Figure,
  DonateForm,
  Eyebrow,
  PageHeader,
  Pillars,
  SectionHead,
  Stat,
} from "@/components/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/donate")({
  head: () =>
    pageMeta(
      "Donate",
      "Your Support Creates Opportunity. Support The First 20 Initiative or give where it is needed most.",
    ),
  component: DonatePage,
});

const unrestricted = [
  {
    title: "Participant Access",
    text: "Helping reduce financial or practical barriers that may otherwise limit participation.",
  },
  {
    title: "Direct Program Delivery",
    text: "Supporting the materials, services, learning experiences, and resources needed to deliver quality programming.",
  },
  {
    title: "Opportunity & Connection",
    text: "Helping create access to education, mentorship, professional development, and useful community resources.",
  },
  {
    title: "Organizational Capacity",
    text: "Supporting the coordination, systems, reporting, and resources needed to deliver programs responsibly.",
  },
];

const waysToGive = [
  {
    title: "Online Giving",
    text: "Make a one-time contribution directly to the Foundation.",
  },
  {
    title: "Employer Matching",
    text: "Check whether your employer matches eligible charitable contributions.",
  },
  {
    title: "Fundraise for Embrowerment",
    text: "Create a personal, workplace, birthday, or community fundraising campaign in support of the mission.",
  },
  {
    title: "In-Kind Support",
    text: "Certain goods or professional services may be accepted when they align with an identified program need.",
  },
];

function DonatePage() {
  return (
    <>
      <PageHeader num="07" section="Donate" title="Your Support Creates Opportunity.">
        <p>A donation to Embrowerment® Foundation helps turn opportunity into action.</p>
        <p>
          Your support can help remove practical barriers and provide the resources needed to
          deliver meaningful programs and participant support.
        </p>
        <p>
          Donors may choose to support The First 20 Initiative or make an unrestricted gift to
          advance the Foundation's broader mission.
        </p>
      </PageHeader>

      <section id="give-now" className="band band--ink donate-band">
        <Figure
          className="donate-band-media"
          src={heroAsset.url}
          fallbackSrc={leaders[0]!.image}
          alt=""
        />
        <div className="container donate-band-inner">
          <DonateForm className="donate-form--gold" />
          <div id="first-20" className="prose donate-band-copy">
            <Eyebrow num="I">Support the First 20</Eyebrow>
            <h2 className="h2">
              Help Make the First 20 <Brush>Possible.</Brush>
            </h2>
            <div className="stat-pair">
              <Stat value="$10,000" label="To Support 20 Participants" />
            </div>
            <p className="body">
              Contributions to The First 20 help make restorative-confidence services accessible to
              eligible participants without placing the cost of those services on them.
            </p>
            <p className="small-print">
              Select “The First 20 Initiative” in the form to direct your gift.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead
            num="II"
            label="Give Where It Is Needed Most"
            title="Give Where It Is Needed Most"
            intro={
              <p className="body">
                Unrestricted donations give Embrowerment the flexibility to direct resources where
                they can be most useful.
              </p>
            }
          />
          <Pillars items={unrestricted} cols={4} />
          <p className="lede closing-lede">
            Unrestricted giving helps Embrowerment respond to needs as they emerge while maintaining
            the flexibility to strengthen the areas where support is most needed.
          </p>
        </div>
      </section>

      <section className="section container split">
        <Eyebrow num="III">Your Gift Has a Purpose</Eyebrow>
        <div className="prose">
          <p className="lede">
            Some support creates an immediate result—a service delivered, a learning opportunity
            made accessible, or a participant connected with useful guidance.
          </p>
          <p className="body">
            Other outcomes develop over time as confidence grows, skills strengthen, relationships
            form, and new opportunities become easier to pursue.
          </p>
          <p className="statement">Both matter.</p>
          <p className="body">
            Embrowerment Foundation is committed to reporting verified progress so donors can better
            understand how charitable support contributes to the mission.
          </p>
          <p className="body">Your gift can help make the next opportunity possible.</p>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead num="IV" label="Ways to Give" title="Ways to Give" />
          <Pillars items={waysToGive} cols={4} />
        </div>
      </section>

      <section className="section container split">
        <Eyebrow num="V">Give With Confidence</Eyebrow>
        <p className="lede">
          Your support helps strengthen the resources needed to serve participants thoughtfully and
          responsibly.
        </p>
      </section>

      <Callout
        title="Every gift moves the mission forward."
        links={[{ label: "Donate Now", to: "/donate", hash: "give-now" }]}
      >
        <p className="small-print">
          Embrowerment Foundation is an IRS-recognized 501(c)(3) public charity. Donations are
          tax-deductible to the fullest extent permitted by law.
        </p>
      </Callout>
    </>
  );
}
