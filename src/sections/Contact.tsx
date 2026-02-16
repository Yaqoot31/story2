import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  FileText,
  Send,
  Copy,
  CheckCircle,
  MessageSquare
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

const contactLinks = [
  { icon: Linkedin, label: 'LinkedIn', value: 'yaqoot-nawab-3a781117b', href: 'https://linkedin.com/in/yaqoot-nawab-3a781117b', color: 'cyan' },
  { icon: FileText, label: 'Medium', value: '@ranayaqoot', href: 'https://medium.com/@ranayaqoot', color: 'purple' },
  { icon: Mail, label: 'Email', value: 'coders31official@gmail.com', href: 'mailto:coders31official@gmail.com', color: 'cyan' },
  { icon: Phone, label: 'Phone', value: '+92 312 640 6045', href: 'tel:+923126406045', color: 'purple' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', service: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.contact-title',
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

      // Contact cards
      gsap.fromTo(
        '.contact-card',
        { y: 40, opacity: 0 },
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

      // Form
      gsap.fromTo(
        '.contact-form',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopy = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowDialog(true);
    setFormData({ name: '', email: '', message: '', service: '' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="contact-title text-center mb-16">
          <span className="inline-block text-cyan text-sm font-semibold tracking-wider uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Open for consulting, mentorship, and leadership roles. 
            Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-bold text-white mb-6">
              Direct Lines
            </h3>

            <div className="space-y-4 mb-10">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                const isCyan = link.color === 'cyan';

                return (
                  <div
                    key={index}
                    className="contact-card group flex items-center justify-between p-4 rounded-xl glass border border-white/5 hover:border-cyan/20 transition-all"
                  >
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 flex-1"
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          isCyan ? 'bg-cyan/10' : 'bg-purple/10'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isCyan ? 'text-cyan' : 'text-purple'}`} />
                      </div>
                      <div>
                        <span className="text-white/50 text-xs block">{link.label}</span>
                        <span className="text-white font-medium">{link.value}</span>
                      </div>
                    </a>

                    <button
                      onClick={() => handleCopy(link.value, link.label)}
                      className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                      aria-label={`Copy ${link.label}`}
                    >
                      {copiedField === link.label ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-white/40" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Location */}
            <div className="contact-card p-6 rounded-2xl glass border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <span className="text-white/50 text-xs block">Location</span>
                  <span className="text-white font-medium">Islamabad, Pakistan</span>
                </div>
              </div>
              <p className="text-white/60 text-sm">
                Available for remote work and international collaborations across all time zones.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="contact-form">
            <h3 className="text-xl font-heading font-bold text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-white/60 text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2">Service Interest</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="form-input"
                >
                  <option value="">Select a service</option>
                  <option value="consulting">Project Management Consulting</option>
                  <option value="qa">QA Process Setup</option>
                  <option value="training">Team Training</option>
                  <option value="mentorship">Career Mentorship</option>
                  <option value="strategy">Software Delivery Strategy</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-deep-blue/30 border-t-deep-blue rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="glass border border-cyan/20 max-w-md">
          <DialogHeader>
            <div className="mx-auto w-16 h-16 rounded-full bg-cyan/10 flex items-center justify-center mb-4">
              <MessageSquare className="w-8 h-8 text-cyan" />
            </div>
            <DialogTitle className="text-center text-white text-xl">Message Sent!</DialogTitle>
            <DialogDescription className="text-center text-white/60">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <button
              onClick={() => setShowDialog(false)}
              className="w-full btn-primary"
            >
              Got it!
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
