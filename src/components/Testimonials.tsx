import Image from 'next/image';
import React from 'react';

const testimonials = [
  {
    id: 'sophia',
    name: 'Sophia Lee',
    role: 'Beauty Enthusiast',
    quote: 'The skincare products are amazing! My skin has never looked better.',
    image: 'https://cdn.wegic.ai/assets/onepage/ai/image/f2a666a0-56b2-4637-a3c7-f782b59e50eb.jpg'
  },
  {
    id: 'david',
    name: 'David Chen',
    role: 'Tech Reviewer',
    quote: 'Incredible sound and battery life on the headphones. Professional quality.',
    image: 'https://cdn.wegic.ai/assets/onepage/ai/image/3051aeee-da64-468e-8632-c14322e241b8.jpg'
  },
  {
    id: 'emily',
    name: 'Emily White',
    role: 'Student & Gamer',
    quote: 'Affordable prices without compromising quality. Fast delivery too!',
    image: 'https://cdn.wegic.ai/assets/onepage/ai/image/add41a7d-06c0-42b4-823c-cba355342127.jpg'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="mt-28 px-4 sm:px-6 md:px-10">
      {/* Heading */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4 md:gap-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          What Our Customers Say
        </h2>
        <a href="#" className="text-sm sm:text-base font-semibold text-indigo-600 hover:text-indigo-700">
          Read All
        </a>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white rounded-2xl p-6 sm:p-8 shadow relative overflow-hidden flex flex-col h-full">
            {/* Header: Image + Name + Role */}
            <div className="flex items-center gap-4 mb-5">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-4 ring-indigo-100 flex-shrink-0">
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base leading-tight">{t.name}</h3>
                <span className="text-xs sm:text-sm uppercase tracking-wide text-indigo-600 font-medium">{t.role}</span>
              </div>
            </div>
            {/* Quote */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-1">{t.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
