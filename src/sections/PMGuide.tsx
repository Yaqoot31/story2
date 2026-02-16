import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Crown, 
  MessageSquare, 
  ShieldAlert, 
  Users, 
  GitBranch, 
  Brain,
  Heart,
  Quote
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pmTopics = [
  {
    id: 'leadership',
    icon: Crown,
    title: 'Leadership Mindset',
    content: `True leadership is not about authority—it's about influence and inspiration. As a Project Manager, your role is to:

• Lead by Example: Demonstrate the work ethic and attitude you expect from your team
• Empower Others: Give your team the autonomy and resources they need to succeed
• Vision Casting: Paint a clear picture of what success looks like
• Decision Making: Make tough calls with confidence and accountability
• Continuous Growth: Never stop learning and improving your leadership skills`,
  },
  {
    id: 'communication',
    icon: MessageSquare,
    title: 'Communication Mastery',
    content: `Communication is the backbone of project management. Master these aspects:

• Active Listening: Truly understand before being understood
• Clear Messaging: Convey complex ideas in simple terms
• Stakeholder Management: Tailor communication to different audiences
• Status Reporting: Keep everyone informed with transparency
• Conflict Resolution: Address issues before they escalate
• Documentation: Maintain clear records of decisions and changes`,
  },
  {
    id: 'risk',
    icon: ShieldAlert,
    title: 'Risk Management',
    content: `Proactive risk management separates good PMs from great ones:

• Risk Identification: Spot potential issues before they become problems
• Impact Assessment: Evaluate the severity and probability of risks
• Mitigation Planning: Develop strategies to minimize risk impact
• Contingency Planning: Have backup plans for critical scenarios
• Regular Reviews: Continuously monitor and update risk registers
• Lessons Learned: Document and share insights from past projects`,
  },
  {
    id: 'stakeholder',
    icon: Users,
    title: 'Stakeholder Management',
    content: `Managing expectations and building relationships with all parties:

• Identification: Map all internal and external stakeholders
• Expectation Setting: Define clear, realistic expectations upfront
• Regular Updates: Keep stakeholders informed of progress and challenges
• Feedback Loops: Create channels for continuous input and improvement
• Conflict Resolution: Navigate competing priorities and interests
• Relationship Building: Invest in long-term professional relationships`,
  },
  {
    id: 'agile',
    icon: GitBranch,
    title: 'Agile & Scrum',
    content: `Modern project management requires agile thinking:

• Sprint Planning: Break work into manageable iterations
• Daily Standups: Keep the team aligned and unblock issues quickly
• Retrospectives: Continuously improve team processes
• Backlog Management: Prioritize work based on value and effort
• Velocity Tracking: Measure and predict team capacity
• Adaptability: Embrace change and respond to feedback`,
  },
  {
    id: 'emotional',
    icon: Heart,
    title: 'Emotional Intelligence',
    content: `The human side of project management is often the most challenging:

• Self-Awareness: Understand your own emotions and triggers
• Empathy: Recognize and respond to the emotions of others
• Social Skills: Build rapport and navigate office politics
• Motivation: Keep the team engaged and inspired
• Stress Management: Handle pressure without burning out
• Team Dynamics: Foster a positive, collaborative environment`,
  },
];

export default function PMGuide() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('leadership');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.pm-title',
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

      // Content animation
      gsap.fromTo(
        '.pm-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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

  const activeTopic = pmTopics.find((t) => t.id === activeTab);

  return (
    <section
      id="pm-guide"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="pm-title text-center mb-16">
          <span className="inline-block text-purple text-sm font-semibold tracking-wider uppercase mb-4">
            Leadership Guide
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            How to Become a{' '}
            <span className="text-gradient">Perfect Project Manager</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Project management is both an art and a science. It requires technical knowledge, 
            people skills, and the ability to navigate complexity with confidence.
          </p>
        </div>

        {/* Quote */}
        <div className="pm-content mb-16">
          <div className="relative max-w-3xl mx-auto text-center p-8 rounded-2xl glass border border-purple/20">
            <Quote className="absolute top-4 left-4 w-8 h-8 text-purple/30" />
            <p className="text-xl lg:text-2xl text-white/80 font-light italic mb-4">
              Tools are not enough. Mindset is everything.
            </p>
            <p className="text-purple font-medium">— Yaqoot Nawab</p>
          </div>
        </div>

        {/* Tabbed Content */}
        <div className="pm-content grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 space-y-2">
            {pmTopics.map((topic) => {
              const Icon = topic.icon;
              const isActive = activeTab === topic.id;

              return (
                <button
                  key={topic.id}
                  onClick={() => setActiveTab(topic.id)}
                  className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all ${
                    isActive
                      ? 'bg-purple/10 border border-purple/30'
                      : 'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${isActive ? 'text-purple' : 'text-white/50'}`}
                  />
                  <span
                    className={`font-medium text-sm ${
                      isActive ? 'text-white' : 'text-white/70'
                    }`}
                  >
                    {topic.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {activeTopic && (
              <div className="p-8 rounded-3xl glass border border-white/5 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-purple/10 flex items-center justify-center">
                    <activeTopic.icon className="w-7 h-7 text-purple" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white">
                    {activeTopic.title}
                  </h3>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-white/70 leading-relaxed whitespace-pre-line">
                    {activeTopic.content}
                  </p>
                </div>

                {/* Key Takeaway */}
                <div className="mt-8 p-4 rounded-xl bg-purple/5 border border-purple/10">
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-purple font-semibold text-sm">Key Insight:</span>
                      <p className="text-white/60 text-sm mt-1">
                        Mastering {activeTopic.title.toLowerCase()} takes time and practice. 
                        Focus on one area at a time and seek feedback from your team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
