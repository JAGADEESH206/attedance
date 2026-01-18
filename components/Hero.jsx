import { ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 px-6">
      <div className="container mx-auto text-center">
        <div className="glass p-8 md:p-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Smart Attendance Management
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Made Simple
            </span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Revolutionize your attendance tracking with AI-powered facial recognition, 
            real-time monitoring, and comprehensive analytics. Perfect for schools, 
            colleges, and businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 glass-hover">
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass p-6 glass-hover">
              <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">99.9% Accuracy</h3>
              <p className="text-white/70 text-sm">AI-powered facial recognition</p>
            </div>
            <div className="glass p-6 glass-hover">
              <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-white/70 text-sm">Instant attendance updates</p>
            </div>
            <div className="glass p-6 glass-hover">
              <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Multi-user Support</h3>
              <p className="text-white/70 text-sm">Unlimited students & staff</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
