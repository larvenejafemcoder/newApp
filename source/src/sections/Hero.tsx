import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import ArcReactor from '@/components/ArcReactor';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Arc Reactor - Positioned on the right side */}
      <div className="absolute right-[5%] lg:right-[8%] top-1/2 -translate-y-1/2 hidden md:block z-20">
        <ArcReactor />
      </div>

      {/* Decorative circles - smaller on the left */}
      <div className="absolute top-1/4 left-[8%] w-20 h-20 lg:w-28 lg:h-28 hidden lg:block opacity-60">
        <div className="relative w-full h-full">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-rotate-slow" />
          {/* Inner ring */}
          <div className="absolute inset-4 rounded-full border border-cyan-400/50" />
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-cyan-400 rounded-full glow-cyan" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/4 left-[12%] w-16 h-16 lg:w-24 lg:h-24 hidden lg:block animate-float opacity-50">
        <div className="relative w-full h-full">
          {/* Triangle shape using borders */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-cyan-400/40" />
          </div>
          {/* Inner circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-purple-400/60" />
          </div>
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center pt-1">
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-300 text-sm">Now accepting new members</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              <span className="block text-white mb-2">Create</span>
              <span className="block gradient-text">Your Impact.</span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl mx-auto lg:mx-0 text-gray-400 text-lg md:text-xl leading-relaxed">
              Join a community of creators, innovators, and dreamers. Together, we build 
              the future through collaboration, creativity, and meaningful connections.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-6 text-lg rounded-full group"
              >
                Join Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full group"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold gradient-text-purple">10K+</div>
                <div className="text-gray-500 text-sm mt-1">Members</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold gradient-text-purple">500+</div>
                <div className="text-gray-500 text-sm mt-1">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold gradient-text-purple">50+</div>
                <div className="text-gray-500 text-sm mt-1">Countries</div>
              </div>
            </div>
          </div>

          {/* Right side - Arc Reactor placeholder for mobile */}
          <div className="hidden lg:flex items-center justify-center">
            {/* Arc reactor is positioned absolutely, this is just for layout balance */}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
