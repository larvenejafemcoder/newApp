import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Founder, TechStart',
    content: 'Joining Impact was the best decision for my startup. The community support and resources helped us secure our first round of funding and grow our team from 3 to 20 people.',
    rating: 5,
    avatar: 'SC',
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'Marcus Johnson',
    role: 'Creative Director',
    content: 'The design community here is incredible. I have collaborated with amazing talents from around the world and my portfolio has grown exponentially since joining.',
    rating: 5,
    avatar: 'MJ',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Social Entrepreneur',
    content: 'Impact gave me the platform and connections I needed to launch my social enterprise. Today, we are operating in 12 countries and changing lives every day.',
    rating: 5,
    avatar: 'ER',
    color: 'from-green-400 to-emerald-500',
  },
  {
    name: 'David Kim',
    role: 'Software Engineer',
    content: 'The mentorship program here is top-notch. I went from junior developer to tech lead in just 18 months with the guidance of industry veterans.',
    rating: 5,
    avatar: 'DK',
    color: 'from-orange-400 to-red-500',
  },
  {
    name: 'Aisha Patel',
    role: 'Marketing Consultant',
    content: 'The networking opportunities are unmatched. I have found clients, partners, and lifelong friends through this community. Highly recommend!',
    rating: 5,
    avatar: 'AP',
    color: 'from-violet-400 to-purple-500',
  },
  {
    name: 'James Wilson',
    role: 'Product Manager',
    content: 'The workshops and events have been game-changers for my career. I have learned more here in 6 months than I did in 2 years of traditional education.',
    rating: 5,
    avatar: 'JW',
    color: 'from-rose-400 to-pink-500',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-cyan-400 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Loved by{' '}
            <span className="gradient-text">creators worldwide</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Hear from our community members about how Impact has transformed their careers and helped them achieve their goals.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-2xl glass-card hover:bg-white/5 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-10 h-10 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center`}>
                  <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="text-white font-medium">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
