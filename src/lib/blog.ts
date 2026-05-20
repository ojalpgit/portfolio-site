export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  images?: string[];
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "wecode-2025",
    title: "Finding My Why at WECode 2025",
    date: "February 2025",
    excerpt:
      "I walked into WECode not really knowing what to expect. I walked out with something I hadn't anticipated: clarity.",
    coverImage: "/images/wecode.jpg",
    tags: ["Conference", "Community", "Reflection"],
    content: `I walked into WECode not really knowing what to expect. I walked out with something I hadn't anticipated: clarity.

WECode — the Women Engineers Code conference — was my first real tech conference as a college student. I'd heard about it from people in WACM, signed up on something like a whim, and suddenly I was in Boston surrounded by hundreds of women in tech who were doing things that felt, honestly, a little intimidating.

But here's the thing about being in a room full of people who look like you and are navigating the same spaces you are — it's disarming in the best way. The conversations weren't performative. People talked about imposter syndrome the way you'd talk about a shared commute: yes, we all deal with it, here's how I handle mine.

The talks were genuinely good. Not the usual "diversity in tech is important" speeches that feel more like boxes being checked — but actual engineers sharing real problems they'd solved, real mistakes they'd made, and real advice about building a career in CS when you sometimes feel like you're swimming upstream.

What hit me most was a panel where someone said something along the lines of: the goal isn't to fit into tech — it's to reshape what tech looks like. That's been sitting with me ever since.

I think I went to WECode looking for validation. What I found instead was perspective. I came back to Madison knowing that the work I'm doing — in research, in community building, in just showing up — actually matters. Not because someone told me it did. Because I saw the version of me that's five years ahead, and she's doing okay.

Coming back and immediately jumping into WACM planning felt different after that. More intentional. Like I knew, concretely, why I was doing it.`,
  },
  {
    slug: "laser-research",
    title: "What LASER Taught Me About Research and Belonging",
    date: "May 2025",
    excerpt:
      "Research is a lot of sitting with uncertainty. LASER was where I got comfortable with that.",
    coverImage: "/images/laser-poster.jpg",
    tags: ["Research", "AI/ML", "UW-Madison"],
    content: `Research is a lot of sitting with uncertainty. LASER was where I got comfortable with that.

LASER — the Learning About Science and Engineering Research program at UW-Madison — was my first real research experience. I joined as part of my internship with the Department of Statistics, working under Prof. Yiqiao Zhong on questions around generative AI and reinforcement learning. The work itself was about understanding how intelligent agents reason through formal logic — which sounds clean and defined when I write it like that, but in practice meant a lot of staring at code that wasn't working, papers that were dense, and results that didn't make sense at first.

The poster session was one of those moments I'll remember for a while. You spend weeks building something, and then you have to stand next to a poster and explain it to strangers in two minutes or less. It's a particular kind of pressure. But it's also clarifying — because if you can't explain what you're doing simply, you probably don't understand it as well as you think.

What I appreciated most about LASER wasn't just the research itself. It was being part of a cohort. Everyone around me was navigating similar things — trying to contribute meaningfully to a field where they were still learning the basics. There's a humility that comes with that, and also a solidarity.

I went in thinking research was about having answers. I came out understanding it's mostly about asking better questions. The uncertainty isn't a bug. It's the actual work.

I'm still in the middle of this research — still building, still analyzing, still figuring out what the results mean. But LASER gave me the foundation to keep going even when the path isn't clear. That felt like the most important thing I could have learned.`,
  },
  {
    slug: "wacm-google-lunch",
    title: "I Organized a Lunch with 5 Googlers. Here's What I Took Away.",
    date: "October 2025",
    excerpt:
      "Five women engineers from Google came to Madison for lunch. I got to sit at the table.",
    coverImage: "/images/wacm-google.jpg",
    tags: ["WACM", "Community", "Networking"],
    content: `Five women engineers from Google came to Madison for lunch. I got to sit at the table.

As an officer at WACM — Women in ACM at UW-Madison — one of my roles is organizing our biweekly networking lunches. Most of the time that means coordinating schedules, booking space, sending reminders. Standard logistics. But when the opportunity came up to host a lunch with women engineers from Google, the planning felt different.

I wanted it to actually be good. Not just good — useful. The kind of conversation that doesn't end when people finish eating.

We had five Googlers join us: all women, different teams, different tenure, different paths into tech. I'd put together some loose conversation prompts but honestly, the discussion found its own shape. People asked real things. About navigating large company culture, about what they wished they'd known as students, about what it actually felt like to be a woman on certain kinds of teams.

One thing that stuck with me: someone said they spent their first year at Google convinced they were the least qualified person in every room. She wasn't. She's now leading a team. That gap between perception and reality is something a lot of us carry around, and hearing that from someone who's further along in her career than I am made it feel less like a personal flaw and more like a known variable.

After the lunch, a few of the students who came said it was one of the most useful WACM events they'd been to. That meant a lot. Not because I need the validation, but because it confirmed what I believe about community: it works when it creates space for honest conversation, not just networking for networking's sake.

I'm going to keep running these lunches. The guest lists will change, but the goal stays the same — build the kind of room I wish existed when I was even earlier in this.`,
  },
  {
    slug: "cursor-uw-madison",
    title: "Building Cursor at UW-Madison from Scratch",
    date: "November 2025",
    excerpt:
      "I founded a club. I had no idea how much I didn't know about what that meant.",
    coverImage: "/images/cursor-banner.jpg",
    images: [
      "/images/cursor-workshop-1.jpg",
      "/images/cursor-workshop-2.jpg",
      "/images/cursor-workshop-3.jpg",
      "/images/cursor-hackathon.jpg",
    ],
    tags: ["Cursor", "Community", "Founding", "Hackathon"],
    content: `I founded a club. I had no idea how much I didn't know about what that meant.

Cursor at UW-Madison started because I kept seeing people around me — smart people, people studying CS — feel intimidated by tools that were supposed to make them faster. Cursor, the AI-powered code editor, was one of those tools. It seemed obvious that people should know how to use it well. It seemed less obvious that anyone was going to teach them.

So I decided to.

Starting from nothing is a specific kind of experience. There's no template. No list of past events to reference. No officers who know how things have worked before. You're making decisions about things you've never thought about — what's the right frequency for meetings, how do you recruit people who aren't already your friends, what does a meaningful event actually look like versus one that fills a room but doesn't do anything.

We ran portfolio workshops. The idea was simple: a lot of CS students have done real things and don't know how to talk about them. We built a workshop structure that walks people through translating their experience into something clear and compelling. The feedback was good — people left having actually changed something concrete about how they presented themselves.

Then we ran a hackathon. That was a bigger lift. Coordinating logistics, getting people to show up, making sure the day itself had energy. It went well. Not perfectly — something always goes differently than you planned — but well. Watching people build things and actually finish them in a single day reminded me why I started the club in the first place.

I'm proud of what Cursor at UW-Madison has become. But more than the events, I'm proud of the team. The officers I brought on are genuinely great. They care about what we're building. That's the thing I couldn't have manufactured — it either develops or it doesn't, and it did.

Building something from scratch is mostly just deciding, repeatedly, to keep going. I'm still deciding.`,
  },
  {
    slug: "cs577-algorithms",
    title: "My First B — and Why CS 577 Was Worth Every Bit of It",
    date: "May 2026",
    excerpt:
      "I genuinely loved studying for this class. The exams, though? That's a different story.",
    coverImage: "/images/cs577.jpg",
    tags: ["Academics", "Algorithms", "Reflection"],
    content: `I genuinely loved studying for this class. The exams, though? That's a different story.

COMP SCI 577 — Introduction to Algorithms — is one of those courses that has a reputation before you even walk in. People warn you about it. You hear it mentioned in the same breath as "brutal" and "the one that humbles you." I went in knowing it would be hard. I didn't go in knowing how much I'd actually enjoy it.

The material is genuinely fascinating. Graph algorithms, dynamic programming, greedy approaches, reductions, NP-completeness — there's a logical elegance to all of it that I found myself getting absorbed in. Studying for 577 didn't feel like grinding. It felt like puzzle-solving. I'd sit with a problem, think through it, try an approach, realize it was wrong, start over, and eventually — sometimes — get it. That cycle, frustrating as it is, was satisfying in a way I didn't expect.

The thing about algorithms is that understanding them at a surface level isn't enough. You have to be able to reproduce the logic under pressure, derive from first principles, prove things. And that's where the exams got me. I'd understand a concept during practice, work through problems at my own pace, feel solid — and then something about the test-taking environment, the time pressure, the phrasing of questions, would knock me off balance. I'd second-guess approaches I actually knew. I'd overcomplicate things that were simple. It's a particular kind of frustrating when you know you understand the material and can't show it on paper.

The result: my first B in college.

I've thought about how I feel about that, and honestly — I'm okay with it. Not in a "pretending to be okay" way. Genuinely okay. Because the B isn't the thing I'm taking away from this class. What I'm taking away is a real understanding of computational complexity, an appreciation for how hard certain problems actually are, and something that genuinely blew my mind: some of the most famous unsolved problems in math and computer science — the NP-hard problems — carry a $1,000,000 prize for whoever can solve them. The Clay Millennium Problems. P vs. NP. Sitting in lecture learning about problems that humanity hasn't cracked, that some of the smartest people alive haven't cracked, and that we're studying the structure of — that felt significant.

577 was the hardest class I've taken. It was also one of the ones I'll remember most. The B on my transcript means less to me than the fact that I sat with hard problems, tried to understand them deeply, and came out the other side actually knowing things. That's what the class was for.`,
  },
  {
    slug: "doit-helpdesk",
    title: "What Working at the DoIT Helpdesk Taught Me About Tech at Scale",
    date: "April 2026",
    coverImage: "/images/doit-helpdesk.jpg",
    excerpt:
      "Every level up at DoIT means harder problems. I wouldn't have it any other way.",
    tags: ["Work", "DoIT", "Reflection"],
    content: `Every level up at DoIT means harder problems. I wouldn't have it any other way.

I started at UW-Madison's Division of Information Technology answering phones. Straightforward enough — students locked out of accounts, Wi-Fi not connecting, NetID issues, the full range of things that come up when you give tens of thousands of people access to a complex university tech infrastructure. I learned the systems, got faster at diagnosing problems, and gradually moved up to chat and email support, and then to onsite specialist work.

Each transition meant a new layer of complexity. The cases that get escalated to onsite aren't the ones with clean solutions. They're the ones that require actually being in front of the machine, trying things, collaborating with other DoIT teams, digging into configurations that phone support doesn't touch. The problems are messier. The solutions take longer. And when something works — when you figure out what was wrong and resolve it — the satisfaction is proportionally bigger.

That satisfaction is real. There's something specific about solving someone's tech problem that I find genuinely rewarding. It's not abstract. You're helping a real person — a faculty member trying to give a lecture, a grad student trying to submit something before a deadline, staff trying to do their job — and when the issue is fixed, it's immediately visible. They can do the thing. That feedback loop is fast and clear in a way that a lot of work isn't.

But the bigger thing working at DoIT has given me is perspective on what it actually takes to run technology at a place like UW-Madison. This is not a small operation. Thousands of students, faculty, and staff. Dozens of systems. Software, hardware, networking, identity management, classroom tech, security — and behind all of it, teams of people who keep it working. What looks invisible when it's functioning only becomes visible when something breaks.

What I've come to appreciate most is how much of this depends on attention to detail. The difference between a problem that gets resolved in five minutes and one that takes an hour is often something small — a setting that's slightly off, a permission that wasn't granted correctly, a version mismatch nobody noticed. You learn to slow down before assuming. You learn to check the thing that seems too obvious to check. And you start to understand why experienced IT people always say "have you tried turning it off and on again" — not because they're being dismissive, but because the most common explanations are usually right.

I came into this job thinking it was a way to earn money while in school. It became something more than that. The complexity of what DoIT actually does, the scope of what gets supported, the number of different technologies in play — it's made me appreciate the division in a way I couldn't have from the outside. And it's made me think differently about what it means to build systems that real people have to rely on.

The details matter. They always matter.`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
