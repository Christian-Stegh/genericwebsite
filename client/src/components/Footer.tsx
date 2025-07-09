import { Link } from "wouter";
import { Linkedin, Twitter, Github, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-ms-blue">Christian Stegh</span>
            </div>
            <p className="text-gray-400">
              Microsoft MVP for Copilot and CTO helping executive leaders understand, adopt, and govern AI for secure, meaningful productivity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-ms-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-ms-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-ms-blue transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-ms-blue transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/speaking" className="hover:text-white transition-colors">Keynote Speaking</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Technical Workshops</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Consulting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training Programs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog Articles</Link></li>
              <li><Link href="/books" className="hover:text-white transition-colors">Published Books</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Video Library</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>christian.stegh@outlook.com</li>
              <li>773-531-1825</li>
              <li>Chicago, IL</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Christian Stegh. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
