import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Briefcase, 
  Shield, 
  GraduationCap, 
  Users, 
  Rocket,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Briefcase,
    title: 'Project Management Consulting',
    description: 'Strategic guidance for your IT projects, from planning to successful delivery. I help organizations streamline processes and achieve project goals.',
    features: [
      'Project strategy & roadmap development',
      'Agile transformation consulting',
      'Process optimization',
      'Risk assessment & mitigation',
    ],
    color: 'cyan',
  },
  {
    icon: Shield,
    title: 'QA Process Setup',
    description: 'Establish robust quality assurance processes that ensure your software meets the highest standards before reaching users.',
    features: [
      'Test strategy & planning',
      'Automation framework setup',
      'QA team structure & hiring',
      'CI/CD integration',
    ],
    color: 'purple',
  },
  {
    icon: GraduationCap,
    title: 'Team Training',
    description: 'Upskill your teams with practical training in project management, agile methodologies, and quality assurance best practices.',
    features: [
      'Agile & Scrum workshops',
      'QA fundamentals training',
      'Leadership development',
      'Custom training programs',
    ],
    color: 'cyan',
  },
  {
    icon: Users,
    title: 'Career Mentorship',
    description: 'One-on-one mentorship for aspiring project managers and QA professionals. Guidance based on real-world experience.',
    features: [
      'Career path planning',
      'Skill gap analysis',
      'Interview preparation',
      'Professional networking',
    ],
    color: 'purple',
  },
  {
    icon: Rocket,
    title: 'Software Delivery Strategy',
    description: 'End-to-end consulting on how to deliver software faster, with higher quality, and better alignment to business goals.',
    features: [
      'Delivery pipeline optimization',
      'Release management',
      'Stakeholder communication',
      'Metrics & reporting setup',
    ],
    color: 'cyan',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.services-title',
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

      // Service cards
      gsap.fromTo(
        '.service-card',
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
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

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="services-title text-center mb-16">
          <span className="inline-block text-cyan text-sm font-semibold tracking-wider uppercase mb-4">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Professional <span className="text-gradient">Services</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Leverage my 9+ years of experience to accelerate your projects, 
            improve your processes, and develop your teams.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isCyan = service.color === 'cyan';

            return (
              <div
                key={index}
                className={`service-card group p-8 rounded-3xl glass border transition-all duration-300 ${
                  isCyan
                    ? 'border-white/5 hover:border-cyan/20 hover:shadow-glow'
                    : 'border-white/5 hover:border-purple/20 hover:shadow-glow-purple'
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                    isCyan
                      ? 'bg-cyan/10 group-hover:bg-cyan/20'
                      : 'bg-purple/10 group-hover:bg-purple/20'
                  }`}
                >
                  <Icon
                    className={`w-7 h-7 ${isCyan ? 'text-cyan' : 'text-purple'}`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm text-white/50"
                    >
                      <CheckCircle
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          isCyan ? 'text-cyan/60' : 'text-purple/60'
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    isCyan
                      ? 'text-cyan hover:text-cyan/80'
                      : 'text-purple hover:text-purple/80'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            );
          })}

          {/* CTA Card */}
          <div className="service-card p-8 rounded-3xl bg-gradient-to-br from-cyan/10 to-purple/10 border border-cyan/20 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-cyan/20 flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-cyan" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-3">
              Have a Custom Project?
            </h3>
            <p className="text-white/60 text-sm mb-6">
              Let's discuss how I can help with your specific needs.
            </p>
            <button onClick={scrollToContact} className="btn-primary">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
