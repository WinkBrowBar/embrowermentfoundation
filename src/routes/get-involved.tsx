import { createFileRoute } from "@tanstack/react-router";
import {
  BulletList,
  Callout,
  Eyebrow,
  LinkRow,
  PageHeader,
  type LinkSpec,
} from "@/components/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/get-involved")({
  head: () =>
    pageMeta(
      "Get Involved",
      "Your Time, Experience, and Support Can Create Opportunity. Volunteer, mentor, give, fundraise, or stay connected.",
    ),
  component: GetInvolvedPage,
});

type Way = {
  id: string;
  label: string;
  title: string;
  intro: string[];
  listIntro?: string;
  list?: string[];
  outro?: string;
  link: LinkSpec;
};

const ways: Way[] = [
  {
    id: "volunteer",
    label: "Volunteer",
    title: "Give Your Time.",
    intro: [],
    listIntro: "Volunteers can support:",
    list: [
      "Community and program activities",
      "Outreach and engagement",
      "Administrative support",
      "Fundraising efforts",
      "Resource preparation",
      "Special projects",
    ],
    outro:
      "Volunteer opportunities may vary based on current needs, location, availability, and experience.",
    link: {
      label: "Join the Volunteer Interest List",
      to: "/contact",
      search: { reason: "volunteer" },
    },
  },
  {
    id: "mentor",
    label: "Mentor & Share Your Expertise",
    title: "Put Your Experience to Work.",
    intro: [
      "Your knowledge and perspective may help someone better understand a path, build a skill, or prepare for a next step.",
    ],
    listIntro: "Individuals may contribute through:",
    list: [
      "Career and professional guidance",
      "Entrepreneurship mentoring",
      "Leadership support",
      "Education and skill-building",
      "Workshops and training",
      "Skills-based volunteering",
      "Subject-matter expertise",
    ],
    outro:
      "Mentoring and professional support are intended to provide guidance and perspective while respecting each participant's ability to make their own decisions.",
    link: { label: "Mentor & Share Expertise", to: "/contact", search: { reason: "volunteer" } },
  },
  {
    id: "give",
    label: "Give",
    title: "Support the Mission.",
    intro: [
      "Financial contributions help Embrowerment Foundation support participants, strengthen programs, and expand access to education, mentorship, restorative-confidence services, professional development, and community resources.",
      "Every gift helps create capacity for meaningful work.",
    ],
    link: { label: "Donate", to: "/donate" },
  },
  {
    id: "fundraise",
    label: "Fundraise",
    title: "Bring Others Into the Mission.",
    intro: [],
    listIntro: "Individuals can also help raise support and awareness through:",
    list: [
      "Birthday fundraisers",
      "Peer-to-peer campaigns",
      "Workplace fundraising",
      "Community fundraisers and events",
    ],
    outro:
      "Fundraising can help generate resources while introducing new people to the Foundation's mission.",
    link: { label: "Start a Fundraiser", to: "/contact", search: { reason: "giving" } },
  },
  {
    id: "stay-connected",
    label: "Stay Connected",
    title: "Be Part of the Community.",
    intro: [
      "Not every form of involvement begins with volunteering or giving.",
      "Stay connected to learn about programs, participant stories, volunteer opportunities, community activities, and new ways to contribute.",
      "You can also help by sharing Embrowerment's work with people in your own network.",
    ],
    link: { label: "Join Our Community", to: "/contact", search: { reason: "general" } },
  },
];

function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        num="06"
        section="Get Involved"
        title="Your Time, Experience, and Support Can Create Opportunity."
      >
        <p>There are many ways to be part of Embrowerment® Foundation.</p>
        <p>
          You can volunteer, mentor, share professional expertise, make a donation, organize a
          fundraiser, or stay connected with the work.
        </p>
        <p>
          Every contribution can help strengthen confidence, expand access, and create meaningful
          opportunities for others.
        </p>
      </PageHeader>

      <nav className="container program-index" aria-label="Ways to get involved">
        {ways.map((w, i) => (
          <a href={`#${w.id}`} key={w.id}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            {w.label}
          </a>
        ))}
      </nav>

      {ways.map((w, i) => (
        <section id={w.id} key={w.id} className={i % 2 ? "section section--tint" : "section"}>
          <div className="container way">
            <div className="way-head">
              <span className="initiative-num">{String(i + 1).padStart(2, "0")}</span>
              <Eyebrow>{w.label}</Eyebrow>
              <h2 className="h2">{w.title}</h2>
            </div>
            <div className="prose">
              {w.intro.map((p) => (
                <p className="body" key={p}>
                  {p}
                </p>
              ))}
              {w.listIntro && <p className="body">{w.listIntro}</p>}
              {w.list && <BulletList className="bullets--2" items={w.list} />}
              {w.outro && <p className="body">{w.outro}</p>}
              <LinkRow links={[w.link]} />
            </div>
          </div>
        </section>
      ))}

      <Callout
        title="There Is More Than One Way to Make a Difference."
        links={[
          { label: "Volunteer", to: "/contact", search: { reason: "volunteer" } },
          { label: "Mentor & Share Expertise", to: "/contact", search: { reason: "volunteer" } },
          { label: "Donate", to: "/donate" },
          { label: "Stay Connected", to: "/contact", search: { reason: "general" } },
        ]}
      >
        <p className="callout-lines">
          Give your time.
          <br />
          Share your experience.
          <br />
          Support the mission.
          <br />
          Invite others to participate.
        </p>
        <p>Or simply help someone else discover an opportunity they may not have known existed.</p>
        <p>
          <strong>Choose the way that feels most meaningful to you.</strong>
        </p>
      </Callout>
    </>
  );
}
