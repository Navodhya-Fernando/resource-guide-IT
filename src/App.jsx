import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Sparkles, ChevronRight, ExternalLink, Hexagon, Plus, Circle, 
  Cpu, Briefcase, Users, ShieldCheck, BrainCircuit, HeartHandshake, PlayCircle
} from 'lucide-react';

// --- UI Variants ---
const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

// --- Ambient Tech Background (25% Opacity) ---
const FloatingTechBackground = () => {
  const [elements, setElements] = useState([]);
  useEffect(() => {
    const icons = [Hexagon, Plus, Circle, Cpu];
    const generated = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      size: Math.random() * 25 + 10,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      duration: Math.random() * 25 + 25,
    }));
    setElements(generated);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-dreamBg overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#f6b900 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      <div className="absolute inset-0 opacity-25">
        {elements.map((el) => {
          const IconComponent = el.Icon;
          return (
            <motion.div
              key={el.id}
              initial={{ x: `${el.startX}vw`, y: `${el.startY}vh`, rotate: 0 }}
              animate={{ 
                y: [`${el.startY}vh`, `${el.startY - 15}vh`, `${el.startY}vh`],
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#24101a_90%)]" />
    </div>
  );
};

// --- 1080x1920 Reel Embed Component ---
const ReelEmbed = ({ src, title }) => (
  <div className="w-full max-w-[280px] md:max-w-[320px] mx-auto aspect-[9/16] bg-black/40 rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl">
    {src ? (
      <iframe 
        src={src} 
        frameBorder="0" 
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
        className="absolute top-0 left-0 w-full h-full"
        title={title}
      ></iframe>
    ) : (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-gray-500">
        <PlayCircle size={48} className="mb-4 text-white/20" />
        <span className="text-xs tracking-widest uppercase font-medium">{title} <br/><br/>(Embed Placeholder)</span>
      </div>
    )}
  </div>
);

export default function ResourceGuide() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="relative bg-dreamBg text-white font-['Inter',_sans-serif] selection:bg-dreamGold/30 selection:text-white antialiased">
      
      <FloatingTechBackground />

      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-[3px] bg-dreamGold origin-left z-50" />

      {/* Persistent Bottom Lockup */}
      <div className="fixed bottom-6 left-8 z-50 flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-500 hidden md:flex">
        <img src="/dreamshift-logo.png" alt="Logo" className="h-5 object-contain" />
        <div className="h-4 w-px bg-white/20" />
        <span className="text-[10px] font-medium tracking-[0.2em] text-gray-400 uppercase mt-0.5">All Rights Reserved</span>
      </div>

      <div ref={containerRef} className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth relative z-10">
        
        {/* SLIDE 1: HERO */}
        <section className="min-h-screen w-full snap-start snap-always flex flex-col items-center justify-center px-4 md:px-6 py-20 relative">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" className="max-w-4xl w-full text-center">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-2">
              <span className="text-dreamGold">IT</span> Professionals
            </h1>
            <p className="text-xl md:text-3xl text-gray-400 font-light tracking-[0.2em] uppercase mb-12">Resource Guide</p>
            <div className="h-px w-24 bg-dreamGold/30 mx-auto mb-10" />
            <p className="text-sm md:text-base text-gray-400 tracking-wide font-medium bg-white/5 inline-block px-6 py-3 rounded-full border border-white/5">
              If you have 485, 189, 190, 500, 491, 191, 482, 186 Visa
            </p>
          </motion.div>
        </section>

        {/* SLIDE 2: INTRO & REALITY */}
        <section className="min-h-screen w-full snap-start snap-always flex items-center justify-center px-4 md:px-6 py-32 bg-gradient-to-b from-transparent to-black/20">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" className="max-w-4xl w-full">
            <div className="space-y-8 text-lg text-gray-300 font-light leading-relaxed">
              <p className="text-2xl md:text-3xl text-white font-medium mb-8">Hey, It’s Methsara here from DreamShift :)</p>
              <p>Since you are looking for IT Jobs, we gathered as many resources as possible to help your job search!</p>
              
              <div className="bg-dreamBg/80 p-8 md:p-12 rounded-[2rem] border border-white/5 mt-10 backdrop-blur-md shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-dreamGold mb-8">Here’s Something you need to know:</h3>
                <p className="mb-6">Let’s think you are applying for 100 Jobs on LinkedIn & Seek:</p>
                <div className="bg-black/30 p-6 rounded-2xl border-l-4 border-red-500 mb-6">
                  <p className="text-white text-xl font-medium">Unfortunately, around <span className="text-red-400 font-bold">65%</span> of the jobs you apply will get rejected.</p>
                </div>
                <p className="mb-6 text-gray-400">That is the reality of Australian Job Market for Migrants!</p>
                <p className="mb-6 text-white font-medium">But don’t worry, you still have around <span className="text-dreamGold font-bold text-2xl">35</span> jobs you can apply for and land interviews!</p>
                <p>For these 35 Jobs, you will be competing with other Migrants like you.</p>
              </div>
              
              <div className="bg-dreamGold text-dreamBg p-6 rounded-2xl font-bold text-lg md:text-xl text-center shadow-[0_0_30px_rgba(246,185,0,0.2)]">
                If you can do the following things, you can increase your chances of landing Interviews!
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 3: PASSION PROJECTS */}
        <section className="min-h-screen w-full snap-start snap-always py-32 flex items-center justify-center px-4 md:px-6">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" className="max-w-6xl w-full">
            <div className="w-full text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight"><span className="text-dreamGold">1)</span> <span>Passion Projects</span></h2>
            </div>
            
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 text-center">
                <p className="text-lg text-gray-400 font-light mb-6">Check this video first:</p>
                <ReelEmbed src="https://player.vimeo.com/video/1190467338?badge=0&autopause=0&player_id=0&app_id=58479" title="Passion Projects" />
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="bg-dreamGold/10 border-l-2 border-dreamGold p-6 rounded-r-xl backdrop-blur-sm mb-10">
                  <p className="text-dreamGold text-sm font-medium leading-relaxed italic">
                    *Tip: Try to do a passion project based on your state/city, because recruiters can relate to it more easily.
                  </p>
                </div>

                <p className="text-xl text-white font-medium mb-8">Here’s a simple guide on how to do a Passion Project and land more interviews:</p>

                <div className="space-y-4">
                  {[
                    { s: "Step 1", t: "Go to ChatGPT (or any AI tools you use), upload your CV, and clearly mention your job preferences, like the job titles you’re targeting, the location, and the industry." },
                    { s: "Step 2", t: "Once you’ve shared those details, use this prompt:", quote: "“Suggest me project ideas that I can do online, which will help me land a job in the specific location and job titles I mentioned earlier.”" },
                    { s: "Step 3", t: "Go through the ideas, brainstorm, pick the best one, tweak it based on your preferences, and start working on it." },
                    { s: "Step 4", t: "As soon as you start, add it as an ongoing project. You don’t have to wait until it’s fully completed. Ongoing projects actually work better than listing them as finished ones." }
                  ].map((item, i) => (
                    <div key={i} className="bg-dreamCard/20 p-6 md:p-8 rounded-3xl border border-white/5 flex flex-col md:flex-row gap-6 items-start hover:border-dreamGold/30 transition-colors shadow-lg">
                      <div className="bg-dreamBg/80 border border-dreamGold text-dreamGold px-4 py-2 rounded-xl text-xs font-bold shrink-0 tracking-widest uppercase">{item.s}</div>
                      <div className="w-full">
                        <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">{item.t}</p>
                        {item.quote && (
                          <blockquote className="mt-4 p-5 bg-black/40 border-l-2 border-dreamGold rounded-r-xl text-white font-medium text-sm leading-relaxed">
                            {item.quote}
                          </blockquote>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 4: NETWORKING */}
        <section className="min-h-screen w-full snap-start snap-always py-32 flex items-center justify-center px-4 md:px-6 bg-gradient-to-t from-transparent to-black/20">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" className="max-w-6xl w-full">
            <div className="w-full text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight"><span className="text-dreamGold">2)</span> <span>Networking Events</span></h2>
            </div>

            <div className="bg-dreamBg/60 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md max-w-3xl mx-auto mb-12">
                <p className="text-lg text-gray-300 font-light leading-relaxed mb-6">
                  A Huge Mistake, migrants make is staying in their own circles after coming to Australia.
                </p>
                <p className="text-xl text-white font-bold mb-6">Don’t be that guy!</p>
                <p className="text-lg text-gray-300 font-light leading-relaxed">
                  Go to as many IT networking events as possible, talk to more aussies in the IT Industry, because referrals can help you to land jobs much faster (Referrals can almost guarantee you interviews if your CV is good)
                </p>
              </div>

            <p className="text-lg md:text-xl text-gray-300 font-light text-center mb-16">Here are 2 main websites you can check to find IT networking opportunities</p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="flex flex-col items-center bg-dreamCard/20 p-8 rounded-[2rem] border border-white/5 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-8">Meetup.com</h3>
                <ReelEmbed src="" title="Meetup.com Video" />
              </div>
              <div className="flex flex-col items-center bg-dreamCard/20 p-8 rounded-[2rem] border border-white/5 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-8">Luma Events</h3>
                <ReelEmbed src="https://player.vimeo.com/video/1190465027?badge=0&autopause=0&player_id=0&app_id=58479" title="Luma Events" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm text-gray-400 bg-black/30 py-3 px-6 rounded-full border border-white/10 w-max mx-auto">
               <span>Other Platforms you can check:</span>
               <div className="flex gap-4">
                 <a href="https://www.eventbrite.com.au/" target="_blank" rel="noreferrer" className="text-white hover:text-dreamGold transition-colors font-semibold flex items-center gap-1">Eventbrite Australia <ExternalLink size={12}/></a>
                 <span className="text-white/20">|</span>
                 <a href="https://www.acs.org.au/" target="_blank" rel="noreferrer" className="text-white hover:text-dreamGold transition-colors font-semibold flex items-center gap-1">ACS <ExternalLink size={12}/></a>
               </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 5: COURSES */}
        <section className="min-h-screen w-full snap-start snap-always py-32 flex items-center justify-center px-4 md:px-6">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" className="max-w-6xl w-full">
            <div className="w-full text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight"><span className="text-dreamGold">3)</span> <span>Online Courses & Certifications</span></h2>
            </div>

            <div className="w-full max-w-4xl mx-auto text-left bg-dreamBg/60 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md shadow-lg mb-20">
                <p className="text-xl font-medium text-white mb-6">You have 3 Options</p>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start opacity-50">
                    <span className="text-dreamGold font-bold">1)</span>
                    <p className="font-light">Do Courses directly from Aussie Univeristies/Institutes - Expensive though :(</p>
                  </li>
                  <li className="flex gap-4 items-start opacity-50">
                    <span className="text-dreamGold font-bold">2)</span>
                    <p className="font-light">Do Courses from online course sites like LinkedIn Learning, Alison - No courses from Australian universities though :(</p>
                  </li>
                </ul>
                <div className="mt-8 bg-dreamGold/10 p-6 md:p-8 rounded-2xl border border-dreamGold/30">
                  <p className="text-white font-medium mb-2">Or 3rd option - which is the best:</p>
                  <div className="flex gap-4 items-start">
                    <span className="text-dreamGold font-bold text-2xl">3)</span>
                    <div>
                      <p className="text-gray-200 font-light text-lg mb-4">Do Courses from Coursera but offered by Australian Universities</p>
                      <p className="text-dreamGold font-bold text-xl tracking-tight bg-black/40 inline-block px-4 py-2 rounded-lg">We recommend Macquarie University (Sydney)</p>
                    </div>
                  </div>
                </div>
              </div>

            {/* Course Grids */}
            <div className="grid md:grid-cols-3 gap-8 w-full">
              
              {/* BA Card */}
              <div className="bg-dreamCard/30 p-8 rounded-[2rem] border border-white/5 hover:border-dreamGold/30 transition-all flex flex-col h-full shadow-lg">
                <Briefcase className="text-dreamGold mb-6" size={32} />
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">If you are into BA/Data Analyst Roles:</h3>
                <ul className="space-y-4 mb-8 text-sm font-light text-gray-300 flex-grow">
                  <li><a href="https://www.coursera.org/learn/business-intelligence-data-analytics" target="_blank" rel="noreferrer" className="hover:text-dreamGold transition-colors block leading-relaxed">• Business intelligence and data analytics: Generate insights</a></li>
                  <li><a href="https://www.coursera.org/specializations/excel-data-analytics-visualization" target="_blank" rel="noreferrer" className="hover:text-dreamGold transition-colors block leading-relaxed">• Excel Skills for Data Analytics and Visualization</a></li>
                  <li><a href="https://www.coursera.org/learn/excel-data-analysis-fundamentals" target="_blank" rel="noreferrer" className="hover:text-dreamGold transition-colors block leading-relaxed">• Excel Fundamentals for Data Analysis</a></li>
                  <li><a href="https://www.coursera.org/learn/excel-power-tools" target="_blank" rel="noreferrer" className="hover:text-dreamGold transition-colors block leading-relaxed">• Excel Power Tools for Data Analysis</a></li>
                </ul>
                <a href="https://www.coursera.org/partners/macquarie" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-white/5 hover:bg-dreamGold hover:text-dreamBg text-white px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all mt-auto w-full">
                  View More <ExternalLink size={14}/>
                </a>
              </div>

              {/* Cyber Card */}
              <div className="bg-dreamCard/30 p-8 rounded-[2rem] border border-white/5 hover:border-dreamGold/30 transition-all flex flex-col h-full shadow-lg">
                <ShieldCheck className="text-dreamGold mb-6" size={32} />
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">If you are into CyberSecurity Roles:</h3>
                <ul className="space-y-4 mb-8 text-sm font-light text-gray-300 flex-grow">
                  <li><a href="https://www.coursera.org/learn/cyber-security-essentials" target="_blank" rel="noreferrer" className="hover:text-dreamGold transition-colors block leading-relaxed">• Cyber Security: Essentials</a></li>
                  <li><a href="https://www.coursera.org/learn/cyber-security-essentials-workplace" target="_blank" rel="noreferrer" className="hover:text-dreamGold transition-colors block leading-relaxed">• Cyber Security: Essentials for Workplace</a></li>
                  <li><a href="https://www.coursera.org/learn/cyber-security-digital-forensics" target="_blank" rel="noreferrer" className="hover:text-dreamGold transition-colors block leading-relaxed">• Cyber Security: Digital Forensics</a></li>
                  <li><a href="https://www.coursera.org/learn/cyber-security-applied-cryptography" target="_blank" rel="noreferrer" className="hover:text-dreamGold transition-colors block leading-relaxed">• Cyber Security: Applied Cryptography</a></li>
                </ul>
                <a href="https://www.coursera.org/partners/macquarie" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-white/5 hover:bg-dreamGold hover:text-dreamBg text-white px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all mt-auto w-full">
                  View More <ExternalLink size={14}/>
                </a>
              </div>

              {/* AI Card */}
              <div className="bg-dreamCard/30 p-8 rounded-[2rem] border border-white/5 hover:border-dreamGold/30 transition-all flex flex-col h-full shadow-lg">
                <BrainCircuit className="text-dreamGold mb-6" size={32} />
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">If you are into AI Roles:</h3>
                <ul className="space-y-4 mb-8 text-sm font-light text-gray-300 flex-grow">
                  <li><a href="https://www.coursera.org/learn/cyber-security-application-of-ai" target="_blank" rel="noreferrer" className="hover:text-dreamGold transition-colors block leading-relaxed">• Cyber Security: Application of AI</a></li>
                  <li><a href="https://www.coursera.org/learn/mq-csa-ai-for-cyber-security" target="_blank" rel="noreferrer" className="hover:text-dreamGold transition-colors block leading-relaxed">• AI for Cyber Security</a></li>
                  <li><a href="https://www.coursera.org/learn/cyber-security-security-ai" target="_blank" rel="noreferrer" className="hover:text-dreamGold transition-colors block leading-relaxed">• Cyber Security: Security of AI</a></li>
                  <li><a href="https://www.coursera.org/specializations/cyber-security-essentials-for-ai" target="_blank" rel="noreferrer" className="hover:text-dreamGold transition-colors block leading-relaxed">• Cyber Security: Essentials for AI</a></li>
                </ul>
                <a href="https://www.coursera.org/partners/macquarie" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-white/5 hover:bg-dreamGold hover:text-dreamBg text-white px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all mt-auto w-full">
                  View More <ExternalLink size={14}/>
                </a>
              </div>

            </div>
          </motion.div>
        </section>

        {/* SLIDE 6: VOLUNTEERING */}
        <section className="min-h-screen w-full snap-start snap-always py-32 flex items-center justify-center px-4 md:px-6 bg-gradient-to-b from-transparent to-black/30">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" className="max-w-6xl w-full">
            <div className="w-full text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight"><span className="text-dreamGold">4)</span> <span>Volunteering</span></h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              <div className="lg:col-span-6 space-y-8">
                <div className="bg-dreamBg/60 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-md shadow-lg">
                  <p className="text-2xl text-dreamGold font-bold mb-6 flex items-center gap-3"><HeartHandshake size={28} /> Yes, Volunteering!</p>
                  <p className="text-lg text-gray-300 font-light leading-relaxed mb-6">
                    Aussie recruiters say they love migrants who have done volunteering because it shows that you are actively contributing to Australian communities.
                  </p>
                  <p className="text-lg text-gray-300 font-light leading-relaxed mb-6">
                    We recently had multiple clients like you, who got IT volunteer roles related to SE, QA & BA,
                  </p>
                  <p className="text-lg text-white font-medium leading-relaxed">
                    Also the best part is that recruiters will think that you are a nice person 😉
                  </p>
                </div>

                <div className="bg-dreamCard/20 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-md shadow-lg">
                  <p className="text-xl font-medium text-white mb-6">There are 2 Main Volunteer Sites:</p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <a href="https://www.seekvolunteer.com.au/" target="_blank" rel="noreferrer" className="flex-1 bg-black/40 py-4 px-6 rounded-2xl border border-white/10 hover:border-dreamGold/60 transition-all duration-300 text-white hover:text-dreamGold font-bold text-sm shadow-md flex items-center justify-between">
                      1. Seek Volunteer <ExternalLink size={16}/>
                    </a>
                    <a href="https://govolunteer.com.au/" target="_blank" rel="noreferrer" className="flex-1 bg-black/40 py-4 px-6 rounded-2xl border border-white/10 hover:border-dreamGold/60 transition-all duration-300 text-white hover:text-dreamGold font-bold text-sm shadow-md flex items-center justify-between">
                      2. GoVolunteer <ExternalLink size={16}/>
                    </a>
                  </div>
                  <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
                    Both of the sites have volunteering opportunities from one time ones to long term projects.
                  </p>
                  <p className="text-white font-medium">
                    But you can also find opportunities relevant to IT here :)
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col items-center">
                <p className="text-xl text-white font-medium mb-6">Check this video first</p>
                <ReelEmbed src="https://player.vimeo.com/video/1190465373?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" title="Seek Volunteer Video" />
                
                <div className="mt-8 bg-dreamGold/10 border border-dreamGold/40 p-6 rounded-2xl relative overflow-hidden shadow-lg w-full max-w-[320px] text-center">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-dreamGold to-dreamGold/50"></div>
                  <p className="text-white text-sm font-light leading-relaxed">
                    Now click here and don’t forget to select <br/><strong className="text-dreamGold font-bold text-base mt-2 inline-block">“IT & Web Development”</strong><br/> under “Type of work”
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </section>

        {/* SLIDE 7: CTA */}
        <section className="h-screen w-full snap-start snap-always flex flex-col items-center justify-center px-4 md:px-6">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" className="text-center max-w-3xl">
            <Sparkles className="text-dreamGold mb-8 mx-auto" size={40} />
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Happy Job Search!</h2>
            <p className="text-base md:text-lg text-gray-300 font-light mb-12 leading-relaxed">
              These are the main resources we recommend. Feel free to contact us at <a href="#" className="text-dreamGold font-semibold hover:text-dreamGold/80 transition-colors">dreamshift.net</a> for additional support.
            </p>
            <motion.a 
              whileHover={{ scale: 1.08 }} 
              whileTap={{ scale: 0.96 }}
              href="https://dreamshift.net"
              className="inline-flex items-center gap-3 bg-dreamGold text-dreamBg px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl transition-all duration-300 hover:shadow-dreamGold/40 hover:bg-opacity-90"
            >
              Visit DreamShift.net
              <ChevronRight size={18} />
            </motion.a>
          </motion.div>
        </section>

      </div>
    </div>
  );
}