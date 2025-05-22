import React, { useState } from 'react';
import { X, Clock, Mail, MapPin } from 'lucide-react';

const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary-600 text-white">
      <div className="container-custom">
        <div className="flex items-center justify-between py-2">
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Clock size={14} className="mr-2" />
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center">
              <Mail size={14} className="mr-2" />
              <a href="mailto:info@oemseducation.com" className="hover:text-gray-200 transition-colors">
                info@oemseducation.com
              </a>
            </div>
            <div className="flex items-center">
              <MapPin size={14} className="mr-2" />
              <span>Perth, WA & Ebene, Mauritius</span>
            </div>
          </div>
          
          <div className="flex-1 md:flex-none text-center md:text-left">
            <span className="text-sm font-medium">
              🎓 Now accepting applications for 2025 intake! <a href="/contact" className="underline hover:text-gray-200 transition-colors">Apply Now</a>
            </span>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close announcement"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;