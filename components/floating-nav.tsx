'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Award, Mail, X, Menu } from 'lucide-react';

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: Home, label: 'Home', href: '#top' },
    { icon: Briefcase, label: 'Projects', href: '#projects' },
    { icon: Award, label: 'Skills', href: '#skills' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Floating FAB */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(!isOpen)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 bg-background/95 backdrop-blur-md rounded-2xl shadow-2xl border border-border/50 p-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-accent transition-colors"
                >
                  <item.icon size={20} className="text-blue-500" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
