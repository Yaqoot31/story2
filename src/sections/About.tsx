import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, Globe, Code, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { icon: Award, text: 'Certified Scrum Master & QA Professional' },
  { icon: Users, text: 'Led teams across US, Japan, China, UK' },
  { icon: Globe, text: 'International client management expert' },
  { icon: Code, text: 'Strong technical background in development' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState({ years: 0, projects: 0, clients: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(
        imageRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content reveal
      gsap.fromTo(
        contentRef.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats counter animation
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 80%',
        onEnter: () => {
          // Animate counters
          const duration = 2000;
          const startTime = Date.now();
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            setCounters({
              years: Math.floor(9 * easeProgress),
              projects: Math.floor(50 * easeProgress),
              clients: Math.floor(15 * easeProgress),
            });
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          animate();
        },
        once: true,
      });

      // Stats cards reveal
      gsap.fromTo(
        statsRef.current?.children || [],
        { y: 30, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div ref={imageRef} className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan/20 to-purple/20 blur-xl" />
              
              {/* Rotating border */}
              <div className="absolute -inset-1 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan via-purple to-cyan animate-spin-slow" />
              </div>
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden h-full">
                <img
                  src="/profile.jpg"
                  alt="Yaqoot Nawab"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl p-4 border border-cyan/20">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan" />
                  <span className="text-sm font-medium text-white">Available for Work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div ref={contentRef}>
            <span className="inline-block text-cyan text-sm font-semibold tracking-wider uppercase mb-4">
              About Me
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Bridging Technology &{' '}
              <span className="text-gradient">Leadership</span>
            </h2>
            
            <div className="space-y-4 text-white/70 leading-relaxed mb-8">
              <p>
                I'm Yaqoot Nawab, an IT Project & Product Manager with over 9 years of experience 
                in the technology industry. My journey began with a three-year diploma in IT and 
                Management, which laid the foundation for my understanding of programming, networking, 
                and system analysis.
              </p>
              <p>
                Starting as a Frontend Developer, I naturally transitioned into Software Quality 
                Assurance, where I honed my attention to detail and risk identification skills. 
                Today, I lead cross-functional teams and manage complex projects for international 
                clients across the US, Japan, China, South Korea, and the UK.
              </p>
              <p>
                As a certified Scrum Master and QA Professional, I bridge the gap between complex 
                technical execution and strategic business goals, ensuring every project delivers 
                exceptional value.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg glass-light"
                >
                  <item.icon className="w-5 h-5 text-cyan flex-shrink-0" />
                  <span className="text-sm text-white/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { value: counters.years, suffix: '+', label: 'Years Experience' },
            { value: counters.projects, suffix: '+', label: 'Projects Completed' },
            { value: counters.clients, suffix: '+', label: 'Global Clients' },
            { value: 3, suffix: '', label: 'Certifications' },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl glass border border-white/5 text-center group hover:border-cyan/20 transition-all"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-4xl lg:text-5xl font-heading font-bold text-gradient mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
