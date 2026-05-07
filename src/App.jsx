import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { PlayCircle, Sparkles, ChevronRight, ExternalLink, Hexagon, Plus, Circle, Cpu, Image as ImageIcon, Briefcase, Users, ShieldCheck, BrainCircuit, Code2, HeartHandshake } from 'lucide-react';

// --- Premium Scroll Reveal Configuration ---
const revealVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

// --- Floating Tech Elements Background (25% Opacity) ---
const FloatingTechElements = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const icons = [Hexagon, Plus, Circle, Cpu];
    const generated = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      size: Math.random() * 30 + 10,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 5,
    }));
    setElements(generated);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-dreamBg opacity-[0.18]">
      <div className="absolute inset-0 opacity-[0.06] blur-[0.5px]" 
           style={{ backgroundImage: 'radial-gradient(#f6b900 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      {elements.map((el) => {
        const IconComponent = el.Icon;
        return (
          <motion.div
            key={el.id}
            initial={{ x: `${el.startX}vw`, y: `${el.startY}vh`, opacity: 0, rotate: 0 }}
            animate={{ 
              x: [`${el.startX}vw`, `${el.startX + (Math.random() * 10 - 5)}vw`, `${el.startX}vw`], 
              y: [`${el.startY}vh`, `${el.startY - 20}vh`, `${el.startY}vh`],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: el.duration, delay: el.delay, repeat: Infinity, ease: "linear" }}
            className="absolute text-dreamGold drop-shadow-[0_0_8px_rgba(246,185,0,0.5)]"
          >
            <IconComponent size={el.size} strokeWidth={1} />
          </motion.div>
        );
      })}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--tw-gradient-stops))] from-transparent to-dreamBg/95"></div>
    </div>
  );
};

// --- 9:16 Reel/TikTok Style Video Frame ---
const VideoFrame = ({ title }) => (
  <motion.div 
    whileHover={{ scale: 1.02, borderColor: '#f6b900' }}
    className="w-full max-w-[320px] mx-auto aspect-[9/16] bg-gradient-to-br from-black/70 via-black/55 to-dreamBg/50 rounded-[2rem] border border-dreamCard/50 overflow-hidden relative group shadow-[0_24px_80px_rgba(0,0,0,0.45)] flex flex-col items-center justify-center cursor-pointer transition-all backdrop-blur-md"
  >
    <PlayCircle size={56} className="text-dreamCard group-hover:text-dreamGold transition-colors absolute z-10 drop-shadow-[0_0_18px_rgba(246,185,0,0.2)]" />
    <div className="absolute inset-0 bg-gradient-to-t from-dreamBg/90 to-transparent"></div>
    <span className="text-gray-300 font-light tracking-widest text-[10px] uppercase absolute bottom-6 z-10 text-center px-4">
      {title} <br/> (Embed Placeholder)
    </span>
  </motion.div>
);

export default function ResourceGuide() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="relative bg-dreamBg text-white font-sans overflow-hidden">
      
      <FloatingTechElements />

      {/* Top Horizontal Scroll Progress Bar */}
      <motion.div 
        style={{ scaleX }} 
        className="fixed top-0 left-0 right-0 h-1.5 bg-dreamGold origin-left z-50 shadow-[0_0_15px_rgba(246,185,0,0.6)]" 
      />

      {/* Persistent Bottom Brand Lockup */}
      <div className="hidden sm:flex fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 items-center gap-3 md:gap-4 opacity-85 hover:opacity-100 transition-all duration-300 bg-dreamBg/75 backdrop-blur-xl border border-dreamGold/20 rounded-full px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <img src="/dreamshift-logo.png" alt="DreamShift Logo" className="h-8 md:h-9 object-contain drop-shadow-[0_0_12px_rgba(246,185,0,0.18)]" />
        <div className="h-5 md:h-6 w-px bg-dreamGold/25"></div>
        <span className="text-[10px] md:text-[11px] font-medium tracking-[0.28em] text-gray-100 uppercase mt-0.5 whitespace-nowrap">
          © 2026 All Rights Reserved
        </span>
      </div>

      {/* --- Main Scroll Container --- */}
      <div ref={containerRef} className="h-screen w-full overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth relative z-10 pb-8">
        
        {/* 0. HERO SECTION */}
        <section className="h-screen w-full snap-start snap-always flex flex-col items-center justify-center px-4 sm:px-6">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} className="max-w-5xl w-full text-center">
            
            <div className="inline-block px-4 sm:px-5 py-2 rounded-full border border-dreamGold/30 bg-dreamGold/5 text-dreamGold text-[10px] sm:text-sm tracking-[0.28em] uppercase mb-8 sm:mb-10 backdrop-blur-md font-semibold shadow-[0_0_30px_rgba(246,185,0,0.08)]">
              Visas: 485, 189, 190, 500, 491, 191, 482, 186
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight leading-[1.05] drop-shadow-2xl">
              <span className="text-dreamGold block">IT Professionals</span>
              <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-300 font-light mt-3 sm:mt-4">Resource Guide</span>
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-gray-300 font-light max-w-2xl sm:max-w-3xl mx-auto leading-relaxed border-t border-white/10 pt-6 sm:pt-8 mt-6 sm:mt-8">
              Hey, It’s Methsara here from DreamShift. Since you are looking for IT Jobs, we gathered as many resources as possible to help your job search!
            </p>
          </motion.div>
        </section>

        {/* 0.5 REALITY CHECK SECTION */}
        <section className="min-h-screen w-full snap-start snap-always flex flex-col items-center justify-center px-4 sm:px-6 py-20 sm:py-28 bg-gradient-to-b from-transparent via-black/5 to-black/20">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} className="max-w-4xl w-full flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dreamGold mb-8 sm:mb-12 drop-shadow-lg leading-tight">Here’s Something you need to know:</h2>
            
            <div className="grid gap-5 sm:gap-6 w-full mb-8 sm:mb-10">
              <div className="text-sm sm:text-lg md:text-xl text-gray-300 font-light space-y-5 sm:space-y-6 leading-relaxed bg-gradient-to-br from-dreamBg/65 to-dreamCard/35 p-5 sm:p-8 rounded-3xl backdrop-blur-md border border-white/5 shadow-2xl w-full">
                <p>Let’s think you are applying for 100 Jobs on LinkedIn & Seek: Unfortunately, around <strong className="text-white">65% of the jobs you apply will get rejected.</strong></p>
                <p>That is the reality of Australian Job Market for Migrants! But don’t worry, you still have around 35 jobs you can apply for and land interviews! For these 35 Jobs, you will be competing with other Migrants like you.</p>
              </div>
            
              <div className="bg-gradient-to-br from-dreamCard/55 to-dreamCard/20 p-6 sm:p-10 rounded-3xl border border-dreamGold/10 backdrop-blur-md shadow-2xl relative overflow-hidden w-full">
                <div className="absolute top-0 right-0 w-40 h-40 bg-dreamGold/10 rounded-full blur-3xl"></div>
                <p className="text-base sm:text-2xl leading-snug font-medium relative z-10 max-w-3xl mx-auto">
                  If you can do the following things, you can <span className="text-dreamGold drop-shadow-md">increase your chances</span> of landing Interviews!
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 1. PASSION PROJECTS */}
        <section className="min-h-screen w-full snap-start snap-always flex flex-col items-center justify-center py-20 sm:py-24 md:py-28 px-4 sm:px-6">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.1 }} className="max-w-6xl w-full">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-14">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-dreamGold">1)</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-center">Passion Projects</h2>
            </div>

            <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 xl:gap-10 items-stretch mb-10 sm:mb-12">
              <div className="lg:col-span-2 flex flex-col justify-center gap-5 sm:gap-6 bg-gradient-to-br from-dreamBg/50 to-dreamCard/20 p-5 sm:p-8 rounded-[2rem] border border-white/5 backdrop-blur-md shadow-xl">
                <p className="text-sm sm:text-lg text-gray-300 font-light">Check this video first:</p>
                <div className="bg-gradient-to-br from-dreamGold/10 to-transparent border-l-4 border-dreamGold p-6 rounded-r-2xl backdrop-blur-sm shadow-lg">
                  <p className="text-dreamGold font-medium text-xs sm:text-sm leading-relaxed">*Tip: Try to do a passion project based on your state/city, because recruiters can relate to it more easily. Here’s a simple guide on how to do a Passion Project and land more interviews:</p>
                </div>
              </div>
              <div className="lg:col-span-3 flex justify-center bg-gradient-to-br from-dreamCard/40 to-dreamCard/10 p-4 sm:p-6 rounded-[2rem] border border-dreamCard/40 backdrop-blur-md shadow-xl">
                <VideoFrame title="Our Passion Project Video" />
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 bg-gradient-to-br from-dreamCard/45 to-dreamCard/15 p-5 sm:p-8 rounded-[2rem] border border-dreamCard/40 backdrop-blur-md shadow-2xl">
              <div className="flex gap-3 sm:gap-4 items-start bg-dreamBg/35 p-4 sm:p-5 rounded-2xl border border-white/5 shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-dreamBg border border-dreamGold flex items-center justify-center text-dreamGold font-bold shrink-0 text-sm sm:text-base">1</div>
                <div className="pt-1 text-gray-300 font-light text-sm sm:text-lg">
                  <span className="font-bold text-white mr-2">Step 1:</span>Go to ChatGPT (or any AI tools you use), upload your CV, and clearly mention your job preferences, like the job titles you’re targeting, the location, and the industry.
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4 items-start bg-dreamBg/35 p-4 sm:p-5 rounded-2xl border border-white/5 shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-dreamBg border border-dreamGold flex items-center justify-center text-dreamGold font-bold shrink-0 text-sm sm:text-base">2</div>
                <div className="pt-1 text-gray-300 font-light text-sm sm:text-lg">
                  <span className="font-bold text-white mr-2">Step 2:</span>Once you’ve shared those details, use this prompt:
                  <blockquote className="mt-3 p-4 border-l-2 border-dreamGold bg-black/40 rounded-r-lg font-medium italic text-white shadow-inner">
                    “Suggest me project ideas that I can do online, which will help me land a job in the specific location and job titles I mentioned earlier.”
                  </blockquote>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4 items-start bg-dreamBg/35 p-4 sm:p-5 rounded-2xl border border-white/5 shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-dreamBg border border-dreamGold flex items-center justify-center text-dreamGold font-bold shrink-0 text-sm sm:text-base">3</div>
                <div className="pt-1 text-gray-300 font-light text-sm sm:text-lg">
                  <span className="font-bold text-white mr-2">Step 3:</span>Go through the ideas, brainstorm, pick the best one, tweak it based on your preferences, and start working on it.
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4 items-start bg-dreamBg/35 p-4 sm:p-5 rounded-2xl border border-white/5 shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-dreamBg border border-dreamGold flex items-center justify-center text-dreamGold font-bold shrink-0 text-sm sm:text-base">4</div>
                <div className="pt-1 text-gray-300 font-light text-sm sm:text-lg">
                  <span className="font-bold text-white mr-2">Step 4:</span>As soon as you start, add it as an ongoing project. You don’t have to wait until it’s fully completed. Ongoing projects actually work better than listing them as finished ones..
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2. NETWORKING */}
        <section className="min-h-screen w-full snap-start snap-always flex flex-col items-center justify-center py-28 px-6 bg-gradient-to-t from-transparent to-black/20">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.1 }} className="max-w-6xl w-full flex flex-col items-center">
            
            <div className="flex items-center justify-center gap-4 mb-14">
              <span className="text-5xl md:text-6xl font-bold text-dreamGold">2)</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">Networking Events</h2>
            </div>

            <div className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed bg-gradient-to-br from-dreamBg/65 to-dreamCard/30 p-8 sm:p-10 rounded-3xl backdrop-blur-md border border-white/5 w-full mb-12 shadow-xl text-center">
              <p>A Huge Mistake, migrants make is staying in their own circles after coming to Australia. Don’t be that guy! Go to as many IT networking events as possible, talk to more aussies in the IT Industry, because referrals can help you to land jobs much faster (Referrals can almost guarantee you interviews if your CV is good)</p>
            </div>

            <p className="text-2xl font-semibold text-white mb-10 text-center">
              Here are 2 main websites you can check to find IT Networking Oppurtunities
            </p>

            {/* Video Row */}
            <div className="grid lg:grid-cols-2 gap-8 w-full mb-10">
              <div className="bg-gradient-to-br from-dreamCard/45 to-dreamCard/10 p-8 rounded-3xl border border-dreamCard/40 backdrop-blur-md shadow-xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Meetup.com</h3>
                <VideoFrame title="Meetup.com Video" />
              </div>
              <div className="bg-gradient-to-br from-dreamCard/45 to-dreamCard/10 p-8 rounded-3xl border border-dreamCard/40 backdrop-blur-md shadow-xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Luma Events</h3>
                <VideoFrame title="Luma Video" />
              </div>
            </div>

            {/* Image Placeholder Row */}
            <div className="grid md:grid-cols-2 gap-8 w-full mb-10">
              <div className="aspect-video bg-gradient-to-br from-black/60 to-black/35 rounded-3xl border border-white/10 flex flex-col items-center justify-center border-dashed backdrop-blur-sm">
                <ImageIcon size={48} className="text-gray-500 mb-4" />
                <span className="text-gray-500 text-sm tracking-widest uppercase">Meetup Event Screenshot</span>
              </div>
              <div className="aspect-video bg-gradient-to-br from-black/60 to-black/35 rounded-3xl border border-white/10 flex flex-col items-center justify-center border-dashed backdrop-blur-sm">
                <ImageIcon size={48} className="text-gray-500 mb-4" />
                <span className="text-gray-500 text-sm tracking-widest uppercase">Luma Event Screenshot</span>
              </div>
            </div>

            <p className="text-center text-gray-300 text-lg font-light tracking-wide bg-dreamBg/50 p-5 rounded-2xl backdrop-blur-sm border border-white/5 w-full">
              Other Platforms you can check: <a href="https://www.eventbrite.com.au/" target="_blank" rel="noreferrer" className="text-white hover:text-dreamGold transition-colors font-bold underline underline-offset-4 mx-1">Eventbrite Australia</a> & <a href="https://www.acs.org.au/" target="_blank" rel="noreferrer" className="text-white hover:text-dreamGold transition-colors font-bold underline underline-offset-4 mx-1">ACS</a> (Link these)
            </p>

          </motion.div>
        </section>

        {/* 3. COURSES */}
        <section className="min-h-screen w-full snap-start snap-always flex flex-col items-center justify-center py-28 px-6">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.1 }} className="max-w-6xl w-full">
            
            <div className="flex items-center justify-center gap-4 mb-14">
              <span className="text-5xl md:text-6xl font-bold text-dreamGold">3)</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">Online Courses & Certifications</h2>
            </div>
            
            <div className="bg-gradient-to-br from-dreamCard/50 to-dreamCard/10 p-8 sm:p-10 rounded-3xl border border-dreamCard/40 backdrop-blur-md shadow-xl mb-16 max-w-4xl mx-auto">
              <p className="text-2xl font-bold text-white mb-8 text-center">You have 3 Options</p>
              <ul className="space-y-4">
                <li className="group flex gap-4 items-start opacity-70 bg-gradient-to-r from-dreamBg/40 to-transparent p-5 rounded-2xl border border-white/5 text-lg hover:opacity-100 hover:border-dreamGold/25 transition-all">
                  <span className="text-dreamGold font-bold text-xl">1)</span> 
                  <p className="font-light">Do Courses directly from Aussie Univeristies/Institutes - Expensive though :(</p>
                </li>
                <li className="group flex gap-4 items-start opacity-70 bg-gradient-to-r from-dreamBg/40 to-transparent p-5 rounded-2xl border border-white/5 text-lg hover:opacity-100 hover:border-dreamGold/25 transition-all">
                  <span className="text-dreamGold font-bold text-xl">2)</span> 
                  <p className="font-light">Do Courses from online course sites like LinkedIn Learning, Alison - No courses from Australian universities though :(</p>
                </li>
                <li className="flex gap-4 items-start bg-gradient-to-br from-dreamGold/15 to-transparent p-6 rounded-3xl border border-dreamGold/40 backdrop-blur-md shadow-[0_0_20px_rgba(246,185,0,0.15)] text-lg">
                  <span className="text-dreamGold font-bold text-2xl">3)</span> 
                  <div>
                    <p className="text-white font-medium mb-1">Or 3rd option - which is the best:</p>
                    <p className="text-gray-200 font-light mb-2">Do Courses from Coursera but offered by Australian Universities</p>
                    <p className="text-dreamGold font-bold tracking-tight drop-shadow-md">We recommend Macquarie University (Sydney)</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* --- Course Categories (3 Horizontal Cards Top Row) --- */}
            <div className="grid md:grid-cols-3 gap-6 w-full mb-6">
              
              <div className="bg-gradient-to-br from-dreamCard/55 to-dreamCard/20 p-8 rounded-3xl border border-dreamCard/40 backdrop-blur-md shadow-xl flex flex-col h-full hover:border-dreamGold/40 transition-all">
                <Briefcase className="text-dreamGold mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-4">BA / Data Analysts</h3>
                <ul className="space-y-2 mb-8 text-sm font-light text-gray-300 list-disc pl-5 flex-grow">
                  <li>Business intelligence and data analytics</li>
                  <li>Excel Skills for Data Analytics and Visualization</li>
                  <li>Excel Fundamentals for Data Analysis</li>
                  <li>Excel Power Tools for Data Analysis</li>
                </ul>
                <a href="https://www.coursera.org/partners/macquarie" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 text-dreamBg bg-dreamGold px-4 py-2 rounded-full font-semibold hover:bg-white transition-colors text-xs uppercase tracking-wide mt-auto">
                  View More <ExternalLink size={14} />
                </a>
              </div>

              <div className="bg-gradient-to-br from-dreamCard/55 to-dreamCard/20 p-8 rounded-3xl border border-dreamCard/40 backdrop-blur-md shadow-xl flex flex-col h-full hover:border-dreamGold/40 transition-all">
                <ShieldCheck className="text-dreamGold mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-4">Cyber Security</h3>
                <ul className="space-y-2 mb-8 text-sm font-light text-gray-300 list-disc pl-5 flex-grow">
                  <li>Cyber Security: Essentials</li>
                  <li>Cyber Security: Essentials for Workplace</li>
                  <li>Workplace Cyber Security: Shaping Behaviours</li>
                </ul>
                <a href="https://www.coursera.org/partners/macquarie" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 text-dreamBg bg-dreamGold px-4 py-2 rounded-full font-semibold hover:bg-white transition-colors text-xs uppercase tracking-wide mt-auto">
                  View More <ExternalLink size={14} />
                </a>
              </div>

              <div className="bg-gradient-to-br from-dreamCard/55 to-dreamCard/20 p-8 rounded-3xl border border-dreamCard/40 backdrop-blur-md shadow-xl flex flex-col h-full hover:border-dreamGold/40 transition-all">
                <BrainCircuit className="text-dreamGold mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-4">AI & Machine Learning</h3>
                <ul className="space-y-2 mb-8 text-sm font-light text-gray-300 list-disc pl-5 flex-grow">
                  <li>Cyber Security: Application of AI</li>
                  <li>AI for Cyber Security</li>
                  <li>Cyber Security: Security of AI</li>
                </ul>
                <a href="https://www.coursera.org/partners/macquarie" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 text-dreamBg bg-dreamGold px-4 py-2 rounded-full font-semibold hover:bg-white transition-colors text-xs uppercase tracking-wide mt-auto">
                  View More <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* --- SE Course Category (1 Horizontal Card Bottom Row) --- */}
            <div className="w-full bg-gradient-to-br from-dreamCard/50 to-dreamCard/10 p-8 sm:p-10 rounded-3xl border border-dreamCard/40 backdrop-blur-md shadow-xl flex flex-col md:flex-row items-center gap-8 hover:border-dreamGold/40 transition-all">
              <div className="bg-gradient-to-br from-black/20 to-transparent p-6 rounded-2xl flex-shrink-0">
                  <Code2 className="text-dreamGold" size={64} />
               </div>
               <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4">Software Engineers / Developers</h3>
                  <p className="text-gray-300 font-light leading-relaxed mb-2 text-sm">
                    Macquarie's own Coursera catalogue is heavily weighted toward cyber security, data analytics with Excel, and AI security — it doesn't appear to publish dedicated programming or pure software-engineering courses on Coursera.
                  </p>
                  <p className="text-gray-300 font-light leading-relaxed text-sm">
                    The closest developer-relevant content is the <strong className="text-white">Applied Cryptography and IAM courses</strong> listed under Cyber Security above.
                  </p>
               </div>
               <div className="flex-shrink-0">
                 <a href="https://www.coursera.org/partners/macquarie" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 text-dreamBg bg-dreamGold px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors text-sm uppercase tracking-wide">
                    Browse All <ExternalLink size={16} />
                 </a>
               </div>
            </div>

          </motion.div>
        </section>

        {/* 4. VOLUNTEERING */}
        <section className="min-h-screen w-full snap-start snap-always flex flex-col items-center justify-center py-28 px-6 bg-gradient-to-b from-transparent to-black/30 border-b border-white/5">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.1 }} className="max-w-5xl w-full flex flex-col items-center">
            
            <div className="flex items-center justify-center gap-4 mb-14">
              <span className="text-5xl md:text-6xl font-bold text-dreamGold">4)</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">Volunteering</h2>
            </div>
            
            <div className="text-lg text-gray-300 font-light leading-relaxed bg-gradient-to-br from-dreamBg/55 to-dreamCard/25 p-8 sm:p-10 rounded-3xl backdrop-blur-md border border-white/5 w-full mb-12 shadow-xl text-center">
              <p className="text-3xl text-dreamGold font-bold mb-4 flex items-center justify-center gap-3">
                <HeartHandshake /> Yes, Volunteering!
              </p>
              <p className="mb-4">Aussie recruiters say they love migrants who have done volunteering because it shows that you are actively contributing to Australian communities.</p>
              <p>We recently had multiple clients like you, who got IT volunteer roles related to SE, QA & BA,Also the best part is that recruiters will think that you are a nice person</p>
            </div>

            <div className="w-full bg-gradient-to-br from-dreamCard/55 to-dreamCard/15 p-10 sm:p-12 rounded-3xl border border-dreamCard/40 backdrop-blur-xl shadow-2xl flex flex-col items-center">
              <p className="text-2xl font-bold text-white mb-8">There are 2 Main Volunteer Sites:</p>
              
              <div className="flex flex-col sm:flex-row gap-6 w-full mb-10">
                <a href="https://www.seekvolunteer.com.au/" target="_blank" rel="noreferrer" className="flex-1 bg-gradient-to-br from-dreamBg/50 to-black/35 py-5 text-center rounded-2xl border border-white/10 hover:border-dreamGold transition-all text-dreamGold font-bold text-lg shadow-md flex items-center justify-center gap-2">
                  1. Seek Volunteer <ExternalLink size={18}/>
                </a>
                <a href="https://govolunteer.com.au/" target="_blank" rel="noreferrer" className="flex-1 bg-gradient-to-br from-dreamBg/50 to-black/35 py-5 text-center rounded-2xl border border-white/10 hover:border-dreamGold transition-all text-dreamGold font-bold text-lg shadow-md flex items-center justify-center gap-2">
                  2. GoVolunteer <ExternalLink size={18}/>
                </a>
              </div>

              <p className="text-lg text-gray-300 font-light text-center mb-10 bg-black/20 p-5 rounded-2xl border border-white/5 w-full">
                Both of the sites have volunteering opportunities from one time ones to long term projects.But you can also find opportunities relevant to IT here :)
              </p>

              <div className="w-full text-center mb-10">
                <p className="text-xl text-white font-semibold mb-6">Check this video first</p>
                <VideoFrame title="Seek Volunteer Video" />
              </div>

              <div className="bg-gradient-to-r from-dreamGold/15 to-transparent border-l-4 border-dreamGold p-7 rounded-r-2xl relative overflow-hidden shadow-lg w-full text-center">
                <p className="text-white text-lg font-light">
                  Now click here and don’t forget to select <strong className="text-dreamGold font-bold drop-shadow-md">“IT & Web Development”</strong> under “Type of work”
                </p>
              </div>
            </div>

          </motion.div>
        </section>

        {/* CTA / FOOTER */}
        <section className="min-h-screen w-full snap-start snap-always flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-t from-[#411c30]/90 to-transparent relative overflow-hidden">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} className="relative z-10 w-full max-w-4xl text-center">
            <div className="rounded-[1.75rem] border border-white/8 bg-dreamBg/25 px-6 sm:px-10 py-8 sm:py-10 shadow-[0_14px_40px_rgba(0,0,0,0.22)] backdrop-blur-md">
              <div className="inline-flex items-center justify-center rounded-full bg-dreamBg/70 border border-dreamGold/15 px-4 py-3 mb-5">
                <Sparkles className="text-dreamGold" size={28} />
              </div>

              <p className="text-base sm:text-lg text-gray-200 font-light leading-relaxed max-w-2xl mx-auto">
                These are the main things we recommend you do. If you need any additional help,Feel free to contact us using dreamshift.net
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-7 mb-7 tracking-tight leading-[1.18] max-w-3xl mx-auto">
                Happy Job Search and We wish you nothing but the best
              </h2>

              {/* Premium CTA Button */}
              <a 
                href="https://dreamshift.net"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center px-9 sm:px-12 py-5 sm:py-6 font-bold text-dreamBg bg-gradient-to-r from-dreamGold via-yellow-300 to-dreamGold rounded-full overflow-hidden shadow-[0_10px_22px_rgba(246,185,0,0.18)] transition-all cursor-pointer hover:scale-[1.02] active:scale-95 border border-white/10"
              >
                <span className="relative flex items-center gap-3 tracking-[0.28em] uppercase text-sm sm:text-base">
                  Visit DreamShift.net
                  <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}