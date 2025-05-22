const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    university: 'University of Melbourne',
    course: 'Master of Business Administration',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'OEMS made my dream of studying in Australia come true. Their guidance throughout the university selection and visa process was invaluable. I highly recommend their services to anyone looking to study in Australia.'
  },
  {
    id: 2,
    name: 'Raj Patel',
    university: 'University of Sydney',
    course: 'Bachelor of Engineering',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'The team at OEMS went above and beyond to help me secure admission and a scholarship at the University of Sydney. Their personalized approach and deep knowledge of the Australian education system made all the difference.'
  },
  {
    id: 3,
    name: 'Li Wei',
    university: 'Australian National University',
    course: 'PhD in Computer Science',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'From application to arrival, OEMS supported me every step of the way. Their detailed pre-departure orientation helped me settle into Australian life seamlessly. Their post-arrival support was exceptional.'
  },
  {
    id: 4,
    name: 'Michael Rodriguez',
    university: 'Monash University',
    course: 'Master of Public Health',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'I was overwhelmed by the process of applying to Australian universities until I found OEMS. Their expert counselors simplified everything and helped me find the perfect program. Now I\'m thriving at Monash University!'
  },
];

export default function TestimonialsMarquee() {
  return (
    <div className="overflow-hidden w-full">
      <div className="space-y-6 mask-fade">
        {[false, true].map((reverse, idx) => (
          <div
            key={idx}
            className={`flex gap-6 will-change-transform whitespace-nowrap ${
              reverse ? 'animate-marquee-reverse' : 'animate-marquee'
            }`}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-80 shrink-0 rounded-xl p-4 bg-white shadow-md"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-20 w-20 rounded-full object-cover mb-4"
                />
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-gray-500">{t.university}</div>
                <div className="text-xs italic text-gray-400 mb-2">{t.course}</div>
                <p className="text-sm text-gray-700 line-clamp-5">{t.content}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
