import { createFileRoute } from "@tanstack/react-router";
import { leaders } from "@/data/site";
import {
  BulletList,
  Eyebrow,
  Figure,
  LinkRow,
  PageHeader,
  Signature,
  Statement,
} from "@/components/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/leadership")({
  head: () =>
    pageMeta(
      "Leadership & Governance",
      "Leadership With Experience. Governance With Accountability. Meet Umbreen Sheikh, Andlib Mohsin, and Lillian Mera.",
    ),
  component: LeadershipPage,
});

const slug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

function LeadershipPage() {
  return (
    <>
      <PageHeader
        num="04"
        section="Leadership & Governance"
        title="Leadership With Experience. Governance With Accountability."
      >
        <p>
          Embrowerment® Foundation is guided by leaders bringing experience across entrepreneurship,
          humanitarian service, law, finance, education, and community engagement.
        </p>
        <p>
          Together, they provide strategic direction, organizational oversight, and responsible
          stewardship in support of the Foundation's mission.
        </p>
      </PageHeader>

      <section className="section container">
        <div className="team-grid">
          {leaders.map((l) => (
            <a href={`#${slug(l.name)}`} className="team-card" key={l.name}>
              <Figure src={l.image} alt={`${l.name}, ${l.role}`} />
              <h2 className="h3">{l.name}</h2>
              <p className="eyebrow">{l.role}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="container profiles">
        {leaders.map((l, i) => (
          <article
            id={slug(l.name)}
            className={i % 2 ? "profile profile--flip" : "profile"}
            key={l.name}
          >
            <Figure
              src={l.image}
              alt={`${l.name}, ${l.role}`}
              caption={
                <>
                  <span>{l.role}</span> {l.name}
                </>
              }
            />
            <div className="prose">
              <span className="profile-num">{String(i + 1).padStart(2, "0")}</span>
              <Eyebrow>{l.role}</Eyebrow>
              <h2 className="h2">{l.name}</h2>
              {l.bio.map((para) => (
                <p key={para} className="body">
                  {para}
                </p>
              ))}
              {i === 0 && <Signature name={l.name} />}
            </div>
          </article>
        ))}
      </section>

      <section className="section section--tint">
        <div className="container split">
          <Eyebrow num="I">Board of Directors</Eyebrow>
          <div className="prose">
            <h2 className="h2">Board of Directors</h2>
            <p className="body">
              Embrowerment Foundation's Board of Directors provides governance, oversight, and
              strategic guidance in support of the organization's charitable mission.
            </p>
            <p className="body">
              The Board helps ensure that organizational decisions remain aligned with mission,
              responsible stewardship, applicable governance responsibilities, and the long-term
              interests of the Foundation and the communities it serves.
            </p>
            <p className="body">
              Board composition and leadership information will be maintained as part of the
              Foundation's organizational records and public reporting, as appropriate.
            </p>
          </div>
        </div>
      </section>

      <section className="section container split">
        <Eyebrow num="II">Governance & Accountability</Eyebrow>
        <div className="prose">
          <h2 className="h2">Responsible Leadership Supports Responsible Impact.</h2>
          <p className="body">
            Embrowerment Foundation is committed to ethical governance, responsible financial
            stewardship, appropriate oversight, and transparent organizational practices.
          </p>
          <p className="body">Our governance approach emphasizes:</p>
          <BulletList
            className="bullets--2"
            items={[
              "Clear leadership and board oversight",
              "Responsible stewardship of charitable resources",
              "Accurate financial and organizational recordkeeping",
              "Ethical and informed decision-making",
              "Clear roles, responsibilities, and organizational controls",
              "Protection of participant privacy and dignity",
              "Accountability to donors, funders, partners, and communities",
              "Transparent reporting and communication",
            ]}
          />
          <p className="body">
            Strong governance helps ensure that organizational growth remains aligned with the
            Foundation's mission, available resources, capacity, and commitment to quality.
          </p>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container center-block">
          <Statement className="statement--center">
            Strong governance helps turn mission into responsible, sustainable impact.
          </Statement>
          <LinkRow
            className="link-row--center"
            links={[
              { label: "Explore Our Programs", to: "/programs" },
              { label: "See Our Impact", to: "/impact" },
              { label: "Partner With Us", to: "/partnerships" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
