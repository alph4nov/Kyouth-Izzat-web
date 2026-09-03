import { useState, useEffect, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface GalleryImage {
  src: string;
  thumb: string;
  alt: string;
}

interface Module {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  description: string;
  takeaways: string[];
  deepContent: string;
  tag: string;
  gallery: GalleryImage[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const modules: Module[] = [
  {
    id: 1,
    title: "Orientation",
    subtitle: "Cohort Kickoff",
    icon: "🧭",
    color: "from-[#05513D] to-[#05513D]",
    tag: "Week 1",
    description:
      "An introduction to the K-Youth Nurture programme, meeting fellow UiTM cohort members, and aligning on goals and expectations across the four-week journey.",
    takeaways: [
      "Understood programme structure and Khazanah's investment thesis",
      "Built rapport with peers across different faculties",
      "Set personal learning goals and accountability frameworks",
    ],
    deepContent:
      "The orientation session grounded us in Khazanah Nasional's mission as Malaysia's strategic investment arm and how the K-Youth Nurture programme serves as a talent pipeline for future leaders. Facilitated by Aisling, the session combined icebreakers, group discussions, and a deep-dive into what 'value creation' means at the institutional level. I left with a clearer sense of purpose — not just learning skills, but developing the mindset of someone who creates impact at scale.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&h=600&fit=crop&auto=format",
        thumb: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=280&h=180&fit=crop&auto=format",
        alt: "Cohort group icebreaker session",
      },
      {
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=600&fit=crop&auto=format",
        thumb: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=280&h=180&fit=crop&auto=format",
        alt: "Welcome presentation and programme overview",
      },
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop&auto=format",
        thumb: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=280&h=180&fit=crop&auto=format",
        alt: "Team collaboration activity",
      },
    ],
  },
  {
    id: 2,
    title: "Scenario 1",
    subtitle: "Executive Role",
    icon: "🎯",
    color: "from-[#05513D] to-[#037a5c]",
    tag: "Week 2",
    description:
      "Stepped into the shoes of a C-suite executive, navigating strategic decisions, stakeholder management, and boardroom-level communication under realistic business scenarios.",
    takeaways: [
      "Practised top-down strategic thinking and scenario planning",
      "Developed concise executive communication for diverse audiences",
      "Learned to balance short-term pressures with long-term value creation",
    ],
    deepContent:
      "In this scenario, I was tasked with steering a mid-cap portfolio company through a restructuring challenge. The exercise demanded I synthesise financial data, assess risk appetite, and present a coherent strategy to a simulated board. What stood out was how much ambiguity exists at the executive level — the 'right' answer is rarely obvious, and leadership is often about building confidence in a direction rather than finding certainty. I sharpened my ability to tell a story with numbers and communicate trade-offs without losing the room.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600&fit=crop&auto=format",
        thumb: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=280&h=180&fit=crop&auto=format",
        alt: "Boardroom simulation setup",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&auto=format",
        thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=280&h=180&fit=crop&auto=format",
        alt: "Strategic planning whiteboard session",
      },
      {
        src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&h=600&fit=crop&auto=format",
        thumb: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=280&h=180&fit=crop&auto=format",
        alt: "Executive presentation practice",
      },
    ],
  },
  {
    id: 3,
    title: "Scenario 2",
    subtitle: "Relationship Manager Role",
    icon: "🤝",
    color: "from-[#1A191B] to-[#3a3839]",
    tag: "Week 3",
    description:
      "Explored client-facing dynamics by managing complex stakeholder relationships, navigating expectations, and delivering value-driven solutions in a high-trust environment.",
    takeaways: [
      "Mastered active listening and needs-discovery techniques",
      "Learned to manage tension between client expectations and internal constraints",
      "Developed persuasion frameworks rooted in empathy, not pressure",
    ],
    deepContent:
      "This scenario placed me in a relationship management context, responsible for retaining a strategically important client whose expectations were misaligned with deliverables. The simulation required real-time negotiation, emotional intelligence, and the ability to reframe value propositions on the fly. I found this module the most personally challenging — it exposed gaps in my listening habits and pushed me to slow down, ask better questions, and lead with curiosity before solutions. These are skills I will carry directly into my career.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=600&fit=crop&auto=format",
        thumb: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=280&h=180&fit=crop&auto=format",
        alt: "Client meeting simulation",
      },
      {
        src: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=900&h=600&fit=crop&auto=format",
        thumb: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=280&h=180&fit=crop&auto=format",
        alt: "Stakeholder mapping exercise",
      },
      {
        src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&h=600&fit=crop&auto=format",
        thumb: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=280&h=180&fit=crop&auto=format",
        alt: "Negotiation role-play session",
      },
    ],
  },
  {
    id: 4,
    title: "Scenario 3",
    subtitle: "Data Analyst Role",
    icon: "📊",
    color: "from-[#8FFE09] to-[#6bcc00]",
    tag: "Week 4",
    description:
      "Applied structured analytical thinking to real-world datasets, translating raw information into actionable insights that drive investment and operational decisions.",
    takeaways: [
      "Built proficiency in structuring data narratives for non-technical audiences",
      "Applied frameworks for identifying signal vs. noise in complex datasets",
      "Practised translating analysis into investment-grade recommendations",
    ],
    deepContent:
      "In the data analyst scenario, I worked with a synthetic dataset representing a portfolio company's operational and financial metrics. The challenge was not the analysis itself — it was communication. A technically correct model means nothing if the audience cannot act on it. I worked on visualising insights cleanly, anticipating stakeholder questions, and structuring recommendations with clear assumptions and caveats. This module reinforced that data literacy is about judgement, not just computation.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&auto=format",
        thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=280&h=180&fit=crop&auto=format",
        alt: "Data dashboard and visualization example",
      },
      {
        src: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=900&h=600&fit=crop&auto=format",
        thumb: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=280&h=180&fit=crop&auto=format",
        alt: "Data analysis worksheet",
      },
      {
        src: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=900&h=600&fit=crop&auto=format",
        thumb: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=280&h=180&fit=crop&auto=format",
        alt: "Insight presentation slide",
      },
    ],
  },
  {
    id: 5,
    title: "Capstone",
    subtitle: "Case Study from FYP",
    icon: "🏆",
    color: "from-[#05513D] to-[#8FFE09]",
    tag: "Week 5",
    description:
      "Synthesised all programme learnings into a capstone case study drawn from my Final Year Project, presenting original research to a panel in a professional pitch format.",
    takeaways: [
      "Connected academic research to real-world industry applications",
      "Distilled complex findings into a compelling, board-ready narrative",
      "Received structured feedback from experienced industry practitioners",
    ],
    deepContent:
      "The capstone was the most meaningful moment of the programme. I adapted my Final Year Project — research I had invested months into — and reframed it as a business case for an investment audience. This required me to translate academic rigour into commercial relevance: what is the market opportunity, what risk does this address, and what return could it generate? Presenting to a panel that included Khazanah-aligned evaluators was both nerve-wracking and galvanising. The feedback was precise and actionable. I walked away understanding what it means to own a narrative, not just present data.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=600&fit=crop&auto=format",
        thumb: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=280&h=180&fit=crop&auto=format",
        alt: "FYP project interface screenshot",
      },
      {
        src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&h=600&fit=crop&auto=format",
        thumb: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=280&h=180&fit=crop&auto=format",
        alt: "Research methodology diagram",
      },
      {
        src: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=900&h=600&fit=crop&auto=format",
        thumb: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=280&h=180&fit=crop&auto=format",
        alt: "Results visualization",
      },
    ],
  },
];

const insights = [
  {
    icon: "💡",
    title: "Industry Readiness is Built, Not Assumed",
    body: "I entered K-Youth Nurture confident in my academic foundation. I left understanding that professional readiness is a separate muscle — one that requires deliberate practice, feedback loops, and a willingness to be uncomfortable.",
  },
  {
    icon: "🔄",
    title: "Perspective-Taking is a Superpower",
    body: "Cycling through executive, relationship manager, and analyst roles in rapid succession fundamentally changed how I read a room. Every stakeholder carries a different frame of reference, and the most effective communicators build bridges between them.",
  },
  {
    icon: "🌱",
    title: "Growth Lives in the Gaps",
    body: "The moments that stretched me most were the ones where I didn't have the 'right' answer. Learning to sit with ambiguity and still move forward decisively is a skill I hadn't fully developed before this programme.",
  },
  {
    icon: "🤝",
    title: "Community Accelerates Learning",
    body: "My cohort peers — all UiTM students from different faculties — became mirrors and sounding boards. Hearing how someone from an engineering background approached a business problem opened entirely new mental models for me.",
  },
  {
    icon: "🎯",
    title: "Clarity of Purpose Sharpens Everything",
    body: "Khazanah's mission of long-term national value creation gave every module a 'so what.' When you understand the stakes of the decisions you're practising, the quality of your thinking rises to meet them.",
  },
];

// ─── Subcomponents ────────────────────────────────────────────────────────────

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: GalleryImage[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: "rgba(10,14,23,0.92)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Close lightbox"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-4 md:left-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Main image */}
      <div
        className="mx-16 md:mx-28 max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          className="w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl"
          style={{ animation: "fadeUp 0.25s ease both" }}
        />
        <p className="text-center text-sm text-white/60 mt-3">{images[current].alt}</p>

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === current ? "bg-white w-5" : "bg-white/30"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-4 md:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          aria-label="Next image"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

// ─── Gallery Block (carousel + thumbnails + lightbox) ────────────────────────

function GalleryBlock({ images, color }: { images: GalleryImage[]; color: string }) {
  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prev = () => setActive((c) => (c - 1 + images.length) % images.length);
  const next = () => setActive((c) => (c + 1) % images.length);

  return (
    <>
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      {/* Main image */}
      <div
        className="relative rounded-xl overflow-hidden bg-slate-100 border border-[var(--border)]"
        style={{ aspectRatio: "16/9" }}
      >
        <button
          className="absolute inset-0 w-full h-full group cursor-zoom-in"
          onClick={() => setLightboxIndex(active)}
          aria-label={`View full size: ${images[active].alt}`}
        >
          <img
            key={active}
            src={images[active].src}
            alt={images[active].alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            style={{ animation: "fadeUp 0.3s ease both" }}
          />
          {/* Zoom badge */}
          <div className="absolute bottom-2.5 right-2.5 bg-black/50 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19A8 8 0 103 11a8 8 0 008 8z" />
            </svg>
            View full size
          </div>
        </button>

        {/* Caption gradient */}
        <div className="absolute bottom-0 left-0 right-0 px-3 pb-8 pt-6 bg-gradient-to-t from-black/55 to-transparent pointer-events-none">
          <p className="text-white text-xs font-medium leading-tight">{images[active].alt}</p>
        </div>

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 hover:bg-white shadow flex items-center justify-center text-slate-700 transition-all"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 hover:bg-white shadow flex items-center justify-center text-slate-700 transition-all"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Counter */}
        <div className="absolute top-2.5 right-2.5 bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full pointer-events-none">
          {active + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 mt-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative flex-1 rounded-lg overflow-hidden transition-all duration-200 ${
              i === active
                ? "ring-2 ring-offset-1 ring-[#05513D] opacity-100 scale-[1.02]"
                : "opacity-55 hover:opacity-85"
            }`}
            style={{ aspectRatio: "16/10" }}
            aria-label={img.alt}
          >
            <img src={img.thumb} alt={img.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </>
  );
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────

function ProgressBar() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setWidth(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      id="progress-bar"
      style={{ width: `${width}%` }}
      aria-hidden="true"
    />
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: "#overview", label: "Overview" },
    { href: "#journey", label: "Journey" },
    { href: "#insights", label: "Insights" },
    { href: "#connect", label: "Connect" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-3 inset-x-4 z-50 rounded-2xl transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border border-[var(--border)]"
          : "bg-white/60 backdrop-blur-md border border-white/40"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-lg bg-[#05513D] flex items-center justify-center text-[#8FFE09] text-xs font-bold">
            K
          </span>
          <span
            className="text-sm font-semibold text-[var(--foreground)]"
  
          >
            K-Youth Nurture
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] rounded-lg transition-all duration-150"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#connect"
            className="ml-2 px-4 py-1.5 text-sm font-semibold text-[#F1F1EE] bg-[#05513D] rounded-lg hover:bg-[#03402f] transition-colors"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-[var(--foreground)] rounded transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[var(--foreground)] rounded transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[var(--foreground)] rounded transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-4 flex flex-col gap-1 border-t border-[var(--border)] mt-1 pt-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] rounded-lg transition-all"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--background)]"
    >
      {/* Background orbs */}
      <div
        className="hero-orb w-[600px] h-[600px] bg-[#05513D]"
        style={{ top: "-10%", right: "-5%" }}
      />
      <div
        className="hero-orb w-[400px] h-[400px] bg-[#8FFE09]"
        style={{ bottom: "0%", left: "-8%" }}
      />
      <div
        className="hero-orb w-[300px] h-[300px] bg-[#05513D]"
        style={{ top: "30%", left: "30%" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <div className="fade-up fade-up-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e8ede9] border border-[#c5d4c8] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#8FFE09] animate-pulse" />
            <span className="text-xs font-semibold text-[#05513D] tracking-wide uppercase">
              K-Youth Nurture 2026 · Cohort 1
            </span>
          </div>

          <h1
            className="fade-up fade-up-2 text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[var(--foreground)] mb-6"
  
          >
            From Campus
            <br />
            to{" "}
            <span className="gradient-text">Corporate.</span>
          </h1>

          <p className="fade-up fade-up-3 text-lg text-[var(--muted-foreground)] leading-relaxed max-w-md mb-8">
            A four-week intensive journey through executive strategy, client
            relationships, and data analytics — shaped by{" "}
            <strong className="text-[var(--foreground)]">
              Khazanah Nasional
            </strong>{" "}
            and designed to build Malaysia's next generation of industry leaders.
          </p>

          <div className="fade-up fade-up-4 flex flex-wrap gap-3">
            <a
              href="#journey"
              className="px-6 py-3 bg-[#05513D] text-[#F1F1EE] font-semibold rounded-xl hover:bg-[#03402f] transition-all duration-200 shadow-lg shadow-black/10"
            >
              Explore the Journey
            </a>
            <a
              href="#overview"
              className="px-6 py-3 bg-white text-[var(--foreground)] font-semibold rounded-xl border border-[var(--border)] hover:bg-[var(--muted)] transition-all duration-200"
            >
              Programme Details
            </a>
          </div>
        </div>

        {/* Right: Stats card */}
        <div className="fade-up fade-up-3 relative">
          <div className="relative bg-white rounded-3xl p-8 shadow-xl shadow-black/5 border border-[var(--border)]">
            {/* Top gradient strip */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-[#05513D] to-[#8FFE09]" />

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Duration", value: "27 Days", icon: "📅" },
                { label: "Modules", value: "5 Tracks", icon: "📚" },
                { label: "Format", value: "Live Zoom", icon: "💻" },
                { label: "Status", value: "Completed", icon: "✅" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="text-xl">{s.icon}</span>
                  <span
                    className="text-2xl font-black text-[var(--foreground)]"
          
                  >
                    {s.value}
                  </span>
                  <span className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--border)]">
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                10 Aug – 5 Sep 2026 · Online via Zoom
                <br />
                Organised by{" "}
                <strong className="text-[var(--foreground)]">
                  Khazanah Nasional
                </strong>{" "}
                · Trainer:{" "}
                <strong className="text-[var(--foreground)]">Aisling</strong>
              </p>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 bg-[#8FFE09] text-[#1A191B] text-xs font-bold px-4 py-2 rounded-2xl shadow-lg">
            UiTM · Class of 2026
          </div>
        </div>
      </div>
    </section>
  );
}

function Overview() {
  const details = [
    {
      icon: "🏛️",
      label: "Main Organiser",
      value: "Khazanah Nasional",
      desc: "Malaysia's strategic investment holding arm",
    },
    {
      icon: "👩‍🏫",
      label: "Programme Trainer",
      value: "Aisling",
      desc: "Expert facilitator and leadership coach",
    },
    {
      icon: "🎓",
      label: "Participants",
      value: "UiTM Students",
      desc: "Cohort 1 — selected undergraduates",
    },
    {
      icon: "📅",
      label: "Programme Dates",
      value: "10 Aug – 5 Sep 2026",
      desc: "Four weeks, fully online",
    },
    {
      icon: "💻",
      label: "Delivery Mode",
      value: "Online via Zoom",
      desc: "Live, interactive sessions",
    },
    {
      icon: "🏆",
      label: "Cohort",
      value: "K-Youth Nurture · Cohort 1",
      desc: "Inaugural batch of this programme",
    },
  ];

  return (
    <section
      id="overview"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#05513D] mb-3 block">
            Programme Overview
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-[var(--foreground)] leading-tight"
  
          >
            Built for the
            <br />
            <span className="gradient-text">Next Generation.</span>
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)] max-w-xl leading-relaxed">
            K-Youth Nurture 2026 is Khazanah Nasional's structured immersion
            programme designed to bridge the gap between academic preparation
            and professional excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {details.map((d) => (
            <div
              key={d.label}
              className="group p-6 rounded-2xl border border-[var(--border)] bg-[var(--background)] hover:bg-white hover:shadow-md hover:shadow-black/5 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              <span className="text-3xl block mb-4">{d.icon}</span>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)] mb-1">
                {d.label}
              </p>
              <p
                className="text-xl font-black text-[var(--foreground)] mb-1"
      
              >
                {d.value}
              </p>
              <p className="text-sm text-[var(--muted-foreground)]">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ mod }: { mod: Module }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-white rounded-3xl border border-[var(--border)] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/5 ${
        open ? "shadow-md shadow-black/5" : ""
      }`}
    >
      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div
            className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${mod.color} flex items-center justify-center text-xl shrink-0`}
          >
            {mod.icon}
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)] mt-0.5 bg-[var(--muted)] px-2.5 py-1 rounded-full shrink-0">
            {mod.tag}
          </span>
        </div>

        <p className="text-xs font-bold uppercase tracking-widest text-[#05513D] mb-0.5">
          {mod.subtitle}
        </p>
        <h3
          className="text-xl font-black text-[var(--foreground)] mb-4"

        >
          {mod.title}
        </h3>

        {/* ── Image Gallery ── */}
        <div className="mb-5">
          <GalleryBlock images={mod.gallery} color={mod.color} />
        </div>

        {/* Description */}
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-5">
          {mod.description}
        </p>

        {/* Key takeaways */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)] mb-2.5">
            Key Takeaways
          </p>
          <ul className="space-y-2">
            {mod.takeaways.map((t, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                <span className="w-4 h-4 rounded-full bg-[#e8ede9] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#05513D] block" />
                </span>
                <span className="text-[var(--foreground)] leading-snug">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Expandable deeper reflection */}
      <div className={`card-content ${open ? "open" : ""}`}>
        <div className="px-6 pb-6 border-t border-[var(--border)]">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)] mt-5 mb-3">
            Deeper Reflection
          </p>
          <p className="text-sm text-[var(--foreground)] leading-relaxed">
            {mod.deepContent}
          </p>
        </div>
      </div>

      {/* Toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-all duration-150 border-t border-[var(--border)]"
        aria-expanded={open}
      >
        <span>{open ? "Show less" : "Read deeper reflection"}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}

function Journey() {
  return (
    <section
      id="journey"
      className="py-24 bg-[var(--background)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#05513D] mb-3 block">
            Learning Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-[var(--foreground)] leading-tight"
  
          >
            Five Modules.
            <br />
            <span className="gradient-text">One Transformation.</span>
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)] max-w-xl leading-relaxed">
            Each module placed me inside a different professional role —
            building empathy, capability, and confidence from the inside out.
            Click any card to read my personal reflections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.slice(0, 3).map((m) => (
            <ModuleCard key={m.id} mod={m} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2">
          {modules.slice(3).map((m) => (
            <ModuleCard key={m.id} mod={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section id="insights" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#05513D] mb-3 block">
            Insights & Reflections
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-[var(--foreground)] leading-tight"
  
          >
            What the Programme
            <br />
            <span className="gradient-text">Taught Me.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {insights.slice(0, 3).map((ins) => (
            <div
              key={ins.title}
              className="p-6 rounded-2xl bg-[#F1F1EE] border border-[#d4d4d0] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-3xl block mb-4">{ins.icon}</span>
              <h3
                className="text-lg font-black text-[var(--foreground)] mb-2 leading-tight"
      
              >
                {ins.title}
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {ins.body}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-5">
          {insights.slice(3).map((ins) => (
            <div
              key={ins.title}
              className="p-6 rounded-2xl bg-[#F1F1EE] border border-[#d4d4d0] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-3xl block mb-4">{ins.icon}</span>
              <h3
                className="text-lg font-black text-[var(--foreground)] mb-2 leading-tight"
      
              >
                {ins.title}
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {ins.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Connect() {
  return (
    <section
      id="connect"
      className="py-24 relative overflow-hidden bg-[var(--foreground)]"
    >
      {/* Background orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-[#8FFE09] opacity-10 blur-[100px]"
        style={{ top: "-20%", right: "-10%" }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-[#05513D] opacity-30 blur-[100px]"
        style={{ bottom: "-20%", left: "-5%" }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8FFE09] mb-3 block">
            Let's Connect
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white leading-tight mb-4"
  
          >
            Ready to build
            <br />
            something together?
          </h2>
          <p className="text-slate-400 leading-relaxed">
            I'm a final-year UiTM student with a sharpened professional edge —
            curious, driven, and eager to contribute to meaningful work. Let's
            start a conversation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-lg mx-auto">
          <a
            href="https://www.linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0077B5] flex items-center justify-center shrink-0">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">LinkedIn</p>
              <p className="text-slate-400 text-xs mt-0.5">View my profile</p>
            </div>
            <svg
              className="w-4 h-4 text-slate-500 ml-auto group-hover:text-white group-hover:translate-x-0.5 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>

          <a
            href="mailto:your.email@student.uitm.edu.my"
            className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-[#05513D] flex items-center justify-center shrink-0">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Email</p>
              <p className="text-slate-400 text-xs mt-0.5">Send a message</p>
            </div>
            <svg
              className="w-4 h-4 text-slate-500 ml-auto group-hover:text-white group-hover:translate-x-0.5 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            K-Youth Nurture 2026 · Cohort 1 · UiTM Student Portfolio
          </p>
          <p>
            Organised by{" "}
            <span className="text-slate-400">Khazanah Nasional</span> · Built
            with care
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <ProgressBar />
      <Header />
      <main>
        <Hero />
        <Overview />
        <Journey />
        <Insights />
        <Connect />
      </main>
    </div>
  );
}
