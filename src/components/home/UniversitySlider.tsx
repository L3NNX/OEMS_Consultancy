import React from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const universities = [
  {
    id: 1,
    name: 'University of Melbourne',
    location: 'Melbourne, Victoria',
    image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ranking: 1,
    programs: ['Business', 'Engineering', 'Medicine', 'Arts'],
  },
  {
    id: 2,
    name: 'University of Sydney',
    location: 'Sydney, New South Wales',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ranking: 2,
    programs: ['Law', 'Science', 'Architecture', 'Medicine'],
  },
  {
    id: 3,
    name: 'Australian National University',
    location: 'Canberra, ACT',
    image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ranking: 3,
    programs: ['Politics', 'Research', 'Economics', 'Science'],
  },
  {
    id: 4,
    name: 'University of Queensland',
    location: 'Brisbane, Queensland',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ranking: 4,
    programs: ['Medicine', 'Engineering', 'Agriculture', 'Business'],
  },
  {
    id: 5,
    name: 'Monash University',
    location: 'Melbourne, Victoria',
    image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ranking: 5,
    programs: ['Pharmacy', 'Engineering', 'Business', 'Arts'],
  },
  {
    id: 6,
    name: 'University of Western Australia',
    location: 'Perth, Western Australia',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ranking: 6,
    programs: ['Mining', 'Medicine', 'Business', 'Science'],
  },
];

const UniversitySlider: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {universities.map((university) => (
        <div key={university.id} className="card overflow-hidden group">
          <div
            className="h-48 bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: `url(${university.image})` }}
          >
            <div className="absolute inset-0 bg-primary-900 bg-opacity-40 transition-opacity group-hover:bg-opacity-20"></div>
            <div className="absolute top-3 left-3 bg-accent-600 text-white px-2 py-1 rounded text-sm font-medium">
              Rank #{university.ranking}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
              {university.name}
            </h3>
            <p className="text-gray-600 mb-4">{university.location}</p>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Top Programs:</h4>
              <div className="flex flex-wrap gap-2">
                {university.programs.map((program, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                  >
                    {program}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Link
                to={`/universities/${university.id}`}
                className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
              >
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 flex items-center text-sm"
              >
                Website <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UniversitySlider;