import { Zap, Users, Globe, Shield, Sparkles, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing fast performance with our optimized platform designed for speed and efficiency.',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Connect with like-minded individuals who share your passion for creating positive change.',
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Expand your impact worldwide with our international network of creators and innovators.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your data is protected with enterprise-grade security and privacy-first architecture.',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Sparkles,
    title: 'AI Powered',
    description: 'Leverage cutting-edge AI tools to enhance your creativity and streamline your workflow.',
    color: 'from-violet-400 to-purple-500',
  },
  {
    icon: TrendingUp,
    title: 'Growth Focused',
    description: 'Track your progress and grow your impact with detailed analytics and insights.',
    color: 'from-rose-400 to-red-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-[#0a0a0a]">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-cyan-400 text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything you need to{' '}
            <span className="gradient-text">make an impact</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Our platform provides all the tools and resources you need to turn your ideas into reality and create meaningful change.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-2xl glass-card hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
