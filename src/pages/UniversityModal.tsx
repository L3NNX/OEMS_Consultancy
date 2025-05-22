// components/UniversityModal.tsx
import React, { useState } from 'react';
import { University } from '../types';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  universityName: string;
  university: University | null;
}

const sections = [
  { key: 'overview', label: 'Overview' },
  { key: 'programs', label: 'Programs' },
  { key: 'admissions', label: 'Admissions' },
  { key: 'contact', label: 'Contact' },
];

export const UniversityModal: React.FC<ModalProps> = ({ isOpen, onClose, universityName }) => {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-5xl h-[90vh] rounded-lg shadow-lg overflow-hidden flex">
        {/* Sidebar */}
        <div className={`transition-all duration-300 bg-gray-100 h-full ${sidebarOpen ? 'w-64' : 'w-16'}`}>
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <span className="font-semibold text-gray-700 text-sm">{sidebarOpen ? universityName : 'U'}</span>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-sm font-bold">{sidebarOpen ? '◀' : '▶'}</button>
          </div>
          <nav className="flex flex-col p-2">
            {sections.map(section => (
              <button
                key={section.key}
                onClick={() => setActiveTab(section.key)}
                className={`text-left px-4 py-2 rounded hover:bg-primary-100 ${activeTab === section.key ? 'bg-primary-200 font-semibold' : ''}`}
              >
                {sidebarOpen ? section.label : section.label.charAt(0)}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{sections.find(s => s.key === activeTab)?.label}</h2>
            <button onClick={onClose} className="text-gray-600 hover:text-red-500 text-xl">✕</button>
          </div>

          {/* Content Rendering */}
          <div className="text-gray-700">
            {activeTab === 'overview' && <p>This is an overview of {universityName}.</p>}
            {activeTab === 'programs' && <p>Programs offered include Business, Engineering, etc.</p>}
            {activeTab === 'admissions' && <p>Admissions information goes here.</p>}
            {activeTab === 'contact' && <p>Contact details and inquiry form.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
