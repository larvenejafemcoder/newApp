import { Code, Palette, Megaphone, BarChart3, Video, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code,
    title: 'Development',
    description: 'Build powerful applications with our expert development team and cutting-edge technology stack.',
    features: ['Web Apps', 'Mobile Apps', 'API Integration', 'Cloud Solutions'],
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Create stunning visuals and user experiences that captivate your audience and elevate your brand.',
    features: ['UI/UX Design', 'Brand Identity', 'Motion Graphics', 'Illustration'],
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    description: 'Amplify your reach with data-driven marketing strategies that connect you with your target audience.',
    features: ['Social Media', 'Content Strategy', 'SEO', 'Paid Advertising'],
    color: 'from-orange-400 to-red-500',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Make informed decisions with comprehensive analytics and insights about your performance.',
    features: ['Data Analysis', 'Reporting', 'KPI Tracking', 'Predictive Models'],
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Video,
    title: 'Video Production',
    description: 'Tell your story through compelling video content that engages and inspires your audience.',
    features: ['Commercials', 'Documentaries', 'Animation', 'Live Streaming'],
    color: 'from-violet-400 to-purple-500',
  },
  {
    icon: PenTool,
    title: 'Content Creation',
    description: 'Craft compelling narratives and content that resonates with your community and drives engagement.',
    features: ['Copywriting', 'Blog Posts', 'Newsletters', 'Scripts'],
    color: 'from-rose-400 to-pink-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#0a0a0a]">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-cyan-400 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Solutions to{' '}
            <span className="gradient-text">accelerate your growth</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            From concept to execution, we provide end-to-end services that help you achieve your goals and maximize your impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-2xl glass-card hover:bg-white/5 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, fIndex) => (
                  <span
                    key={fIndex}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white hover:bg-white/5 p-0 h-auto justify-start group/btn"
              >
                Learn more
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
              </Button>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
