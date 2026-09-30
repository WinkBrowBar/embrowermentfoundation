import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/hero.jpg.asset.json";
import { homeImpactGoals, initiatives, leaders, progressionSteps } from "@/data/site";
import {
  Brush,
  BulletList,
  DoodleArrow,
  TornEdge,
  Callout,
  Eyebrow,
  Figure,
  LinkRow,
  Marquee,
  Quote,
  SectionHead,
  Stat,
  Statement,
} from "@/components/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "",
      "Embrowerment® Foundation advances confidence, education, mentorship, wellness, economic mobility, and community connection.",
      heroAsset.url,
    ),
  component: HomePage,
});

const getInvolved = [
  { title: "Volunteer", text: "Give your time, skills, or professional experience." },
  { title: "Mentor", text: "Share your knowledge and guidance through Lead Forward." },
  {
    title: "Partner",
    text: "Bring your organization's expertise, resources, services, or networks.",
  },
  {
    title: "Give",
    text: "Help expand access to confidence-building services, education, mentorship, and economic opportunity.",
  },
];

function HomePage() {
  const [first20, ...others] = initiatives;
  return (
    <>
      {/* Hero — full-bleed campaign photo with torn edge */}
      <section className="hero">
        <Figure
          className="hero-media"
          src={heroAsset.url}
          fallbackSrc={leaders[0]!.image}
          alt=""
          priority
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="container hero-inner">
          <Eyebrow>Embrowerment® Foundation</Eyebrow>
          <h1 className="h1 h1--hero">
            Empowering Confidence. Creating Opportunity. Strengthening <Brush>Communities</Brush>
          </h1>
          <p className="lede">
            Sometimes empowerment begins with feeling like yourself again. Sometimes it begins with
            education, guidance, or one meaningful opportunity to move forward.
          </p>
          <div className="cover-actions">
            <Link to="/donate" className="btn btn-gold">
              Donate
            </Link>
            <Link to="/programs" className="btn btn-light">
              Explore Our Programs
            </Link>
          </div>
        </div>
        <TornEdge position="bottom" className="hero-edge" />
        <DoodleArrow className="hero-arrow" />
      </section>

      <section className="container hero-intro">
        <p className="lede lede--lg">
          Embrowerment® Foundation advances confidence, education, mentorship, wellness, economic
          mobility, and community connection—helping individuals expand their choices and build
          pathways toward greater independence and well-being.
        </p>
      </section>

      <Marquee items={progressionSteps} />

      {/* Who We Are */}
      <section className="section container split">
        <Eyebrow num="01">Who We Are</Eyebrow>
        <div className="prose">
          <h2 className="h2">Confidence Can Be the Beginning</h2>
          <p className="lede">
            Embrowerment® Foundation is an IRS-recognized 501(c)(3) public charity helping
            individuals move forward with confidence, dignity, knowledge, and access.
          </p>
          <div className="two-col">
            <p className="body">
              We recognize that barriers are rarely one-dimensional. Illness can affect identity and
              self-confidence. Financial circumstances can limit education. Talent may exist without
              professional connections. Ambition may be present even when access is not.
            </p>
            <p className="body">
              Our programs bring together restorative support, education, mentorship, professional
              development, economic advancement, and community resources.
            </p>
          </div>
          <Statement>
            We do not define success for the people we serve. We help expand the resources,
            relationships, and choices they can use to pursue it.
          </Statement>
          <LinkRow links={[{ label: "Learn More About Us", to: "/about" }]} />
        </div>
      </section>

      {/* Areas of Impact */}
      <section className="section section--tint">
        <div className="container">
          <SectionHead num="02" label="Our Areas of Impact" title="Five Areas. One Mission." />
          <ol className="toc">
            {initiatives.map((p, i) => (
              <li key={p.id}>
                <Link to="/programs" hash={p.id} className="toc-row">
                  <span className="toc-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="toc-title">{p.area}</span>
                  <span className="toc-desc">
                    {p.areaSummary}
                    <span className="toc-sig">
                      <strong>Signature Initiative:</strong> {p.name}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <LinkRow links={[{ label: "Explore All Programs", to: "/programs" }]} />
        </div>
      </section>

      {/* Featured Initiatives */}
      <section className="section container">
        <SectionHead num="03" label="Featured Initiatives" title={first20!.name} />
        <div className="feature-first20">
          <div>
            <p className="tagline">{first20!.tagline}</p>
            {first20!.homeCopy.map((p) => (
              <p className="body" key={p}>
                {p}
              </p>
            ))}
          </div>
          <div className="feature-first20-quote">
            <Quote>“There I am.”</Quote>
            <p className="body">
              The First 20 reflects our belief that rebuilding can begin with something small,
              meaningful, and closely connected to identity.
            </p>
            <p className="program-area">
              <strong>Program Area:</strong> {first20!.area}
            </p>
            <LinkRow
              links={[
                { label: "Learn About The First 20", to: "/programs", hash: "first-20" },
                { label: "Support The First 20", to: "/donate", hash: "first-20" },
              ]}
            />
          </div>
        </div>

        <div className="initiative-grid">
          {others.map((p) => (
            <article className="initiative-card" key={p.id}>
              <h3 className="h3">{p.name}</h3>
              <p className="tagline">{p.tagline}</p>
              {p.homeCopy.map((c, i) =>
                p.id === "rise" && i === 0 ? (
                  <p className="body body--strong" key={c}>
                    {c}
                  </p>
                ) : (
                  <p className="body" key={c}>
                    {c}
                  </p>
                ),
              )}
              <p className="program-area">
                <strong>Program Area:</strong> {p.area}
              </p>
              <LinkRow
                links={[
                  { label: p.exploreLabel, to: "/programs", hash: p.id },
                  ...(p.id === "collective-impact"
                    ? [{ label: "Partner With Us", to: "/partnerships" }]
                    : []),
                ]}
              />
            </article>
          ))}
        </div>
      </section>

      {/* Impact Goals */}
      <section className="section section--tint">
        <div className="container">
          <SectionHead
            num="04"
            label="Our Impact Goals"
            title="Behind Every Number Is a Person."
            intro={
              <p className="body">
                Our goals reflect the different ways Embrowerment supports individuals—from highly
                personalized restorative services to education, mentorship, professional
                development, and broader community engagement.
              </p>
            }
          />
          <div className="stat-grid">
            {homeImpactGoals.map((g) => (
              <Stat key={g.label} value={g.value} label={g.label} />
            ))}
          </div>
          <div className="two-col small-print">
            <p>
              These goals represent different measures of impact and are tracked separately across
              our programs.
            </p>
            <p>
              Community reach may include individuals engaged through educational activities,
              events, outreach, referrals, collaborative programming, volunteer engagement, and
              partner-supported initiatives.
            </p>
            <p>
              As programs progress, we are committed to reporting verified results and meaningful
              outcomes transparently.
            </p>
          </div>
          <LinkRow links={[{ label: "See Our Impact", to: "/impact" }]} />
        </div>
      </section>

      {/* Why Embrowerment */}
      <section className="section container split">
        <Eyebrow num="05">Why Embrowerment?</Eyebrow>
        <div className="prose">
          <h2 className="h2">Confidence Is the Beginning. Opportunity Creates What Comes Next.</h2>
          <p className="lede">
            Confidence can be a powerful first step, but lasting progress may also require
            education, guidance, skills, relationships, resources, and access.
          </p>
          <p className="body">
            Embrowerment brings these elements together so individuals have more tools and choices
            to shape what comes next.
          </p>
        </div>
      </section>

      {/* Stronger Together */}
      <section className="section container split">
        <Eyebrow num="06">Stronger Together</Eyebrow>
        <div className="prose">
          <h2 className="h2">Partnership Creates Greater Impact.</h2>
          <p className="body">
            Embrowerment Foundation works with nonprofits, corporations, healthcare and wellness
            organizations, educational institutions, employers, entrepreneurs, professionals, and
            community leaders.
          </p>
          <BulletList
            className="bullets--2"
            items={[
              "Program & referral partnerships",
              "Education & mentorship opportunities",
              "Corporate sponsorship & employee engagement",
              "Professional expertise & in-kind resources",
            ]}
          />
          <p className="body">
            By bringing different strengths together, individual support can grow into broader
            community impact.
          </p>
          <LinkRow links={[{ label: "Partner With Us", to: "/partnerships" }]} />
        </div>
      </section>

      {/* Get Involved */}
      <section className="section section--tint">
        <div className="container">
          <SectionHead
            num="07"
            label="Get Involved"
            title="You May Be Someone's Next Opportunity."
          />
          <div className="card-grid card-grid--4">
            {getInvolved.map((c, i) => (
              <article className="card" key={c.title}>
                <span className="pillar-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{c.title}</h3>
                <p className="body">{c.text}</p>
              </article>
            ))}
          </div>
          <LinkRow
            links={[
              { label: "Volunteer", to: "/contact", search: { reason: "volunteer" } },
              { label: "Become a Mentor", to: "/contact", search: { reason: "volunteer" } },
              { label: "Partner With Us", to: "/partnerships" },
              { label: "Donate", to: "/donate" },
            ]}
          />
        </div>
      </section>

      <Callout
        title="Help Create the Next Opportunity."
        links={[
          { label: "Donate", to: "/donate" },
          { label: "Partner With Us", to: "/partnerships" },
        ]}
      >
        <p>
          Sometimes the next step is restored confidence. Sometimes it is education through{" "}
          <strong>Rise</strong>, guidance through <strong>Lead Forward</strong>, a pathway toward
          independence through <strong>Thrive</strong>, or a connection created through{" "}
          <strong>Collective Impact</strong>.
        </p>
        <p className="callout-italic">
          The right support at the right moment can change what someone sees as possible.
        </p>
        <p>
          <strong>Help create more of those moments.</strong>
        </p>
      </Callout>
    </>
  );
}
