import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Download, Linkedin, Mail, FileText } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - split text effect
      const title = titleRef.current;
      if (title) {
        const words = title.innerText.split(' ');
        title.innerHTML = words
          .map((word) => `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`)
          .join(' ');

        gsap.fromTo(
          title.querySelectorAll('span > span'),
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: 'power4.out',
            delay: 0.3,
          }
        );
      }

      // Subtitle fade in
      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.8 }
      );

      // CTA buttons
      gsap.fromTo(
        ctaRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 1.1,
        }
      );

      // Social links
      gsap.fromTo(
        socialsRef.current?.children || [],
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 1.4,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep-blue/50 pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-cyan/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="text-sm text-white/70">IT Project Manager & SQA Strategist</span>
          </div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
          >
            <span className="text-gradient">From Bugs to Leadership</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl text-white/60 mb-4 max-w-3xl mx-auto"
          >
            The Journey of Yaqoot Nawab
          </p>

          <p className="text-base text-white/40 mb-12 max-w-2xl mx-auto">
            Software Quality Engineer → Project Manager → Technology Leader
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection('#timeline')}
              className="btn-primary flex items-center gap-2"
            >
              <span>Explore My Journey</span>
              <ArrowDown size={18} />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary flex items-center gap-2"
            >
              <span>Work With Me</span>
            </button>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary flex items-center gap-2"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            {[
              { value: '9+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Delivered' },
              { value: '6+', label: 'Years Management' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Links - Right Side */}
      <div
        ref={socialsRef}
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4"
      >
        <a
          href="https://linkedin.com/in/yaqoot-nawab-3a781117b"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-cyan hover:border-cyan/30 transition-all"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="mailto:coders31official@gmail.com"
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-cyan hover:border-cyan/30 transition-all"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
        <a
          href="https://medium.com/@ranayaqoot"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-cyan hover:border-cyan/30 transition-all"
          aria-label="Medium"
        >
          <FileText size={18} />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/40">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-cyan animate-bounce" />
        </div>
      </div>
    </section>
  );
}
