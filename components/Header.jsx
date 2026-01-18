import { useState } from 'react';
import { Menu, X, Users, BarChart3 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-white/20 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">AttendPro</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-white/80 hover:text-white transition-colors duration-200">
              Sign In
            </button>
            <button className="px-6 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-200 glass-hover">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <button className="text-white/80 hover:text-white transition-colors duration-200 text-left">
                  Sign In
                </button>
                <button className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-200 glass-hover">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
