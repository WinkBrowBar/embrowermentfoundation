import { createFileRoute } from "@tanstack/react-router";
import { impactProgress } from "@/data/site";
import {
  BulletList,
  Callout,
  Eyebrow,
  LinkRow,
  PageHeader,
  Pillars,
  ProgressGoal,
  Quote,
  SectionHead,
  Statement,
} from "@/components/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/impact")({
  head: () =>
    pageMeta(
      "Impact",
      "Measuring progress that matters: 2026 goals, early impact of The First 20, and how Embrowerment® Foundation measures success.",
    ),
  component: ImpactPage,
});

const progressAreas = [
  { title: "Confidence", text: "Greater self-belief, dignity, and readiness to move forward." },
  {
    title: "Knowledge",
    text: "New information, education, and practical skills that support informed choices.",
  },
  {
    title: "Connection",
    text: "Stronger relationships with mentors, professionals, organizations, and supportive networks.",
  },
  {
    title: "Opportunity",
    text: "Greater access to education, professional development, careers, entrepreneurship, and useful resources.",
  },
  {
    title: "Empowerment",
    text: "Greater ability to make decisions, pursue goals, and shape one's own future.",
  },
];

const measures = [
  {
    title: "Reach",
    kicker: "Who did we reach?",
    text: "We track participation, engagement, referrals, partnerships, and other measures that help us understand the scale of our work.",
  },
  {
    title: "Experience",
    kicker: "Was the experience useful, accessible, and respectful?",
    text: "Participant feedback helps us understand satisfaction, relevance, accessibility, and overall program experience.",
  },
  {
    title: "Learning & Growth",
    kicker: "What changed in knowledge, skills, confidence, or capability?",
    text: "We look at learning, training progress, skills gained, confidence, leadership development, and preparedness.",
  },
  {
    title: "Connection & Access",
    kicker: "What relationships, resources, or opportunities became more accessible?",
    text: "We consider mentorship, professional relationships, supportive networks, referrals, and access to education, resources, and other opportunities.",
  },
  {
    title: "Progress",
    kicker: "What was the participant able to do next?",
    text: "Where appropriate, we look at movement toward educational, professional, entrepreneurship, financial, wellness, or personal goals.",
  },
];

const accountability = [
  {
    title: "Measure Honestly",
    text: "We clearly distinguish between goals and verified results.",
  },
  {
    title: "Protect Privacy",
    text: "Participant information and personal stories are handled with care, consent, and respect.",
  },
  {
    title: "Learn Continuously",
    text: "We use program data, participant feedback, and partner insight to understand what is working and where improvement is needed.",
  },
  {
    title: "Report Transparently",
    text: "As verified results become available, our public impact reporting will be updated to reflect progress accurately.",
  },
  {
    title: "Grow Responsibly",
    text: "We pursue growth that reflects demonstrated need, available resources, strong partnerships, and the capacity to maintain program quality.",
  },
];

function ImpactPage() {
  return (
    <>
      <PageHeader num="03" section="Our Impact" title="Measuring Progress That Matters.">
        <p>
          At Embrowerment® Foundation, impact is about more than activity. We want to understand
          whether our work is helping people build confidence, gain knowledge, strengthen
          relationships, access opportunity, and move forward with greater choice and independence.
        </p>
        <p>
          Throughout 2026, we are measuring both the reach of our work and the meaningful progress
          participants experience along the way.
        </p>
      </PageHeader>

      <section className="section container">
        <SectionHead num="I" label="2026 Impact at a Glance" title="Progress Toward Our Goals" />
        <div className="progress-list">
          {impactProgress.map((g) => (
            <ProgressGoal key={g.label} {...g} />
          ))}
        </div>
      </section>

      <section className="section section--tint">
        <div className="container split">
          <Eyebrow num="II">The First 20: Early Impact</Eyebrow>
          <div className="prose">
            <h2 className="h2">Restoring Confidence One Person at a Time.</h2>
            <p className="body">
              The First 20 gives us an opportunity to measure something deeply personal alongside
              direct service delivery: how participants feel about themselves after receiving
              support.
            </p>
            <p className="body">
              We look beyond completion to understand participant satisfaction, confidence, dignity,
              self-esteem, and overall experience.
            </p>
            <p className="body">
              For some, the most meaningful outcome may be captured in a simple moment of
              recognition:
            </p>
            <Quote>“There I am.”</Quote>
            <p className="body">
              As participant experiences are documented, verified outcomes and stories will help
              show what this impact means beyond the numbers.
            </p>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHead
          num="III"
          label="What Progress Looks Like"
          title="Meaningful change does not look the same for everyone."
          intro={
            <>
              <p className="body">
                For one person, progress may mean gaining a new skill. For another, it may mean
                developing a professional relationship, accessing an opportunity, or feeling more
                prepared to take a next step.
              </p>
              <p className="body">Across our work, we look for progress in five connected areas:</p>
            </>
          }
        />
        <Pillars items={progressAreas} cols={5} />
      </section>

      <section id="stories" className="section section--tint">
        <div className="container split">
          <Eyebrow num="IV">Stories of Empowerment</Eyebrow>
          <div className="prose">
            <h2 className="h2">The People Behind the Numbers.</h2>
            <Statement>
              Data helps us understand scale. Stories help us understand meaning.
            </Statement>
            <p className="body">
              As participants choose to share their experiences, we will highlight stories that show
              what progress looks like beyond the numbers—what challenge someone faced, what
              changed, what opportunity became available, and what came next.
            </p>
            <p className="small-print">
              Participant stories will only be shared with appropriate consent and respect for
              privacy.
            </p>
            <LinkRow
              links={[{ label: "Read Stories of Empowerment", to: "/impact", hash: "stories" }]}
            />
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHead
          num="V"
          label="How We Measure Success"
          title="Our measurement approach looks beyond participation alone."
        />
        <Pillars items={measures} cols={5} />
      </section>

      <section className="section section--tint">
        <div className="container split">
          <Eyebrow num="VI">Listening Is Part of Impact</Eyebrow>
          <div className="prose">
            <h2 className="h2">Numbers cannot explain every experience.</h2>
            <p className="body">
              Participant and partner feedback helps us understand where our work is useful, where
              barriers remain, and where improvement is needed.
            </p>
            <BulletList
              className="bullets--2"
              items={[
                "What changed for the participant?",
                "What was most useful?",
                "What barriers remained?",
                "What support could help with the next step?",
              ]}
            />
            <p className="body">
              What we learn informs future program decisions and helps us improve the quality of our
              work.
            </p>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHead num="VII" label="Our Commitment to Accountability" title="Accountability" />
        <Pillars items={accountability} cols={5} />
      </section>

      <Callout
        title="Behind Every Number Is a Person."
        links={[
          { label: "See Our Stories", to: "/impact", hash: "stories" },
          { label: "Explore Our Programs", to: "/programs" },
          { label: "Support Our Mission", to: "/donate" },
        ]}
      >
        <p>
          Impact is not simply about how far the work reaches. It is about whether that work creates
          something meaningful—greater confidence, useful knowledge, stronger relationships, access
          to opportunity, or greater ability to move forward.
        </p>
        <p>
          <strong>
            The numbers tell us how far the work reaches. The outcomes tell us whether it matters.
          </strong>
        </p>
      </Callout>
    </>
  );
}
