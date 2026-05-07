import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { PlayCircle, Sparkles, ChevronRight, BookOpen, Hexagon, Plus, Circle, Cpu } from 'lucide-react';

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

// --- Floating Tech Elements Background ---
const FloatingTechElements = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Generate random floating elements only on the client side to prevent hydration mismatches
    const icons = [Hexagon, Plus, Circle, Cpu];
    const generated = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      size: Math.random() * 30 + 10, // sizes between 10 and 40
      startX: Math.random() * 100, // percentage
      startY: Math.random() * 100, // percentage
      duration: Math.random() * 20 + 20, // 20s to 40s duration
      delay: Math.random() * 5,
    }));
    setElements(generated);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-dreamBg">
      {/* Subtle IT/Tech Grid */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#f6b900 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Dynamic Floating Shapes */}
      {elements.map((el) => {
        const IconComponent = el.Icon;
        return (
          <motion.div
            key={el.id}
            initial={{ x: `${el.startX}vw`, y: `${el.startY}vh`, opacity: 0, rotate: 0 }}
            animate={{ 
              x: [`${el.startX}vw`, `${el.startX + (Math.random() * 10 - 5)}vw`, `${el.startX}vw`], 
              y: [`${el.startY}vh`, `${el.startY - 20}vh`, `${el.startY}vh`],
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: el.duration, 
              delay: el.delay, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute text-dreamGold drop-shadow-[0_0_8px_rgba(246,185,0,0.5)]"
          >
            <IconComponent size={el.size} strokeWidth={1} />
          </motion.div>
        );
      })}
      
      {/* Vignette overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--tw-gradient-stops))] from-transparent to-dreamBg/80"></div>
    </div>
  );
};

// --- Reusable Video Frame ---
const VideoFrame = ({ title }) => (
  <motion.div 
    whileHover={{ scale: 1.02, borderColor: '#f6b900' }}
    className="w-full aspect-video bg-black/60 rounded-2xl border border-dreamCard/50 overflow-hidden relative group shadow-2xl flex items-center justify-center cursor-pointer transition-colors backdrop-blur-sm"
  >
    <PlayCircle size={48} className="text-dreamCard group-hover:text-dreamGold transition-colors absolute z-10" />
    <div className="absolute inset-0 bg-gradient-to-t from-dreamBg/90 to-transparent"></div>
    <span className="text-gray-500 font-light tracking-widest text-xs uppercase absolute bottom-4 z-10">
      {title} Embed
    </span>
  </motion.div>
);

export default function ResourceGuide() {
  const containerRef = useRef(null);

  // Hook into the scroll container for the progress bar
  const { scrollYProgress } = useScroll({ container: containerRef });
  
  // Apply a spring physics effect to the scroll bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-dreamBg text-white font-sans overflow-hidden">
      
      <FloatingTechElements />

      {/* --- Global UI Overlays --- */}
      
      {/* 1. Top Horizontal Scroll Progress Bar */}
      <motion.div 
        style={{ scaleX }} 
        className="fixed top-0 left-0 right-0 h-1.5 bg-dreamGold origin-left z-50 shadow-[0_0_15px_rgba(246,185,0,0.6)]" 
      />

      {/* 2. Persistent Bottom Brand Lockup */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity duration-300">
        <img 
          src="/dreamshift-logo.png" 
          alt="DreamShift Logo" 
          className="h-8 object-contain drop-shadow-md" 
        />
        <div className="h-6 w-px bg-white/20"></div>
        <span className="text-xs font-light tracking-widest text-gray-300 uppercase mt-0.5">
          © 2026 All Rights Reserved
        </span>
      </div>

      {/* --- Main Scroll Container --- */}
      <div 
        ref={containerRef}
        className="h-screen w-full overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth relative z-10"
      >
        
        {/* 0. HERO SECTION */}
        <section className="h-screen w-full snap-start snap-always flex items-center justify-center px-6">
          <motion.div 
            variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.5 }}
            className="max-w-4xl w-full text-center"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-dreamGold/30 bg-dreamBg/50 text-dreamGold text-sm tracking-widest uppercase mb-8 backdrop-blur-md">
              Visas: 485, 189, 190, 500, 491, 191, 482, 186
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-none drop-shadow-2xl">
              Dream<span className="text-dreamGold">Shift</span><br />
              <span className="text-4xl md:text-6xl text-gray-400 font-light mt-2 block">Resource Guide</span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed border-t border-white/10 pt-8 mt-8">
              Hey, It’s Methsara here from DreamShift :) Since you are looking for IT Jobs, we gathered as many resources as possible to help your job search!
            </p>
          </motion.div>
        </section>

        {/* 0.5 REALITY CHECK SECTION */}
        <section className="h-screen w-full snap-start snap-always flex items-center justify-center px-6 bg-gradient-to-b from-transparent to-black/20">
          <motion.div 
            variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.5 }}
            className="max-w-4xl w-full"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dreamGold mb-8 drop-shadow-lg">Here’s Something you need to know:</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-xl text-gray-300 font-light space-y-6 leading-relaxed bg-dreamBg/50 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
                <p>Let’s think you are applying for 100 Jobs on LinkedIn & Seek: Unfortunately, around <strong className="text-white">65% of the jobs you apply will get rejected.</strong></p>
                <p>That is the reality of the Australian Job Market for Migrants! But don’t worry, you still have around 35 jobs you can apply for and land interviews! For these 35 Jobs, you will be competing with other Migrants like you.</p>
              </div>
              <div className="bg-dreamCard/30 p-8 rounded-3xl border border-dreamCard backdrop-blur-md shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-dreamGold/10 rounded-full blur-3xl"></div>
                <p className="text-white text-2xl leading-snug font-medium relative z-10">
                  If you can do the following things, you can <span className="text-dreamGold drop-shadow-md">increase your chances</span> of landing Interviews!
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 1. PASSION PROJECTS */}
        <section className="h-screen w-full snap-start snap-always flex items-center justify-center px-6">
          <motion.div 
            variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.5 }}
            className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-5xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="text-dreamGold">1)</span> Passion Projects
              </h2>
              <div className="bg-dreamGold/10 border-l-4 border-dreamGold p-6 rounded-r-2xl mb-8 backdrop-blur-sm shadow-lg">
                <p className="text-dreamGold font-medium">*Tip: Try to do a passion project based on your state/city, because recruiters can relate to it more easily.</p>
              </div>
              <VideoFrame title="Passion Project Guidelines" />
            </div>

            <div className="space-y-6 bg-dreamCard/20 p-8 rounded-3xl border border-dreamCard/50 backdrop-blur-md shadow-xl">
              <p className="text-xl font-medium text-white mb-6 border-b border-white/10 pb-4">Here’s a simple guide:</p>
              {[
                { step: "1", text: "Go to ChatGPT, upload your CV, and clearly mention your job preferences (titles, location, industry)." },
                { step: "2", text: "Use prompt: “Suggest me project ideas that I can do online, which will help me land a job in the specific location...”" },
                { step: "3", text: "Brainstorm, pick the best one, tweak it based on your preferences, and start working on it." },
                { step: "4", text: "Add it as an ongoing project immediately. Ongoing projects actually work better than listing them as finished ones." }
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ x: 5 }} className="flex gap-4 items-start group bg-dreamBg/30 p-3 rounded-xl transition-all">
                  <div className="w-8 h-8 rounded-full bg-dreamBg border border-dreamGold flex items-center justify-center text-dreamGold font-bold shrink-0 shadow-[0_0_10px_rgba(246,185,0,0.2)] group-hover:bg-dreamGold group-hover:text-dreamBg transition-colors">
                    {item.step}
                  </div>
                  <p className="text-gray-300 font-light leading-relaxed pt-1">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 2. NETWORKING */}
        <section className="h-screen w-full snap-start snap-always flex items-center justify-center px-6 bg-gradient-to-t from-transparent to-black/20">
          <motion.div 
            variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.5 }}
            className="max-w-5xl w-full"
          >
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-md bg-dreamBg/40 inline-block px-8 py-3 rounded-2xl backdrop-blur-sm border border-white/5">
                <span className="text-dreamGold">2)</span> Networking Events
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed bg-dreamBg/40 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
                A Huge Mistake migrants make is staying in their own circles after coming to Australia. Don’t be that guy! Go to as many IT networking events as possible. Referrals can almost guarantee you interviews if your CV is good.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-dreamCard/20 p-6 rounded-3xl border border-dreamCard/50 backdrop-blur-md hover:border-dreamGold/30 transition-colors shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Meetup.com</h3>
                <VideoFrame title="Meetup Navigation" />
              </div>
              <div className="bg-dreamCard/20 p-6 rounded-3xl border border-dreamCard/50 backdrop-blur-md hover:border-dreamGold/30 transition-colors shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Luma Events</h3>
                <VideoFrame title="Luma Navigation" />
              </div>
            </div>
            <p className="text-center text-gray-400 font-light tracking-wide bg-dreamBg/50 py-3 rounded-xl backdrop-blur-sm inline-block px-6">
              Other Platforms: <span className="text-white cursor-pointer hover:text-dreamGold transition-colors font-medium">Eventbrite Australia</span> & <span className="text-white cursor-pointer hover:text-dreamGold transition-colors font-medium">ACS</span>
            </p>
          </motion.div>
        </section>

        {/* 3. COURSES */}
        <section className="h-screen w-full snap-start snap-always flex items-center justify-center px-6">
          <motion.div 
            variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.5 }}
            className="max-w-5xl w-full grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-5xl font-bold text-white mb-8 drop-shadow-md">
                <span className="text-dreamGold">3)</span> Online Courses
              </h2>
              <p className="text-xl font-medium text-white mb-6">You have 3 Options:</p>
              <ul className="space-y-6">
                <li className="flex gap-4 opacity-50 bg-dreamBg/30 p-4 rounded-xl border border-white/5">
                  <span className="text-dreamGold font-bold">1)</span> 
                  <p className="font-light">Courses directly from Aussie Univeristies (Expensive)</p>
                </li>
                <li className="flex gap-4 opacity-50 bg-dreamBg/30 p-4 rounded-xl border border-white/5">
                  <span className="text-dreamGold font-bold">2)</span> 
                  <p className="font-light">LinkedIn Learning, Alison (No Aussie university ties)</p>
                </li>
                <li className="flex gap-4 bg-dreamGold/10 p-6 rounded-2xl border border-dreamGold/50 backdrop-blur-md shadow-[0_0_30px_rgba(246,185,0,0.15)] transform scale-105">
                  <span className="text-dreamGold font-bold text-xl">3)</span> 
                  <div>
                    <p className="text-white font-medium text-xl mb-2">The Best Option:</p>
                    <p className="text-gray-200 font-light leading-relaxed">Do Courses from Coursera but offered by Australian Universities.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-dreamCard/30 p-10 rounded-3xl border border-dreamCard/50 backdrop-blur-xl text-center shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-dreamGold/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
               <BookOpen size={64} className="text-dreamGold mx-auto mb-6 relative z-10" />
               <p className="text-2xl font-bold text-white mb-2 relative z-10">We highly recommend</p>
               <p className="text-3xl text-dreamGold font-bold tracking-tight mb-8 relative z-10 drop-shadow-md">Macquarie University (Sydney)</p>
               <div className="space-y-3 text-gray-300 font-light text-sm relative z-10">
                  <p className="bg-black/40 p-3 rounded-lg border border-white/5 shadow-inner">Ideal for BA / Data Analyst Roles</p>
                  <p className="bg-black/40 p-3 rounded-lg border border-white/5 shadow-inner">Ideal for CyberSecurity Roles</p>
               </div>
            </div>
          </motion.div>
        </section>

        {/* 4. VOLUNTEERING */}
        <section className="h-screen w-full snap-start snap-always flex items-center justify-center px-6 bg-gradient-to-b from-transparent to-black/30">
          <motion.div 
            variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.5 }}
            className="max-w-5xl w-full"
          >
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-md bg-dreamBg/40 inline-block px-8 py-3 rounded-2xl backdrop-blur-sm border border-white/5">
                <span className="text-dreamGold">4)</span> Volunteering
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed bg-dreamBg/40 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
                Yes, Volunteering! Aussie recruiters love migrants who volunteer because it shows active contribution to the community. We've had multiple clients land IT volunteer roles related to SE, QA & BA.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center bg-dreamCard/20 p-8 rounded-3xl border border-dreamCard/50 backdrop-blur-xl shadow-2xl">
              <div>
                <p className="text-2xl font-medium text-white mb-6">2 Main Volunteer Sites:</p>
                <div className="flex gap-4 mb-8">
                  <div className="flex-1 bg-black/40 py-4 text-center rounded-xl border border-white/10 hover:border-dreamGold cursor-pointer transition-colors text-dreamGold font-medium shadow-md">Seek Volunteer</div>
                  <div className="flex-1 bg-black/40 py-4 text-center rounded-xl border border-white/10 hover:border-dreamGold cursor-pointer transition-colors text-dreamGold font-medium shadow-md">GoVolunteer</div>
                </div>
                <div className="bg-dreamGold/10 border border-dreamGold/30 p-6 rounded-2xl relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 left-0 w-2 h-full bg-dreamGold shadow-[0_0_15px_rgba(246,185,0,0.8)]"></div>
                  <p className="text-white font-light leading-relaxed">
                    Don’t forget to select <strong className="text-dreamGold font-bold drop-shadow-md">“IT & Web Development”</strong> under “Type of work” to find relevant projects.
                  </p>
                </div>
              </div>
              <div>
                <VideoFrame title="Volunteering Guide" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA / FOOTER */}
        <section className="h-screen w-full snap-start snap-always flex flex-col items-center justify-center px-6 bg-gradient-to-t from-[#411c30]/90 to-transparent relative">
          <motion.div 
            variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.5 }}
            className="text-center flex flex-col items-center z-10"
          >
            <Sparkles className="text-dreamGold mb-8 drop-shadow-[0_0_20px_rgba(246,185,0,1)]" size={56} />
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
              Happy Job Search!
            </h2>
            <p className="text-2xl text-gray-300 font-light max-w-2xl mx-auto mb-16 leading-relaxed bg-black/20 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
              These are the main things we recommend you do. We wish you nothing but the best in your journey.
            </p>

            {/* Premium CTA Button */}
            <motion.a 
              href="https://dreamshift.net"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-14 py-7 font-bold text-dreamBg bg-gradient-to-r from-dreamGold to-yellow-400 rounded-full overflow-hidden shadow-[0_0_60px_rgba(246,185,0,0.5)] transition-all cursor-pointer"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-64 opacity-20"></span>
              <span className="relative flex items-center gap-3 tracking-widest uppercase text-base drop-shadow-md">
                Visit DreamShift.net
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </motion.div>
        </section>

      </div>
    </div>
  );
}