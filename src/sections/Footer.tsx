import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUp, Linkedin, Mail, FileText, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Quote animation
      gsap.fromTo(
        '.footer-quote',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={sectionRef}
      className="relative pt-24 pb-8"
    >
      {/* Inspirational Quote Section */}
      <div className="footer-quote max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
        <div className="relative">
          {/* Decorative quotes */}
          <span className="absolute -top-8 left-0 text-8xl text-cyan/10 font-serif">"</span>
          <span className="absolute -bottom-16 right-0 text-8xl text-purple/10 font-serif">"</span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white leading-tight mb-8">
            Success is not a position.
            <br />
            <span className="text-gradient">It is a journey of continuous growth.</span>
          </h2>
          
          <p className="text-white/50 text-lg mb-10">
            Start your journey today. Every expert was once a beginner.
          </p>

          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-base"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan to-purple flex items-center justify-center">
                <span className="text-deep-blue font-bold text-lg font-heading">YN</span>
              </div>
              <span className="text-white font-semibold text-lg">Yaqoot Nawab</span>
            </div>
            <p className="text-white/40 text-sm flex items-center gap-1">
              © 2026 Yaqoot Nawab. Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> in Islamabad
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'Home', href: '#hero' },
              { label: 'About', href: '#about' },
              { label: 'Journey', href: '#timeline' },
              { label: 'Skills', href: '#skills' },
              { label: 'Services', href: '#services' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white/50 hover:text-cyan transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/yaqoot-nawab-3a781117b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-cyan hover:border-cyan/30 transition-all border border-transparent"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:coders31official@gmail.com"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-cyan hover:border-cyan/30 transition-all border border-transparent"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://medium.com/@ranayaqoot"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-cyan hover:border-cyan/30 transition-all border border-transparent"
              aria-label="Medium"
            >
              <FileText size={18} />
            </a>
          </div>
        </div>

        {/* Back to Top */}
        <div className="flex justify-center mt-12">
          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2 text-white/40 hover:text-cyan transition-colors"
          >
            <div className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-cyan/30 transition-all">
              <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <span className="text-xs">Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
