import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Code, Bug, Users, Briefcase, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const timelineStages = [
  {
    id: 1,
    icon: GraduationCap,
    title: 'Learning Phase',
    role: 'Diploma in IT & Management',
    period: 'Foundation',
    description: 'Built strong fundamentals in programming, networking, and system analysis. This three-year program laid the groundwork for my technical career.',
    skills: ['Programming Basics', 'Networking', 'System Analysis', 'Database Management'],
  },
  {
    id: 2,
    icon: Code,
    title: 'Technical Entry',
    role: 'Frontend Developer',
    period: 'Early Career',
    description: 'Started hands-on software development, creating responsive websites and learning JavaScript deeply. Worked with Next.js and modern frameworks.',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Next.js'],
  },
  {
    id: 3,
    icon: Bug,
    title: 'Quality Leadership',
    role: 'Senior SQA Engineer',
    period: 'Growth Phase',
    description: 'Transitioned into Quality Assurance, ensuring product quality through meticulous testing, clear documentation, and effective communication with developers.',
    skills: ['Manual Testing', 'Test Automation', 'Bug Tracking', 'Process Improvement'],
  },
  {
    id: 4,
    icon: Users,
    title: 'Transition to Management',
    role: 'Scrum Master & Agile Lead',
    period: 'Leadership Beginnings',
    description: 'Embraced Agile methodologies and Scrum frameworks. Led sprint planning, facilitated team collaboration, and managed stakeholder expectations.',
    skills: ['Scrum', 'Agile', 'Sprint Planning', 'Team Facilitation'],
  },
  {
    id: 5,
    icon: Briefcase,
    title: 'IT Project Manager',
    role: 'Project & Product Management',
    period: 'Current Role',
    description: 'Managing teams, delivery timelines, risk assessment, and stakeholder communication. Leading cross-functional teams for international clients.',
    skills: ['Project Strategy', 'Risk Management', 'Client Communication', 'Team Leadership'],
  },
  {
    id: 6,
    icon: Rocket,
    title: 'Vision Phase',
    role: 'AI-Driven Leadership',
    period: 'Future',
    description: 'Embracing AI collaboration in project management. Using AI tools for documentation, mind mapping, and predictive task management.',
    skills: ['AI Integration', 'Predictive Analytics', 'Strategic Planning', 'Innovation'],
  },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.timeline-title',
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

      // Timeline items stagger
      gsap.fromTo(
        '.timeline-item',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="timeline-title text-center mb-16">
          <span className="inline-block text-cyan text-sm font-semibold tracking-wider uppercase mb-4">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Career <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            From learning the basics to leading international teams, here's how I grew 
            from a curious student to an experienced IT Project Manager.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Center line - desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-purple to-cyan/20" />
          
          {/* Mobile line */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-purple to-cyan/20" />

          <div className="space-y-12 lg:space-y-0">
            {timelineStages.map((stage, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeStage === index;
              const Icon = stage.icon;

              return (
                <div
                  key={stage.id}
                  className={`timeline-item relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                    index > 0 ? 'lg:mt-16' : ''
                  }`}
                  onMouseEnter={() => setActiveStage(index)}
                >
                  {/* Content */}
                  <div
                    className={`${
                      isEven ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'
                    } pl-16 lg:pl-0`}
                  >
                    <div
                      className={`relative p-6 rounded-2xl glass border transition-all duration-300 ${
                        isActive
                          ? 'border-cyan/30 shadow-glow'
                          : 'border-white/5 hover:border-white/10'
                      }`}
                    >
                      {/* Period badge */}
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cyan/10 text-cyan mb-3">
                        {stage.period}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl font-heading font-bold text-white mb-1">
                        {stage.title}
                      </h3>
                      <p className="text-purple font-medium mb-3">{stage.role}</p>

                      {/* Description */}
                      <p className="text-white/60 text-sm leading-relaxed mb-4">
                        {stage.description}
                      </p>

                      {/* Skills */}
                      <div className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-end' : ''}`}>
                        {stage.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 rounded-md text-xs bg-white/5 text-white/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div
                    className={`absolute left-6 lg:left-1/2 top-6 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 z-10`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-cyan to-purple scale-110 shadow-glow'
                          : 'bg-panel border border-white/10'
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 transition-colors ${
                          isActive ? 'text-white' : 'text-white/50'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  {!isEven && <div className="hidden lg:block" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-20 text-center">
          <div className="inline-block max-w-3xl">
            <div className="quote-mark">"</div>
            <p className="text-xl lg:text-2xl text-white/80 font-light italic mb-4">
              I learned project management from mistakes, client pressure, team conflicts, 
              failed releases, and real responsibility. Persistence became my most valuable skill.
            </p>
            <p className="text-cyan font-medium">— Yaqoot Nawab</p>
          </div>
        </div>
      </div>
    </section>
  );
}
