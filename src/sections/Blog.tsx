import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: 1,
    title: 'Why the IT Project Manager Leads the Pack in the Tech World',
    excerpt: 'IT Project Managers are not just coordinators; they are strategists, problem-solvers, and leaders who ensure complex IT projects are delivered on time, within budget, and to expected quality standards.',
    image: '/blog-tech.jpg',
    date: 'Dec 10, 2025',
    readTime: '3 min read',
    category: 'Leadership',
    link: 'https://medium.com/@ranayaqoot/why-the-it-project-manager-leads-the-pack-in-the-tech-world-by-yaqoot-nawab-4a4d74f551bb',
  },
  {
    id: 2,
    title: 'IT Project Management in 2026: Leading with AI, Not Competing with It',
    excerpt: 'In 2026, IT Project Managers are not just planners. They are system thinkers who collaborate with AI to remove risk before it becomes damage.',
    image: '/blog-pm.jpg',
    date: 'Jan 9, 2026',
    readTime: '2 min read',
    category: 'AI & Future',
    link: 'https://medium.com/@ranayaqoot/it-project-management-in-2026-leading-with-ai-not-competing-with-it-by-yaqoot-nawab-7fde2b57f028',
  },
  {
    id: 3,
    title: 'Building a Skill-First IT Portfolio: Why Execution Matters More Than Degrees',
    excerpt: 'In the modern tech landscape, your ability to execute and deliver results matters more than traditional credentials. Here\'s how to build a portfolio that showcases your real skills.',
    image: '/blog-code.jpg',
    date: 'Nov 2025',
    readTime: '4 min read',
    category: 'Career',
    link: 'https://medium.com/@ranayaqoot/building-a-skill-first-it-portfolio-why-execution-matters-more-than-degrees-40f2fb070144',
  },
];

const insights = [
  {
    title: 'The PM as Bridge',
    content: 'Project Managers are the bridge between business and technology, translating complex technical concepts into actionable business insights.',
  },
  {
    title: 'Leadership Over Authority',
    content: 'True leadership comes from influence and inspiration, not just positional authority.',
  },
  {
    title: 'Systems Thinking',
    content: 'Understanding how all parts of a project interconnect is crucial for successful delivery.',
  },
  {
    title: 'Continuous Improvement',
    content: 'The best PMs never stop learning, adapting, and refining their approach.',
  },
];

export default function Blog() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.blog-title',
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

      // Blog cards
      gsap.fromTo(
        '.blog-card',
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

      // Insights
      gsap.fromTo(
        '.insight-card',
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.insights-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="blog-title flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span className="inline-block text-cyan text-sm font-semibold tracking-wider uppercase mb-4">
              Insights & Articles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Blog & <span className="text-gradient">Philosophy</span>
            </h2>
            <p className="text-white/60 max-w-xl">
              Thoughts on project management, leadership, and the future of technology.
            </p>
          </div>
          <a
            href="https://medium.com/@ranayaqoot"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 lg:mt-0 btn-secondary inline-flex items-center gap-2"
          >
            <span>View All Articles</span>
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card group block"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <div className="aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan/20 text-cyan backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-white/50 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-cyan transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-white/60 text-sm line-clamp-3">{post.excerpt}</p>

              <div className="mt-4 flex items-center gap-2 text-cyan text-sm font-medium">
                <span>Read Article</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="insights-section">
          <h3 className="text-2xl font-heading font-bold text-white mb-8 text-center">
            My Philosophy on Project Management
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="insight-card p-6 rounded-2xl glass border border-white/5 hover:border-purple/20 transition-all"
              >
                <h4 className="text-lg font-heading font-bold text-white mb-3">
                  {insight.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {insight.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
