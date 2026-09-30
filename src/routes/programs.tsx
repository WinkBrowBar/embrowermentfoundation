import { createFileRoute } from "@tanstack/react-router";
import { initiatives } from "@/data/site";
import {
  BulletList,
  Callout,
  Eyebrow,
  LinkRow,
  PageHeader,
  ProgressionLine,
  ProgressionTable,
  Quote,
  SectionHead,
  Stat,
  Statement,
  type LinkSpec,
} from "@/components/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/programs")({
  head: () =>
    pageMeta(
      "Programs",
      "Five program areas, one shared purpose: The First 20, Rise, Lead Forward, Thrive, and Collective Impact initiatives.",
    ),
  component: ProgramsPage,
});

const programRoles = [
  "Helps someone recognize their value and believe change is possible.",
  "Builds the education and practical skills needed to make informed choices.",
  "Creates access to mentorship, guidance, relationships, and professional networks.",
  "Provides pathways to apply those strengths through education, careers, entrepreneurship, wellness, and community participation.",
  "Strengthens an individual's ability to make decisions, pursue goals, and shape their own future.",
];

const extraLinks: Record<string, LinkSpec[]> = {
  "first-20": [
    {
      label: "Learn About The First 20",
      to: "/contact",
      search: { reason: "program" },
    },
    { label: "Support The First 20", to: "/donate", hash: "first-20" },
  ],
  rise: [{ label: "Explore The Rise Initiative", to: "/contact", search: { reason: "program" } }],
  "lead-forward": [
    { label: "Explore Lead Forward", to: "/contact", search: { reason: "program" } },
  ],
  thrive: [
    { label: "Explore The Thrive Initiative", to: "/contact", search: { reason: "program" } },
  ],
  "collective-impact": [
    { label: "Explore Collective Impact", to: "/contact", search: { reason: "program" } },
    { label: "Partner With Us", to: "/partnerships" },
  ],
};

function ProgramsPage() {
  return (
    <>
      <PageHeader num="02" section="Programs" title="Five Program Areas. One Shared Purpose.">
        <p>
          Embrowerment® Foundation delivers five interconnected program areas designed to strengthen
          confidence, expand access to learning and mentorship, support economic advancement, and
          connect individuals with community resources.
        </p>
        <p>
          Each initiative addresses a different barrier while contributing to one shared goal:
          helping people build greater confidence, knowledge, connection, opportunity, and
          empowerment.
        </p>
      </PageHeader>

      <nav className="container program-index" aria-label="Initiatives">
        {initiatives.map((p, i) => (
          <a href={`#${p.id}`} key={p.id}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            {p.shortName}
          </a>
        ))}
      </nav>

      {initiatives.map((p, i) => (
        <section id={p.id} key={p.id} className={i % 2 ? "section section--tint" : "section"}>
          <div className="container initiative">
            <div className="initiative-head">
              <span className="initiative-num">{String(i + 1).padStart(2, "0")}</span>
              <Eyebrow>{p.area}</Eyebrow>
              <h2 className="h2">{p.name}</h2>
              <p className="tagline">{p.tagline}</p>
            </div>

            <div className="initiative-body">
              <div className="prose">
                {p.lead && <Statement>{p.lead}</Statement>}
                {p.body.map((b) => (
                  <p className="body" key={b}>
                    {b}
                  </p>
                ))}
                {p.id === "first-20" && <Quote>“There I am.”</Quote>}

                <h3 className="h3 list-title">{p.listTitle}</h3>
                {p.list[0]?.title ? (
                  <dl className="defs">
                    {p.list.map((l) => (
                      <div key={l.title}>
                        <dt>{l.title}</dt>
                        <dd>{l.text}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <BulletList items={p.list.map((l) => l.text)} />
                )}
              </div>

              <aside className="goal-card">
                <Eyebrow>Current Goal</Eyebrow>
                <Stat value={p.goal.value} label={p.goal.label} note={p.goal.note} />
                <LinkRow links={extraLinks[p.id] ?? []} className="link-row--stack" />
              </aside>
            </div>
          </div>
        </section>
      ))}

      {/* How programs connect */}
      <section className="section container">
        <SectionHead
          label="How Our Programs Connect"
          title={<ProgressionLine />}
          intro={
            <p className="body">
              Our programs are distinct, but they are designed to reinforce one another.
            </p>
          }
        />
        <ProgressionTable heading="Program Role" rows={programRoles} />
      </section>

      {/* Measuring impact */}
      <section className="section section--tint">
        <div className="container">
          <SectionHead label="How We Measure Impact" title="Outputs and Outcomes" />
          <div className="measure-grid">
            <div>
              <h3 className="h3">What We Deliver</h3>
              <p className="body">
                Our program outputs help us understand the reach and activity of our work.
              </p>
              <BulletList
                items={[
                  "Individuals receiving restorative services",
                  "Learning and training opportunities delivered or facilitated",
                  "Mentorship and professional-development engagements",
                  "Career and entrepreneurship participants",
                  "Referrals and resources shared",
                  "Community members reached",
                  "Volunteers and partners engaged",
                ]}
              />
            </div>
            <div>
              <h3 className="h3">What Changes</h3>
              <p className="body">
                Outputs tell us what we delivered. Outcomes help us understand what changed.
              </p>
              <BulletList
                items={[
                  "Participant-reported confidence and well-being",
                  "Knowledge and skills gained",
                  "Education, training, or certification progress",
                  "Stronger mentorship and professional connections",
                  "Career readiness",
                  "Entrepreneurship and professional-development progress",
                  "Improved access to resources and supportive networks",
                  "Greater ability to make informed personal and professional choices",
                ]}
              />
            </div>
          </div>
          <Statement className="statement--center">
            Our goal is not only to understand how many people participate, but whether
            participation contributes to meaningful progress.
          </Statement>
          <LinkRow
            links={[{ label: "See Our Impact", to: "/impact" }]}
            className="link-row--center"
          />
        </div>
      </section>

      <Callout
        title="Find Your Path With Embrowerment"
        links={[
          { label: "Explore Our Initiatives", to: "/programs", hash: "first-20" },
          { label: "Partner With Us", to: "/partnerships" },
          { label: "Get Involved", to: "/get-involved" },
        ]}
      >
        <p>
          Whether you are looking for restorative support, education, mentorship, professional
          development, community resources, or a way to contribute, Embrowerment offers different
          ways to connect.
        </p>
      </Callout>
    </>
  );
}
