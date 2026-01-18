import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-12 px-6 mt-16">
      <div className="container mx-auto">
        <div className="glass p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-white">AttendPro</span>
              </div>
              <p className="text-white/70 mb-4">
                Revolutionizing attendance management with AI-powered solutions for modern institutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Features</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Pricing</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">API</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Documentation</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">About</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-white/60" />
                  <span className="text-white/70">support@attendpro.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-white/60" />
                  <span className="text-white/70">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-white/60" />
                  <span className="text-white/70">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60">
              © 2024 AttendPro. All rights reserved. Built with modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
