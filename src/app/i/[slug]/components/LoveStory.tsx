"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { dummyLoveStories } from "@/lib/dummy-data";

export default function LoveStory({ invitation }: { invitation?: any }) {
  const stories = dummyLoveStories;
  
  return (
    <section id="section-story" className="relative py-16 md:py-24 px-6 bg-[#F0EBE0]" aria-labelledby="story-heading">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A86A] text-xs tracking-[0.4em] uppercase mb-4">Perjalanan Cinta Kami</p>
          <h2 id="story-heading" className="font-serif text-3xl md:text-5xl text-[#1F2E26]">Our Story</h2>
          <div className="w-20 h-[1px] mx-auto mt-4 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C9A86A]/40 via-[#C9A86A] to-[#C9A86A]/40 -translate-x-1/2 hidden md:block" />

          {stories.map((story, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`relative mb-16 md:mb-20 flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1F2E26] border-4 border-[#F0EBE0] flex items-center justify-center z-10 hidden md:flex">
                  <Heart size={12} className="text-[#C9A86A]" fill="#C9A86A" />
                </div>
                <div className="md:hidden mb-6 w-10 h-10 rounded-full bg-[#1F2E26] border-4 border-[#F0EBE0] flex items-center justify-center z-10">
                  <Heart size={14} className="text-[#C9A86A]" fill="#C9A86A" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="relative bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-[#C9A86A]/10 shadow-lg">
                    <div className="absolute -inset-2 border border-[#C9A86A]/10 rounded-3xl -z-10" />
                    
                    <p className="text-[#C9A86A] text-xs tracking-[0.3em] uppercase mb-2">{story.date}</p>
                    <h3 className="font-serif text-2xl text-[#1F2E26] mb-3">{story.title}</h3>
                    {story.image_url && (
                      <div className="mb-4 rounded-xl overflow-hidden">
                        <img src={story.image_url} alt={story.title} className="w-full h-48 object-cover" />
                      </div>
                    )}
                    <p className="text-[#6F7F55] text-sm leading-relaxed">{story.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
