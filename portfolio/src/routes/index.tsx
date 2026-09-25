import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Gamepad2,
  Mail,
  MapPin,
  Linkedin,
  Music4,
  Stethoscope,
  Trophy,
  Bot,
  Palette,
  Cpu,
  GraduationCap,
  Bug,
  Code,
  Layers,
  Wrench,
  Sparkles,
  MonitorSmartphone,
} from "lucide-react";

import timeshipImg from "@/assets/project-timeship.jpg";
import pianoImg from "@/assets/project-piano.jpg";
import medicalImg from "@/assets/project-medical.jpg";
import profileAsset from "@/assets/noor-profile.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Noor Younes — Software Engineer & Multimedia Developer" },
      {
        name: "description",
        content:
          "Portfolio of Noor Younes, software engineering student from Alexandria, Egypt. Unity games, audio processing tools, web apps and QA testing — with live demos.",
      },
      { property: "og:title", content: "Noor Younes — Software Engineer & Multimedia Developer" },
      {
        property: "og:description",
        content:
          "Unity games, audio tools, web apps and QA testing by Noor Younes — explore the projects and try the live demos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- scroll reveal hook ---------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ---------- typewriter ---------- */
const ROLES = ["Game Developer", "Software Tester"];

function useTypewriter() {
  const [text, setText] = useState("");
  useEffect(() => {
    let role = 0;
    let char = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = ROLES[role] ?? "";
      char += deleting ? -1 : 1;
      setText(word.slice(0, char));
      let delay = deleting ? 40 : 80;
      if (!deleting && char === word.length) {
        delay = 1600;
        deleting = true;
      } else if (deleting && char === 0) {
        deleting = false;
        role = (role + 1) % ROLES.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, []);
  return text;
}

/* ---------- data ---------- */
const PROJECTS = [
  {
    title: "Time Ship Adventure",
    year: "2026",
    tag: "Unity · C#",
    icon: Gamepad2,
    image: timeshipImg,
    alt: "Pixel-art time-traveling ship entering a glowing wormhole — Time Ship Adventure game artwork",
    description:
      "A 3D time-travel adventure built in Unity. Pilot a ship across eras, dodge temporal anomalies and solve era-specific puzzles powered by a custom C# state system.",
  },
  {
    title: "MIDI Virtual Piano",
    year: "2026",
    tag: "Audio DSP · MIDI",
    icon: Music4,
    image: pianoImg,
    alt: "Virtual MIDI piano with glowing keys and an audio waveform — digital audio processing project",
    description:
      "A digital audio processing playground: a playable virtual piano with real-time waveform rendering, MIDI input mapping and custom signal effects.",
  },
  {
    title: "Medical Appointment System",
    year: "2025",
    tag: "Web App · Full Stack",
    icon: Stethoscope,
    image: medicalImg,
    alt: "Medical appointment booking dashboard shown on a laptop screen",
    description:
      "A complete booking platform for clinics — doctor discovery, calendar scheduling and appointment management wrapped in a clean, accessible UI.",
    demo: "https://nooryounes14.github.io/Medical_appointment_system_/",
  },
];

const EXPERIENCE = [
  {
    period: "2026 — Present",
    title: "Software Testing Trainee",
    org: "Digital Egyptian Pioneers Initiative (DEPI)",
  },
  { period: "2026", title: "AI & Machine Learning Intern", org: "Information Technology Institute (ITI)" },
  { period: "2026", title: "Generative AI Intern", org: "Commercial International Bank (CIB)" },
  { period: "2025", title: "UI/UX Design Intern", org: "Information Technology Institute (ITI)" },
  { period: "2025", title: "ECPC Contestant", org: "Egyptian Collegiate Programming Contest" },
  {
    period: "2025",
    title: "Vortex Academy Team Member",
    org: "Contributed to an underwater robot with Vortex Academy for the NURC and MATE ROV competitions.",
  },
];

const EDUCATION = [
  {
    period: "2024 — Expected 2028",
    degree: "B.Sc of Science -\nSoftware Industry & Multimedia",
    school: "Alexandria National University ",
    note: "Top 10 in my program",
  },
];

const SKILL_GROUPS = [
  { icon: Gamepad2, label: "Game Development", items: ["Unity", "C#", "Game Design"] },
  { icon: Bug, label: "Testing & QA", items: ["Manual Testing", "Automation Testing", "Bug Reporting"] },
  { icon: Cpu, label: "Programming & Data", items: ["Java", "Python", "MySQL", "Arduino"] },
  { icon: Bot, label: "AI & Design", items: ["Machine Learning", "Generative AI", "UI/UX Principles"] },
  { icon: Palette, label: "Multimedia", items: ["Blender", "Photoshop", "Premiere Pro", "Audition"] },
  { icon: Code, label: "Web & Tools", items: ["HTML/CSS/JS", "PHP", "Git", "Figma"] },
];

const SERVICES = [
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Build 2D/3D games in Unity with polished mechanics, levels and C# gameplay systems.",
  },
  {
    icon: Bug,
    title: "Software Testing",
    description: "Manual QA, test-case design and bug reporting to ship stable games and web apps.",
  },
  {
    icon: MonitorSmartphone,
    title: "UI/UX Design",
    description: "User-centered interfaces, wireframes and prototypes that balance aesthetics with usability.",
  },
  {
    icon: Music4,
    title: "Multimedia Production",
    description: "Audio DSP experiments, video editing and 3D assets for interactive media projects.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack web apps with clean frontends, databases and appointment or booking flows.",
  },
  {
    icon: Sparkles,
    title: "AI & Generative Solutions",
    description: "Prototype intelligent features and generative-AI workflows for products and campaigns.",
  },
];


/* ---------- page ---------- */
function Index() {
  const rootRef = useReveal<HTMLDivElement>();
  const typed = useTypewriter();

  return (
    <div ref={rootRef} className="relative min-h-screen bg-background text-foreground">
      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 grid-bg" aria-hidden />
      <div className="glow-orb animate-float-slow left-[-10%] top-[-10%] h-[480px] w-[480px] bg-primary/15" aria-hidden />
      <div
        className="glow-orb animate-float-slow bottom-[-15%] right-[-10%] h-[520px] w-[520px] bg-accent/10"
        style={{ animationDelay: "-6s" }}
        aria-hidden
      />

      {/* nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            noor<span className="text-primary">.</span>younes
          </a>
          <div className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
            <a href="#about" className="transition-colors hover:text-primary">About</a>
            <a href="#education" className="transition-colors hover:text-primary">Education</a>
            <a href="#skills" className="transition-colors hover:text-primary">Skills</a>
            <a href="#experience" className="transition-colors hover:text-primary">Experience</a>
            <a href="#projects" className="transition-colors hover:text-primary">Projects</a>
            <a href="#services" className="transition-colors hover:text-primary">Services</a>
            <a
              href="#contact"
              className="rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* cover / hero */}
      <section id="top" className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="reveal mb-4 flex items-center gap-2 text-sm tracking-widest text-primary uppercase">
              <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse-ring" />
              Available for freelance
            </p>
            <h1 className="reveal font-display text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-7xl lg:text-8xl" style={{ transitionDelay: "100ms" }}>
              Noor
              <br />
              <span className="text-primary">Younes</span>
            </h1>
            <p className="reveal mt-6 max-w-xl text-lg font-medium text-foreground sm:text-xl" style={{ transitionDelay: "200ms" }}>
              {typed}
              <span className="animate-caret text-primary">▍</span>
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-4" style={{ transitionDelay: "300ms" }}>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                View my work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://linkedin.com/in/nooryounes14"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-medium transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>

            <div className="reveal mt-12 grid max-w-lg grid-cols-3 gap-6" style={{ transitionDelay: "400ms" }}>
              {[
                ["Software", "Engineer"],
              ].map(([big, small], i) => (
                <div key={i}>
                  <p className="font-display text-3xl font-bold text-primary">{big}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{small}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto" style={{ transitionDelay: "200ms" }}>
            <div className="profile-ring aspect-[3/4] overflow-hidden rounded-3xl">
              <img
                src={profileAsset.url}
                alt="Noor Younes in formal attire standing in front of an ornate wooden door"
                className="h-full w-full object-cover"
                width={768}
                height={1024}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border/60 bg-card/80 p-4 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Bug className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Software Tester</p>
                  <p className="text-xs text-muted-foreground">with game dev experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* about */}
      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
        <div className="max-w-3xl">
          <p className="reveal text-sm tracking-widest text-primary uppercase">About me</p>
          <h2 className="reveal mt-3 font-display text-4xl font-bold sm:text-5xl" style={{ transitionDelay: "80ms" }}>
            Tester mindset, <span className="text-primary">builder spirit</span>
          </h2>
          <p className="reveal mt-6 text-lg leading-relaxed text-muted-foreground" style={{ transitionDelay: "160ms" }}>
            Software engineering student crafting games, software testing and web experiences.
            My edge is the mix of building in Unity and testing like a player — catching bugs before they reach users.
          </p>
        </div>
      </section>

      {/* education */}
      <section id="education" className="border-t border-border/60 bg-card/30 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="reveal text-sm tracking-widest text-primary uppercase">Education</p>
          <h2 className="reveal mt-3 font-display text-4xl font-bold sm:text-5xl" style={{ transitionDelay: "80ms" }}>
            Learning by <span className="text-primary">building</span>
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {EDUCATION.map((e, i) => (
              <div
                key={e.degree}
                className="reveal card-tilt rounded-2xl border border-border bg-card p-8"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{e.period}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{e.degree}</h3>
                <p className="mt-1 text-muted-foreground">{e.school}</p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                  <Sparkles className="h-3 w-3" /> {e.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* skills */}
      <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
        <p className="reveal text-sm tracking-widest text-primary uppercase">Toolbox</p>
        <h2 className="reveal mt-3 font-display text-4xl font-bold sm:text-5xl" style={{ transitionDelay: "80ms" }}>
          Skills & <span className="text-primary">technologies</span>
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g, i) => (
            <div
              key={g.label}
              className="reveal card-tilt rounded-2xl border border-border bg-card p-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <g.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display font-semibold">{g.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* experience */}
      <section id="experience" className="border-t border-border/60 bg-card/30 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="reveal text-sm tracking-widest text-primary uppercase">Journey</p>
          <h2 className="reveal mt-3 font-display text-4xl font-bold sm:text-5xl" style={{ transitionDelay: "80ms" }}>
            Experience & <span className="text-primary">achievements</span>
          </h2>

          <div className="mt-14 space-y-0">
            {EXPERIENCE.map((e, i) => (
              <div
                key={e.title}
                className="reveal group relative grid gap-2 border-l border-border py-6 pl-8 transition-colors hover:border-primary sm:grid-cols-[180px_1fr] sm:gap-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="absolute top-8 -left-[5px] h-2.5 w-2.5 rounded-full bg-primary transition-transform group-hover:scale-150" />
                <p className="text-sm text-muted-foreground">{e.period}</p>
                <div>
                  <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-primary">
                    {e.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-10 flex items-center gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <Trophy className="h-8 w-8 shrink-0 text-primary" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">1st place — MATE ROV Competition.</span>&nbsp;
            </p>
          </div>
        </div>
      </section>


      {/* offered services */}
      <section id="services" className="border-t border-border/60 bg-card/30 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="reveal text-sm tracking-widest text-primary uppercase">Offered services</p>
          <h2 className="reveal mt-3 font-display text-4xl font-bold sm:text-5xl" style={{ transitionDelay: "80ms" }}>
            What I can <span className="text-primary">deliver</span>
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className="reveal card-tilt rounded-2xl border border-border bg-card p-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* projects */}
      <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
        <p className="reveal text-sm tracking-widest text-primary uppercase">Selected work</p>
        <h2 className="reveal mt-3 font-display text-4xl font-bold sm:text-5xl" style={{ transitionDelay: "80ms" }}>
          Projects with <span className="text-primary">live demos</span>
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="reveal card-tilt group flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="aspect-[8/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-background/70 px-3 py-1 text-xs font-medium backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <p.icon className="h-5 w-5 text-primary" />
                  <span className="text-xs text-muted-foreground">{p.year}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="group/demo mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                  >
                    Open live demo
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* contact */}
      <footer id="contact" className="border-t border-border/60 bg-card/30 py-24">
        <div className="reveal mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold sm:text-6xl">
            Let's build something <span className="text-primary">great</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Open to collaborations and building projects. Reach out — I reply fast.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:nooryounes14@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              <Mail className="h-4 w-4" /> nooryounes14@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/nooryounes14"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Alexandria, Egypt
            </span>
          </div>
          <p className="mt-12 text-xs text-muted-foreground">© 2026 Noor Younes. Designed & built with care.</p>
        </div>
      </footer>
    </div>
  );
}
