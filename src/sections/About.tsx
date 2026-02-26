import { Check, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  'Access to exclusive resources and tools',
  'Networking with industry leaders',
  'Weekly workshops and mentorship',
  'Funding opportunities for your projects',
  'Global community of creators',
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-cyan-400 text-sm font-medium">
              About Us
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              We believe in the power of{' '}
              <span className="gradient-text">collective impact</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Founded in 2020, Impact has grown from a small group of passionate individuals 
              to a global community of over 10,000 creators, innovators, and change-makers. 
              Our mission is to empower people to turn their ideas into reality and create 
              positive change in the world.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              We provide the tools, resources, and community support needed to transform 
              vision into action. Whether you are an entrepreneur, artist, developer, or 
              activist, you will find your place here.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 rounded-full group"
            >
              Learn More About Us
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="relative">
            {/* Main stat card */}
            <div className="relative z-10 p-8 rounded-3xl glass-card">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">10K+</div>
                  <div className="text-gray-400">Active Members</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">500+</div>
                  <div className="text-gray-400">Projects Launched</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">$2M+</div>
                  <div className="text-gray-400">Funding Raised</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-gray-400">Countries</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-cyan-400/30 animate-pulse-glow" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl" />
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 right-8 px-4 py-2 rounded-full glass-card flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-300 text-sm">Growing daily</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
