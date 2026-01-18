import { BarChart3, Shield, Zap, Smartphone, Database, Cloud } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-400" />,
      title: "Advanced Analytics",
      description: "Get detailed insights with comprehensive attendance reports, trends analysis, and predictive analytics.",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-400" />,
      title: "Secure & Private",
      description: "Enterprise-grade security with end-to-end encryption and GDPR compliance for your peace of mind.",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "Lightning Fast",
      description: "Process thousands of attendance records in seconds with our optimized cloud infrastructure.",
      color: "from-yellow-500/20 to-yellow-600/20"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-purple-400" />,
      title: "Mobile Ready",
      description: "Access your attendance data anywhere with our responsive web app and native mobile applications.",
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: <Database className="h-8 w-8 text-red-400" />,
      title: "Unlimited Storage",
      description: "Never worry about data limits with unlimited cloud storage for all your attendance records.",
      color: "from-red-500/20 to-red-600/20"
    },
    {
      icon: <Cloud className="h-8 w-8 text-cyan-400" />,
      title: "Cloud Sync",
      description: "Real-time synchronization across all devices with offline support for uninterrupted service.",
      color: "from-cyan-500/20 to-cyan-600/20"
    }
  ];

  return (
    <section id="features" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features for Modern Institutions
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Everything you need to manage attendance efficiently with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass p-8 hover:scale-105 transition-all duration-300 glass-hover group"
            >
              <div className={`p-4 rounded-xl bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-transform duration-300 inline-flex mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
