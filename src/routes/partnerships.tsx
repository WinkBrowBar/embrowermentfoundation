import { createFileRoute } from "@tanstack/react-router";
import {
  BulletList,
  Callout,
  Eyebrow,
  PageHeader,
  Pillars,
  SectionHead,
  Statement,
} from "@/components/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/partnerships")({
  head: () =>
    pageMeta(
      "Partnerships",
      "Let's Create Impact Together. Nonprofit, institutional, corporate, and professional partnerships with Embrowerment® Foundation.",
    ),
  component: PartnershipsPage,
});

const howWePartner = [
  {
    title: "Mission Alignment",
    text: "Collaboration should support participant and community needs.",
  },
  { title: "Complementary Strengths", text: "Each partner contributes what it does best." },
  {
    title: "Participant Dignity",
    text: "Privacy, choice, safety, and respect remain central.",
  },
  { title: "Accountability", text: "Roles, expectations, and outcomes should be clear." },
];

function PartnershipsPage() {
  return (
    <>
      <PageHeader num="05" section="Partnerships" title="Let's Create Impact Together.">
        <p>
          Embrowerment® Foundation partners with nonprofit organizations, institutions, businesses,
          and professionals to expand access to resources, expertise, and opportunity.
        </p>
        <p>
          Our goal is not to duplicate existing services. It is to strengthen connections, share
          resources, fill appropriate gaps, and help people reach the support and opportunities that
          can help them move forward.
        </p>
      </PageHeader>

      <section className="section container split">
        <Eyebrow num="I">Nonprofit & Community Partnerships</Eyebrow>
        <div className="prose">
          <h2 className="h2">Stronger Organizations. Stronger Pathways.</h2>
          <p className="body">Nonprofit and community partnerships are central to our work.</p>
          <p className="body">
            We welcome collaboration with nonprofits, community-based organizations, advocacy
            groups, faith-based organizations, and service providers through:
          </p>
          <BulletList
            className="bullets--2"
            items={[
              "Participant referrals and cross-referrals",
              "Joint workshops and programming",
              "Community outreach and engagement",
              "Resource and knowledge sharing",
              "Volunteer collaboration",
              "Shared training or planning",
              "Collaborative funding opportunities where appropriate",
            ]}
          />
          <p className="body">
            We believe the strongest partnerships build on what each organization already does well.
          </p>
          <Statement>
            Our aim is to reduce duplication, strengthen access, and create more connected pathways
            to support.
          </Statement>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container two-panel">
          <div>
            <Eyebrow num="II">Institutional Partnerships</Eyebrow>
            <p className="body">
              We collaborate with institutions that can provide education, training, specialized
              expertise, professional exposure, or supportive resources.
            </p>
            <p className="body">Potential partners may include:</p>
            <BulletList
              items={[
                "Hospitals and healthcare systems",
                "Cancer and survivorship organizations",
                "Schools, colleges, and universities",
                "Training organizations",
                "Workforce-development organizations",
                "Employers and professional associations",
              ]}
            />
            <p className="body">
              Collaboration may include referrals, education, training, outreach, workshops, or
              professional-development opportunities.
            </p>
            <p className="disclaimer">
              Embrowerment Foundation does not provide medical diagnosis, treatment, or healthcare
              services.
            </p>
          </div>
          <div>
            <Eyebrow num="III">Corporate & Professional Partnerships</Eyebrow>
            <p className="body">Companies and professionals can support Embrowerment through:</p>
            <BulletList
              items={[
                "Corporate giving and sponsorship",
                "Employee and skills-based volunteering",
                "In-kind contributions",
                "Mentoring and career guidance",
                "Professional expertise",
                "Educational workshops",
                "Professional-network connections",
              ]}
            />
            <p className="body">
              We welcome professionals whose expertise can help participants gain knowledge,
              perspective, and access to opportunity.
            </p>
          </div>
        </div>
      </section>

      <section className="section container split">
        <Eyebrow num="IV">What We Look for in Partners</Eyebrow>
        <div className="prose">
          <p className="lede">We welcome mission-aligned organizations working in areas such as:</p>
          <BulletList
            className="bullets--2"
            items={[
              "Women and girls",
              "Confidence and well-being",
              "Cancer support and survivorship",
              "Education and training",
              "Mentorship and workforce development",
              "Entrepreneurship and economic mobility",
              "Community development and resource access",
            ]}
          />
          <p className="body">
            The most valuable partnerships often happen when each organization brings something
            different to a shared goal.
          </p>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead num="V" label="How We Partner" title="How We Partner" />
          <Pillars items={howWePartner} cols={4} />
        </div>
      </section>

      <Callout
        title="Partner With Embrowerment"
        links={[
          { label: "Partner With Embrowerment", to: "/contact", search: { reason: "partnership" } },
        ]}
      >
        <p>
          Partnership may begin with a referral, workshop, volunteer opportunity, professional
          expertise, shared resource, or financial contribution.
        </p>
        <p>
          <strong>
            What matters is that the collaboration is practical, mission-aligned, and useful to the
            people it is intended to support.
          </strong>
        </p>
        <p className="callout-italic">Let's build stronger pathways together.</p>
      </Callout>
    </>
  );
}
