import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ChevronDown, 
  Bug, 
  Shield, 
  CheckCircle, 
  Search, 
  MessageCircle,
  Zap,
  Layers
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const sqaTopics = [
  {
    id: 1,
    icon: Bug,
    title: 'Testing Fundamentals',
    content: `Understanding the core principles of software testing is essential. This includes:
    
• Test Planning: Creating comprehensive test strategies
• Test Case Design: Writing clear, executable test cases
• Test Execution: Running tests systematically and documenting results
• Defect Management: Tracking bugs from discovery to resolution
• Test Reporting: Communicating findings effectively to stakeholders`,
  },
  {
    id: 2,
    icon: Layers,
    title: 'SDLC & STLC',
    content: `Mastering the Software Development Life Cycle and Software Testing Life Cycle:
    
• Requirements Analysis: Understanding what needs to be built
• Design Review: Validating architecture and design decisions
• Development Support: Providing early feedback to developers
• Testing Phases: Unit, Integration, System, and UAT testing
• Deployment Verification: Ensuring smooth releases`,
  },
  {
    id: 3,
    icon: Zap,
    title: 'Automation vs Manual Testing',
    content: `Knowing when to automate and when to test manually:
    
• Automation Candidates: Regression tests, data-driven tests, repetitive tasks
• Manual Testing: Exploratory testing, usability testing, ad-hoc testing
• Tool Selection: Selenium, Cypress, Playwright, Jest
• Framework Design: Building maintainable automation suites
• CI/CD Integration: Embedding tests in the deployment pipeline`,
  },
  {
    id: 4,
    icon: Search,
    title: 'Bug Tracking Tools',
    content: `Effective use of bug tracking and test management tools:
    
• Jira: Issue tracking and project management
• TestRail: Test case management
• Bugzilla: Open source bug tracking
• Azure DevOps: Integrated ALM solution
• Custom Tools: Building internal tracking systems`,
  },
  {
    id: 5,
    icon: MessageCircle,
    title: 'Communication with Developers',
    content: `Building strong relationships with development teams:
    
• Clear Bug Reports: Steps to reproduce, expected vs actual results
• Constructive Feedback: Focusing on the issue, not the person
• Collaborative Approach: Working together to find solutions
• Technical Understanding: Speaking the developer's language
• Timely Updates: Keeping everyone informed on test progress`,
  },
  {
    id: 6,
    icon: Shield,
    title: 'Quality Mindset',
    content: `Developing a culture of quality throughout the organization:
    
• Shift Left: Catching issues early in the development cycle
• Continuous Improvement: Learning from every release
• User Advocacy: Representing the end user's perspective
• Risk Assessment: Prioritizing testing based on impact
• Process Optimization: Streamlining QA workflows`,
  },
];

export default function SQAGuide() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<number | null>(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.sqa-title',
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

      // Accordion items
      gsap.fromTo(
        '.accordion-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="sqa-guide"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Header */}
          <div className="sqa-title">
            <span className="inline-block text-cyan text-sm font-semibold tracking-wider uppercase mb-4">
              Educational Guide
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              How to Become a{' '}
              <span className="text-gradient">Perfect SQA Engineer</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Quality assurance is more than just finding bugs. It's about ensuring 
              that software meets user expectations, business requirements, and industry 
              standards. Here's a comprehensive guide to mastering SQA.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                'Master testing methodologies and best practices',
                'Develop strong analytical and problem-solving skills',
                'Learn to communicate effectively with technical teams',
                'Stay updated with the latest testing tools and trends',
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{point}</span>
                </div>
              ))}
            </div>

            {/* Decorative element */}
            <div className="mt-12 hidden lg:block">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full border border-cyan/20 animate-pulse" />
                <div className="absolute inset-4 rounded-full border border-purple/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute inset-8 rounded-full border border-cyan/10 animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Bug className="w-16 h-16 text-cyan/30" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-4">
            {sqaTopics.map((topic) => {
              const Icon = topic.icon;
              const isOpen = openId === topic.id;

              return (
                <div
                  key={topic.id}
                  className="accordion-item rounded-xl overflow-hidden glass border border-white/5"
                >
                  <button
                    onClick={() => toggleAccordion(topic.id)}
                    className={`w-full flex items-center justify-between p-5 text-left transition-all ${
                      isOpen ? 'bg-cyan/5' : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                          isOpen ? 'bg-cyan/20' : 'bg-white/5'
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 transition-colors ${
                            isOpen ? 'text-cyan' : 'text-white/50'
                          }`}
                        />
                      </div>
                      <span
                        className={`font-semibold transition-colors ${
                          isOpen ? 'text-white' : 'text-white/70'
                        }`}
                      >
                        {topic.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-cyan' : 'text-white/50'
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="p-5 pt-0">
                      <div className="pl-14">
                        <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
                          {topic.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
