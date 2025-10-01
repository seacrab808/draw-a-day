'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, CalendarDays, Settings } from 'lucide-react';

const navItems = [
  { id: 'palette', icon: Palette, label: '색상' },
  { id: 'calendar', icon: CalendarDays, label: '캘린더' },
  { id: 'settings', icon: Settings, label: '설정' },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(navItems[1].id);

  return (
    <nav
      className="absolute bottom-0 -inset-x-5
                 h-[75px] flex items-center justify-around
                 bg-white z-50 border-t border-gray-200"
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`relative flex flex-col items-center justify-center
                     h-full w-full p-1 z-10 transition-colors duration-300 ${
                       activeTab === item.id ? 'bg-[#FFF5F5]' : 'bg-white'
                     }`}
        >
          {activeTab === item.id && (
            <motion.div
              layoutId="activeBorder"
              initial={false}
              className="absolute -top-0.5 inset-x-0 h-[2px] bg-[#DD9CA7]"
              transition={{ type: 'spring', stiffness: 400, damping: 35 }}
            />
          )}

          <motion.div
            className="flex flex-col items-center z-20"
            animate={{ color: activeTab === item.id ? '#DD9CA7' : '#AEAEAE' }}
            transition={{ duration: 0.2 }}
          >
            <item.icon size={28} strokeWidth={2} />
          </motion.div>
        </button>
      ))}
    </nav>
  );
}
