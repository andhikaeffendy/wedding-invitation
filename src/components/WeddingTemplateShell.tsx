"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  MapPin,
  Clock,
  Calendar,
  X,
  Music,
  Home,
  Image,
  MessageCircle,
  MapPinned,
  Sparkles,
  Send,
} from "lucide-react";

// ─── ETERNAL SAGE LUXURY BYPASS ───
// This template uses original design without V3 enhancements
const ETERNAL_SAGE_ORIGINAL = "eternal-sage-luxury";
import { getStyle, type TemplateStyle } from "@/lib/template-styles";
import { getLayout, type TemplateLayout } from "@/lib/template-layouts";
import { getCoverConfig, type CoverConfig } from "@/lib/template-covers";
import { getSectionStyles } from "@/lib/template-section-styles";
import type {
  TemplateData,
  WishItem,
  BankItem,
  GalleryItem,
  StoryItem,
} from "@/lib/template-types";

// Legacy: specialized components for Eternal Sage Luxury (now rendered via generic shell)
import HeroSection from "@/app/i/[slug]/components/HeroSection";
import CoupleProfile from "@/app/i/[slug]/components/CoupleProfile";
import EventDetails from "@/app/i/[slug]/components/EventDetails";
import LoveStory from "@/app/i/[slug]/components/LoveStory";
import GallerySection from "@/app/i/[slug]/components/GallerySection";
import CountdownSection from "@/app/i/[slug]/components/CountdownSection";
import RsvpSection from "@/app/i/[slug]/components/RsvpSection";
import QrGuestPass from "@/app/i/[slug]/components/QrGuestPass";
import GiftSection from "@/app/i/[slug]/components/GiftSection";
import WishesSection from "@/app/i/[slug]/components/WishesSection";
import ClosingSection from "@/app/i/[slug]/components/ClosingSection";
import MusicPlayer from "@/app/i/[slug]/components/MusicPlayer";
// New design system components
import OrnateFrame from "@/app/i/[slug]/components/OrnateFrame";
import FloralBorder from "@/app/i/[slug]/components/FloralBorder";
import PhotoCircle from "@/app/i/[slug]/components/PhotoCircle";
import CountdownTile from "@/app/i/[slug]/components/CountdownTile";
import EventCard from "@/app/i/[slug]/components/EventCard";
import GiftCard from "@/app/i/[slug]/components/GiftCard";
import WishCard from "@/app/i/[slug]/components/WishCard";
import SectionBackground from "@/components/SectionBackground";
import PatternOverlay from "@/components/PatternOverlay";
import CoverButton from "@/components/CoverButton";
import BotanicalFrame from "@/app/i/[slug]/components/BotanicalFrame";
import FloralWreath from "@/app/i/[slug]/components/FloralWreath";
import SocialIcons from "@/app/i/[slug]/components/SocialIcons";
import FloatingOrnaments from "@/app/i/[slug]/components/FloatingOrnaments";

interface Props {
  data: TemplateData;
  templateId: string;
}

const getStr = (v: unknown, f = ""): string => (typeof v === "string" ? v : f);
const getSettings = (inv: Record<string, unknown> | null) =>
  (inv?.settings as Record<string, string>) || {};
const imgFb =
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80";

// Animation variants
const animVariant = (a: string) => {
  const m: Record<string, object> = {
    "fade-up": {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
    "fade-in": {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true },
      transition: { duration: 0.8 },
    },
    "scale-in": {
      initial: { opacity: 0, scale: 0.95 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      transition: { duration: 0.6 },
    },
    "slide-left": {
      initial: { opacity: 0, x: 40 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { duration: 0.7 },
    },
    "slide-right": {
      initial: { opacity: 0, x: -40 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { duration: 0.7 },
    },
    "zoom-in": {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      transition: { duration: 0.8 },
    },
    parallax: {
      initial: { opacity: 0, y: 60 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 1 },
    },
    stagger: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5 },
    },
    none: {},
  };
  return m[a] || m["fade-up"];
};

function Ornament({ style }: { style: TemplateStyle }) {
  return (
    <div className="flex items-center justify-center gap-2 my-4 sm:my-6">
      <div
        className="h-[1px] w-8 sm:w-12"
        style={{
          background: `linear-gradient(90deg,transparent,${style.gold}40,transparent)`,
        }}
      />
      <span style={{ color: style.gold }}>{style.ornament}</span>
      <div
        className="h-[1px] w-8 sm:w-12"
        style={{
          background: `linear-gradient(90deg,transparent,${style.gold}40,transparent)`,
        }}
      />
    </div>
  );
}

// ─── COVER RENDERERS ───

function renderMonogram(
  cover: CoverConfig,
  style: TemplateStyle,
  fd: string,
  groomName: string,
  brideName: string,
) {
  const initial = `${groomName[0]}&${brideName[0]}`;
  const monoStyle: React.CSSProperties = {
    borderColor: cover.monogramColor,
    borderWidth: cover.monogramBorderWidth,
    borderStyle: "solid",
    color: cover.monogramColor,
    fontFamily: fd,
  };

  if (cover.monogram === "no-frame") {
    return (
      <span
        className={`text-3xl sm:text-4xl font-light tracking-widest`}
        style={{ color: cover.monogramColor, fontFamily: fd }}
      >
        {initial}
      </span>
    );
  }
  if (cover.monogram === "diamond") {
    return (
      <div
        className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 flex items-center justify-center relative"
        style={{
          transform: "rotate(45deg)",
          border: `${cover.monogramBorderWidth}px solid ${cover.monogramColor}`,
          background: cover.monogramBgColor,
        }}
      >
        <span
          className="text-xl sm:text-2xl"
          style={{
            transform: "rotate(-45deg)",
            color: cover.monogramColor,
            fontFamily: fd,
          }}
        >
          {initial}
        </span>
      </div>
    );
  }
  if (cover.monogram === "square") {
    return (
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 flex items-center justify-center rounded-xl"
        style={{
          border: `${cover.monogramBorderWidth}px solid ${cover.monogramColor}`,
          background: cover.monogramBgColor,
        }}
      >
        <span
          className="text-xl sm:text-2xl"
          style={{ color: cover.monogramColor, fontFamily: fd }}
        >
          {initial}
        </span>
      </div>
    );
  }
  if (cover.monogram === "hexagon") {
    return (
      <div
        className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 flex items-center justify-center relative"
        style={{
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          border: `${cover.monogramBorderWidth}px solid ${cover.monogramColor}`,
          background: cover.monogramBgColor,
        }}
      >
        <span
          className="text-lg sm:text-xl"
          style={{ color: cover.monogramColor, fontFamily: fd }}
        >
          {initial}
        </span>
      </div>
    );
  }
  if (cover.monogram === "shield") {
    return (
      <div
        className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 flex items-center justify-center"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 20%, 100% 70%, 50% 100%, 0% 70%, 0% 20%)",
          border: `${cover.monogramBorderWidth}px solid ${cover.monogramColor}`,
          background: cover.monogramBgColor,
        }}
      >
        <span
          className="text-lg sm:text-xl"
          style={{ color: cover.monogramColor, fontFamily: fd }}
        >
          {initial}
        </span>
      </div>
    );
  }
  if (cover.monogram === "double-circle") {
    return (
      <div
        className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 flex items-center justify-center relative"
        style={{
          borderRadius: "50%",
          border: `${cover.monogramBorderWidth}px solid ${cover.monogramColor}`,
          background: cover.monogramBgColor,
        }}
      >
        <div
          className="absolute inset-2 rounded-full"
          style={{ border: `1px solid ${cover.monogramColor}40` }}
        />
        <span
          className="text-lg sm:text-xl relative z-10"
          style={{ color: cover.monogramColor, fontFamily: fd }}
        >
          {initial}
        </span>
      </div>
    );
  }
  if (cover.monogram === "crown-top") {
    return (
      <div className="mb-6 sm:mb-8 text-center">
        <span className="text-2xl block mb-2">👑</span>
        <div
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full flex items-center justify-center"
          style={{
            border: `${cover.monogramBorderWidth}px solid ${cover.monogramColor}`,
            background: cover.monogramBgColor,
          }}
        >
          <span
            className="text-lg sm:text-xl"
            style={{ color: cover.monogramColor, fontFamily: fd }}
          >
            {initial}
          </span>
        </div>
      </div>
    );
  }
  if (cover.monogram === "floral-ring") {
    return (
      <div className="mb-6 sm:mb-8 text-center">
        <span className="text-lg block mb-1 opacity-60">{style.ornament}</span>
        <div
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full flex items-center justify-center"
          style={{
            border: `${cover.monogramBorderWidth}px solid ${cover.monogramColor}`,
            background: cover.monogramBgColor,
          }}
        >
          <span
            className="text-lg sm:text-xl"
            style={{ color: cover.monogramColor, fontFamily: fd }}
          >
            {initial}
          </span>
        </div>
        <span
          className="text-lg block mt-1 opacity-60"
          style={{ transform: "scaleX(-1)" }}
        >
          {style.ornament}
        </span>
      </div>
    );
  }
  if (cover.monogram === "geometric") {
    return (
      <div
        className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 flex items-center justify-center"
        style={{
          border: `${cover.monogramBorderWidth}px solid ${cover.monogramColor}`,
          background: cover.monogramBgColor,
          clipPath:
            "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        }}
      >
        <span
          className="text-lg sm:text-xl"
          style={{ color: cover.monogramColor, fontFamily: fd }}
        >
          {initial}
        </span>
      </div>
    );
  }
  // Default circle
  return (
    <motion.div
      className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full border-2 mb-6 sm:mb-8 flex items-center justify-center`}
      style={{ borderColor: style.gold, fontFamily: fd }}
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <span
        className="text-xl sm:text-2xl"
        style={{ color: style.gold, fontFamily: fd }}
      >
        {initial}
      </span>
    </motion.div>
  );
}

function renderCoverDecorations(cover: CoverConfig) {
  if (cover.decorativeElements.length === 0) return null;
  return cover.decorativeElements.map((el, i) => (
    <motion.div
      key={i}
      className="absolute pointer-events-none z-[1] text-lg sm:text-xl opacity-30"
      style={{
        [i % 2 === 0 ? "left" : "right"]:
          `${5 + (i * 80) / cover.decorativeElements.length}%`,
        top: i % 3 === 0 ? "10%" : i % 3 === 1 ? "80%" : "45%",
      }}
      animate={{ y: [0, -10, 0], opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
    >
      {el}
    </motion.div>
  ));
}

function renderCoverFrame(cover: CoverConfig, style: TemplateStyle) {
  const fc = cover.frameColor || style.gold;
  if (cover.frame === "none") return null;
  if (cover.frame === "thin-gold")
    return (
      <div
        className="absolute inset-4 sm:inset-6 border pointer-events-none"
        style={{ borderColor: `${fc}30`, borderWidth: "1px" }}
      />
    );
  if (cover.frame === "double-gold")
    return (
      <>
        <div
          className="absolute inset-4 sm:inset-6 border pointer-events-none"
          style={{ borderColor: `${fc}30`, borderWidth: "1px" }}
        />
        <div
          className="absolute inset-6 sm:inset-8 border pointer-events-none"
          style={{ borderColor: `${fc}15`, borderWidth: "1px" }}
        />
      </>
    );
  if (cover.frame === "ornate-corners")
    return (
      <>
        {[
          "top-0 left-0",
          "top-0 right-0",
          "bottom-0 left-0",
          "bottom-0 right-0",
        ].map((pos, i) => (
          <div
            key={i}
            className={`absolute ${pos} w-12 h-12 sm:w-16 sm:h-16 pointer-events-none`}
            style={{
              borderColor: fc,
              borderWidth: "0",
              [i < 2 ? "borderTopWidth" : "borderBottomWidth"]: "2px",
              [i % 2 === 0 ? "borderLeftWidth" : "borderRightWidth"]: "2px",
            }}
          />
        ))}
      </>
    );
  if (cover.frame === "ornate-full")
    return (
      <div
        className="absolute inset-3 sm:inset-4 pointer-events-none overflow-hidden rounded-sm"
        style={{
          border: `2px solid ${fc}30`,
          boxShadow: `inset 0 0 0 1px ${fc}15, inset 0 0 0 2px ${fc}08`,
        }}
      >
        {[
          "top-0 left-0",
          "top-0 right-0",
          "bottom-0 left-0",
          "bottom-0 right-0",
        ].map((pos, i) => (
          <div
            key={i}
            className={`absolute ${pos} w-10 h-10 sm:w-14 sm:h-14`}
            style={{
              borderColor: fc,
              borderWidth: "0",
              [i < 2 ? "borderTopWidth" : "borderBottomWidth"]: "1px",
              [i % 2 === 0 ? "borderLeftWidth" : "borderRightWidth"]: "1px",
            }}
          />
        ))}
      </div>
    );
  if (cover.frame === "leaf-border")
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Corner leaves */}
        {[
          "top-8 left-8",
          "top-8 right-8",
          "bottom-8 left-8",
          "bottom-8 right-8",
        ].map((pos, i) => (
          <div
            key={i}
            className={`absolute ${pos} text-xl sm:text-2xl opacity-40`}
          >
            {style.ornament}
          </div>
        ))}
      </div>
    );
  if (cover.frame === "stamp-border")
    return (
      <div
        className="absolute inset-4 sm:inset-6 border-2 border-dashed pointer-events-none rounded-sm"
        style={{ borderColor: `${fc}40` }}
      />
    );
  if (cover.frame === "geometric")
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full opacity-[0.06]" viewBox="0 0 400 600">
          <rect
            x="20"
            y="20"
            width="360"
            height="560"
            fill="none"
            stroke={fc}
            strokeWidth="0.5"
          />
          <rect
            x="30"
            y="30"
            width="340"
            height="540"
            fill="none"
            stroke={fc}
            strokeWidth="0.3"
          />
          <line
            x1="40"
            y1="40"
            x2="40"
            y2="560"
            stroke={fc}
            strokeWidth="0.3"
          />
          <line
            x1="360"
            y1="40"
            x2="360"
            y2="560"
            stroke={fc}
            strokeWidth="0.3"
          />
        </svg>
      </div>
    );
  if (cover.frame === "batik-pattern")
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.07]">
        <svg className="w-full h-full" viewBox="0 0 400 600">
          {[...Array(8)].map((_, i) => (
            <circle
              key={i}
              cx={i * 50 + 25}
              cy={i % 2 === 0 ? 25 : 575}
              r="15"
              fill="none"
              stroke={fc}
              strokeWidth="0.5"
            />
          ))}
          {[0, 1].map((col) =>
            [...Array(6)].map((_, row) => (
              <circle
                key={`${col}-${row}`}
                cx={col === 0 ? 25 : 375}
                cy={row * 100 + 75}
                r="10"
                fill="none"
                stroke={fc}
                strokeWidth="0.3"
              />
            )),
          )}
        </svg>
      </div>
    );
  if (cover.frame === "wave-bottom")
    return (
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          className="w-full h-full"
          preserveAspectRatio="none"
          style={{ opacity: 0.15 }}
        >
          <path
            d="M0,60 C200,0 400,120 600,60 C800,0 1000,120 1200,60 L1200,120 L0,120 Z"
            fill={fc}
          />
        </svg>
      </div>
    );
  if (cover.frame === "diamond-facet")
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.08]">
        <svg className="w-full h-full" viewBox="0 0 400 600">
          <polygon
            points="200,10 390,200 200,590 10,200"
            fill="none"
            stroke={fc}
            strokeWidth="0.5"
          />
          <line
            x1="200"
            y1="10"
            x2="200"
            y2="590"
            stroke={fc}
            strokeWidth="0.3"
          />
          <line
            x1="10"
            y1="200"
            x2="390"
            y2="200"
            stroke={fc}
            strokeWidth="0.3"
          />
          <polygon
            points="200,100 300,200 200,500 100,200"
            fill="none"
            stroke={fc}
            strokeWidth="0.2"
          />
        </svg>
      </div>
    );
  if (cover.frame === "floral-wreath")
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 text-lg sm:text-xl opacity-[0.15] tracking-[0.5em] whitespace-nowrap">
          ~ {style.ornament} ~ {style.ornament} ~ {style.ornament} ~
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-lg sm:text-xl opacity-[0.15] tracking-[0.5em] whitespace-nowrap">
          ~ {style.ornament} ~ {style.ornament} ~ {style.ornament} ~
        </div>
      </div>
    );
  return null;
}

// ─── NAV COMPONENTS ───

function FloatingNav({
  active,
  onNav,
  style,
  layout,
}: {
  active: number;
  onNav: (n: number) => void;
  style: TemplateStyle;
  layout: TemplateLayout;
}) {
  const items = [
    { icon: Home, label: "Home", id: 0 },
    { icon: Calendar, label: "Event", id: 1 },
    { icon: MapPinned, label: "Maps", id: 2 },
    { icon: MessageCircle, label: "RSVP", id: 3 },
    { icon: Image, label: "Gallery", id: 4 },
  ];

  if (layout.navStyle === "top-minimal") {
    return (
      <motion.div
        className="fixed top-0 left-0 right-0 z-40"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <nav
          className="flex justify-center gap-4 sm:gap-8 px-4 py-3"
          style={{
            background: `${style.background}CC`,
            backdropFilter: "blur(12px)",
            borderBottom: `1px solid ${style.cardBorder}`,
          }}
        >
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => onNav(item.id)}
              className="text-[10px] sm:text-xs tracking-wider uppercase transition-all"
              style={{ color: active === i ? style.gold : style.muted }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </motion.div>
    );
  }

  if (layout.navStyle === "side-dots") {
    return (
      <motion.div
        className="fixed right-3 sm:right-4 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => onNav(item.id)}
            className="group relative flex items-center justify-center w-3 h-3"
          >
            <div
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: active === i ? style.gold : `${style.gold}30`,
                transform: active === i ? "scale(1.3)" : "scale(1)",
              }}
            />
            <span
              className="absolute right-4 px-2 py-0.5 text-[9px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              style={{ background: style.primary, color: "#fff" }}
            >
              {item.label}
            </span>
          </button>
        ))}
      </motion.div>
    );
  }

  if (layout.navStyle === "floating-chip") {
    return (
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-40 flex justify-center pb-2 sm:pb-3"
        style={{
          paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom, 0px))",
        }}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <nav
          className="flex gap-1 px-3 py-2 shadow-xl"
          style={{
            background: `${style.background}E0`,
            backdropFilter: "blur(20px)",
            border: `1px solid ${style.cardBorder}`,
            borderRadius: "3rem",
            boxShadow: `0 8px 32px ${style.text}15`,
          }}
        >
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => onNav(item.id)}
              className="flex flex-col items-center px-3 sm:px-4 py-1.5 rounded-full transition-all min-w-[48px]"
              style={{
                background: active === i ? `${style.gold}20` : "transparent",
              }}
            >
              <item.icon
                size={14}
                style={{ color: active === i ? style.gold : style.muted }}
              />
              <span
                className="text-[7px] sm:text-[8px] mt-0.5 tracking-wider"
                style={{ color: active === i ? style.gold : style.muted }}
              >
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </motion.div>
    );
  }

  // Default: bottom bar
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 flex justify-center pb-2 sm:pb-3"
      style={{
        paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom, 0px))",
      }}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.5 }}
    >
      <nav
        className="flex gap-0.5 px-2 sm:px-3 py-1.5 sm:py-2 shadow-lg"
        style={{
          background: style.cardBg,
          backdropFilter: "blur(16px)",
          border: `1px solid ${style.cardBorder}`,
          borderRadius: style.buttonRadius,
        }}
      >
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => onNav(item.id)}
            className="flex flex-col items-center px-2 sm:px-3 py-1 rounded-full transition-all min-w-[44px]"
            style={{
              background: active === i ? `${style.gold}15` : "transparent",
            }}
          >
            <item.icon
              size={15}
              style={{ color: active === i ? style.gold : style.muted }}
            />
            <span
              className="text-[8px] sm:text-[9px] mt-0.5"
              style={{ color: active === i ? style.gold : style.muted }}
            >
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </motion.div>
  );
}

// ─── MAIN SHELL ───

export default function WeddingTemplateShell({ data, templateId }: Props) {
  const style = getStyle(templateId);
  const layout = getLayout(templateId);
  const cover = getCoverConfig(templateId);
  const { invitation: inv, guest, gallery, wishes: iw, bankAccounts } = data;
  const gt = data.guestToken || "";
  const settings = getSettings(inv);
  const [open, setOpen] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeNav, setActiveNav] = useState(0);
  const [lb, setLb] = useState<number | null>(null);
  const [rsvp, setRsvp] = useState<string | null>(getStr(guest?.rsvp_status));
  const [pax, setPax] = useState<number>((guest?.pax_confirmed as number) || 1);
  const [rsvpMsg, setRsvpMsg] = useState("");
  const [rsvpDone, setRsvpDone] = useState(!!guest?.rsvp_status);
  const [sub, setSub] = useState(false);
  const [wishes, setWishes] = useState<WishItem[]>(iw || []);
  const [wn, setWn] = useState("");
  const [wt, setWt] = useState("");
  const [cp, setCp] = useState<number | null>(null);

  const groomName = getStr(inv?.groom_name);
  const brideName = getStr(inv?.bride_name);
  const groomFull = getStr(inv?.groom_full_name);
  const brideFull = getStr(inv?.bride_full_name);
  const groomParents = getStr(inv?.groom_parents);
  const brideParents = getStr(inv?.bride_parents);
  const eventDate = getStr(inv?.event_date, "2026-08-15");
  const invitationSlug = getStr(inv?.slug, "andhika-laila");
  const guestName = getStr(guest?.guest_name, "Bapak/Ibu/Saudara/i");
  const coverImg = settings.coverImage || imgFb;
  const heroImg = settings.heroImage || imgFb;
  const videoHeroUrl = settings.videoHeroUrl || '';
  const groomPhoto =
    settings.groomPhoto ||
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80";
  const bridePhoto =
    settings.bridePhoto ||
    "https://images.unsplash.com/photo-1594552073388-6e3f45e83df6?w=400&q=80";
  const musicUrl =
    settings.musicUrl ||
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  const [ct, setCt] = useState({ d: 0, h: 0, m: 0, s: 0, passed: false });
  // Lock body scroll when cover is showing
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [open]);
  useEffect(() => {
    const tg = new Date(eventDate).getTime();
    const u = () => {
      const dif = tg - Date.now();
      if (dif <= 0) return setCt({ d: 0, h: 0, m: 0, s: 0, passed: true });
      setCt({
        d: Math.floor(dif / 864e5),
        h: Math.floor((dif % 864e5) / 36e5),
        m: Math.floor((dif % 36e5) / 6e4),
        s: Math.floor((dif % 6e4) / 1e3),
        passed: false,
      });
    };
    u();
    const i = setInterval(u, 1000);
    return () => clearInterval(i);
  }, [eventDate]);

  const images = (gallery || []).length > 0 ? gallery : [];
  const banks = (bankAccounts || []).length > 0 ? bankAccounts : [];
  const stories = (data.loveStories || []).filter(
    (s: StoryItem) => s.is_visible !== false,
  );
  const gu = (img: string | GalleryItem) =>
    typeof img === "string" ? img : img.url || img.public_url || "";
  const hasGallery = images.length > 0;
  const hasGift = banks.length > 0;
  const isDark =
    style.background === "#0B1930" || style.background === "#0A0A14";
  const fd = style.headingFont;
  const ev = style.bodyFont;

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const navSections = ["hero", "events", "location", "rsvp", "gallery"];
  const handleNav = (n: number) => {
    setActiveNav(n);
    scrollTo(navSections[n]);
  };

  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(musicUrl);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
      setMusicOn(true);
    } else {
      if (musicOn) audioRef.current.pause();
      else audioRef.current.play().catch(() => {});
      setMusicOn(!musicOn);
    }
  };

  const submitRsvp = async () => {
    if (!rsvp) return;
    setSub(true);
    await fetch(`/api/public/invitation/${invitationSlug}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        guestToken: gt,
        status: rsvp,
        paxConfirmed: pax,
        message: rsvpMsg,
      }),
    });
    setRsvpDone(true);
    setSub(false);
  };
  const submitWish = async () => {
    if (!wn.trim() || !wt.trim()) return;
    const r = await fetch(`/api/public/invitation/${invitationSlug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ senderName: wn, text: wt }),
    });
    const d = await r.json();
    if (d.success) {
      setWishes([d.wish as WishItem, ...wishes]);
      setWt("");
    }
  };

  const isVisible = (sectionId: string) => {
    const sec = layout.sections.find((s) => s.id === sectionId);
    return sec?.visible !== false;
  };

  // Check if V3 enhancements should be applied (skip for Eternal Sage Luxury)
  const useV3Enhancements = true; // All templates get V3 enhancements
  const secAnim = (sectionId: string) => {
    const sec = layout.sections.find((s) => s.id === sectionId);
    return animVariant(sec?.animation || "fade-up");
  };

  // ─── COVER RENDERER ───
  const renderCover = () => {
    const coverExitAnim =
      cover.entryAnimation === "zoom"
        ? ({ opacity: 0, scale: 1.1 } as const)
        : cover.entryAnimation === "scale-rotate"
          ? ({ opacity: 0, scale: 0.85, rotate: 5 } as const)
          : cover.entryAnimation === "split-reveal"
            ? ({ opacity: 0 } as const)
            : cover.entryAnimation === "letterpress-reveal"
              ? ({ opacity: 0, filter: "blur(8px)" } as const)
              : ({ opacity: 0, scale: 1.05 } as const);

    const btnClass =
      cover.buttonStyle === "pill"
        ? "rounded-full px-10 sm:px-14 py-3.5"
        : cover.buttonStyle === "sharp"
          ? "rounded-sm px-10 sm:px-14 py-3.5"
          : cover.buttonStyle === "rounded"
            ? "rounded-xl px-10 sm:px-14 py-3.5"
            : cover.buttonStyle === "bordered"
              ? "rounded-full px-10 sm:px-14 py-3 border-2"
              : "px-10 sm:px-14 py-3.5 border-b-2";

    // Glass morphism backdrop for button — ensures visibility on any background
    const btnGlass = "backdrop-blur-md shadow-lg";

    const contentColor = isDark ? "#fff" : "#fff";

    // ── SPLIT PHOTO LEFT ──
    if (cover.layout === "split-photo-left") {
      return (
        <motion.div
          className="fixed inset-0 z-50 flex"
          exit={coverExitAnim}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="w-1/2 h-full bg-cover bg-center hidden sm:block"
            style={{ backgroundImage: `url(${coverImg})` }}
          />
          <div
            className="w-full sm:w-1/2 h-full flex items-center justify-center p-8 sm:p-12"
            style={{ background: style.background }}
          >
            {renderCoverFrame(cover, style)}
            <motion.div
              className="relative z-10 text-center max-w-sm"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {renderMonogram(cover, style, fd, groomName, brideName)}
              <p
                className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3"
                style={{ color: cover.frameColor }}
              >
                The Wedding of
              </p>
              <h1
                className={`${cover.nameSize} font-light mb-3`}
                style={{ fontFamily: fd, color: style.text }}
              >
                {groomName}{" "}
                <span style={{ color: cover.frameColor }}>&amp;</span>{" "}
                {brideName}
              </h1>
              {cover.showDate && (
                <p
                  className={`${cover.dateSize} mb-6`}
                  style={{ color: style.muted }}
                >
                  {new Date(eventDate).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              )}
              {cover.showOrnament && <Ornament style={style} />}
              {cover.showGuestName && (
                <>
                  <p
                    className="text-[10px] sm:text-xs mb-1"
                    style={{ color: style.muted }}
                  >
                    Kepada Yth.
                  </p>
                  <h2
                    className={`${cover.guestNameSize} font-light mb-8`}
                    style={{ fontFamily: fd, color: style.text }}
                  >
                    {guestName}
                  </h2>
                </>
              )}
              <button
                onClick={() => {
                  setOpen(true);
                  setTimeout(() => toggleMusic(), 500);
                }}
                className={`${btnClass} ${btnGlass} cover-btn-glass font-medium text-sm tracking-wider text-white w-full sm:w-auto transition-all duration-300`}
                style={{
                  background: `linear-gradient(135deg,${style.gold},${style.accent})`,
                }}
              >
                💌 Buka Undangan
              </button>
            </motion.div>
          </div>
        </motion.div>
      );
    }

    // ── SPLIT VERTICAL ──
    if (cover.layout === "split-vertical") {
      return (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div
            className="h-[55vh] bg-cover bg-center relative"
            style={{ backgroundImage: `url(${coverImg})` }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 70%, ${style.background} 100%)`,
              }}
            />
            {renderCoverFrame(cover, style)}
          </div>
          <div
            className="flex-1 flex items-center justify-center px-6 pb-10"
            style={{ background: style.background }}
          >
            <motion.div
              className="text-center max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {renderMonogram(cover, style, fd, groomName, brideName)}
              <p
                className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-2"
                style={{ color: cover.frameColor }}
              >
                The Wedding of
              </p>
              <h1
                className={`${cover.nameSize} font-light mb-2`}
                style={{ fontFamily: fd, color: style.text }}
              >
                {groomName} &amp; {brideName}
              </h1>
              {cover.showDate && (
                <p
                  className={`${cover.dateSize} mb-4`}
                  style={{ color: style.muted }}
                >
                  {new Date(eventDate).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              )}
              {cover.showGuestName && (
                <p
                  className="text-[10px] sm:text-xs mb-1 opacity-60"
                  style={{ color: style.text }}
                >
                  Kepada Yth. <strong>{guestName}</strong>
                </p>
              )}
              <button
                onClick={() => {
                  setOpen(true);
                  setTimeout(() => toggleMusic(), 500);
                }}
                className="mt-6 px-10 sm:px-14 py-3 rounded-full font-medium text-sm tracking-wider text-white transition-all"
                style={{
                  background: `linear-gradient(135deg,${style.gold},${style.accent})`,
                }}
              >
                💌 Buka Undangan
              </button>
            </motion.div>
          </div>
        </motion.div>
      );
    }

    // ── TYPOGRAPHY ONLY ──
    if (cover.layout === "typography-only") {
      return (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="absolute inset-0"
            style={{ background: style.background }}
          />
          {renderCoverFrame(cover, style)}
          {renderCoverDecorations(cover)}
          <motion.div
            className="relative z-10 text-center px-6 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {renderMonogram(cover, style, fd, groomName, brideName)}
            <p
              className={`text-[8px] sm:text-[10px] tracking-[0.5em] uppercase mb-3`}
              style={{ color: cover.frameColor }}
            >
              The Wedding of
            </p>
            <h1
              className={`${cover.nameSize} font-light mb-2 leading-tight`}
              style={{ fontFamily: fd, color: style.text }}
            >
              {groomName} <span style={{ color: style.gold }}>&amp;</span>{" "}
              {brideName}
            </h1>
            {cover.showDate && (
              <p className={`${cover.dateSize}`} style={{ color: style.muted }}>
                {new Date(eventDate).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            )}
            {cover.showGuestName && (
              <>
                <div
                  className="w-12 h-[1px] mx-auto my-4"
                  style={{ background: style.gold }}
                />
                <p className="text-xs mb-1" style={{ color: style.muted }}>
                  Kepada Yth.
                </p>
                <p
                  className="text-lg sm:text-xl font-light"
                  style={{ fontFamily: fd, color: style.text }}
                >
                  {guestName}
                </p>
              </>
            )}
            {cover.showGoldLines && (
              <>
                <div
                  className="w-12 h-[1px] mx-auto my-5"
                  style={{ background: style.gold }}
                />
              </>
            )}
            <button
              onClick={() => {
                setOpen(true);
                setTimeout(() => toggleMusic(), 500);
              }}
              className={`mt-6 ${btnClass} ${btnGlass} cover-btn-glass text-sm tracking-wider transition-all hover:scale-[1.03] active:scale-[0.98]`}
              style={
                cover.buttonStyle === "underline"
                  ? {
                      color: style.gold,
                      borderBottom: `1px solid ${style.gold}`,
                    }
                  : {
                      background: `linear-gradient(135deg,${style.gold},${style.accent})`,
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.25)",
                      boxShadow: `0 4px 24px rgba(0,0,0,0.15), 0 0 0 3px ${style.gold}25`,
                    }
              }
            >
              💌 Buka Undangan
            </button>
          </motion.div>
        </motion.div>
      );
    }

    // ── LETTERPRESS ──
    if (cover.layout === "letterpress") {
      return (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: style.background,
              backgroundImage:
                "radial-gradient(circle, rgba(139,94,60,0.03) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          {renderCoverFrame(cover, style)}
          <motion.div
            className="relative z-10 text-center px-6 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div
              className="p-8 sm:p-10"
              style={{
                background: style.cardBg,
                border: `2px dashed ${cover.frameColor}30`,
              }}
            >
              {renderMonogram(cover, style, fd, groomName, brideName)}
              <p
                className="text-[10px] tracking-[0.4em] uppercase mb-3"
                style={{ color: cover.frameColor }}
              >
                The Wedding of
              </p>
              <h1
                className={`${cover.nameSize} font-light mb-2`}
                style={{ fontFamily: fd, color: style.text }}
              >
                {groomName} &amp; {brideName}
              </h1>
              {cover.showDate && (
                <p
                  className="text-xs sm:text-sm mb-4"
                  style={{ color: style.muted }}
                >
                  {new Date(eventDate).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              )}
              {cover.showGuestName && (
                <p className="text-xs mb-1" style={{ color: style.muted }}>
                  Kepada Yth. <strong>{guestName}</strong>
                </p>
              )}
              <button
                onClick={() => {
                  setOpen(true);
                  setTimeout(() => toggleMusic(), 500);
                }}
                className="mt-6 px-10 py-3 rounded-sm text-sm font-medium tracking-wider transition-all"
                style={{
                  border: `2px solid ${cover.frameColor}`,
                  color: cover.frameColor,
                  background: "transparent",
                }}
              >
                💌 Buka Undangan
              </button>
            </div>
          </motion.div>
        </motion.div>
      );
    }

    // ── CINEMATIC DARK ──
    if (cover.layout === "cinematic-dark") {
      return (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{
            minHeight:
              templateId === "eternal-sage-luxury" ? "100dvh" : undefined,
          }}
          exit={
            templateId === "eternal-sage-luxury"
              ? { opacity: 0, scale: 1.08, filter: "blur(10px)" }
              : { opacity: 0, scale: 0.9 }
          }
          transition={
            templateId === "eternal-sage-luxury"
              ? { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
              : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
          }
        >
          <div
            className={`absolute inset-0 bg-cover bg-center ${templateId === "eternal-sage-luxury" ? "cover-slow-zoom" : "scale-105"}`}
            style={{ backgroundImage: `url(${coverImg})` }}
          />
          <div
            className="absolute inset-0"
            style={{ background: cover.overlayGradient }}
          />
          {/* Stars */}
          {cover.overlayPattern === "stars" &&
            [...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[2px] h-[2px] rounded-full bg-white pointer-events-none"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0.3 + Math.random() * 0.5,
                }}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          {/* Premium Botanical Frame for eternal-sage-luxury */}
          {templateId === "eternal-sage-luxury" && (
            <BotanicalFrame color={style.gold} />
          )}
          {/* Floating leaf ornaments */}
          {templateId === "eternal-sage-luxury" && (
            <FloatingOrnaments
              icons={style.petalIcons}
              count={8}
              color={style.ornamentColor}
            />
          )}
          {renderCoverFrame(cover, style)}
          <motion.div
            className="relative z-10 text-center px-6 max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {renderMonogram(cover, style, fd, groomName, brideName)}
            <p
              className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3"
              style={{ color: cover.frameColor }}
            >
              {templateId === "eternal-sage-luxury"
                ? "You are invited to"
                : "The Wedding of"}
            </p>
            <h1
              className={`${cover.nameSize} font-light mb-2 text-white`}
              style={{ fontFamily: fd }}
            >
              {groomName} <span style={{ color: cover.frameColor }}>&amp;</span>{" "}
              {brideName}
            </h1>
            {cover.showDate && (
              <p className={`${cover.dateSize} text-white/60 mb-2`}>
                {new Date(eventDate).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            )}
            {cover.showOrnament && <Ornament style={style} />}
            {cover.showGuestName && (
              <>
                <p className="text-xs text-white/70 mb-1">Kepada Yth.</p>
                <h2
                  className={`${cover.guestNameSize} font-light mb-8 text-white`}
                  style={{ fontFamily: fd }}
                >
                  {guestName}
                </h2>
              </>
            )}
            <button
              onClick={() => {
                setOpen(true);
                setTimeout(() => toggleMusic(), 500);
              }}
              className={`${btnClass} ${btnGlass} cover-btn-glass font-medium text-sm tracking-wider text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.03] active:scale-[0.98]`}
              style={{
                background: `linear-gradient(135deg,${style.gold},${style.accent})`,
                border: `1px solid rgba(255,255,255,0.2)`,
                boxShadow: `0 0 30px ${style.gold}30, 0 0 0 3px ${style.gold}20`,
              }}
            >
              💌 Buka Undangan
            </button>
          </motion.div>
        </motion.div>
      );
    }

    // ── ART DECO FRAME ──
    if (cover.layout === "art-deco-frame") {
      return (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 1.2 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${coverImg})` }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)`,
            }}
          />
          {renderCoverFrame(cover, style)}
          <motion.div
            className="relative z-10 text-center px-6 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {renderMonogram(cover, style, fd, groomName, brideName)}
            <p
              className="text-[10px] sm:text-xs tracking-[0.5em] uppercase mb-3"
              style={{ color: cover.frameColor }}
            >
              The Wedding of
            </p>
            <h1
              className={`${cover.nameSize} font-light mb-2 text-white`}
              style={{ fontFamily: fd }}
            >
              {groomName} <span style={{ color: cover.frameColor }}>&amp;</span>{" "}
              {brideName}
            </h1>
            {cover.showDate && (
              <p className="text-xs sm:text-sm text-white/60 mb-6">
                {new Date(eventDate).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            )}
            {cover.showGuestName && (
              <>
                <p className="text-xs text-white/70 mb-1">Kepada Yth.</p>
                <p
                  className="text-lg sm:text-xl font-light text-white mb-6"
                  style={{ fontFamily: fd }}
                >
                  {guestName}
                </p>
              </>
            )}
            <button
              onClick={() => {
                setOpen(true);
                setTimeout(() => toggleMusic(), 500);
              }}
              className={`${btnClass} ${btnGlass} cover-btn-glass font-medium text-sm tracking-wider`}
              style={{
                background: `linear-gradient(135deg,${style.gold},${style.accent})`,
                color: "#fff",
              }}
            >
              💌 Buka Undangan
            </button>
          </motion.div>
        </motion.div>
      );
    }

    // ── FRAMED PHOTO ──
    if (cover.layout === "framed-photo") {
      return (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2 }}
        >
          <div
            className="absolute inset-[8%] bg-cover bg-center rounded-sm"
            style={{ backgroundImage: `url(${coverImg})` }}
          />
          <div
            className="absolute inset-[8%]"
            style={{ background: "rgba(0,0,0,0.35)" }}
          />
          {renderCoverFrame(cover, style)}
          <motion.div
            className="relative z-10 text-center px-6 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {renderMonogram(cover, style, fd, groomName, brideName)}
            <p
              className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3"
              style={{ color: cover.frameColor }}
            >
              The Wedding of
            </p>
            <h1
              className={`${cover.nameSize} font-light mb-2 text-white`}
              style={{ fontFamily: fd }}
            >
              {groomName} <span style={{ color: cover.frameColor }}>&amp;</span>{" "}
              {brideName}
            </h1>
            <p className="text-xs sm:text-sm text-white/60 mb-2">
              {new Date(eventDate).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            {cover.showGuestName && (
              <p className="text-xs text-white/70 mb-6">
                Kepada Yth. <strong>{guestName}</strong>
              </p>
            )}
            <button
              onClick={() => {
                setOpen(true);
                setTimeout(() => toggleMusic(), 500);
              }}
              className={`${btnClass} ${btnGlass} cover-btn-glass font-medium text-sm tracking-wider text-white`}
              style={{
                background: `linear-gradient(135deg,${style.gold},${style.accent})`,
              }}
            >
              💌 Buka Undangan
            </button>
          </motion.div>
        </motion.div>
      );
    }

    // ── OVERLAY PATTERN ──
    if (cover.layout === "overlay-pattern") {
      return (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 1.2 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${coverImg})` }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${style.primary}40 0%, ${style.background}60 100%)`,
            }}
          />
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "40px 40px",
            }}
          />
          {renderCoverFrame(cover, style)}
          <motion.div
            className="relative z-10 text-center px-6 max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {renderMonogram(cover, style, fd, groomName, brideName)}
            <p
              className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3"
              style={{ color: cover.frameColor }}
            >
              The Wedding of
            </p>
            <h1
              className={`${cover.nameSize} font-light mb-2 text-white`}
              style={{ fontFamily: fd }}
            >
              {groomName} <span style={{ color: cover.frameColor }}>&amp;</span>{" "}
              {brideName}
            </h1>
            {cover.showDate && (
              <p className={`${cover.dateSize} text-white/70 mb-2`}>
                {new Date(eventDate).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            )}
            {cover.showOrnament && <Ornament style={style} />}
            {cover.showGuestName && (
              <>
                <p className="text-xs text-white/80 mb-1">Kepada Yth.</p>
                <h2
                  className={`${cover.guestNameSize} font-light mb-6 text-white`}
                  style={{ fontFamily: fd }}
                >
                  {guestName}
                </h2>
              </>
            )}
            <button
              onClick={() => {
                setOpen(true);
                setTimeout(() => toggleMusic(), 500);
              }}
              className={`${btnClass} ${btnGlass} cover-btn-glass font-medium text-sm tracking-wider text-white`}
              style={{
                background: `linear-gradient(135deg,${style.gold},${style.accent})`,
              }}
            >
              💌 Buka Undangan
            </button>
          </motion.div>
        </motion.div>
      );
    }

    // ── FULLSCREEN PHOTO (DEFAULT) ──
    return (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        exit={coverExitAnim}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${coverImg})`,
            transform: `scale(${cover.photoScale})`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: isDark ? "rgba(0,0,0,0.6)" : cover.overlayGradient,
          }}
        />
        {renderCoverFrame(cover, style)}
        {renderCoverDecorations(cover)}
        <motion.div
          className="relative z-10 text-center px-6 max-w-sm sm:max-w-md w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {renderMonogram(cover, style, fd, groomName, brideName)}
          <p
            className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3 sm:mb-4"
            style={{ color: cover.frameColor }}
          >
            The Wedding of
          </p>
          <h1
            className={`${cover.nameSize} font-light mb-2 sm:mb-3 text-white`}
            style={{ fontFamily: fd }}
          >
            {groomName} &amp; {brideName}
          </h1>
          {cover.showDate && (
            <p className={`${cover.dateSize} mb-2 text-white/70`}>
              {new Date(eventDate).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}
          {cover.showOrnament && <Ornament style={style} />}
          {cover.showGuestName && (
            <>
              <p className="text-xs sm:text-sm mb-2 text-white/80">
                Kepada Yth.
              </p>
              <h2
                className={`${cover.guestNameSize} font-light mb-8 sm:mb-10 text-white`}
                style={{ fontFamily: fd }}
              >
                {guestName}
              </h2>
            </>
          )}
          <button
            onClick={() => {
              setOpen(true);
              setTimeout(() => toggleMusic(), 500);
            }}
            className={`${btnClass} ${btnGlass} cover-btn-glass font-medium text-sm tracking-wider text-white w-full sm:w-auto transition-all duration-300 hover:shadow-lg`}
            style={{
              background: `linear-gradient(135deg,${style.gold},${style.accent})`,
            }}
          >
            💌 Buka Undangan
          </button>
        </motion.div>
      </motion.div>
    );
  };

  // ─── COUNTDOWN ───
  const renderCountdown = () => {
    const items = [
      { v: ct.d, l: "Days" },
      { v: ct.h, l: "Hours" },
      { v: ct.m, l: "Minutes" },
      { v: ct.s, l: "Seconds" },
    ];
    return (
      <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
        {items.map((it, i) => (
          <CountdownTile
            key={it.l}
            value={it.v}
            label={it.l}
            color={style.gold}
            bgColor={templateId === "eternal-sage-luxury" || templateId === "classic-rose-gold" || templateId === "royal-purple" || templateId === "javanese-elegance" ? "rgba(31, 46, 38, 0.6)" : `${style.primary}80`}
            borderColor={`${style.gold}30`}
          />
        ))}
      </div>
    );
  };

  const Petals = () =>
    cover.particleCount > 0
      ? [...Array(cover.particleCount)].map((_, i) => (
          <div
            key={i}
            className="fixed pointer-events-none z-[1] hidden sm:block"
            style={{
              left: `${5 + (i * 90) / cover.particleCount}%`,
              animation: `petalAnim ${10 + i * 3}s linear ${i * 2}s infinite`,
              fontSize: `${16 + (i % 3) * 4}px`,
              opacity: 0,
            }}
          >
            {cover.decorativeElements[i % cover.decorativeElements.length]}
          </div>
        ))
      : null;

  const sectionSpacing =
    layout.sectionSpacing === "compact"
      ? "py-14 sm:py-20"
      : layout.sectionSpacing === "generous"
        ? "py-20 sm:py-28"
        : "py-16 sm:py-24";
  const bodyWidth =
    layout.bodyWidth === "narrow"
      ? "max-w-lg"
      : layout.bodyWidth === "wide"
        ? "max-w-2xl"
        : "max-w-xl";
  const headingScale =
    layout.headingScale === "lg"
      ? "text-3xl sm:text-4xl md:text-5xl"
      : layout.headingScale === "sm"
        ? "text-2xl sm:text-3xl"
        : "text-2xl sm:text-4xl";
  const ss = getSectionStyles(templateId);
  const secBg = (id: string) =>
    ss[id as keyof typeof ss]?.bg || style.background;
  const secSpacing = (id: string) =>
    ss[id as keyof typeof ss]?.spacing || sectionSpacing;
  const secCard = (id: string) =>
    ss[id as keyof typeof ss]?.cardStyle || "glass";
  const secPhoto = (id: string) =>
    ss[id as keyof typeof ss]?.photoTreatment || "circle";
  const secDivider = (id: string) =>
    ss[id as keyof typeof ss]?.divider || "ornament";
  const secTextColor = (id: string) =>
    ss[id as keyof typeof ss]?.textColor || "";

  // ── Background Image Helper ──
  // Maps section IDs to bgImage fields from TemplateStyle + SectionStyle overrides
  const secBgImage = (id: string): string | undefined => {
    // First check section-level override (from template-section-styles)
    const sectionOverride = ss[id as keyof typeof ss]?.bgImage;
    if (sectionOverride) return sectionOverride;
    // Fall back to template-level images
    const darkSections = ['countdown', 'closing'];
    const heroSections = ['hero'];
    const signatureSections = ['couple', 'quote', 'story', 'events', 'location', 'rsvp', 'wishes', 'gift'];
    const gallerySection = ['gallery'];
    if (heroSections.includes(id) && style.heroBgImage) return style.heroBgImage;
    if (darkSections.includes(id) && style.darkSectionBgImage) return style.darkSectionBgImage;
    if (signatureSections.includes(id) && style.signatureBgImage) return style.signatureBgImage;
    if (gallerySection.includes(id) && style.closingBgImage) return style.closingBgImage;
    return undefined;
  };

  // Determine overlay opacity based on section type and template brightness
  const secBgOverlay = (id: string): string => {
    const isDarkSection = ['countdown', 'closing'].includes(id);
    const isHeroOrCover = ['hero'].includes(id);
    if (isHeroOrCover) return 'rgba(0,0,0,0.5)';
    if (isDarkSection) return 'rgba(0,0,0,0.35)';
    // Light sections — heavy white overlay to keep text readable
    return 'rgba(255,255,255,0.75)';
  };

  // ── SVG Pattern Overlay Component ──
  // (Imported from @/components/PatternOverlay)

  // Section Divider Component
  const SectionDivider = ({ sectionId }: { sectionId: string }) => {
    const d = secDivider(sectionId);
    if (d === "none") return null;
    if (d === "gradient")
      return (
        <div
          className="w-32 h-[1px] mx-auto"
          style={{
            background: `linear-gradient(90deg, transparent, ${style.gold}40, transparent)`,
          }}
        />
      );
    if (d === "double")
      return (
        <div className="flex flex-col items-center gap-1">
          <div
            className="w-24 h-[1px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${style.gold}30, transparent)`,
            }}
          />
          <div
            className="w-16 h-[1px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${style.gold}20, transparent)`,
            }}
          />
        </div>
      );
    if (d === "dots")
      return (
        <div className="flex items-center justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full"
              style={{ background: `${style.gold}40` }}
            />
          ))}
        </div>
      );
    if (d === "solid")
      return (
        <div
          className="w-16 h-[1px] mx-auto"
          style={{ background: `${style.gold}25` }}
        />
      );
    if (d === "floral")
      return (
        <div className="flex items-center justify-center gap-3">
          <div
            className="h-[1px] w-8"
            style={{
              background: `linear-gradient(90deg, transparent, ${style.gold}30)`,
            }}
          />
          <span style={{ color: `${style.gold}60` }}>{style.ornament}</span>
          <div
            className="h-[1px] w-8"
            style={{
              background: `linear-gradient(90deg, ${style.gold}30, transparent)`,
            }}
          />
        </div>
      );
    return <Ornament style={style} />;
  };

  // ─── MAIN RENDER ───
  // All templates now use the generic shell with dynamic cover + section rendering
  return (
    <main
      className="relative w-full overflow-x-hidden"
      style={{
        background: style.background,
        color: style.text,
        fontFamily: style.bodyFont,
        minHeight: templateId === "eternal-sage-luxury" ? "100dvh" : undefined,
        paddingBottom:
          layout.navStyle === "top-minimal"
            ? "0"
            : "calc(4rem + env(safe-area-inset-bottom, 0px))",
        scrollMarginTop: "88px",
      }}
    >
      <style>{`
        /* Force responsive backgrounds */
        .bg-cover { background-size: cover !important; }
        [style*="background-image"] { background-size: cover !important; background-position: center !important; background-repeat: no-repeat !important; }
        img { max-width: 100%; height: auto; }
        @keyframes petalAnim { 0% { transform: translateY(-5vh) rotate(0deg); opacity: 0; } 30% { opacity: ${cover.particleCount > 0 ? "0.3" : "0"}; } 100% { transform: translateY(110vh) rotate(360deg); opacity: 0; } }
        @keyframes musicPulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.15); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes goldReveal { 0% { background-position: 200% center; } 100% { background-position: -200% center; } }
        @keyframes pulseGlow { 0%,100% { box-shadow: 0 0 5px ${style.gold}30; } 50% { box-shadow: 0 0 20px ${style.gold}50, 0 0 40px ${style.gold}20; } }
        @keyframes rotateSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes scaleBreath { 0%,100% { transform: scale(1); } 50% { transform: scale(1.03); } }
        @keyframes gradientFlow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes slideReveal { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
        @keyframes floatDelicate { 0%,100% { transform: translateY(0) rotate(0deg); } 33% { transform: translateY(-5px) rotate(1deg); } 66% { transform: translateY(3px) rotate(-1deg); } }
        .t-card { background: ${style.cardBg}; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid ${style.cardBorder}; border-radius: ${style.cardRadius}; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .t-card:hover { box-shadow: ${style.accentGlow || "none"}; transform: translateY(-2px); }
        .t-btn { background: linear-gradient(135deg, ${style.gold}, ${style.accent || style.gold}); color: white; border: none; border-radius: ${style.buttonRadius}; font-weight: 600; min-height: 44px; cursor: pointer; transition: all 0.3s ease; }
        .t-btn:hover { filter: brightness(1.1); box-shadow: ${style.accentGlow || "0 4px 16px rgba(0,0,0,0.15)"}; transform: translateY(-1px); }
        .t-btn:active { transform: translateY(0) scale(0.98); }
        .t-input { width: 100%; padding: 0.75rem 1rem; border-radius: 0.75rem; border: 1px solid ${style.cardBorder}; background: ${style.cardBg}; color: ${style.text}; font-size: 0.875rem; transition: all 0.2s; }
        .t-input:focus { outline: none; border-color: ${style.gold}; box-shadow: 0 0 0 3px ${style.gold}15; }
        .t-divider { height: 1px; background: linear-gradient(90deg, transparent, ${style.gold}30, transparent); }
        ${layout.hasDividerLines ? "" : ".t-divider { display: none; }"}
        /* Cinematic slow zoom for Eternal Sage Luxury */
        @keyframes luxurySlowZoom { 0% { transform: scale(1.08); } 100% { transform: scale(1.18); } }
        .cover-slow-zoom { animation: luxurySlowZoom 24s ease-in-out infinite alternate; transform-origin: center; }
        @keyframes floatingOrnament { 0% { transform: translate3d(0,0,0) rotate(0deg); } 50% { transform: translate3d(8px,-12px,0) rotate(1.5deg); } 100% { transform: translate3d(0,0,0) rotate(0deg); } }
        .ornament-float { animation: floatingOrnament 12s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: 0.01ms !important; } }
        /* Timeline grow animation for Eternal Sage */
        @keyframes timelineGrow { from { height: 0; opacity: 0; } to { height: 100%; opacity: 1; } }
        @keyframes galleryStagger { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes starTwinkle { 0%,100% { opacity: 0.2; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.2); } }
        @keyframes goldShimmer { 0% { transform: translateX(-100%) rotate(25deg); } 100% { transform: translateX(200%) rotate(25deg); } }
        @keyframes lightLeak { 0%,100% { opacity: 0; } 50% { opacity: 0.08; } }
        @keyframes waveDrift { 0% { transform: translateX(0); } 100% { transform: translateX(-120px); } }
        @keyframes petalFall { 0% { transform: translateY(-10vh) translateX(0) rotate(0deg); opacity: 0; } 10% { opacity: 0.6; } 90% { opacity: 0.4; } 100% { transform: translateY(110vh) translateX(80px) rotate(720deg); opacity: 0; } }
        @keyframes batikPulse { 0%,100% { transform: scale(1); opacity: 0.03; } 50% { transform: scale(1.02); opacity: 0.05; } }
        .star-twinkle { animation: starTwinkle 3s ease-in-out infinite; }
        .gold-shimmer { animation: goldShimmer 3s ease-in-out infinite; }
        .wave-drift { animation: waveDrift 8s ease-in-out infinite alternate; }
        .petal-fall { animation: petalFall 8s ease-in-out infinite; }
        .batik-pulse { animation: batikPulse 6s ease-in-out infinite; }
        .light-leak { animation: lightLeak 6s ease-in-out infinite; }
        .gallery-stagger > *:nth-child(1) { animation-delay: 0ms; } .gallery-stagger > *:nth-child(2) { animation-delay: 100ms; } .gallery-stagger > *:nth-child(3) { animation-delay: 200ms; } .gallery-stagger > *:nth-child(4) { animation-delay: 300ms; } .gallery-stagger > *:nth-child(5) { animation-delay: 400ms; } .gallery-stagger > *:nth-child(6) { animation-delay: 500ms; } .gallery-stagger > *:nth-child(7) { animation-delay: 600ms; } .gallery-stagger > *:nth-child(8) { animation-delay: 700ms; }
        /* Card style variants */
        .t-card-glass { background: ${style.cardBg}; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid ${style.cardBorder}; }
        .t-card-solid { background: ${style.cardBg.replace("0.6", "1").replace("0.7", "1").replace("0.8", "1").replace("0.9", "1").replace("0.85", "1").replace("0.75", "1").replace("0.5", "1").replace("0.04", "1").replace("0.03", "1")}; border: 1px solid ${style.cardBorder}; }
        .t-card-bordered { background: transparent; border: 1.5px solid ${style.gold}40; }
        .t-card-minimal { background: transparent; border: none; border-bottom: 1px solid ${style.cardBorder}; border-radius: 0; }
        .t-card-dark { background: rgba(0,0,0,0.2); backdrop-filter: blur(12px); border: 1px solid ${style.gold}15; }
        /* Photo treatment variants */
        .photo-circle img, .photo-circle > div[style*="background"] { border-radius: 50% !important; }
        .photo-rounded img, .photo-rounded > div[style*="background"] { border-radius: 1.25rem !important; }
        .photo-square img, .photo-square > div[style*="background"] { border-radius: 0.5rem !important; }
        .photo-framed img, .photo-framed > div[style*="background"] { border-radius: 0.5rem !important; border: 3px solid ${style.gold}30; }
        .photo-overlay img, .photo-overlay > div[style*="background"] { border-radius: 0.5rem !important; }
        /* Smooth scroll behavior */
        .smooth-section { scroll-margin-top: 2rem; }
        /* Gold shimmer effect */
        .gold-shimmer { background: linear-gradient(90deg, transparent 0%, ${style.gold}15 50%, transparent 100%); background-size: 200% 100%; animation: shimmer 3s infinite; }
      `}</style>

      <Petals />

      {/* Music Button */}
      <motion.button
        onClick={toggleMusic}
        className="fixed top-4 sm:top-6 right-4 sm:right-6 z-30 w-10 h-10 rounded-full shadow-lg flex items-center justify-center t-card"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: open ? 1 : 0, scale: 1 }}
      >
        <Music
          size={15}
          style={{
            color: musicOn ? style.gold : style.muted,
            animation: musicOn ? "musicPulse 2s ease-in-out infinite" : "none",
          }}
        />
      </motion.button>

      {/* ─── COVER ─── */}
      <AnimatePresence>{!open && renderCover()}</AnimatePresence>

      {/* ─── HERO ─── */}
      {isVisible("hero") && (
        <section
          id="hero"
          className={`relative min-h-[85vh] flex flex-col items-center justify-center py-20 sm:py-24 px-4 sm:px-6 overflow-hidden ${templateId === 'celestial-night' || templateId === 'aire-royale' || templateId === 'exclusive-noir' || templateId === 'royal-purple' || templateId === 'luxury-lavender' || templateId === 'javanese-elegance' || templateId === 'tropical-paradise' ? 'cinematic-hero video-hero-' + templateId : ''}`}
          style={{
            background: secBg("hero"),
            color: secTextColor("hero") || style.text,
          }}
        >
          {/* Background video (if videoHeroUrl is set) */}
          {videoHeroUrl && (
            <video
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.25 }}
              autoPlay
              muted
              loop
              playsInline
              poster={style.heroBgImage || heroImg}
            >
              <source src={videoHeroUrl} type="video/mp4" />
            </video>
          )}
          {/* Background image (shown if no video, or as video poster fallback) */}
          {!videoHeroUrl && (style.heroBgImage || heroImg) && useV3Enhancements && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${style.heroBgImage || heroImg})`, opacity: 0.25 }}
            />
          )}
          {/* Gradient overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{ background: style.heroOverlay || 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.25) 100%)' }}
          />
          {/* Pattern overlay */}
          <PatternOverlay style={style} />
          {/* Gold shimmer for premium templates */}
          {useV3Enhancements && (templateId === 'aureum-gold' || templateId === 'royal-purple' || templateId === 'javanese-elegance' || templateId === 'exclusive-noir' || templateId === 'aire-royale') && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                className="gold-shimmer absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                style={{ animationDelay: '0s' }}
              />
            </div>
          )}
          {/* Star twinkle for celestial-night */}
          {templateId === 'celestial-night' && useV3Enhancements && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(30)].map((_, i) => (
                <div
                  key={`star-${i}`}
                  className="star-twinkle absolute rounded-full bg-white"
                  style={{
                    width: `${1 + Math.random() * 2}px`,
                    height: `${1 + Math.random() * 2}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>
          )}
          <motion.div
            className="relative z-10 text-center max-w-lg sm:max-w-2xl w-full"
            {...secAnim("hero")}
          >
            {/* Circular Photo for premium templates */}
            {useV3Enhancements && (templateId === "classic-rose-gold" || templateId === "royal-purple" || templateId === "javanese-elegance") && (
              <motion.div
                className="mb-6 sm:mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <PhotoCircle
                  src={heroImg || coverImg || groomPhoto}
                  alt="Couple"
                  size="xl"
                  borderColor={style.gold}
                  borderWidth={3}
                  decorativeBorder={true}
                  shadow={true}
                  className="mx-auto"
                />
              </motion.div>
            )}

            {/* Floral Wreath Photo for eternal-sage-luxury */}
            {useV3Enhancements && templateId === "eternal-sage-luxury" && (
              <motion.div
                className="mb-6 sm:mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <FloralWreath
                  src={heroImg || coverImg || groomPhoto}
                  alt="Couple"
                  size="xl"
                  color={style.gold}
                  className="mx-auto"
                />
              </motion.div>
            )}

            <Ornament style={style} />
            <SectionDivider sectionId="hero" />
            <p
              className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3"
              style={{ color: style.gold }}
            >
              The Wedding of
            </p>
            <h1
              className={`${headingScale} mb-3 leading-tight`}
              style={{ fontFamily: fd, fontWeight: 300 }}
            >
              {groomName} <span style={{ color: style.gold }}>&amp;</span>{" "}
              {brideName}
            </h1>
            <p className="text-sm sm:text-base mb-1 opacity-60">
              {new Date(eventDate).toLocaleDateString("id-ID", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p className="text-xs sm:text-sm italic max-w-md mx-auto mt-3 mb-8 opacity-45">
              Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i
              untuk hadir di hari bahagia kami
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <button
                onClick={() => scrollTo("rsvp")}
                className="px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wider t-btn"
              >
                RSVP
              </button>
              <button
                onClick={() => scrollTo("events")}
                className="px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wider t-card"
                style={{ color: style.text }}
              >
                Lihat Acara
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
                className="px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wider t-card"
                style={{ color: style.text }}
              >
                <Heart
                  size={13}
                  className="inline mr-1"
                  style={{ color: style.gold }}
                />
                Bagikan
              </button>
            </div>
          </motion.div>
        </section>
      )}

      {/* ─── QUOTE / BLESSING ─── */}
      {isVisible("quote") && (
        <section
          className={`${sectionSpacing} px-4 sm:px-6 relative overflow-hidden`}
          style={{ background: secBg("quote") }}
        >
          {/* Background image */}
          {secBgImage("quote") && (
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${secBgImage("quote")})`, opacity: 0.08 }} />
          )}
          {secBgImage("quote") && (
            <div className="absolute inset-0" style={{ background: secBgOverlay("quote") }} />
          )}
          <PatternOverlay style={style} />
          {useV3Enhancements && (
            <FloralBorder color={style.gold} position="both" variant={templateId === "classic-rose-gold" || templateId === "royal-purple" || templateId === "javanese-elegance" ? "leaves" : "minimal"} />
          )}
          <div className={`${bodyWidth} mx-auto relative`}>
            {useV3Enhancements ? (
              <OrnateFrame
                color={style.gold}
                variant={templateId === "classic-rose-gold" || templateId === "royal-purple" || templateId === "javanese-elegance" ? "ornate-corners" : "thin-gold"}
                className="p-6 sm:p-10"
              >
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Bismillah Arabic */}
                  <motion.p
                    className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6"
                    style={{ fontFamily: fd, color: style.gold }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                  </motion.p>
                  
                  <Ornament style={style} />
                  <SectionDivider sectionId="quote" />
                  
                  <p
                    className="text-sm sm:text-base italic leading-relaxed opacity-70 max-w-lg mx-auto"
                    style={{ fontFamily: fd }}
                  >
                    &ldquo;Dan di antara tanda-tanda kekuasaan-Nya, Dia menciptakan
                    pasangan-pasangan untukmu agar kamu merasa tenteram kepadanya.
                    Sesungguhnya pada yang demikian itu benar-benar terdapat
                    tanda-tanda bagi kaum yang berpikir.&rdquo;
                  </p>
                  <p
                    className="text-xs mt-4 tracking-wide"
                    style={{ color: style.gold }}
                  >
                    — QS. Ar-Rum: 21
                  </p>
                </motion.div>
              </OrnateFrame>
            ) : (
              /* ORIGINAL design for Eternal Sage Luxury */
              <div className="text-center p-6 sm:p-10 t-card">
                <Ornament style={style} />
                <SectionDivider sectionId="quote" />
                <p
                  className="text-sm sm:text-base italic leading-relaxed opacity-70"
                  style={{ fontFamily: fd }}
                >
                  &ldquo;Dan di antara tanda-tanda kekuasaan-Nya, Dia menciptakan
                  pasangan-pasangan untukmu agar kamu merasa tenteram kepadanya.
                  Sesungguhnya pada yang demikian itu benar-benar terdapat
                  tanda-tanda bagi kaum yang berpikir.&rdquo;
                </p>
                <p
                  className="text-xs mt-4 tracking-wide"
                  style={{ color: style.gold }}
                >
                  — QS. Ar-Rum: 21
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ─── COUPLE ─── */}
      {isVisible("couple") && (
        <section
          className={`${sectionSpacing} px-4 sm:px-6 relative overflow-hidden`}
          style={{ background: secBg("couple") }}
        >
          {/* Signature background image */}
          {style.signatureBgImage && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${style.signatureBgImage})`, opacity: 0.1 }}
            />
          )}
          {/* Light overlay for text readability */}
          {style.signatureBgImage && (
            <div className="absolute inset-0" style={{ background: 'rgba(255,255,255,0.75)' }} />
          )}
          <PatternOverlay style={style} />
          <div
            className={`${bodyWidth === "max-w-lg" ? "max-w-2xl" : "max-w-3xl"} mx-auto text-center`}
          >
            <Ornament style={style} />
            <SectionDivider sectionId="couple" />
            <p
              className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-2"
              style={{ color: style.gold }}
            >
              Bismillahirrahmanirrahim
            </p>
            <p className="text-xs sm:text-sm mb-8 opacity-50">
              Dengan memohon rahmat dan ridho Allah SWT
            </p>
            <div
              className={`${layout.coupleLayout === "stacked" ? "flex flex-col gap-12 max-w-sm mx-auto" : "relative grid md:grid-cols-2 gap-8 sm:gap-12 items-center"}`}
            >
              {[
                {
                  photo: groomPhoto,
                  name: groomName,
                  full: groomFull,
                  parents: groomParents,
                },
                {
                  photo: bridePhoto,
                  name: brideName,
                  full: brideFull,
                  parents: brideParents,
                },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  className={`flex flex-col items-center ${secPhoto("couple") === "circle" ? "" : "photo-" + secPhoto("couple")}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {/* Use PhotoCircle for premium templates (skip for Eternal Sage original) */}
                  {useV3Enhancements && (templateId === "classic-rose-gold" || templateId === "royal-purple" || templateId === "javanese-elegance") ? (
                    <PhotoCircle
                      src={p.photo}
                      alt={p.name}
                      size={layout.coupleLayout === "cards" ? "md" : "lg"}
                      borderColor={style.gold}
                      borderWidth={3}
                      decorativeBorder={true}
                      shadow={true}
                      className="mb-5"
                    />
                  ) : (
                    <div
                      className={`${layout.coupleLayout === "cards" ? "w-32 h-32 sm:w-40 sm:h-40" : "w-36 h-36 sm:w-44 sm:h-44"} bg-cover bg-center shadow-xl mb-5`}
                      style={{
                        backgroundImage: `url(${p.photo})`,
                        border: `3px solid ${style.gold}50`,
                        borderRadius: secPhoto('couple') === 'square' ? '0.5rem' : secPhoto('couple') === 'framed' ? '0.75rem' : '50%',
                        boxShadow: `0 16px 48px ${style.text}10`,
                      }}
                    />
                  )}
                  <h3
                    className="text-xl sm:text-2xl md:text-3xl mb-1"
                    style={{ fontFamily: fd }}
                  >
                    {p.name}
                  </h3>
                  {p.full && (
                    <p className="text-xs sm:text-sm opacity-60">{p.full}</p>
                  )}
                  {p.parents && (
                    <p className="text-[11px] sm:text-xs mt-2 max-w-xs opacity-50">
                      {p.parents}
                    </p>
                  )}
                </motion.div>
              ))}

              {/* Gold Ampersand - positioned between couple cards on desktop */}
              {layout.coupleLayout !== "stacked" && useV3Enhancements && (
                <motion.div
                  className="hidden md:flex absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-10"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                >
                  <span
                    className="text-4xl sm:text-5xl md:text-6xl font-light"
                    style={{
                      color: style.gold,
                      fontFamily: fd,
                      textShadow: `0 2px 20px ${style.gold}30`,
                    }}
                  >
                    &amp;
                  </span>
                </motion.div>
              )}
            </div>
            <Ornament style={style} />
            {/* Social Icons for eternal-sage-luxury */}
            {templateId === "eternal-sage-luxury" && (
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <SocialIcons color={style.gold} size={16} />
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* ─── OUR STORY — LUXURY EDITION ─── */}
      {isVisible("story") && stories.length > 0 && (
        <section
          className={`relative ${sectionSpacing} px-4 sm:px-6 overflow-hidden`}
          style={{ background: secBg("story"), color: secTextColor("story") || style.text }}
        >
          {/* Background image */}
          {secBgImage("story") && (
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${secBgImage("story")})`, opacity: 0.06 }} />
          )}
          {secBgImage("story") && (
            <div className="absolute inset-0" style={{ background: secBgOverlay("story") }} />
          )}
          <PatternOverlay style={style} />
          {/* Decorative background elements */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
            <svg
              className="w-full h-full"
              viewBox="0 0 400 800"
              preserveAspectRatio="none"
            >
              {[...Array(5)].map((_, i) => (
                <line
                  key={i}
                  x1={i * 80 + 20}
                  y1="0"
                  x2={i * 100 + 10}
                  y2="800"
                  stroke={style.gold}
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              ))}
            </svg>
          </div>
          <div
            className={`${bodyWidth === "max-w-lg" ? "max-w-2xl" : "max-w-3xl"} mx-auto relative z-10`}
          >
            <motion.p
              className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3 text-center"
              style={{ color: style.gold }}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Kisah Cinta
            </motion.p>
            <h2
              className={`${headingScale} text-center mb-12 sm:mb-16`}
              style={{ fontFamily: fd }}
            >
              Our{" "}
              <span className="relative inline-block">
                Story
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${style.gold}, transparent)`,
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </span>
            </h2>

            {/* Luxury Timeline */}
            <div className="relative">
              {/* Center line - decorative */}
              <div
                className="absolute left-1/2 top-0 bottom-0 w-[1px] hidden md:block"
                style={{
                  background: `linear-gradient(180deg, transparent, ${style.gold}40, ${style.gold}60, ${style.gold}40, transparent)`,
                }}
              />

              {stories.map((s: StoryItem, i: number) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={s.id || i}
                    className={`relative mb-12 sm:mb-16 md:mb-20 md:w-1/2 ${isLeft ? "md:pr-12 md:mr-auto" : "md:pl-12 md:ml-auto"}`}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {/* Timeline dot - desktop */}
                    <div
                      className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 hidden md:block z-10"
                      style={{
                        background: style.background,
                        borderColor: style.gold,
                        boxShadow: `0 0 0 4px ${style.gold}20`,
                      }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{ background: style.gold }}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    </div>

                    {/* Content card */}
                    <div className="group">
                      <div
                        className={`flex flex-col sm:flex-row gap-4 sm:gap-5 items-start p-5 sm:p-6 rounded-2xl transition-all duration-500`}
                        style={{
                          background: `${style.cardBg}`,
                          backdropFilter: "blur(12px)",
                          border: `1px solid ${style.cardBorder}`,
                          boxShadow: `0 4px 20px ${style.text}08`,
                        }}
                      >
                        {/* Photo with gold border */}
                        {s.image_url && (
                          <motion.div
                            className="w-full sm:w-28 h-40 sm:h-28 rounded-xl bg-cover bg-center shrink-0 relative overflow-hidden"
                            style={{ backgroundImage: `url(${s.image_url})` }}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4 }}
                          >
                            <div
                              className="absolute inset-0"
                              style={{
                                border: `1px solid ${style.gold}20`,
                                borderRadius: "0.75rem",
                              }}
                            />
                          </motion.div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className="text-sm"
                              style={{ color: style.gold }}
                            >
                              {style.ornament}
                            </span>
                            <h4
                              className="text-sm sm:text-base font-semibold"
                              style={{ color: style.gold }}
                            >
                              {s.title}
                            </h4>
                          </div>
                          <p className="text-[10px] sm:text-xs opacity-40 mb-1.5 tracking-wider">
                            — {s.date} —
                          </p>
                          <p className="text-xs sm:text-sm opacity-65 leading-relaxed">
                            {s.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Decorative end marker */}
              <motion.div
                className="text-center pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-8 h-8 mx-auto rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: `${style.gold}40` }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Heart size={12} style={{ color: style.gold }} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ─── COUNTDOWN ─── */}
      {isVisible("countdown") && (
        <section
          className={`${sectionSpacing} px-4 relative overflow-hidden`}
          style={{ background: secBg("countdown"), color: secTextColor("countdown") || style.text }}
        >
          {/* Dark section background image */}
          {style.darkSectionBgImage && useV3Enhancements && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${style.darkSectionBgImage})`, opacity: 0.2 }}
            />
          )}
          {/* Pattern overlay for dark sections */}
          {useV3Enhancements && <PatternOverlay style={style} />}
          {/* Star twinkle for celestial sections */}
          {templateId === 'celestial-night' && useV3Enhancements && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <div
                  key={`cd-star-${i}`}
                  className="star-twinkle absolute rounded-full bg-white"
                  style={{
                    width: `${1 + Math.random() * 2}px`,
                    height: `${1 + Math.random() * 2}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>
          )}
          {/* Ornate frame for countdown section */}
          {useV3Enhancements && (
            <div className="absolute inset-4 sm:inset-6 pointer-events-none">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ border: `1px solid ${templateId === "eternal-sage-luxury" ? style.gold + "25" : "rgba(255,255,255,0.1)"}` }}
              />
              <div
                className="absolute inset-2 rounded-xl"
                style={{ border: `1px solid ${templateId === "eternal-sage-luxury" ? style.gold + "15" : "rgba(255,255,255,0.05)"}` }}
              />
            </div>
          )}
          <div className={`${bodyWidth} mx-auto text-center relative z-10`}>
            {ct.passed ? (
              <div className="p-8 t-card">
                <Sparkles
                  size={32}
                  className="mx-auto mb-3"
                  style={{ color: style.gold }}
                />
                <p className="text-xl sm:text-2xl" style={{ fontFamily: fd }}>
                  Alhamdulillah, hari bahagia telah tiba!
                </p>
              </div>
            ) : (
              <>
                <SectionDivider sectionId="countdown" />
                <p
                  className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-6"
                  style={{ color: style.gold }}
                >
                  Save the Date
                </p>
                <h2 className={`text-xl sm:text-2xl mb-2`} style={{ fontFamily: fd }}>
                  {new Date(eventDate).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </h2>
                {renderCountdown()}
                {/* Add to Calendar button */}
                {useV3Enhancements && (
                  <motion.button
                    className="mt-8 px-6 py-3 rounded-full text-xs font-medium tracking-wider flex items-center gap-2 mx-auto"
                    style={{
                      background: `linear-gradient(135deg, ${style.gold}, ${style.accent || style.gold})`,
                      color: 'white',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const eventDate = new Date(data.invitation?.eventDate || Date.now());
                      const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Wedding of ' + groomName + ' & ' + brideName)}&dates=${eventDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${eventDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z`;
                      window.open(googleCalUrl, '_blank');
                    }}
                  >
                    <Calendar size={14} />
                    Add to Calendar
                  </motion.button>
                )}
              </>
            )}
          </div>
        </section>
      )}

      {/* ─── EVENTS ─── */}
      {isVisible("events") && (
        <section
          id="events"
          className={`${sectionSpacing} px-4 relative overflow-hidden`}
          style={{ background: secBg("events"), color: secTextColor("events") || style.text }}
        >
          {/* Background image */}
          {secBgImage("events") && (
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${secBgImage("events")})`, opacity: 0.08 }} />
          )}
          {secBgImage("events") && (
            <div className="absolute inset-0" style={{ background: secBgOverlay("events") }} />
          )}
          <PatternOverlay style={style} />
          <div
            className={`${bodyWidth === "max-w-lg" ? "max-w-xl" : "max-w-2xl"} mx-auto text-center`}
          >
            <SectionDivider sectionId="events" />
            <p
              className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3"
              style={{ color: style.gold }}
            >
              Rangkaian Acara
            </p>
            <h2
              className={`${headingScale} mb-10 sm:mb-14`}
              style={{ fontFamily: fd }}
            >
              Akad &amp; Resepsi
            </h2>
            <div
              className={
                layout.eventLayout === "side-by-side"
                  ? "grid md:grid-cols-2 gap-4 sm:gap-6"
                  : "space-y-4 sm:space-y-6"
              }
            >
              {[
                {
                  icon: "🕌",
                  title: "Akad Nikah",
                  time: "08:00 — 10:00 WIB",
                  venue: "Masjid Agung Al-Muhajirin",
                  addr: "Jl. Ahmad Yani No. 15, Bandung",
                },
                {
                  icon: "🎉",
                  title: "Resepsi",
                  time: "11:00 — 17:00 WIB",
                  venue: "Gedung Graha Wedding Garden",
                  addr: "Jl. Sukajadi No. 200, Bandung",
                },
              ].map((ev, i) => (
                <EventCard
                  key={i}
                  icon={ev.icon}
                  title={ev.title}
                  time={ev.time}
                  venue={ev.venue}
                  address={ev.addr}
                  color={style.text}
                  goldColor={style.gold}
                  cardBg={style.cardBg}
                  borderColor={style.cardBorder}
                  index={i}
                />
              ))}
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              className="inline-block mt-4 px-5 py-2.5 rounded-full text-xs font-medium t-card"
              style={{ color: style.gold }}
            >
              <MapPinned size={13} className="inline mr-1" />
              Buka Google Maps
            </a>
          </div>
        </section>
      )}

      {/* ─── LOCATION ─── */}
      {isVisible("location") && (
        <section
          id="location"
          className={`${sectionSpacing} px-4 relative overflow-hidden`}
          style={{ background: secBg("location"), color: secTextColor("location") || style.text }}
        >
          {/* Background image */}
          {secBgImage("location") && (
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${secBgImage("location")})`, opacity: 0.08 }} />
          )}
          {secBgImage("location") && (
            <div className="absolute inset-0" style={{ background: secBgOverlay("location") }} />
          )}
          <PatternOverlay style={style} />
          <div
            className={`${bodyWidth === "max-w-lg" ? "max-w-xl" : "max-w-2xl"} mx-auto`}
          >
            <SectionDivider sectionId="location" />
            <p
              className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3 text-center"
              style={{ color: style.gold }}
            >
              Lokasi Acara
            </p>
            <h2
              className={`${headingScale} text-center mb-8 sm:mb-10`}
              style={{ fontFamily: fd }}
            >
              Venue
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-lg t-card p-1.5 sm:p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9!2d107.6!3d-6.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMasjid%20Agung%20Bandung!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: "0.75rem" }}
                loading="lazy"
                title="Venue Map"
              />
            </div>
          </div>
        </section>
      )}

      {/* ─── GALLERY ─── */}
      {isVisible("gallery") && hasGallery && (
        <section
          id="gallery"
          className={`${sectionSpacing} px-3 sm:px-4 relative overflow-hidden`}
          style={{
            background: secBg("gallery"),
            color: secTextColor("gallery") || style.text,
          }}
        >
          {/* Background image */}
          {secBgImage("gallery") && (
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${secBgImage("gallery")})`, opacity: 0.06 }} />
          )}
          {secBgImage("gallery") && (
            <div className="absolute inset-0" style={{ background: secBgOverlay("gallery") }} />
          )}
          <PatternOverlay style={style} />
          <div className="max-w-5xl mx-auto">
            <SectionDivider sectionId="gallery" />
            <p
              className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3 text-center"
              style={{ color: style.gold }}
            >
              Momen Berharga
            </p>
            <h2
              className={`${headingScale} text-center mb-10 sm:mb-14`}
              style={{ fontFamily: fd }}
            >
              Gallery
            </h2>
            <div
              className={`columns-${layout.galleryColumns} md:columns-${layout.galleryColumns} gap-2 sm:gap-3 space-y-2 sm:space-y-3 ${templateId === "eternal-sage-luxury" ? "gallery-stagger" : ""}`}
            >
              {images.map((img, i) => (
                <motion.div
                  key={i}
                  className="break-inside-avoid cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setLb(i)}
                >
                  <img
                    src={gu(img)}
                    alt={`Gallery ${i + 1}`}
                    className="w-full"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
            {/* "Lihat Semua Foto" button */}
            {images.length > 6 && (
              <motion.div
                className="text-center mt-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setLb(0)}
                  className="px-6 py-3 rounded-full text-xs font-medium tracking-wider text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${style.gold}, ${style.accent || style.gold})`,
                    boxShadow: `0 4px 16px ${style.gold}30`,
                  }}
                >
                  📸 Lihat Semua Foto
                </button>
              </motion.div>
            )}
          </div>
          <AnimatePresence>
            {lb !== null && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLb(null)}
              >
                <button
                  className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white/60 p-2 hover:text-white"
                  onClick={() => setLb(null)}
                >
                  <X size={24} />
                </button>
                <img
                  src={gu(images[lb])}
                  alt="Preview"
                  className="max-h-[82vh] max-w-[94vw] object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      )}

      {/* ─── RSVP ─── */}
      {isVisible("rsvp") && (
        <section
          id="rsvp"
          className={`${sectionSpacing} px-4 sm:px-6 relative overflow-hidden`}
          style={{ background: secBg("rsvp"), color: secTextColor("rsvp") || style.text }}
        >
          {/* Background image */}
          {secBgImage("rsvp") && (
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${secBgImage("rsvp")})`, opacity: 0.08 }} />
          )}
          {secBgImage("rsvp") && (
            <div className="absolute inset-0" style={{ background: secBgOverlay("rsvp") }} />
          )}
          <PatternOverlay style={style} />
          <div
            className={`${bodyWidth}`}
            style={{
              maxWidth:
                bodyWidth === "max-w-lg"
                  ? "28rem"
                  : bodyWidth === "max-w-2xl"
                    ? "36rem"
                    : "32rem",
              margin: "0 auto",
            }}
          >
            <SectionDivider sectionId="rsvp" />
            <p
              className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3 text-center"
              style={{ color: style.gold }}
            >
              Konfirmasi Kehadiran
            </p>
            <h2
              className={`${headingScale} text-center mb-8 sm:mb-10`}
              style={{ fontFamily: fd }}
            >
              RSVP
            </h2>
            {rsvpDone ? (
              <div className="p-8 sm:p-10 t-card text-center relative overflow-hidden">
                {/* Confetti particles */}
                {[...Array(20)].map((_,i) => (
                  <motion.div
                    key={i}
                    className="absolute pointer-events-none rounded-sm"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${20 + Math.random() * 60}%`,
                      width: 5 + Math.random() * 8,
                      height: 5 + Math.random() * 8,
                      background: i % 3 === 0 ? style.gold : i % 3 === 1 ? style.accent : style.secondary,
                      borderRadius: i % 2 === 0 ? 2 : 0,
                      transform: `rotate(${Math.random() * 360}deg)`,
                    }}
                    animate={{
                      y: [0, -40 - Math.random() * 60],
                      opacity: [1, 0],
                      rotate: [0, Math.random() * 360],
                      scale: [1, 0.5],
                    }}
                    transition={{ duration: 1.2 + Math.random() * 1.5, delay: i * 0.04, ease: "easeOut" }}
                  />
                ))}
                <Heart
                  size={48}
                  className="mx-auto mb-4"
                  style={{ color: style.gold }}
                />
                <p
                  className="text-xl sm:text-2xl mb-2"
                  style={{ fontFamily: fd }}
                >
                  Terima Kasih!
                </p>
                <p className="text-xs sm:text-sm opacity-60">
                  Konfirmasi Anda telah diterima ✨
                </p>
              </div>
            ) : (
              <div className="p-6 sm:p-8 t-card space-y-4">
                {guestName && (
                  <p className="text-sm text-center opacity-70">
                    Atas nama: <strong>{guestName}</strong>
                  </p>
                )}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { v: "Hadir", l: "Hadir" },
                    { v: "Tidak Hadir", l: "Tdk Hadir" },
                    { v: "Ragu-ragu", l: "Ragu" },
                  ].map((o) => (
                    <button
                      key={o.v}
                      onClick={() => setRsvp(o.v)}
                      className="p-3 sm:p-4 rounded-xl text-xs sm:text-sm font-medium transition-all min-h-[44px]"
                      style={{
                        background: rsvp === o.v ? style.primary : style.cardBg,
                        color: rsvp === o.v ? "white" : style.text,
                        border: `1px solid ${rsvp === o.v ? style.primary : style.cardBorder}`,
                      }}
                    >
                      {o.l}
                    </button>
                  ))}
                </div>
                {rsvp === "Hadir" && (
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={() => setPax(Math.max(1, pax - 1))}
                      className="w-9 h-9 rounded-full border flex items-center justify-center"
                      style={{ borderColor: `${style.gold}30` }}
                    >
                      −
                    </button>
                    <span
                      className="text-xl min-w-[40px] text-center"
                      style={{ fontFamily: fd }}
                    >
                      {pax}
                    </span>
                    <button
                      onClick={() => setPax(pax + 1)}
                      className="w-9 h-9 rounded-full border flex items-center justify-center"
                      style={{ borderColor: `${style.gold}30` }}
                    >
                      +
                    </button>
                    <span className="text-[10px] sm:text-xs opacity-40">
                      orang
                    </span>
                  </div>
                )}
                {rsvp && (
                  <textarea
                    value={rsvpMsg}
                    onChange={(e) => setRsvpMsg(e.target.value)}
                    placeholder="Pesan untuk kedua mempelai"
                    className="t-input resize-none"
                    rows={2}
                  />
                )}
                {rsvp && (
                  <button
                    onClick={submitRsvp}
                    disabled={sub}
                    className="w-full py-3.5 rounded-2xl text-xs sm:text-sm font-semibold tracking-wider text-white t-btn"
                  >
                    {sub ? "Mengirim..." : "✨ Konfirmasi Kehadiran"}
                  </button>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ─── WISHES ─── */}
      {isVisible("wishes") && (
        <section
          className={`${sectionSpacing} px-4 sm:px-6 relative overflow-hidden`}
          style={{ background: secBg("wishes"), color: secTextColor("wishes") || style.text }}
        >
          {/* Background image */}
          {secBgImage("wishes") && (
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${secBgImage("wishes")})`, opacity: 0.08 }} />
          )}
          {secBgImage("wishes") && (
            <div className="absolute inset-0" style={{ background: secBgOverlay("wishes") }} />
          )}
          <PatternOverlay style={style} />
          <div className={`${bodyWidth} mx-auto`}>
            <SectionDivider sectionId="wishes" />
            <p
              className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3 text-center"
              style={{ color: style.gold }}
            >
              Ucapan &amp; Doa
            </p>
            <h2
              className={`${headingScale} text-center mb-8 sm:mb-10`}
              style={{ fontFamily: fd }}
            >
              Wishes
            </h2>
            <div className="space-y-3 mb-8">
              <input
                value={wn}
                onChange={(e) => setWn(e.target.value)}
                placeholder="Nama Anda"
                className="t-input"
              />
              <textarea
                value={wt}
                onChange={(e) => setWt(e.target.value)}
                placeholder="Tulis ucapan & doa..."
                className="t-input resize-none"
                rows={3}
              />
              <button
                onClick={submitWish}
                className="w-full py-3.5 rounded-2xl text-xs sm:text-sm font-semibold tracking-wider text-white flex items-center justify-center gap-2 t-btn"
              >
                <Send size={13} />
                Kirim Ucapan
              </button>
            </div>
            <div
              className={`${layout.wishLayout === "wall" ? "grid grid-cols-1 sm:grid-cols-2 gap-2" : "space-y-2"} max-h-72 overflow-y-auto pr-1`}
            >
              {wishes.map((w, i) => (
                <WishCard
                  key={i}
                  name={w.sender_name}
                  message={w.message}
                  time={w.created_at ? new Date(w.created_at).toLocaleDateString('id-ID') : undefined}
                  color={style.text}
                  goldColor={style.gold}
                  cardBg={style.cardBg}
                  borderColor={style.cardBorder}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── GIFT ─── */}
      {isVisible("gift") && hasGift && (
        <section
          className={`${sectionSpacing} px-4 sm:px-6 relative overflow-hidden`}
          style={{
            background: secBg("gift"),
            color: secTextColor("gift") || style.text,
          }}
        >
          {/* Background image */}
          {secBgImage("gift") && (
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${secBgImage("gift")})`, opacity: 0.08 }} />
          )}
          {secBgImage("gift") && (
            <div className="absolute inset-0" style={{ background: secBgOverlay("gift") }} />
          )}
          <PatternOverlay style={style} />
          <div className={`${bodyWidth} mx-auto text-center`}>
            <SectionDivider sectionId="gift" />
            <p
              className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3"
              style={{ color: style.gold }}
            >
              Kirim Hadiah
            </p>
            <h2 className={`${headingScale} mb-3`} style={{ fontFamily: fd }}>
              Wedding Gift
            </h2>
            <p className="text-xs sm:text-sm mb-8 opacity-50">
              Doa restu Anda adalah karunia terindah
            </p>
            <div
              className={
                layout.giftLayout === "cards"
                  ? "grid grid-cols-1 sm:grid-cols-2 gap-3"
                  : "space-y-3"
              }
            >
              {banks.map((b, i) => (
                <GiftCard
                  key={i}
                  bankName={b.bank_name}
                  accountNumber={b.account_number}
                  accountHolder={b.account_holder}
                  color={style.text}
                  goldColor={style.gold}
                  cardBg={style.cardBg}
                  borderColor={style.cardBorder}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── QR GUEST PASS ─── */}
      {guest && guest.guest_token && (
        <QrGuestPass guestToken={gt} guest={guest} invitation={inv} />
      )}

      {/* ─── CLOSING — LUXURY GRAND FINALE ─── */}
      {isVisible("closing") && (
        <section
          className={`relative py-24 sm:py-32 px-4 sm:px-6 text-center overflow-hidden ${templateId === 'celestial-night' || templateId === 'aire-royale' || templateId === 'exclusive-noir' || templateId === 'royal-purple' || templateId === 'luxury-lavender' || templateId === 'javanese-elegance' || templateId === 'tropical-paradise' ? 'cinematic-hero video-hero-' + templateId : ''}`}
          style={{ background: secBg('closing'), color: secTextColor('closing') || 'white' }}
        >
          {/* Closing background image */}
          {style.closingBgImage && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${style.closingBgImage})`, opacity: 0.15 }}
            />
          )}
          {/* Pattern overlay */}
          <PatternOverlay style={style} />
          {/* Light leak animation for dark templates */}
          {(templateId === 'aire-royale' || templateId === 'exclusive-noir') && (
            <div className="light-leak absolute inset-0 pointer-events-none" style={{ background: templateId === 'aire-royale' ? 'linear-gradient(135deg, rgba(85,9,121,0.15) 0%, transparent 50%, rgba(212,175,55,0.1) 100%)' : 'linear-gradient(135deg, rgba(45,45,58,0.3) 0%, transparent 50%, rgba(212,175,55,0.08) 100%)' }} />
          )}
          {/* Animated particles */}
          {cover.particleCount > 0 &&
            [...Array(cover.particleCount * 2)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute pointer-events-none text-lg sm:text-xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 0.15, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              >
                {style.ornament}
              </motion.div>
            ))}

          {/* Gold gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, transparent 0%, ${style.gold}08 50%, transparent 100%)`,
            }}
          />

          {/* Top decorative line */}
          <motion.div
            className="mx-auto mb-10 sm:mb-12 relative"
            style={{ maxWidth: "300px" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="h-[1px]"
              style={{
                background: `linear-gradient(90deg, transparent, ${style.gold}50, transparent)`,
              }}
            />
            <motion.div
              className="absolute -top-2 left-1/2 -translate-x-1/2 text-lg"
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <span style={{ color: style.gold }}>{style.ornament}</span>
            </motion.div>
          </motion.div>

          <div className="relative z-10 max-w-lg mx-auto">
            <SectionDivider sectionId="closing" />
            <motion.p
              className="text-[10px] sm:text-xs tracking-[0.5em] uppercase mb-4"
              style={{ color: `${style.gold}CC` }}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              — Final Words —
            </motion.p>

            <motion.h2
              className={`${layout.headingScale === "lg" ? "text-4xl sm:text-5xl md:text-6xl" : "text-3xl sm:text-4xl md:text-5xl"} mb-6 sm:mb-8`}
              style={{
                fontFamily: fd,
                fontWeight: 200,
                letterSpacing: "0.05em",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Terima{" "}
              <span className="relative">
                Kasih
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${style.gold}, transparent)`,
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 1 }}
                />
              </span>
            </motion.h2>

            <motion.div
              className="mx-auto mb-6 sm:mb-8 w-16 h-[1px]"
              style={{
                background: `linear-gradient(90deg, transparent, ${style.gold}, transparent)`,
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
            />

            <motion.p
              className="text-xs sm:text-sm mb-8 sm:mb-10 leading-relaxed"
              style={{ opacity: 0.7, maxWidth: "420px", margin: "0 auto" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Merupakan suatu kehormatan dan kebahagiaan yang tak terhingga
              apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu
              kepada kami
            </motion.p>

            <Ornament style={{ ...style, gold: style.gold }} />

            <motion.p
              className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4"
              style={{ fontFamily: fd, color: style.gold }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {templateId === "eternal-sage-luxury" && <><span className="block text-xs sm:text-sm mb-1 opacity-50">With love,</span></>}
              {groomName} &amp; {brideName}
            </motion.p>

            {(groomFull || brideFull) && (
              <motion.p
                className="text-[10px] sm:text-xs"
                style={{ opacity: 0.5, letterSpacing: "0.05em" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                {groomFull} &amp; {brideFull}
              </motion.p>
            )}

            {/* Family names */}
            {(groomParents || brideParents) && (
              <motion.div
                className="mt-6 sm:mt-8 pt-6 sm:pt-8"
                style={{ borderTop: `1px solid ${style.gold}20` }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                <p
                  className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase mb-2"
                  style={{ opacity: 0.4 }}
                >
                  Keluarga Besar
                </p>
                {groomParents && (
                  <p
                    className="text-[10px] sm:text-xs"
                    style={{ opacity: 0.5 }}
                  >
                    {groomParents}
                  </p>
                )}
                {brideParents && (
                  <p
                    className="text-[10px] sm:text-xs mt-1"
                    style={{ opacity: 0.5 }}
                  >
                    &amp; {brideParents}
                  </p>
                )}
              </motion.div>
            )}

            {/* Social Media Icons */}
            <motion.div
              className="mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
            >
              {templateId === "eternal-sage-luxury" ? (
                <SocialIcons color={style.gold} size={18} labels={true} />
              ) : (
                <div className="flex items-center justify-center gap-4">
                  {[
                    { icon: "📷", label: "Instagram", href: "#" },
                    { icon: "📘", label: "Facebook", href: "#" },
                    { icon: "📌", label: "Pinterest", href: "#" },
                    { icon: "🐦", label: "Twitter", href: "#" },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                      style={{
                        background: `${style.gold}15`,
                        border: `1px solid ${style.gold}30`,
                      }}
                      whileHover={{ scale: 1.15, background: `${style.gold}30` }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <span className="text-sm">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Bottom ornament */}
            <motion.div
              className="mt-10 sm:mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center justify-center gap-3">
                <div
                  className="h-[1px] w-8"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${style.gold}30)`,
                  }}
                />
                <span className="text-lg" style={{ color: style.gold }}>
                  {style.ornament}
                </span>
                <div
                  className="h-[1px] w-8"
                  style={{
                    background: `linear-gradient(90deg, ${style.gold}30, transparent)`,
                  }}
                />
              </div>
              <p
                className="text-[8px] sm:text-[9px] tracking-[0.5em] uppercase mt-4"
                style={{ opacity: 0.25 }}
              >
                © {new Date().getFullYear()} {groomName} &amp; {brideName}. All rights reserved.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* FLOATING NAV */}
      {open && (
        <FloatingNav
          active={activeNav}
          onNav={handleNav}
          style={style}
          layout={layout}
        />
      )}
    </main>
  );
}
