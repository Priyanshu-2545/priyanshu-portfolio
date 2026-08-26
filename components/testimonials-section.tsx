'use client';

import { useEffect, useState, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'CTO',
    company: 'TechVenture Solutions',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Exceptional DevOps engineer with deep expertise in cloud infrastructure. Delivered critical pipeline automation that reduced deployment time by 60%. Highly recommended.',
    rating: 5,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Product Manager',
    company: 'InnovateLabs',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Outstanding full-stack developer. Built a scalable microservices architecture that handled 10x traffic surge. Problem-solving skills are top-notch.',
    rating: 5,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Engineering Lead',
    company: 'CloudFirst Inc',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Brilliant at optimizing database queries and infrastructure. His PostgreSQL expertise saved us thousands in cloud costs monthly. A true professional.',
    rating: 5,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    role: 'Hiring Manager',
    company: 'DevOps Pro',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Meticulous attention to detail and strong communication. Integrated seamlessly with our team and mentored junior developers. Would hire again instantly.',
    rating: 5,
    color: 'from-pink-500 to-rose-500',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const autoScrollRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!autoScroll) return;

    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(autoScrollRef.current);
  }, [autoScroll]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-950 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 dark:bg-cyan-950 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="space-y-2 sm:space-y-3 text-center mb-12 sm:mb-16">
          <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest animate-pulse">
            Social Proof
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Trusted by teams and businesses worldwide
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-2 sm:px-4"
                  >
                    <div className="relative group">
                      {/* Gradient border */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur`} />

                      {/* Card */}
                      <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                        {/* Quote Icon */}
                        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                          <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-slate-900 dark:text-white" />
                        </div>

                        {/* Rating */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8 italic line-clamp-4 sm:line-clamp-none">
                          "{testimonial.text}"
                        </p>

                        {/* Author Info */}
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="relative flex-shrink-0">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-slate-200 dark:border-slate-700"
                            />
                            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                          </div>
                          <div className="min-w-0">
                            <p className="font-bold text-slate-900 dark:text-white truncate text-sm sm:text-base">
                              {testimonial.name}
                            </p>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 truncate">
                              {testimonial.role} at {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-20 bg-white dark:bg-slate-800 rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 border border-slate-200 dark:border-slate-700"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 dark:text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-20 bg-white dark:bg-slate-800 rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 border border-slate-200 dark:border-slate-700"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 dark:text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8 sm:mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-blue-600 dark:bg-blue-500 w-8'
                    : 'bg-slate-300 dark:bg-slate-600 w-2 hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
