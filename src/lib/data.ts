// ─── PORTFOLIO DATA ───────────────────────────────────────────────────────────

export const personal = {
  name: "Ojal Prasad",
  tagline: "Learning. Building. Improving.",
  headline: "CS @ UW-Madison · AI/ML Researcher · Builder",
  bio: "I'm a sophomore studying Computer Science at UW-Madison, passionate about artificial intelligence, machine learning, and the people-side of technology. I build ML pipelines, research how intelligent agents reason, and lead communities that make CS more inclusive.",
  email: "ojalprasad@gmail.com",
  github: "https://github.com/ojalpgit",
  linkedin: "https://www.linkedin.com/in/ojal-prasad/",
  resumeUrl: "/resume.pdf",
  location: "Madison, WI",
  photo: "/images/profile.jpg",
};

export const education = [
  {
    school: "University of Wisconsin-Madison",
    degree: "Bachelor of Science — Computer Science · Minor in Data Science",
    dates: "September 2024 – May 2028",
    gpa: "3.97",
    highlights: [
      "Seeking Summer 2027 internship in AI/ML or Software Engineering",
      "Awards & Honors: Dean's List, LASER Rising Researcher Award",
      "Active in research through UW-Madison Department of Statistics and Algoverse",
      "Relevant Coursework: Data Structures & Algorithms, OOP I–III, Linear Algebra, Calculus I–II, Discrete Math, AI",
      "Founded and lead Cursor at UW-Madison; Officer at WACM",
    ],
    logo: "",
  },
];

export const experience = [
  {
    company: "UW-Madison Division of Information Technology (DoIT)",
    role: "IT Support Specialist → Onsite Support Specialist",
    dates: "Aug 2025 – Present",
    location: "Madison, WI",
    description: [
      "Resolved 30+ technical support cases weekly for UW-Madison's 61,000+ students, faculty, and staff.",
      "Leveraged tools including Cisco Finesse, Webex, and Bomgar to troubleshoot software, account, and connectivity issues efficiently.",
      "Streamlined IT resolution protocols by documenting complex technical interactions in Cherwell (ITSM tool), reducing average ticket resolution time through improved knowledge-base accuracy.",
    ],
    tech: ["IT Support", "Cisco Finesse", "Webex", "Bomgar", "Cherwell"],
    photo: "",
  },
  {
    company: "UW-Madison Department of Statistics",
    role: "Computational GenAI Research Intern",
    dates: "May 2025 – Jan 2026",
    location: "Madison, WI",
    description: [
      "Researched Generative AI and language models using Python, PyTorch, and NumPy under Prof. Yiqiao Zhong.",
      "Conducted experiments analyzing AI behavior in mathematical problem-solving tasks using Group Relative Policy Optimization (GRPO) within reinforcement learning frameworks.",
      "Built Python-based prototypes to observe and analyze intelligent agent reasoning across structured benchmarks.",
    ],
    tech: ["Python", "PyTorch", "TensorFlow", "Reinforcement Learning", "Formal Logic"],
    photo: "/images/laser-poster.jpg",
  },
  {
    company: "Algoverse",
    role: "Research Fellow",
    dates: "Jul 2025 – Present",
    location: "Remote",
    description: [
      "Developed a scalable ML training pipeline that integrated uncertainty quantification, improving model prediction accuracy by 3%.",
      "Engineered data processing workflows in Python to clean, merge, and augment multi-million record chemistry datasets (USPTO), enhancing model reliability for chemical reaction prediction.",
      "Collaborated with a cohort of fellows on reproducible experiments and research documentation.",
    ],
    tech: ["Python", "PyTorch", "RDKit", "Uncertainty Quantification", "ML Pipelines"],
    photo: "",
  },
  {
    company: "AmeriCorps",
    role: "Math Tutor",
    dates: "Feb 2025 – May 2025",
    location: "Madison, WI",
    description: [
      "Tutored high school students in Algebra and Geometry, translating abstract concepts into approachable lessons.",
      "Tracked student progress and adapted instructional strategies to meet individual learning needs.",
    ],
    tech: ["Teaching", "Mentorship", "Algebra", "Geometry"],
    photo: "",
  },
  {
    company: "Goodman Community Center",
    role: "START Literacy Tutor",
    dates: "Jan 2025 – May 2025",
    location: "Madison, WI",
    description: [
      "Guided elementary students (grades 1–5) in developing reading fluency and comprehension skills.",
      "Created engaging, age-appropriate learning activities to build confidence in early readers.",
    ],
    tech: ["Literacy Education", "Curriculum Design", "Early Childhood"],
    photo: "",
  },
];

export const projects = [
  {
    title: "RL Agent for Mathematical Reasoning",
    description:
      "Research prototype exploring how reinforcement learning agents navigate formal logic tasks and structured math problems, built during GenAI internship at UW-Madison.",
    tech: ["Python", "PyTorch", "TensorFlow", "Reinforcement Learning"],
    impact: "Analyzed agent behavior across 10+ logic benchmarks",
    github: "",
    demo: "",
    featured: true,
    photo: "/images/laser-poster.jpg",
  },
  {
    title: "ML Pipeline with Uncertainty Quantification",
    description:
      "End-to-end machine learning pipeline built at Algoverse, incorporating uncertainty quantification methods to produce more reliable probabilistic predictions.",
    tech: ["Python", "Scikit-learn", "NumPy", "Uncertainty Quantification"],
    impact: "Improved prediction confidence calibration on benchmark datasets",
    github: "",
    demo: "",
    featured: true,
    photo: "",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio — built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Fully responsive, dark themed.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    impact: "You're looking at it",
    github: "https://github.com/ojalprasad/portfolio",
    demo: "https://ojalprasad.vercel.app",
    featured: true,
    photo: "",
  },
];

export const research = [
  {
    title: "Generative AI & Reinforcement Learning in Formal Mathematical Reasoning",
    venue: "UW-Madison Department of Statistics — Prof. Yiqiao Zhong",
    date: "May 2025 – Jan 2026",
    description:
      "Investigated how generative AI and RL agents approach formal logic and structured mathematics. Built Python prototypes with PyTorch and TensorFlow to observe and analyze intelligent agent behavior across reasoning benchmarks.",
    tags: ["Reinforcement Learning", "Generative AI", "Formal Logic", "PyTorch", "TensorFlow"],
    link: "",
    photo: "/images/laser-poster.jpg",
  },
  {
    title: "Machine Learning Pipelines & Uncertainty Quantification",
    venue: "Algoverse Research Fellowship",
    date: "Jul 2025 – Present",
    description:
      "Ongoing research fellowship focused on building reproducible ML pipelines and applying uncertainty quantification to improve the reliability and calibration of model predictions.",
    tags: ["Machine Learning", "Uncertainty Quantification", "ML Pipelines", "Python"],
    link: "",
    photo: "",
  },
];

export const skills = {
  languages: ["Python", "Java", "R", "JavaScript", "TypeScript", "HTML", "CSS", "SQL", "Bash"],
  frameworks: ["PyTorch", "TensorFlow", "React.js", "Node.js", "Next.js", "Three.js", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
  aiMl: ["Machine Learning", "Reinforcement Learning", "Generative AI", "Uncertainty Quantification", "ML Pipelines", "LLMs"],
  cloud: ["AWS", "Vercel", "Git", "GitHub"],
  tools: ["VS Code", "Jupyter Notebook", "Linux", "Google Colab"],
};

export const leadership = [
  {
    org: "Cursor at UW-Madison",
    role: "Founder & Co-President",
    dates: "Aug 2025 – Present",
    description:
      "Founded Cursor at UW-Madison from the ground up. Oversee daily operations, coordinate a team of officers, and organize events including portfolio workshops and a campus hackathon.",
    photo: "/images/cursor-banner.jpg",
  },
  {
    org: "WACM — Women in ACM, UW-Madison",
    role: "Event Officer",
    dates: "Aug 2025 – Present",
    description:
      "Organizes biweekly networking lunches — including a session with 5 Google engineers — and coordinates outreach to promote mentorship and inclusion in computing. Supporting 200+ members.",
    photo: "/images/wacm-google.jpg",
  },
  {
    org: "Management Leadership for Tomorrow (MLT)",
    role: "Career Preparation Fellow",
    dates: "Nov 2025 – Present",
    description:
      "Accepted into a selective 18-month professional development program for high-achieving talent, focused on career readiness, leadership, and placement in top-tier roles.",
    photo: "/images/mlt.png",
  },
  {
    org: "Rewriting the Code",
    role: "Member",
    dates: "Aug 2025 – Present",
    description:
      "Member of a national community dedicated to empowering women in tech through networking, resources, and community-driven support.",
    photo: "/images/rtc.jpg",
  },
  {
    org: "Codepath",
    role: "Community Member & Student",
    dates: "Sep 2025 – Present",
    description:
      "Community member and student in Codepath's tech education programs, focused on building technical skills and connecting with a network of students and professionals in the industry.",
    photo: "/images/codepath.png",
  },
];
