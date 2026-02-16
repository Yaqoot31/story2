import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Bug, 
  GitBranch, 
  Users, 
  MessageSquare, 
  ShieldAlert, 
  Target,
  Layout,
  Code,
  Terminal,
  Workflow,
  Brain,
  Lightbulb
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const technicalSkills = [
  { name: 'QA Testing & Automation', level: 95, icon: Bug },
  { name: 'Agile & Scrum', level: 90, icon: Workflow },
  { name: 'Jira & ClickUp', level: 92, icon: Layout },
  { name: 'Web Development', level: 85, icon: Code },
  { name: 'Linux Testing', level: 80, icon: Terminal },
  { name: 'Git & Version Control', level: 88, icon: GitBranch },
];

const managementSkills = [
  { name: 'Leadership & Team Building', level: 92, icon: Users },
  { name: 'Client Communication', level: 95, icon: MessageSquare },
  { name: 'Risk Management', level: 88, icon: ShieldAlert },
  { name: 'Product Strategy', level: 85, icon: Target },
  { name: 'Strategic Thinking', level: 90, icon: Brain },
  { name: 'Problem Solving', level: 93, icon: Lightbulb },
];

interface SkillBarProps {
  skill: { name: string; level: number; icon: React.ElementType };
  index: number;
  isVisible: boolean;
}

function SkillBar({ skill, index, isVisible }: SkillBarProps) {
  const Icon = skill.icon;
  
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
            <Icon className="w-4 h-4 text-cyan" />
          </div>
          <span className="text-white/80 font-medium text-sm">{skill.name}</span>
        </div>
        <span className="text-cyan font-heading font-bold">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.skills-title',
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

      // Cards reveal
      gsap.fromTo(
        '.skills-card',
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
            onEnter: () => setIsVisible(true),
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="skills-title text-center mb-16">
          <span className="inline-block text-cyan text-sm font-semibold tracking-wider uppercase mb-4">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Skills & <span className="text-gradient">Competencies</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A blend of technical expertise and leadership capabilities honed through 
            years of hands-on experience in software development and project management.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="skills-card p-8 rounded-3xl glass border border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-cyan/5 flex items-center justify-center">
                <Code className="w-6 h-6 text-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white">Technical Skills</h3>
                <p className="text-white/50 text-sm">QA, Development & Tools</p>
              </div>
            </div>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>

          {/* Management Skills */}
          <div className="skills-card p-8 rounded-3xl glass border border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple/20 to-purple/5 flex items-center justify-center">
                <Users className="w-6 h-6 text-purple" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white">Management Skills</h3>
                <p className="text-white/50 text-sm">Leadership & Strategy</p>
              </div>
            </div>

            <div className="space-y-6">
              {managementSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-heading font-bold text-white mb-8">
            Certifications & Credentials
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Scrum Master', org: 'Scrum Alliance', icon: Workflow },
              { name: 'QA Professional', org: 'ISTQB', icon: Bug },
              { name: 'Project Management', org: 'PMI', icon: Target },
              { name: 'Agile Practitioner', org: 'Scaled Agile', icon: GitBranch },
            ].map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl glass border border-white/5 text-center hover:border-cyan/20 transition-all card-hover"
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan/20 transition-colors">
                    <Icon className="w-7 h-7 text-cyan" />
                  </div>
                  <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                  <p className="text-white/50 text-sm">{cert.org}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
