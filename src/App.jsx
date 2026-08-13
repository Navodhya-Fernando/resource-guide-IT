import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Sparkles, ArrowRight, ChevronRight, PlayCircle, ExternalLink, Hexagon, Plus, Circle, Cpu } from "lucide-react";

/* ── Custom UI/UX Styles ── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap');

  :root {
    --bg:     #24101a;
    --layer:  #411c30;
    --gold:   #f6b900;
    --white:  #ffffff;
    --muted:  rgba(255,255,255,0.6);
    --subtle: rgba(255,255,255,0.1);
    --border: rgba(246,185,0,0.25);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body, #rg-root {
    background: var(--bg);
    color: var(--white);
    font-family: 'DM Sans', sans-serif;
    font-weight: 400; /* Increased base weight for better readability */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.7;
    overflow-x: hidden;
  }

  /* Progress Bar */
  .rg-progress {
    position: fixed; top: 0; left: 0;
    height: 4px; width: 0%;
    background: var(--gold);
    z-index: 100;
    box-shadow: 0 0 15px var(--gold);
  }

  /* Layout */
  .rg-main { max-width: 860px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 10; }
  .rg-section { padding: 140px 0; border-top: 1px solid var(--subtle); }
  .rg-section:first-child { border-top: none; }

  /* Hero Section */
  .rg-hero {
    min-height: 100vh;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    text-align: center;
  }
  .rg-hero h1 {
    font-family: 'DM Sans', sans-serif;
    font-size: clamp(56px, 8vw, 96px);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.03em;
    margin-bottom: 16px;
    text-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }
  .rg-gold { color: var(--gold); }
  
  .rg-hero-sub {
    font-size: clamp(16px, 3vw, 22px);
    color: var(--muted);
    letter-spacing: 0.3em;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 48px;
  }

  /* Improved Visa Badge */
  .rg-visa-badge {
    display: inline-flex;
    align-items: center;
    background: rgba(246, 185, 0, 0.1);
    border: 1px solid var(--gold);
    color: var(--white);
    padding: 14px 28px;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.05em;
    box-shadow: 0 0 20px rgba(246, 185, 0, 0.15);
    margin-top: 20px;
  }

  /* Typography & Section Labels */
  .rg-num {
    font-size: 13px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 20px;
    font-weight: 700;
    display: inline-block;
    background: rgba(246,185,0,0.1);
    padding: 6px 16px;
    border-radius: 20px;
  }
  .rg-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(36px, 6vw, 56px);
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 40px;
    text-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }
  .rg-p { color: var(--white); font-size: 18px; margin-bottom: 28px; font-weight: 400; }
  .rg-p:last-child { margin-bottom: 0; }
  .rg-p strong { font-weight: 700; }
  .rg-accent { color: var(--gold); font-weight: 700; }
  .rg-accent-red { color: #ffe500; font-weight: 700; }

  /* Callout Block */
  .rg-callout {
    border-left: 3px solid var(--gold);
    padding: 24px 32px;
    background: linear-gradient(90deg, rgba(246,185,0,0.1) 0%, transparent 100%);
    margin: 48px 0;
    border-radius: 0 12px 12px 0;
  }

  /* Step Lists */
  .rg-steps { margin: 48px 0; }
  .rg-step {
    display: flex; gap: 24px;
    padding: 32px 0;
    border-bottom: 1px solid var(--subtle);
  }
  .rg-step:last-child { border-bottom: none; }
  .rg-step-num {
    flex-shrink: 0;
    font-size: 13px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 700;
    width: 90px;
  }
  .rg-step-body { font-size: 18px; color: var(--white); line-height: 1.7; }
  .rg-step-body blockquote {
    margin-top: 20px;
    padding: 20px 24px;
    background: rgba(0,0,0,0.25);
    border-left: 2px solid var(--gold);
    font-style: italic;
    color: rgba(255,255,255,0.9);
    font-size: 16px;
    border-radius: 0 8px 8px 0;
  }

  /* Video Layouts */
  .rg-video-label {
    font-size: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    text-align: center;
    margin-bottom: 24px;
    font-weight: 600;
  }
  .rg-video-wrap {
    width: 100%;
    max-width: 340px;
    margin: 0 auto 48px;
    aspect-ratio: 9 / 16;
    border-radius: 20px;
    overflow: hidden;
    background: #000;
    position: relative;
    border: 1px solid var(--subtle);
    box-shadow: 0 24px 48px rgba(0,0,0,0.5);
    transition: transform 0.3s ease, border-color 0.3s ease;
  }
  .rg-video-wrap:hover { transform: translateY(-5px); border-color: var(--gold); }
  .rg-video-wrap iframe {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    border: none;
  }
  .rg-video-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin: 48px 0;
  }
  .rg-video-col { display: flex; flex-direction: column; align-items: center; }
  
  /* Link Lists */
  .rg-link-list { margin: 48px 0; border-top: 1px solid var(--subtle); }
  .rg-link-item {
    display: flex; align-items: center; justify-content: space-between;
    padding: 24px 0;
    border-bottom: 1px solid var(--subtle);
    text-decoration: none;
    color: var(--white);
    font-size: 18px;
    font-weight: 500;
    transition: color 0.2s, padding-left 0.2s;
  }
  .rg-link-item:hover { color: var(--gold); padding-left: 10px; }
  .rg-link-item-left { display: flex; align-items: center; gap: 20px; }
  .rg-link-item-num { font-size: 14px; color: var(--gold); font-weight: 700; width: 30px; }

  /* Course Sections */
  .rg-course-category { margin: 64px 0; }
  .rg-course-category-title {
    font-size: 14px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 24px;
    font-weight: 700;
  }
  .rg-course-item {
    display: flex; align-items: flex-start; gap: 16px;
    padding: 20px 0;
    border-bottom: 1px solid var(--subtle);
    text-decoration: none;
    color: var(--white);
    font-size: 17px;
    transition: color 0.2s;
  }
  .rg-course-item:hover { color: var(--gold); }
  .rg-course-icon { color: var(--gold); margin-top: 4px; flex-shrink: 0; }

  /* Options List */
  .rg-options { margin: 48px 0; }
  .rg-option {
    display: flex; gap: 24px;
    padding: 24px 0;
    border-bottom: 1px solid var(--subtle);
  }
  .rg-option:last-child { border-bottom: none; }
  .rg-option.active { 
    background: linear-gradient(90deg, rgba(246,185,0,0.08) 0%, transparent 100%); 
    padding: 32px; 
    border-radius: 12px; 
    border: 1px solid var(--border); 
  }
  .rg-option-num { color: var(--gold); font-weight: 700; font-size: 18px; }
  .rg-option-text { font-size: 17px; color: rgba(255,255,255,0.7); }
  .rg-option.active .rg-option-text { color: var(--white); font-weight: 500; }
  
  /* CTA */
  .rg-cta {
    text-align: center;
    padding: 160px 0 200px;
  }
  .rg-cta-icon { color: var(--gold); margin: 0 auto 40px; }
  .rg-cta h2 {
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 32px;
    line-height: 1.1;
  }
  .rg-cta-desc {
    font-size: 20px;
    max-width: 640px;
    margin: 0 auto 32px;
    color: var(--white);
  }
  .rg-cta-wish {
    font-size: 24px;
    font-weight: 700;
    color: var(--white);
  }
  .rg-cta-btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 12px;
    background: var(--gold);
    color: var(--bg);
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 24px 48px;
    border-radius: 50px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    margin-top: 32px;
    box-shadow: 0 10px 30px rgba(246,185,0,0.3);
  }
  .rg-cta-btn:hover { background: #fff; transform: translateY(-4px); box-shadow: 0 15px 40px rgba(255,255,255,0.4); }

  /* Mobile Adjustments */
  @media (max-width: 768px) {
    .rg-p { font-size: 16px; }
    .rg-video-grid { grid-template-columns: 1fr; gap: 48px; }
    .rg-step { flex-direction: column; gap: 12px; }
    .rg-step-num { margin-bottom: 8px; }
    .rg-cta {
      padding: 80px 0 120px;
    }
    .rg-cta-icon {
      margin: 0 auto 24px;
      width: 40px;
      height: 40px;
    }
    .rg-cta h2 {
      font-size: 36px;
      margin-bottom: 24px;
    }
    .rg-cta-desc {
      font-size: 16px;
      margin-bottom: 24px;
      padding: 0 16px;
    }
    .rg-cta-wish {
      font-size: 20px;
    }
    .rg-cta-btn {
      padding: 18px 32px;
      font-size: 14px;
      margin-top: 24px;
      width: 100%;
      max-width: 300px;
    }
  }
`;

/* ── Ambient Background (Refined Opacity) ── */
const FloatingTechBackground = () => {
  const [elements, setElements] = useState([]);
  useEffect(() => {
    const icons = [Hexagon, Plus, Circle, Cpu];
    const generated = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      size: Math.random() * 20 + 10,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      duration: Math.random() * 30 + 30,
    }));
    setElements(generated);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-dreamBg">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#f6b900 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute inset-0 opacity-[0.15]">
        {elements.map((el) => {
          const IconComponent = el.Icon;
          return (
            <motion.div
              key={el.id}
              initial={{ x: `${el.startX}vw`, y: `${el.startY}vh`, rotate: 0 }}
              animate={{ 
                y: [`${el.startY}vh`, `${el.startY - 10}vh`, `${el.startY}vh`],
                rotate: [0, 360]
              }}
              transition={{ duration: el.duration, repeat: Infinity, ease: "linear" }}
              className="absolute text-dreamGold"
            >
              <IconComponent size={el.size} strokeWidth={1} />
            </motion.div>
          );
        })}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#24101a_85%)]" />
    </div>
  );
};

/* ── Animation Wrappers ── */
const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const VideoEmbed = ({ src, title }) => (
  <div className="rg-video-wrap">
    {src ? (
      <iframe src={src} allow="autoplay; fullscreen; picture-in-picture" title={title} />
    ) : (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.3)' }}>
        <PlayCircle size={48} style={{ marginBottom: 16 }} />
        <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>{title} Placeholder</span>
      </div>
    )}
  </div>
);

export default function ResourceGuide() {
  const progressRef = useRef(null);
  const [leadForm, setLeadForm] = useState({ name: "", email: "" });
  const [leadStatus, setLeadStatus] = useState("idle");

  const inferIndustryFromUrl = () => {
    const host = window.location.hostname.toLowerCase();

    if (host.includes("construction") || host.includes("constructions") || host.includes("civil")) {
      return "construction-civil";
    }

    return "general";
  };

  const handleLeadChange = (event) => {
    const { name, value } = event.target;

    setLeadForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleLeadSubmit = async (event) => {
    event.preventDefault();
    setLeadStatus("submitting");

    const payload = {
      name: leadForm.name.trim(),
      email: leadForm.email.trim(),
      industry: inferIndustryFromUrl(),
      sourceUrl: window.location.href,
    };

    try {
      const response = await fetch("/.netlify/functions/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Lead submission failed");
      }

      setLeadStatus("success");
      setLeadForm({ name: "", email: "" });
    } catch (error) {
      setLeadStatus("error");
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.width = (scrolled / total) * 100 + "%";
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{css}</style>
      <div id="rg-root">
        <div ref={progressRef} className="rg-progress" />
        <FloatingTechBackground />

        <main className="rg-main">
          
          {/* ── HERO ── */}
          <section className="rg-hero rg-section">
            <FadeUp>
              <h1><span className="rg-gold">IT</span> Job Seekers 🇦🇺<span style={{display: 'none'}}>[cite: 1]</span></h1>
              <p className="rg-hero-sub">Not Much Aussie Experience? Try This!</p>
              <div className="rg-hero-divider" />
              <div className="rg-visa-badge">If you have 485, 189, 190, 500, 491, 191, 482, 186 Visa<span style={{display: 'none'}}>[cite: 1]</span></div>
            </FadeUp>
          </section>

          {/* ── INTRO ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-p" style={{ fontSize: 28, fontWeight: 500, marginBottom: 40 }}>Hey, It’s Methsara here from DreamShift :)<span style={{display: 'none'}}>[cite: 2]</span></p>
              <p className="rg-p">Since you are looking for IT Jobs, we gathered as many resources as possible to help your job search! Here’s Something you need to know:<span style={{display: 'none'}}>[cite: 2, 3]</span></p>
              <p className="rg-p">Let’s think you are applying for 100 Jobs on LinkedIn & Seek: Unfortunately, around <span className="rg-accent-red">65%</span> of the jobs you apply will get rejected.<span style={{display: 'none'}}>[cite: 3]</span></p>
              
              <div className="rg-callout">
                <p className="rg-p">That is the reality of Australian Job Market for Migrants! But don’t worry, you still have around <strong className="rg-accent">35 jobs</strong> you can apply for and land interviews! For these 35 Jobs, you will be competing with other Migrants like you.<span style={{display: 'none'}}>[cite: 4]</span></p>
              </div>
              
              <p className="rg-p" style={{ fontWeight: 500 }}>If you can do the following things, you can increase your chances of landing Interviews!<span style={{display: 'none'}}>[cite: 5]</span></p>
            </FadeUp>
          </section>

          {/* ── 01 PASSION PROJECTS ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">01 — Strategy</p>
              <h2 className="rg-title">Passion Projects<span style={{display: 'none'}}>[cite: 5]</span></h2>
              
              <p className="rg-video-label">Watch this first</p>
              <VideoEmbed src="https://player.vimeo.com/video/1190467338?badge=0&autopause=0&player_id=0&app_id=58479" title="Passion Projects" />

              <p className="rg-p" style={{ color: "var(--gold)", fontStyle: "italic", fontSize: 16 }}>*Tip: Try to do a passion project based on your state/city, because recruiters can relate to it more easily.<span style={{display: 'none'}}>[cite: 7]</span></p>
              
              <p className="rg-p" style={{ marginTop: 48, fontWeight: 500 }}>Here’s a simple guide on how to do a Passion Project and land more interviews:<span style={{display: 'none'}}>[cite: 7]</span></p>

              <div className="rg-steps">
                <div className="rg-step">
                  <span className="rg-step-num">Step 01</span>
                  <div className="rg-step-body">Go to ChatGPT (or any AI tools you use), upload your CV, and clearly mention your job preferences, like the job titles you’re targeting, the location, and the industry.<span style={{display: 'none'}}>[cite: 8]</span></div>
                </div>
                <div className="rg-step">
                  <span className="rg-step-num">Step 02</span>
                  <div className="rg-step-body">
                    Once you’ve shared those details, use this prompt:<span style={{display: 'none'}}>[cite: 9]</span>
                    <blockquote>“Suggest me project ideas that I can do online, which will help me land a job in the specific location and job titles I mentioned earlier.”<span style={{display: 'none'}}>[cite: 10]</span></blockquote>
                  </div>
                </div>
                <div className="rg-step">
                  <span className="rg-step-num">Step 03</span>
                  <div className="rg-step-body">Go through the ideas, brainstorm, pick the best one, tweak it based on your preferences, and start working on it.<span style={{display: 'none'}}>[cite: 11]</span></div>
                </div>
                <div className="rg-step">
                  <span className="rg-step-num">Step 04</span>
                  <div className="rg-step-body">As soon as you start, add it as an ongoing project.<span style={{display: 'none'}}>[cite: 12]</span> You don’t have to wait until it’s fully completed. Ongoing projects actually work better than listing them as finished ones..<span style={{display: 'none'}}>[cite: 13]</span></div>
                </div>
              </div>
            </FadeUp>
          </section>

          {/* ── 02 NETWORKING ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">02 — Strategy</p>
              <h2 className="rg-title">Networking Events<span style={{display: 'none'}}>[cite: 14]</span></h2>
              <p className="rg-p">A Huge Mistake, migrants make is staying in their own circles after coming to Australia. <strong className="rg-accent">Don’t be that guy!</strong><span style={{display: 'none'}}>[cite: 14]</span></p>
              <p className="rg-p">Go to as many IT networking events as possible, talk to more aussies in the IT Industry, because referrals can help you to land jobs much faster (Referrals can almost guarantee you interviews if your CV is good)<span style={{display: 'none'}}>[cite: 14]</span></p>

              <div className="rg-callout">
                <p className="rg-p">Here are 2 main websites you can check to find IT Networking Oppurtunities<span style={{display: 'none'}}>[cite: 15]</span></p>
              </div>

              <div className="rg-video-grid">
                <div className="rg-video-col">
                  <a href="https://www.meetup.com" target="_blank" rel="noreferrer" className="rg-video-label" style={{textDecoration: 'none', color: 'inherit'}}>Meetup.com<span style={{display: 'none'}}>[cite: 16]</span></a>
                  <VideoEmbed src="https://player.vimeo.com/video/1190741312?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" title="Meetup" />
                </div>
                <div className="rg-video-col">
                  <a href="https://lu.ma" target="_blank" rel="noreferrer" className="rg-video-label" style={{textDecoration: 'none', color: 'inherit'}}>Luma Events<span style={{display: 'none'}}>[cite: 16]</span></a>
                  <VideoEmbed src="https://player.vimeo.com/video/1190465027?badge=0&autopause=0&player_id=0&app_id=58479" title="Luma Events" />
                </div>
              </div>

              <div className="rg-link-list">
                <p className="rg-video-label" style={{ textAlign: "left", marginTop: 20 }}>Other Platforms you can check<span style={{display: 'none'}}>[cite: 18]</span></p>
                <a href="https://www.eventbrite.com.au/" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left"><span className="rg-link-item-num">01</span> Eventbrite Australia</div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
                <a href="https://www.acs.org.au/" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left"><span className="rg-link-item-num">02</span> ACS</div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
              </div>
            </FadeUp>
          </section>

          {/* ── 03 COURSES ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">03 — Strategy</p>
              <h2 className="rg-title">Online Courses & Certifications<span style={{display: 'none'}}>[cite: 19]</span></h2>
              <p className="rg-p" style={{ fontWeight: 500 }}>You have 3 Options<span style={{display: 'none'}}>[cite: 19]</span></p>

              <div className="rg-options">
                <div className="rg-option">
                  <span className="rg-option-num">1</span>
                  <p className="rg-option-text">Do Courses directly from Aussie Univeristies/Institutes - Expensive though :(<span style={{display: 'none'}}>[cite: 19]</span></p>
                </div>
                <div className="rg-option">
                  <span className="rg-option-num">2</span>
                  <p className="rg-option-text">Do Courses from online course sites like LinkedIn Learning, Alison - No courses from Australian universities though :(<span style={{display: 'none'}}>[cite: 20]</span></p>
                </div>
                <div className="rg-option active">
                  <span className="rg-option-num">3</span>
                  <div>
                    <p className="rg-p" style={{ marginBottom: 12, opacity: 0.8 }}>Or 3rd option - which is the best:<span style={{display: 'none'}}>[cite: 20]</span></p>
                    <p className="rg-p"><strong>Do Courses from Coursera but offered by Australian Universities</strong><span style={{display: 'none'}}>[cite: 20]</span> <br/><span className="rg-accent" style={{ display: 'inline-block', marginTop: 8 }}>We recommend Macquarie University (Sydney)</span><span style={{display: 'none'}}>[cite: 20]</span></p>
                  </div>
                </div>
              </div>

              {/* BA Category */}
              <div className="rg-course-category">
                <p className="rg-course-category-title">If you are into BA/Data Analyst Roles:<span style={{display: 'none'}}>[cite: 21]</span></p>
                <a href="https://www.coursera.org/learn/business-intelligence-data-analytics" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Business intelligence and data analytics: Generate insights<span style={{display: 'none'}}>[cite: 29]</span>
                </a>
                <a href="https://www.coursera.org/specializations/excel-data-analytics-visualization" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Excel Skills for Data Analytics and Visualization Specialization<span style={{display: 'none'}}>[cite: 30]</span>
                </a>
                <a href="https://www.coursera.org/learn/excel-data-analysis-fundamentals" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Excel Fundamentals for Data Analysis<span style={{display: 'none'}}>[cite: 31]</span>
                </a>
                <a href="https://www.coursera.org/learn/excel-power-tools" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Excel Power Tools for Data Analysis<span style={{display: 'none'}}>[cite: 32]</span>
                </a>
              </div>

              {/* Cyber Category */}
              <div className="rg-course-category">
                <p className="rg-course-category-title">If you are into CyberSecurity Roles:<span style={{display: 'none'}}>[cite: 21]</span></p>
                <a href="https://www.coursera.org/learn/cyber-security-essentials" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Cyber Security: Essentials<span style={{display: 'none'}}>[cite: 42]</span>
                </a>
                <a href="https://www.coursera.org/learn/cyber-security-essentials-workplace" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Cyber Security: Essentials for Workplace<span style={{display: 'none'}}>[cite: 43]</span>
                </a>
                <a href="https://www.coursera.org/learn/cyber-security-digital-forensics" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Cyber Security: Digital Forensics<span style={{display: 'none'}}>[cite: 45]</span>
                </a>
                <a href="https://www.coursera.org/learn/cyber-security-applied-cryptography" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Cyber Security: Applied Cryptography<span style={{display: 'none'}}>[cite: 46]</span>
                </a>
              </div>

              {/* AI Category */}
              <div className="rg-course-category">
                <p className="rg-course-category-title">AI / Machine Learning & AI Security<span style={{display: 'none'}}>[cite: 62]</span></p>
                <a href="https://www.coursera.org/learn/cyber-security-application-of-ai" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Cyber Security: Application of AI<span style={{display: 'none'}}>[cite: 63]</span>
                </a>
                <a href="https://www.coursera.org/learn/mq-csa-ai-for-cyber-security" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> AI for Cyber Security<span style={{display: 'none'}}>[cite: 64]</span>
                </a>
                <a href="https://www.coursera.org/learn/cyber-security-security-ai" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Cyber Security: Security of AI<span style={{display: 'none'}}>[cite: 65]</span>
                </a>
                <a href="https://www.coursera.org/specializations/cyber-security-essentials-for-ai" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" /> Cyber Security: Essentials for AI Specialization<span style={{display: 'none'}}>[cite: 66]</span>
                </a>
              </div>

              <a href="https://www.coursera.org/partners/macquarie" target="_blank" rel="noreferrer" style={{ fontSize: 14, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.15em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, marginTop: 24, fontWeight: 700 }}>
                View all Macquarie courses <ExternalLink size={16} />
              </a>
            </FadeUp>
          </section>

          {/* ── 04 VOLUNTEERING ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">04 — Strategy</p>
              <h2 className="rg-title">Volunteering<span style={{display: 'none'}}>[cite: 21]</span></h2>
              <p className="rg-p">Yes, Volunteering!<span style={{display: 'none'}}>[cite: 21]</span> Aussie recruiters say they love migrants who have done volunteering because it shows that you are actively contributing to Australian communities.<span style={{display: 'none'}}>[cite: 22]</span></p>
              <p className="rg-p">We recently had multiple clients like you, who got IT volunteer roles related to SE, QA & BA, Also the best part is that recruiters will think that you are a nice person 😉<span style={{display: 'none'}}>[cite: 22]</span></p>

              <p className="rg-video-label" style={{ marginTop: 64 }}>Watch this first</p>
              <VideoEmbed src="https://player.vimeo.com/video/1209435820?badge=0&autopause=0&player_id=0&app_id=58479" title="Best Website to find Volunteering Roles in Australia if you don't have local job experience" />

              <div className="rg-link-list">
                <p className="rg-video-label" style={{ textAlign: "left", marginTop: 20 }}>There are 2 Main Volunteer Sites:<span style={{display: 'none'}}>[cite: 22]</span></p>
                <a href="https://www.seekvolunteer.com.au/" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left"><span className="rg-link-item-num">1</span> Seek Volunteer<span style={{display: 'none'}}>[cite: 23]</span></div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
                <a href="https://govolunteer.com.au/" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left"><span className="rg-link-item-num">2</span> GoVolunteer<span style={{display: 'none'}}>[cite: 23]</span></div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
              </div>

              <p className="rg-p">Both of the sites have volunteering opportunities from one time ones to long term projects.<span style={{display: 'none'}}>[cite: 23]</span> But you can also find opportunities relevant to IT here :)<span style={{display: 'none'}}>[cite: 23]</span></p>

              <div className="rg-callout">
                <p className="rg-p">Now click here and don’t forget to select <strong className="rg-accent">“IT & Web Development”</strong> under “Type of work”<span style={{display: 'none'}}>[cite: 24]</span></p>
              </div>
            </FadeUp>
          </section>

          {/* ── CTA ── */}
          <section className="rg-section rg-cta">
            <FadeUp>
              <Sparkles size={56} className="rg-cta-icon" />
              <p className="rg-num" style={{ marginBottom: 28 }}>Before You Go</p>
              <h2>We have created a 3 Way Job Search Strategy!</h2>
              <p className="rg-p rg-cta-desc">By working with 200+ job seekers in Australia, we created a step-by-step guide on 3 strategies people use to land interviews faster. Drop your email and we&apos;ll send it to you for totally free!</p>

              <form className="rg-form" onSubmit={handleLeadSubmit}>
                <div className="rg-form-row">
                  <input className="rg-input" type="text" name="name" placeholder="Name" aria-label="Name" value={leadForm.name} onChange={handleLeadChange} required />
                  <input className="rg-input" type="email" name="email" placeholder="Email" aria-label="Email" value={leadForm.email} onChange={handleLeadChange} required />
                </div>
                <button className="rg-cta-btn" type="submit" disabled={leadStatus === "submitting"}>
                  {leadStatus === "submitting" ? "Sending..." : "Send Me the Guide"}
                  <ChevronRight size={20} />
                </button>
                {leadStatus === "success" ? <p className="rg-p" style={{ marginTop: 8, color: "var(--gold)" }}>Thanks. We&apos;ll send the guide shortly.</p> : null}
                {leadStatus === "error" ? <p className="rg-p" style={{ marginTop: 8, color: "#ffb7b7" }}>Something went wrong. Please try again.</p> : null}
              </form>
            </FadeUp>
          </section>
        </main>
      </div>
    </>
  );
}