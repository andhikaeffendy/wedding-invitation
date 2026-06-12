"use client";

interface SocialIconsProps {
  color?: string;
  size?: number;
  className?: string;
  labels?: boolean;
}

/**
 * Social media icon row — Instagram, Facebook, Pinterest, Twitter/X
 * Uses SVG icons for crisp rendering at any size.
 */
export default function SocialIcons({
  color = "#C9A86A",
  size = 18,
  className = "",
  labels = false,
}: SocialIconsProps) {
  const icons = [
    {
      name: "Instagram",
      path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z",
    },
    {
      name: "Facebook",
      path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z",
    },
    {
      name: "Pinterest",
      path: "M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.805-2.425 1.808-2.425.853 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.481 1.806 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.282a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.222-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z",
    },
    {
      name: "Twitter",
      path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    },
  ];

  return (
    <div className={`flex items-center justify-center gap-4 sm:gap-5 ${className}`}>
      {icons.map((icon) => (
        <a
          key={icon.name}
          href="#"
          aria-label={icon.name}
          className="group flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110"
          style={{ color }}
          onClick={(e) => e.preventDefault()}
        >
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="opacity-60 group-hover:opacity-100 transition-opacity duration-300"
          >
            <path d={icon.path} />
          </svg>
          {labels && (
            <span className="text-[9px] tracking-wider uppercase opacity-40 group-hover:opacity-70 transition-opacity">
              {icon.name}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
