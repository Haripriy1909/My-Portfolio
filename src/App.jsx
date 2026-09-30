import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const profileImage = "/image.png";
const contactEmail = "haripriy.darji@gmail.com";

const projects = [
  {
    number: "01",
    title: "AI Code Reviewer",
    type: "AI ENGINEERING",
    description:
      "AI-powered code review engine that turns source code into actionable feedback, improvement suggestions, and cleaner engineering decisions.",
    stack: ["React", "Node.js", "Gemini API"],
    link: "https://github.com/Haripriy1909/AI-Code-Reviewer",
    featured: true,
  },
  {
    number: "02",
    title: "OptiTrack",
    type: "AI × CAREER TECH",
    description:
      "ATS-focused resume analysis for formatting, keywords, structure, and job alignment, helping candidates build more machine-readable resumes.",
    stack: ["HTML", "CSS", "JavaScript", "ATS"],
    link: "https://github.com/Haripriy1909/resume-optimizer-app",
  },
  {
    number: "03",
    title: "LiveRateX",
    type: "REAL-TIME WEB APP",
    description:
      "A polished currency conversion and market-tracking interface powered by live exchange-rate data with responsive motion design.",
    stack: ["React", "Tailwind CSS", "GSAP", "Axios"],
    link: "https://github.com/Haripriy1909/LiveRateX-Currency-Coversions",
  },
  {
    number: "04",
    title: "Resume Analyzer",
    type: "AI PRODUCT · BUILDING",
    description:
      "A next-generation resume analyzer concept combining structured scoring, authentication, persistent data, and AI-assisted career workflows.",
    stack: ["JavaScript", "Python", "MongoDB", "AI"],
    link: "https://github.com/Haripriy1909/Resume-Analyzer",
  },
];

const skills = [
  [
    "01",
    "AI Engineering",
    "AI APIs · Prompt workflows · AI-assisted products",
    [
      "AI APIs",
      "Prompt Engineering",
      "Gemini API",
      "AI Workflows",
      "AI-assisted Products",
    ],
  ],
  [
    "02",
    "Frontend",
    "React · JavaScript ES6+ · Tailwind CSS · GSAP",
    [
      "HTML",
      "CSS",
      "JavaScript ES6+",
      "React.js",
      "Redux",
      "Tailwind CSS",
      "GSAP",
    ],
  ],
  [
    "03",
    "Backend",
    "Node.js · Express · REST APIs · Python",
    ["Node.js", "Express.js", "REST APIs", "Python", "API Integration"],
  ],
  [
    "04",
    "Databases",
    "MongoDB · MySQL · Mongoose",
    ["MongoDB", "MySQL", "Mongoose", "Database Design"],
  ],
  [
    "05",
    "Tools",
    "Git · GitHub · Vite · VS Code · Jupyter",
    ["Git", "GitHub", "Vite", "VS Code", "Jupyter Notebook"],
  ],
  [
    "06",
    "Languages",
    "JavaScript · C · Java · Python",
    ["JavaScript", "C", "Java", "Python"],
  ],
];

const skillProjects = {
  "AI Engineering": [
    ["Resume Analyzer", "https://github.com/Haripriy1909/Resume-Analyzer"],
  ],
  Frontend: [
    [
      "OptiTrack / Resume Optimizer",
      "https://github.com/Haripriy1909/resume-optimizer-app",
    ],
    [
      "LiveRateX",
      "https://github.com/Haripriy1909/LiveRateX-Currency-Coversions",
    ],
  ],
  Languages: [
    ["Resume Analyzer", "https://github.com/Haripriy1909/Resume-Analyzer"],
  ],
};

function Icon({ name, className = "h-5 w-5" }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h13" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    github: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2-.4 6.5-1.6 6.5-7A5.5 5.5 0 0 0 19 3.7 5.1 5.1 0 0 0 18.9 1S17.7.6 15 2.4a13.4 13.4 0 0 0-6 0C6.3.6 5.1 1 5.1 1A5.1 5.1 0 0 0 5 3.7a5.5 5.5 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.5 7A4.8 4.8 0 0 0 9 18v4" />
        <path d="M9 18c-4.5 2-5-2-7-2" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <path d="M2 9h4v12H2z" />
        <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    external: (
      <>
        <path d="M14 3h7v7" />
        <path d="M10 14 21 3" />
        <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
  };

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function ContactModal({ onClose }) {
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const submit = (e) => {
    e.preventDefault();

    const body = `Hi Haripriy,

Name: ${form.name}
Email: ${form.email}

${form.message}`;

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      form.subject || "Portfolio inquiry",
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  const input = `
    w-full rounded-xl
    border border-zinc-200
    bg-zinc-50
    px-4 py-3
    text-sm text-zinc-900
    outline-none
    transition-all duration-300
    placeholder:text-zinc-400
    focus:border-violet-400
    focus:ring-4
    focus:ring-violet-400/10

    dark:border-white/10
    dark:bg-black/30
    dark:text-white
    dark:placeholder:text-zinc-600
    dark:focus:border-violet-400/50
    dark:focus:ring-violet-400/5
  `;

  return (
    <div
      className="
        fixed inset-0 z-[90]
        grid place-items-center
        bg-black/40
        p-4
        backdrop-blur-xl
        dark:bg-black/75
        sm:p-5
      "
      onMouseDown={onClose}
    >
      <div
        className="
          relative
          max-h-[92vh]
          w-full
          max-w-2xl
          overflow-auto
          rounded-3xl
          border border-zinc-200
          bg-white
          p-6
          text-zinc-900
          shadow-[0_40px_120px_rgba(0,0,0,.2)]
          dark:border-violet-300/20
          dark:bg-[#0d0d13]
          dark:text-white
          dark:shadow-[0_40px_120px_rgba(0,0,0,.65)]
          sm:p-10
        "
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          className="
            absolute right-4 top-4
            grid h-10 w-10 place-items-center
            rounded-xl
            border border-zinc-200
            text-zinc-500
            transition
            hover:border-violet-300
            hover:text-violet-600

            dark:border-white/10
            dark:text-zinc-400
            dark:hover:border-violet-300/40
            dark:hover:text-white

            sm:right-5 sm:top-5
          "
          onClick={onClose}
          aria-label="Close"
        >
          <Icon name="close" />
        </button>

        <div className="mb-3 font-mono text-[10px] uppercase tracking-[.18em] text-violet-500 dark:text-violet-300">
          Direct connection
        </div>

        <h2 className="pr-10 text-3xl font-extrabold leading-none tracking-[-.06em] sm:text-5xl">
          Let&apos;s build something{" "}
          <span className="text-violet-500 dark:text-violet-300">
            intelligent.
          </span>
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-500">
          Send a message and your email client will open with everything ready
          to connect with me.
        </p>

        {sent ? (
          <div className="py-10 text-center">
            <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full border border-emerald-300/30 bg-emerald-100 text-emerald-600 dark:bg-emerald-300/10 dark:text-emerald-300">
              <Icon name="check" />
            </div>

            <h3 className="text-2xl font-bold">Your message is ready.</h3>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-7 text-zinc-600 dark:text-zinc-500">
              Complete the send action in your email app to reach me directly.
            </p>

            <button
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-violet-300
                to-violet-500
                px-5
                py-3
                text-sm
                font-bold
                text-black
                transition
                hover:-translate-y-1
              "
              onClick={onClose}
            >
              Back to portfolio <Icon name="arrow" />
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-7 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                Name

                <input
                  className={input}
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                Email

                <input
                  className={input}
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="grid gap-2 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
              Subject

              <input
                className={input}
                value={form.subject}
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
                placeholder="Project, opportunity, collaboration..."
              />
            </label>

            <label className="grid gap-2 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
              Message

              <textarea
                className={`${input} resize-y`}
                required
                rows="5"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Tell me what you are building or what you would like to discuss..."
              />
            </label>

            <button
              className="
                mt-1
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-violet-300
                to-violet-500
                px-5
                py-3
                text-sm
                font-bold
                text-black
                transition
                hover:-translate-y-1
                hover:shadow-[0_18px_50px_rgba(123,96,220,.3)]
              "
              type="submit"
            >
              Open message <Icon name="arrow" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function App() {
  const app = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [imageError, setImageError] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(app);

      gsap.set(q(".hero-line"), {
        y: 90,
        opacity: 0,
      });

      gsap.set(q(".hero-animate"), {
        y: 30,
        opacity: 0,
      });

      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .to(q(".hero-line"), {
          y: 0,
          opacity: 1,
          duration: 1.05,
          stagger: 0.09,
        })
        .to(
          q(".hero-animate"),
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
          },
          "-=.55",
        );

      gsap.to(q(".portrait-glow"), {
        scale: 1.12,
        opacity: 0.75,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(q(".portrait-orbit"), {
        rotate: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      gsap.to(q(".marquee-track"), {
        xPercent: -50,
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      gsap.utils.toArray(q(".reveal")).forEach((el) => {
        gsap.fromTo(
          el,
          {
            y: 70,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray(q(".project-card")).forEach((card) => {
        const media = card.querySelector(".project-media");

        const onMove = (e) => {
          const r = card.getBoundingClientRect();

          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;

          gsap.to(card, {
            rotateY: x * 5,
            rotateX: -y * 5,
            duration: 0.45,
            overwrite: true,
          });

          gsap.to(media, {
            x: x * 16,
            y: y * 16,
            duration: 0.45,
            overwrite: true,
          });
        };

        const onLeave = () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.7,
          });

          gsap.to(media, {
            x: 0,
            y: 0,
            duration: 0.7,
          });
        };

        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
      });

      const cursor = q(".cursor");
      const dot = q(".cursor-dot");

      const move = (e) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.45,
          ease: "power3.out",
        });

        gsap.to(dot, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.05,
        });
      };

      window.addEventListener("mousemove", move);

      return () => {
        window.removeEventListener("mousemove", move);
      };
    }, app);

    return () => ctx.revert();
  }, []);

  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  const openContact = () => {
    setContactOpen(true);
    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div
      ref={app}
      className="
        min-h-screen
        overflow-x-hidden
        bg-zinc-50
        font-sans
        text-zinc-900
        transition-colors
        duration-500
        selection:bg-violet-200

        dark:bg-[#07070a]
        dark:text-zinc-100
        dark:selection:bg-violet-400/30
      "
    >
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-40
          opacity-[.018]
          [background-image:radial-gradient(rgba(0,0,0,.8)_1px,transparent_1px)]
          [background-size:4px_4px]
          dark:opacity-[.025]
          dark:[background-image:radial-gradient(rgba(255,255,255,.8)_1px,transparent_1px)]
        "
      />

      <div
        className="
          cursor
          pointer-events-none
          fixed
          left-0
          top-0
          z-[100]
          hidden
          h-8
          w-8
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-violet-400/35
          md:block
        "
      />

      <div
        className="
          cursor-dot
          pointer-events-none
          fixed
          left-0
          top-0
          z-[100]
          hidden
          h-1.5
          w-1.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500
          dark:bg-violet-300
          md:block
        "
      />

      <header
        className="
          fixed
          left-1/2
          top-3
          z-50
          flex
          h-16
          w-[calc(100%-24px)]
          max-w-[1180px]
          -translate-x-1/2
          items-center
          justify-between
          rounded-2xl

          border
          border-zinc-200
          bg-white/90
          px-3
          shadow-[0_18px_50px_rgba(0,0,0,.08)]
          backdrop-blur-2xl

          transition-all
          duration-500

          dark:border-white/10
          dark:bg-[#08080b]/85
          dark:shadow-[0_18px_50px_rgba(0,0,0,.22)]

          sm:top-[18px]
          sm:w-[calc(100%-40px)]
          sm:px-5
        "
      >
        <a
          href="#top"
          className="
            group
            flex
            shrink-0
            items-center
            gap-2.5
            text-[17px]
            font-bold
            tracking-[-.04em]
          "
        >
          <span
            className="
              grid
              h-8
              w-8
              place-items-center
              rounded-[10px]
              bg-gradient-to-br
              from-violet-200
              to-violet-600
              text-[11px]
              font-extrabold
              text-black
              shadow-[0_0_25px_rgba(167,139,250,.25)]
              transition
              group-hover:-translate-y-0.5
              group-hover:brightness-110
            "
          >
            HD
          </span>

          <span className="text-zinc-900 dark:text-white">
            Haripriy<span className="text-violet-500 dark:text-violet-400">.</span>
          </span>
        </a>

        <nav
          className={`
            ${
              menuOpen ? "flex" : "hidden"
            }

            absolute
            left-0
            right-0
            top-[72px]
            flex-col
            gap-1
            rounded-2xl
            border
            border-zinc-200
            bg-white/95
            p-4
            shadow-[0_20px_60px_rgba(0,0,0,.12)]
            backdrop-blur-2xl

            dark:border-white/10
            dark:bg-[#07070a]/95
            dark:shadow-[0_20px_60px_rgba(0,0,0,.35)]

            md:static
            md:flex
            md:flex-row
            md:items-center
            md:gap-7
            md:border-0
            md:bg-transparent
            md:p-0
            md:shadow-none
            md:backdrop-blur-none
          `}
        >
          {["work", "stack", "education", "about"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={closeMenu}
              className="
                border-b
                border-zinc-100
                py-3
                text-[11px]
                font-medium
                uppercase
                tracking-[.09em]
                text-zinc-500
                transition

                hover:text-violet-600

                dark:border-white/5
                dark:text-zinc-500
                dark:hover:text-white

                md:border-0
                md:py-0
              "
            >
              {item}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="
              mt-2
              flex
              items-center
              justify-between
              rounded-xl
              border
              border-zinc-200
              bg-zinc-50
              px-4
              py-3
              text-[11px]
              font-semibold
              text-zinc-700
              transition

              hover:border-violet-300
              hover:text-violet-600

              dark:border-white/10
              dark:bg-white/[.03]
              dark:text-zinc-300
              dark:hover:border-violet-300/30
              dark:hover:text-white

              md:hidden
            "
          >
            <span>{darkMode ? "☀ Light Mode" : "☾ Dark Mode"}</span>

            <span className="text-base">
              {darkMode ? "☀" : "☾"}
            </span>
          </button>

          <button
            onClick={openContact}
            className="
              mt-1
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-violet-200
              bg-violet-50
              px-4
              py-3
              text-[11px]
              font-semibold
              text-violet-700
              transition

              hover:bg-violet-100

              dark:border-violet-300/20
              dark:bg-violet-300/10
              dark:text-zinc-100
              dark:hover:border-violet-300/40

              md:hidden
            "
          >
            Let&apos;s connect <Icon name="arrow" />
          </button>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-zinc-200
              bg-white
              px-4
              py-2.5
              text-[11px]
              font-semibold
              text-zinc-700
              shadow-sm
              transition-all

              hover:-translate-y-0.5
              hover:border-violet-300
              hover:text-violet-600

              dark:border-white/10
              dark:bg-white/[.03]
              dark:text-zinc-300
              dark:shadow-none
              dark:hover:border-violet-300/30
              dark:hover:text-white
            "
          >
            <span className="text-base">
              {darkMode ? "☀" : "☾"}
            </span>

            <span>{darkMode ? "Light" : "Dark"}</span>
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-zinc-200
              bg-white
              px-4
              py-2.5
              text-[11px]
              font-semibold
              text-zinc-700
              shadow-sm
              transition-all

              hover:-translate-y-0.5
              hover:border-violet-300
              hover:text-violet-600

              dark:border-white/10
              dark:bg-white/[.025]
              dark:text-zinc-300
              dark:shadow-none
              dark:hover:border-violet-300/30
              dark:hover:text-white
            "
          >
            View Resume
          </a>

          <button
            onClick={openContact}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-violet-200
              bg-violet-50
              px-4
              py-2.5
              text-[11px]
              font-semibold
              text-violet-700
              transition-all

              hover:-translate-y-0.5
              hover:bg-violet-100

              dark:border-violet-300/20
              dark:bg-violet-300/10
              dark:text-zinc-100
              dark:hover:border-violet-300/40
              dark:hover:bg-violet-300/15
            "
          >
            Let&apos;s connect <Icon name="arrow" />
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            grid
            h-10
            w-10
            shrink-0
            place-items-center
            rounded-xl
            border
            border-zinc-200
            text-zinc-700
            transition
            hover:border-violet-300
            hover:text-violet-600

            dark:border-white/10
            dark:text-zinc-300
            dark:hover:border-violet-300/30
            dark:hover:text-white

            md:hidden
          "
          aria-label="Toggle menu"
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </header>

      <main id="top">
        <section
          className="
            mx-auto
            flex
            min-h-screen
            w-[calc(100%-30px)]
            max-w-[1240px]
            flex-col
            justify-center
            pb-8
            pt-28

            sm:w-[calc(100%-70px)]
            sm:pb-14
            sm:pt-36
          "
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_.92fr]">
            <div>
              <div
                className="
                  hero-animate
                  mb-6
                  flex
                  items-center
                  gap-2.5
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[.14em]
                  text-zinc-500
                "
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_15px_#7cf2a3]" />
                FULL-STACK DEVELOPER · INDIA
              </div>

              <div
                className="
                  text-[clamp(3rem,7.3vw,6.6rem)]
                  font-extrabold
                  leading-[.94]
                  tracking-[-.075em]
                "
              >
                <div className="overflow-hidden">
                  <span className="hero-line inline-block">
                    AI-powered
                  </span>
                </div>

                <div className="overflow-hidden">
                  <span className="hero-line inline-block bg-gradient-to-r from-violet-500 via-violet-600 to-cyan-500 bg-clip-text text-transparent dark:from-violet-200 dark:via-violet-400 dark:to-cyan-300">
                    full-stack
                  </span>
                </div>

                <div className="overflow-hidden">
                  <span className="hero-line inline-block">
                    developer.
                  </span>
                </div>
              </div>

              <p
                className="
                  hero-animate
                  mt-7
                  max-w-[720px]
                  text-[clamp(1.05rem,1.5vw,1.3rem)]
                  leading-[1.8]
                  text-zinc-600
                  dark:text-zinc-500
                "
              >
                I design and build{" "}
                <strong className="text-zinc-900 dark:text-zinc-200">
                  AI-powered products, full-stack applications, and modern
                  digital experiences
                </strong>{" "}
                with a strong focus on clean engineering, useful interfaces,
                and motion.
              </p>

              <div className="hero-animate mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#work"
                  className="
                    inline-flex
                    min-h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-violet-300
                    to-violet-500
                    px-5
                    text-sm
                    font-bold
                    text-black
                    shadow-[0_15px_40px_rgba(123,96,220,.2)]
                    transition

                    hover:-translate-y-1
                    hover:shadow-[0_18px_50px_rgba(123,96,220,.3)]
                  "
                >
                  Explore my work <Icon name="arrow" />
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    min-h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-zinc-200
                    bg-white
                    px-5
                    text-sm
                    font-semibold
                    text-zinc-700
                    shadow-sm
                    transition

                    hover:-translate-y-1
                    hover:border-violet-300
                    hover:text-violet-700

                    dark:border-white/10
                    dark:bg-white/[.025]
                    dark:text-zinc-300
                    dark:shadow-none
                    dark:hover:border-violet-300/30
                    dark:hover:text-white
                  "
                >
                  View Resume
                </a>

                <button
                  onClick={openContact}
                  className="
                    inline-flex
                    min-h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-zinc-200
                    bg-white
                    px-5
                    text-sm
                    font-semibold
                    text-zinc-700
                    shadow-sm
                    transition

                    hover:-translate-y-1
                    hover:border-violet-300
                    hover:text-violet-700

                    dark:border-white/10
                    dark:bg-white/[.025]
                    dark:text-zinc-300
                    dark:shadow-none
                    dark:hover:border-violet-300/30
                    dark:hover:text-white
                  "
                >
                  Start a conversation
                </button>
              </div>
            </div>

            <div
              className="
                hero-animate
                relative
                order-first
                grid
                h-[300px]
                place-items-center

                sm:h-[420px]
                md:h-[500px]

                lg:order-none
                lg:h-[570px]
              "
            >
              <div
                className="
                  portrait-glow
                  absolute
                  h-[280px]
                  w-[280px]
                  rounded-full
                  bg-[radial-gradient(circle,rgba(167,139,250,.28),transparent_65%)]
                  blur-3xl
                  dark:bg-[radial-gradient(circle,rgba(167,139,250,.24),transparent_65%)]

                  sm:h-[380px]
                  sm:w-[380px]

                  lg:h-[430px]
                  lg:w-[430px]
                "
              />

              <div
                className="
                  portrait-orbit
                  absolute
                  h-[300px]
                  w-[300px]
                  rounded-full
                  border
                  border-dashed
                  border-violet-400/20
                  shadow-[inset_0_0_60px_rgba(103,232,249,.04)]

                  sm:h-[430px]
                  sm:w-[430px]

                  lg:h-[510px]
                  lg:w-[510px]
                "
              />

              <div
                className="
                  portrait-frame
                  relative
                  z-[3]
                  aspect-[.8]
                  w-[205px]
                  overflow-hidden
                  rounded-[100px_100px_24px_24px]
                  border
                  border-violet-200
                  bg-gradient-to-br
                  from-violet-100
                  to-zinc-100
                  shadow-[0_30px_80px_rgba(0,0,0,.15)]

                  dark:border-violet-300/20
                  dark:from-[#171520]
                  dark:to-[#09090d]
                  dark:shadow-[0_40px_100px_rgba(0,0,0,.45)]

                  sm:w-[280px]
                  md:w-[320px]
                  lg:w-[390px]
                "
              >
                {imageError ? (
                  <div
                    className="
                      absolute
                      inset-0
                      grid
                      place-content-center
                      gap-2
                      bg-gradient-to-br
                      from-violet-100
                      to-zinc-100
                      text-center
                      text-violet-600

                      dark:from-[#302a50]
                      dark:to-[#0b0b10]
                      dark:text-violet-300
                    "
                  >
                    <span className="text-6xl font-extrabold tracking-[-.09em]">
                      HD
                    </span>

                    <small className="font-mono text-[9px] tracking-[.18em] text-zinc-500">
                      PROFILE PHOTO
                    </small>
                  </div>
                ) : (
                  <img
                    src={profileImage}
                    alt="Haripriy Darji professional portrait"
                    className="relative z-[2] h-full w-full object-cover saturate-90 contrast-[1.03]"
                    onError={() => setImageError(true)}
                  />
                )}

                <div className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-b from-transparent via-transparent to-black/50 dark:to-black/75" />
              </div>

              <span
                className="
                  absolute
                  left-[3%]
                  top-[18%]
                  z-[6]
                  border
                  border-zinc-200
                  bg-white/80
                  px-3
                  py-2
                  font-mono
                  text-[9px]
                  tracking-widest
                  text-zinc-600
                  backdrop-blur-xl

                  dark:border-white/10
                  dark:bg-black/60
                  dark:text-zinc-400
                "
              >
                AI
              </span>

              <span
                className="
                  absolute
                  right-[5%]
                  top-[31%]
                  z-[6]
                  border
                  border-violet-200
                  bg-white/80
                  px-3
                  py-2
                  font-mono
                  text-[9px]
                  tracking-widest
                  text-violet-600
                  backdrop-blur-xl

                  dark:border-white/10
                  dark:bg-black/60
                  dark:text-violet-200
                "
              >
                REACT
              </span>

              <span
                className="
                  absolute
                  bottom-[16%]
                  left-[14%]
                  z-[6]
                  border
                  border-cyan-200
                  bg-white/80
                  px-3
                  py-2
                  font-mono
                  text-[9px]
                  tracking-widest
                  text-cyan-600
                  backdrop-blur-xl

                  dark:border-white/10
                  dark:bg-black/60
                  dark:text-cyan-200
                "
              >
                GSAP
              </span>
            </div>
          </div>

          <div
            className="
              hero-animate
              mt-10
              flex
              items-center
              justify-between
              gap-4
              font-mono
              text-xs
              text-zinc-500
            "
          >
            <span>01 — 04</span>

            <span className="hidden items-center gap-2.5 text-base font-semibold tracking-wide text-zinc-500 sm:flex">
              Scroll to explore
              <span className="animate-bounce text-xl text-violet-500 dark:text-violet-300">
                ↓
              </span>
            </span>

            <span className="h-px w-14 bg-gradient-to-r from-zinc-400 to-transparent dark:from-zinc-600 sm:w-28" />
          </div>
        </section>

        <section className="overflow-hidden border-y border-zinc-200 py-5 dark:border-white/10">
          <div className="marquee-track flex w-max gap-10 font-mono text-[11px] tracking-[.13em] text-zinc-500">
            {[...Array(2)].flatMap((_, copy) =>
              [
                "AI ENGINEERING",
                "REACT",
                "NODE.JS",
                "GSAP MOTION",
                "REST APIs",
                "MONGODB",
                "FULL-STACK",
              ].map((x, i) => (
                <span
                  key={`${copy}-${i}`}
                  className="flex items-center gap-10 whitespace-nowrap"
                >
                  {x}
                  <b className="text-violet-500 dark:text-violet-400">✦</b>
                </span>
              )),
            )}
          </div>
        </section>

        <section
          id="work"
          className="
            mx-auto
            w-[calc(100%-30px)]
            max-w-[1240px]
            pt-28

            sm:w-[calc(100%-70px)]
            sm:pt-36
          "
        >
          <div className="reveal mb-12 grid items-end gap-6 lg:grid-cols-[1fr_390px] lg:gap-14">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[.14em] text-zinc-500">
                Selected work / 01
              </p>

              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-none tracking-[-.065em]">
                Products built to{" "}
                <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent dark:from-violet-200 dark:to-cyan-300">
                  solve.
                </span>
              </h2>
            </div>

            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-500">
              A focused collection of AI, full-stack, and real-time web
              projects that show how I turn ideas into working digital
              products.
            </p>
          </div>

          <div className="grid gap-[18px] lg:grid-cols-2 [perspective:1200px]">
            {projects.map((project) => (
              <a
                key={project.number}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="
                  project-card
                  reveal
                  group
                  block
                  overflow-hidden
                  border
                  border-zinc-200
                  bg-white
                  shadow-[0_15px_45px_rgba(0,0,0,.05)]
                  transition

                  hover:border-violet-300
                  hover:shadow-[0_25px_70px_rgba(0,0,0,.10)]

                  dark:border-white/10
                  dark:bg-[#0a0a0e]
                  dark:shadow-none
                  dark:hover:border-violet-300/30
                  dark:hover:shadow-[0_25px_70px_rgba(0,0,0,.25)]
                "
              >
                <div
                  className="
                    project-media
                    relative
                    h-[220px]
                    overflow-hidden
                    bg-[radial-gradient(circle_at_50%_35%,rgba(167,139,250,.15),transparent_50%)]

                    dark:bg-[radial-gradient(circle_at_50%_35%,rgba(167,139,250,.2),transparent_50%)]

                    sm:h-[315px]
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-40
                      [background-image:linear-gradient(rgba(124,58,237,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,.05)_1px,transparent_1px)]
                      [background-size:30px_30px]
                      dark:[background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)]
                    "
                  />

                  <div
                    className="
                      absolute
                      left-[12%]
                      top-[20%]
                      h-[62%]
                      w-[76%]
                      border
                      border-zinc-200
                      bg-white/70
                      shadow-[0_20px_50px_rgba(0,0,0,.08)]

                      dark:border-white/15
                      dark:bg-black/60
                      dark:shadow-[0_30px_70px_rgba(0,0,0,.5)]

                      sm:left-[18%]
                      sm:w-[64%]
                    "
                  >
                    <div className="flex gap-1 p-2">
                      <i className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <i className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <i className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                    </div>

                    <div className="absolute left-[12%] right-[12%] top-[28%] grid gap-3">
                      <i className="h-1 w-[72%] bg-gradient-to-r from-violet-400/70 to-cyan-400/20" />
                      <i className="h-1 w-[46%] bg-gradient-to-r from-violet-400/70 to-cyan-400/20" />
                      <i className="h-1 w-[82%] bg-gradient-to-r from-violet-400/70 to-cyan-400/20" />
                      <i className="h-1 w-[58%] bg-gradient-to-r from-violet-400/70 to-cyan-400/20" />
                      <i className="h-1 w-[68%] bg-gradient-to-r from-violet-400/70 to-cyan-400/20" />
                    </div>
                  </div>

                  <span className="absolute right-5 top-4 font-mono text-[10px] text-zinc-500">
                    {project.number}
                  </span>
                </div>

                <div className="p-5 sm:p-7">
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-[.14em] text-zinc-500">
                    {project.type}
                  </div>

                  <h3 className="mb-3 text-2xl font-bold tracking-[-.045em] text-zinc-900 dark:text-white sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-500 sm:text-[1.08rem]">
                    {project.description}
                  </p>

                  <div className="mt-7 flex items-end justify-between gap-5">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="
                            rounded-md
                            border
                            border-zinc-200
                            bg-zinc-50
                            px-2.5
                            py-1.5
                            text-[10px]
                            font-semibold
                            text-zinc-600
                            transition

                            group-hover:border-violet-300

                            dark:border-white/10
                            dark:bg-transparent
                            dark:text-zinc-400
                            dark:group-hover:border-violet-300/20
                          "
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <span
                      className="
                        grid
                        h-10
                        w-10
                        shrink-0
                        place-items-center
                        border
                        border-zinc-200
                        text-violet-500
                        transition

                        group-hover:rotate-45
                        group-hover:border-violet-300

                        dark:border-white/10
                        dark:text-violet-300
                        dark:group-hover:border-violet-300/40
                      "
                    >
                      <Icon name="arrow" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          id="stack"
          className="
            mx-auto
            w-[calc(100%-30px)]
            max-w-[1240px]
            pt-28

            sm:w-[calc(100%-70px)]
            sm:pt-36
          "
        >
          <div className="reveal mb-12 grid items-end gap-6 lg:grid-cols-[1fr_390px] lg:gap-14">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[.14em] text-zinc-500">
                Technical stack / 02
              </p>

              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-none tracking-[-.065em]">
                Built with{" "}
                <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent dark:from-violet-200 dark:to-cyan-300">
                  purpose.
                </span>
              </h2>
            </div>

            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-500">
              A practical full-stack toolkit across AI, frontend, backend,
              databases, and engineering workflows.
            </p>
          </div>

          <div className="border-t border-zinc-200 dark:border-white/10">
            {skills.map(([num, title, summary, details]) => {
              const active = activeSkill === title;

              return (
                <div
                  key={num}
                  className={`
                    reveal
                    grid
                    gap-3
                    border-b
                    border-zinc-200
                    py-6
                    transition

                    dark:border-white/10

                    sm:grid-cols-[55px_1fr_40px]
                    sm:items-center
                    sm:gap-6

                    ${
                      active
                        ? "bg-violet-50 px-3 shadow-[0_20px_48px_rgba(0,0,0,.05)] dark:bg-white/[.025] dark:shadow-[0_20px_48px_rgba(0,0,0,.22)]"
                        : "hover:bg-zinc-50 hover:px-3 dark:hover:bg-white/[.02]"
                    }
                  `}
                  onClick={() =>
                    setActiveSkill(active ? null : title)
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveSkill(active ? null : title);
                    }
                  }}
                >
                  <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">
                    {num}
                  </span>

                  <div>
                    <h3 className="text-[clamp(1.35rem,2vw,1.8rem)] font-bold tracking-tight text-zinc-900 dark:text-white">
                      {title}
                    </h3>

                    <p className="mt-1.5 text-[clamp(1.05rem,1.5vw,1.25rem)] leading-7 text-zinc-600 dark:text-zinc-400">
                      {summary}
                    </p>

                    {active && (
                      <div className="mt-4 space-y-4">
                        <div className="flex flex-wrap gap-2.5">
                          {details.map((item) => (
                            <span
                              key={item}
                              className="
                                skill-chip
                                rounded-full
                                border
                                border-violet-300/30
                                bg-violet-50
                                px-3.5
                                py-2
                                text-sm
                                font-semibold
                                text-violet-700
                                transition

                                hover:-translate-y-1
                                hover:bg-violet-100
                                hover:shadow-lg

                                dark:border-violet-300/25
                                dark:bg-violet-300/5
                                dark:text-violet-100
                                dark:hover:bg-violet-300/10
                              "
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        {skillProjects[title] && (
                          <div className="flex flex-wrap gap-3">
                            {skillProjects[title].map(([name, url]) => (
                              <a
                                key={url}
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="
                                  inline-flex
                                  items-center
                                  gap-2
                                  rounded-xl
                                  border
                                  border-violet-300/30
                                  bg-violet-50
                                  px-3.5
                                  py-2.5
                                  text-base
                                  font-bold
                                  text-violet-700
                                  transition

                                  hover:-translate-y-1
                                  hover:bg-violet-100
                                  hover:shadow-lg

                                  dark:border-violet-300/25
                                  dark:bg-transparent
                                  dark:text-violet-100
                                  dark:hover:bg-white/5
                                "
                              >
                                {name}
                                <Icon
                                  name="external"
                                  className="h-4 w-4"
                                />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <span className="text-2xl text-violet-500 dark:text-violet-300">
                    {active ? "−" : "+"}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="education"
          className="
            mx-auto
            w-[calc(100%-30px)]
            max-w-[1240px]
            pt-28

            sm:w-[calc(100%-70px)]
            sm:pt-36
          "
        >
          <div className="reveal mb-12 grid items-end gap-6 lg:grid-cols-[1fr_390px] lg:gap-14">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[.14em] text-zinc-500">
                Education / 03
              </p>

              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-none tracking-[-.065em]">
                Learning that{" "}
                <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent dark:from-violet-200 dark:to-cyan-300">
                  builds.
                </span>
              </h2>
            </div>

            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-500">
              My academic foundation in computer applications supports the
              product and engineering work I build today.
            </p>
          </div>

          {[
            {
              year: "APR 2027",
              label: "BACHELOR OF COMPUTER APPLICATIONS",
              title: "M.D. Saraswati College, HNGU",
              detail: "CGPA 8.45",
              badge: "BCA",
            },
            {
              year: "MAR 2024",
              label: "HIGHER SECONDARY · GSEB",
              title: "N.M. Nootan Sarva Vidhyalay, Visnagar",
              detail: "Percentage 72.4%",
              badge: "XII",
            },
          ].map((edu, i) => (
            <div
              key={edu.year}
              className="
                reveal
                mb-3
                grid
                gap-5
                border
                border-zinc-200
                bg-gradient-to-r
                from-violet-50
                to-white
                p-6
                shadow-[0_15px_45px_rgba(0,0,0,.04)]
                transition-all
                hover:border-violet-200

                dark:border-white/10
                dark:from-violet-400/[.06]
                dark:to-white/[.015]
                dark:shadow-none

                sm:grid-cols-[150px_1fr_70px]
                sm:items-center
                sm:gap-8
                sm:px-10
              "
            >
              <div className="font-mono text-[10px] tracking-[.13em] text-zinc-500">
                {edu.year}
              </div>

              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[.14em] text-zinc-500">
                  {edu.label}
                </p>

                <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-2xl">
                  {edu.title}{" "}
                  {i === 0 && (
                    <span className="text-sm font-normal text-zinc-500">
                      · Visnagar, Gujarat, India
                    </span>
                  )}
                </h3>

                <p className="mt-2 text-base text-zinc-500">
                  {edu.detail}
                </p>
              </div>

              <div
                className="
                  hidden
                  h-16
                  w-16
                  place-items-center
                  justify-self-end
                  rounded-full
                  border
                  border-violet-300/30
                  font-mono
                  text-[10px]
                  font-bold
                  text-violet-600

                  dark:border-violet-300/20
                  dark:text-violet-200

                  sm:grid
                "
              >
                {edu.badge}
              </div>
            </div>
          ))}
        </section>

        <section
          id="about"
          className="
            mx-auto
            w-[calc(100%-30px)]
            max-w-[1240px]
            pt-28

            sm:w-[calc(100%-70px)]
            sm:pt-36
          "
        >
          <div
            className="
              reveal
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-violet-200
              bg-gradient-to-br
              from-violet-50
              via-white
              to-cyan-50
              p-6
              shadow-[0_35px_100px_rgba(0,0,0,.08)]

              dark:border-violet-300/15
              dark:from-violet-500/[.08]
              dark:via-[#0b0b10]
              dark:to-cyan-400/[.04]
              dark:shadow-[0_35px_100px_rgba(0,0,0,.35)]

              sm:p-10
              lg:p-14
            "
          >
            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-cyan-400/5 blur-3xl" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
              <div className="relative mx-auto w-full max-w-[390px]">
                <div className="absolute -inset-4 rounded-[2rem] border border-violet-300/20" />

                <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,.12)] dark:border-white/10 dark:bg-black/30 dark:shadow-[0_30px_80px_rgba(0,0,0,.45)]">
                  {imageError ? (
                    <div className="grid aspect-[4/5] place-items-center bg-gradient-to-br from-violet-100 to-zinc-100 dark:from-[#302a50] dark:to-[#0b0b10]">
                      <span className="text-7xl font-extrabold text-violet-500 dark:text-violet-300">
                        HD
                      </span>
                    </div>
                  ) : (
                    <img
                      src={profileImage}
                      alt="Haripriy Darji"
                      className="aspect-[4/5] w-full object-cover object-top saturate-95 transition duration-700 hover:scale-[1.03]"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                    <div>
                      <p className="font-mono text-[10px] tracking-[.2em] text-violet-200">
                        AI × FULL-STACK
                      </p>

                      <p className="mt-1 text-lg font-bold text-white">
                        Haripriy Darji
                      </p>
                    </div>

                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-black/30 font-extrabold text-violet-200 backdrop-blur-md">
                      HD
                    </span>
                  </div>
                </div>

                <div
                  className="
                    absolute
                    -right-3
                    top-8
                    rounded-xl
                    border
                    border-zinc-200
                    bg-white/90
                    px-3
                    py-2
                    font-mono
                    text-[10px]
                    tracking-widest
                    text-violet-600
                    shadow-xl
                    backdrop-blur-md

                    dark:border-white/10
                    dark:bg-[#0d0d13]/90
                    dark:text-violet-200
                  "
                >
                  BUILD
                </div>

                <div
                  className="
                    absolute
                    -left-3
                    bottom-10
                    rounded-xl
                    border
                    border-zinc-200
                    bg-white/90
                    px-3
                    py-2
                    font-mono
                    text-[10px]
                    tracking-widest
                    text-cyan-600
                    shadow-xl
                    backdrop-blur-md

                    dark:border-white/10
                    dark:bg-[#0d0d13]/90
                    dark:text-cyan-200
                  "
                >
                  SHIP
                </div>
              </div>

              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[.18em] text-violet-600 dark:text-violet-300">
                  About / 04
                </p>

                <h2
                  className="
                    max-w-3xl
                    text-[clamp(2.7rem,5vw,5rem)]
                    font-extrabold
                    leading-[.98]
                    tracking-[-.065em]
                    text-zinc-900

                    dark:text-white
                  "
                >
                  Engineering with an{" "}
                  <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent dark:from-violet-200 dark:to-cyan-300">
                    AI-first
                  </span>{" "}
                  mindset.
                </h2>

                <p className="mt-7 max-w-2xl text-[1.1rem] leading-8 text-zinc-700 dark:text-zinc-300 sm:text-[1.3rem] sm:leading-9">
                  I&apos;m an AI-powered full-stack developer focused on
                  building useful products from the interface to the backend.
                  I enjoy combining modern frontend motion, reliable APIs,
                  databases, and AI capabilities into experiences that feel
                  polished and practical.
                </p>

                <p className="mt-5 max-w-2xl text-[1.05rem] leading-8 text-zinc-600 dark:text-zinc-400 sm:text-[1.18rem] sm:leading-8">
                  I&apos;m continuously strengthening my fundamentals in
                  software engineering, DSA, system thinking, and modern AI
                  development.
                </p>

                <div className="mt-9 grid gap-3 sm:grid-cols-3">
                  {[
                    ["AI × FULL-STACK", "CORE FOCUS"],
                    ["REACT × NODE", "PRODUCT STACK"],
                    ["BUILD × LEARN", "WORK STYLE"],
                  ].map(([a, b]) => (
                    <div
                      key={a}
                      className="
                        rounded-2xl
                        border
                        border-zinc-200
                        bg-white
                        p-5
                        shadow-sm
                        transition

                        hover:-translate-y-1
                        hover:border-violet-300
                        hover:bg-violet-50

                        dark:border-white/10
                        dark:bg-white/[.03]
                        dark:shadow-none
                        dark:hover:border-violet-300/30
                        dark:hover:bg-violet-300/[.05]
                      "
                    >
                      <strong className="block text-sm font-bold text-violet-700 dark:text-violet-100 sm:text-base">
                        {a}
                      </strong>

                      <span className="mt-2 block font-mono text-[10px] tracking-widest text-zinc-500">
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="
            mx-auto
            w-[calc(100%-30px)]
            max-w-[1240px]
            pb-14
            pt-28

            sm:w-[calc(100%-70px)]
            sm:pt-36
          "
        >
          <div
            className="
              reveal
              border-y
              border-zinc-200
              px-2
              py-24
              text-center

              dark:border-white/10

              sm:py-32
            "
          >
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[.14em] text-zinc-500">
              Open to conversations
            </p>

            <h2 className="mx-auto max-w-4xl text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-none tracking-[-.065em]">
              Have an idea? Let&apos;s turn it into{" "}
              <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent dark:from-violet-200 dark:to-cyan-300">
                something real.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-zinc-600 dark:text-zinc-500">
              For projects, internships, collaborations, or a simple tech
              conversation, connect with me directly.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={openContact}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-300
                  to-violet-500
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-black
                  transition

                  hover:-translate-y-1
                "
              >
                Let&apos;s connect <Icon name="arrow" />
              </button>

              <a
                className="
                  grid
                  h-12
                  w-12
                  place-items-center
                  border
                  border-zinc-200
                  bg-white
                  text-zinc-500
                  shadow-sm
                  transition

                  hover:-translate-y-1
                  hover:border-violet-300
                  hover:text-violet-600

                  dark:border-white/10
                  dark:bg-transparent
                  dark:text-zinc-400
                  dark:shadow-none
                  dark:hover:border-violet-300/40
                  dark:hover:text-white
                "
                href="https://github.com/Haripriy1909"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="github" />
              </a>

              <a
                className="
                  grid
                  h-12
                  w-12
                  place-items-center
                  border
                  border-zinc-200
                  bg-white
                  text-zinc-500
                  shadow-sm
                  transition

                  hover:-translate-y-1
                  hover:border-violet-300
                  hover:text-violet-600

                  dark:border-white/10
                  dark:bg-transparent
                  dark:text-zinc-400
                  dark:shadow-none
                  dark:hover:border-violet-300/40
                  dark:hover:text-white
                "
                href="https://www.linkedin.com/in/haripriy-darji/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="linkedin" />
              </a>
            </div>
          </div>

          <footer
            className="
              flex
              min-h-[100px]
              flex-wrap
              items-center
              justify-between
              gap-5
              py-7
              font-mono
              text-sm
              tracking-wider
              text-zinc-500
            "
          >
            <span>© 2026 · FULL-STACK DEVELOPER</span>

            <button
              onClick={openContact}
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                transition

                hover:-translate-y-1
                hover:text-zinc-900

                dark:hover:text-white
              "
            >
              Connect directly <Icon name="mail" />
            </button>
          </footer>
        </section>
      </main>

      {contactOpen && (
        <ContactModal onClose={() => setContactOpen(false)} />
      )}
    </div>
  );
}

export default App;