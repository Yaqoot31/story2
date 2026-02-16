import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  AlertTriangle, 
  Clock, 
  Users, 
  TrendingUp, 
  Lightbulb,
  CheckCircle2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const challenges = [
  {
    icon: AlertTriangle,
    title: 'Project Failures',
    challenge: 'Projects that missed the mark or failed to deliver value.',
    lesson: 'Every failure taught me the importance of thorough planning, clear requirements, and stakeholder alignment from day one.',
  },
  {
    icon: Users,
    title: 'Difficult Clients',
    challenge: 'Managing expectations with demanding or unclear clients.',
    lesson: 'Learned to set boundaries, communicate proactively, and translate business needs into technical requirements.',
  },
  {
    icon: Clock,
    title: 'Missed Deadlines',
    challenge: 'Projects falling behind schedule due to unforeseen issues.',
    lesson: 'Built better estimation skills, added buffer time, and learned to identify risks before they become blockers.',
  },
  {
    icon: TrendingUp,
    title: 'Team Conflicts',
    challenge: 'Resolving disagreements and maintaining team harmony.',
    lesson: 'Developed mediation skills, learned to address issues early, and focused on building a culture of open communication.',
  },
  {
    icon: AlertTriangle,
    title: 'Personal Struggles',
    challenge: 'Balancing work pressure with personal growth and health.',
    lesson: 'Discovered the importance of work-life balance, continuous learning, and building resilience through challenges.',
  },
];

export default function Challenges() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.challenges-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        '.challenge-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="challenges"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="challenges-title text-center mb-16">
          <span className="inline-block text-cyan text-sm font-semibold tracking-wider uppercase mb-4">
            Real Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Challenges & <span className="text-gradient">Lessons Learned</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Every challenge was an opportunity to grow. Here are the real struggles 
            that shaped my leadership approach and professional mindset.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="challenge-card group p-6 rounded-2xl glass border border-white/5 hover:border-cyan/20 transition-all card-hover"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-4 group-hover:bg-cyan/20 transition-colors">
                  <Icon className="w-6 h-6 text-cyan" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-bold text-white mb-3">
                  {item.title}
                </h3>

                {/* Challenge */}
                <div className="mb-4">
                  <span className="text-xs text-white/40 uppercase tracking-wider">The Challenge</span>
                  <p className="text-white/60 text-sm mt-1">{item.challenge}</p>
                </div>

                {/* Lesson */}
                <div className="pt-4 border-t border-white/5">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-purple flex-shrink-0 mt-0.5" />
                    <p className="text-white/70 text-sm italic">{item.lesson}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Summary Card */}
          <div className="challenge-card p-6 rounded-2xl bg-gradient-to-br from-cyan/10 to-purple/10 border border-cyan/20">
            <div className="w-12 h-12 rounded-xl bg-cyan/20 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-cyan" />
            </div>

            <h3 className="text-lg font-heading font-bold text-white mb-3">
              The Bottom Line
            </h3>

            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Persistence and continuous learning were the key factors in my growth. 
              Every setback was a setup for a comeback.
            </p>

            <div className="pt-4 border-t border-white/10">
              <p className="text-cyan text-sm font-medium">
                "Success is not final, failure is not fatal: it is the courage to continue that counts."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
