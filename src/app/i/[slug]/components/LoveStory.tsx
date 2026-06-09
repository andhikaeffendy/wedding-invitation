"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { dummyLoveStories } from "@/lib/dummy-data";

export default function LoveStory({ invitation }: { invitation?: any }) {
  return (
    <section id="section-story" className="relative py-20 md:py-32 px-6">
      <div className="absolute inset-0 ornament-leaf opacity-5" />

      <div className="max-w-3xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">Perjalanan Cinta Kami</p>
          <h2 className="section-title">Love Story</h2>
          <p className="text-[#6F7F55] italic mt-2 text-sm">
            &ldquo;Setiap kisah cinta itu indah, tapi kisah kami adalah favoritku&rdquo;
          </p>
          <div className="w-16 h-[1px] bg-[#C9A86A] mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#C9A86A]/20 -translate-x-1/2 hidden md:block" />

          {dummyLoveStories.map((story, i) => (
            <motion.div
              key={story.id}
              className={`relative flex flex-col md:flex-row items-center gap-6 mb-16 last:mb-0 ${
                story.position === 'right' ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${story.image_url})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22382D]/30 to-transparent" />
                </div>
              </div>

              {/* Timeline dot (desktop) */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-[#C9A86A] bg-[#F7F1E6] items-center justify-center z-10">
                <Heart size={14} className="text-[#C9A86A]" />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 text-center md:text-left px-4">
                <p className="text-[#C9A86A] text-xs tracking-[0.2em] uppercase mb-2">{story.date}</p>
                <h3 className="font-display text-2xl text-[#22382D] mb-2">{story.title}</h3>
                <p className="text-[#6F7F55] text-sm leading-relaxed">{story.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
