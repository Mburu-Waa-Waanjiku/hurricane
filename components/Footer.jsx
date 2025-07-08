import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6 text-[#e6471f]">
                Hurricane Teck & Marketing Solutions
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner for professional web design, graphic design, digital marketing, and printing services. 
                We deliver high-quality, top-tier work with professionalism and fine-tuned expertise to detail.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-[#e6471f] transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-[#e6471f] transition-colors duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-[#e6471f] transition-colors duration-300">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-[#e6471f] transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-[#e6471f] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gray-300">
                      Ruiru Town Opp Poster<br />
                      Lowini Complex<br />
                      Room G17
                      Your City, State 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-[#e6471f] flex-shrink-0" size={20} />
                  <a href="tel:0704065652" className="text-gray-300 hover:text-white transition-colors">
                    0704 065 652
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-[#e6471f] flex-shrink-0" size={20} />
                  <a href="mailto:hurricaneteck@outlook.com" className="text-gray-300 hover:text-white transition-colors">
                    hurricaneteck@outlook.com
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li><a href="/services/web-design" className="text-gray-300 hover:text-[#e6471f] transition-colors">Web Design</a></li>
                <li><a href="/services/marketing/digital-marketing" className="text-gray-300 hover:text-[#e6471f] transition-colors">Graphic Design</a></li>
                <li><a href="/services/graphic-design" className="text-gray-300 hover:text-[#e6471f] transition-colors">Digital Marketing</a></li>
                <li><a href="/services/seo-services" className="text-gray-300 hover:text-[#e6471f] transition-colors">SEO Services</a></li>
                <li><a href="/services/printing-services" className="text-gray-300 hover:text-[#e6471f] transition-colors">Printing Services</a></li>
                <li><a href="/services/video-creation" className="text-gray-300 hover:text-[#e6471f] transition-colors">Video Creation</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Hurricane Teck & Marketing Solutions. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
