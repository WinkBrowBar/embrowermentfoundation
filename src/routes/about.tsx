import { createFileRoute } from "@tanstack/react-router";
import { leaders } from "@/data/site";
import {
  Callout,
  Eyebrow,
  Figure,
  PageHeader,
  Pillars,
  ProgressionLine,
  ProgressionTable,
  SectionHead,
  Signature,
  Statement,
} from "@/components/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta(
      "About",
      "Rooted in Confidence. Built for Possibility. The mission, vision, story, and approach of Embrowerment® Foundation.",
    ),
  component: AboutPage,
});

const meaningRows = [
  "Recognizing your value and believing that change is possible.",
  "Building the information, education, and practical skills needed to make informed choices.",
  "Developing relationships with mentors, professionals, and communities that offer guidance and support.",
  "Having pathways to apply confidence, knowledge, and connection toward education, careers, entrepreneurship, wellness, and personal growth.",
  "Having greater ability to make decisions, pursue goals, and shape your own future.",
];

const approach = [
  {
    title: "Person-Centered",
    text: "People have different experiences, goals, barriers, and definitions of success. Our work respects those differences rather than assuming one solution fits everyone.",
  },
  {
    title: "Access-Focused",
    text: "Potential should not depend entirely on financial circumstances, professional networks, or existing resources. We work to reduce barriers to education, mentorship, supportive services, professional development, and advancement.",
  },
  {
    title: "Collaborative",
    text: "Meaningful impact is strengthened through partnership. We work with community organizations, professionals, educators, businesses, volunteers, and institutions that bring different forms of expertise, resources, and perspective.",
  },
  {
    title: "Accountable",
    text: "We believe strong programs should be responsive, measurable, transparent, and responsibly managed. We listen to participants and communities, evaluate outcomes, and grow in ways that reflect demonstrated need, available capacity, and the ability to deliver quality programs.",
  },
];

const whoWeServe = [
  {
    title: "Women & Girls",
    text: "Women and girls seeking greater pathways to education, mentorship, leadership development, professional advancement, and economic opportunity.",
  },
  {
    title: "Individuals Navigating Illness or Life Transition",
    text: "People experiencing illness, appearance-related changes, major life transitions, or circumstances that may affect confidence, identity, and well-being.",
  },
  {
    title: "Individuals & Communities Facing Opportunity Barriers",
    text: "People whose financial circumstances, limited networks, or lack of resources may restrict access to education, training, professional development, supportive services, or pathways toward greater independence.",
  },
];

function AboutPage() {
  const founder = leaders[0]!;
  return (
    <>
      <PageHeader num="01" section="About Us" title="Rooted in Confidence. Built for Possibility.">
        <p>
          Embrowerment® Foundation is an IRS-recognized 501(c)(3) public charity created around a
          simple belief: people are better positioned to shape their futures when they have
          confidence, knowledge, meaningful relationships, and opportunity.
        </p>
        <p>
          Our work brings together humanitarian values, education, mentorship, wellness,
          entrepreneurship, and community engagement to support individuals facing barriers to
          personal and professional advancement.
        </p>
        <p>
          We are grounded in dignity, practical support, and the belief that meaningful change
          begins by recognizing the individual not simply the circumstances they are facing.
        </p>
      </PageHeader>

      {/* Mission & Vision */}
      <section className="section container mv-grid">
        <div>
          <Eyebrow num="I">Our Mission</Eyebrow>
          <p className="lede lede--lg">
            Our mission is to help individuals strengthen confidence, expand pathways to education
            and mentorship, and connect with the resources and opportunities that support greater
            independence and well-being.
          </p>
        </div>
        <div>
          <Eyebrow num="II">Our Vision</Eyebrow>
          <p className="lede lede--lg">
            We envision a future where financial circumstances, hardship, illness, or limited
            resources do not determine how far someone's potential can go.
          </p>
          <Statement>
            A future where more people have the confidence, knowledge, relationships, and
            opportunities to pursue their own path forward.
          </Statement>
        </div>
      </section>

      {/* Story */}
      <section className="section section--tint">
        <div className="container story">
          <Figure
            src={founder.image}
            alt={`${founder.name}, ${founder.role}`}
            ratio="tall"
            caption={
              <>
                <span>{founder.name}</span> {founder.role}
              </>
            }
          />
          <div className="prose">
            <Eyebrow num="III">Our Story</Eyebrow>
            <h2 className="h2">From Service to Embrowerment</h2>
            <p className="body">
              Embrowerment Foundation grew from years of humanitarian involvement, educational
              advocacy, entrepreneurship, and direct work with people navigating confidence,
              identity, and personal change.
            </p>
            <p className="body">
              Founder and President Umbreen Sheikh began supporting humanitarian causes in the early
              2000s through involvement with Layton Rahmatulla Benevolent Trust (LRBT), which
              provides free eye care and blindness-prevention services to underserved communities
              across Pakistan.
            </p>
            <p className="body">
              She later spent more than a decade involved with Developments in Literacy (DIL),
              supporting efforts to expand educational opportunities for underserved children in
              Pakistan, particularly girls.
            </p>
            <p className="body">
              Umbreen has also served as an advisor to The Asia Foundation's Lotus Circle, which
              advances opportunities and well-being for women and communities across Asia. Alongside
              this work, Umbreen built a career as an entrepreneur and founded Wink Brow Bar,
              combining science, artistry, education, beauty, and personal care.
            </p>
            <p className="body">
              Working directly with clients revealed that confidence can be deeply affected by
              illness, appearance-related changes, hardship, and major life transitions and that
              rebuilding confidence often requires more than personal care alone. People may also
              need knowledge, guidance, skills, relationships, resources, and meaningful
              opportunities to move forward.
            </p>
            <p className="body">
              These experiences helped shape the broader Embrowerment® philosophy—an approach
              centered not simply on appearance, but on the relationship between confidence,
              education, human connection, opportunity, and greater personal choice, independence,
              and economic opportunity.
            </p>
            <p className="body">
              Embrowerment Foundation was created to bring that philosophy into charitable work.
            </p>
            <Signature name={founder.name} role={founder.role} />
          </div>
        </div>
      </section>

      {/* Meaning */}
      <section className="section container">
        <SectionHead
          num="IV"
          label="What Embrowerment Means"
          title={<ProgressionLine />}
          intro={
            <p className="body">
              To us, Embrowerment is more than a name. It represents a progression.
            </p>
          }
        />
        <ProgressionTable heading="What It Means" rows={meaningRows} />
        <p className="lede closing-lede">
          Confidence can help someone take the first step. Knowledge can help clarify the path.
          Relationships can help them navigate it. Opportunity creates the space to move forward.
        </p>
      </section>

      {/* Approach */}
      <section className="section section--tint">
        <div className="container">
          <SectionHead num="V" label="Our Approach" title="How We Work" />
          <Pillars items={approach} cols={4} />
          <Statement className="statement--center">
            Our goal is not simply to become larger. It is to become more effective.
          </Statement>
        </div>
      </section>

      {/* Who we serve */}
      <section className="section container">
        <SectionHead
          num="VI"
          label="Who We Serve"
          title="Who We Serve"
          intro={
            <p className="body">
              Embrowerment Foundation supports individuals and communities facing barriers to
              confidence, education, professional advancement, wellness resources, or meaningful
              opportunity.
            </p>
          }
        />
        <Pillars items={whoWeServe} cols={3} />
        <p className="lede closing-lede">
          Across all of our work, we aim to meet people with respect, preserve their agency, and
          expand the choices available to them.
        </p>
      </section>

      <Callout
        title="Potential Is Not Always Matched by Access."
        links={[{ label: "Explore Our Programs", to: "/programs" }]}
      >
        <p>
          Embrowerment Foundation exists to help close that gap by connecting people with
          confidence, knowledge, relationships, resources, and opportunities that can help them move
          forward.
        </p>
      </Callout>
    </>
  );
}
