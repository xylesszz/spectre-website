"use client";

import { motion } from "framer-motion";
import { SOCIAL } from "@/lib/constants";

function DiscordIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.369A19.791 19.791 0 0 0 16.558 3a14.36 14.36 0 0 0-.637 1.315 18.27 18.27 0 0 0-5.487 0A14.27 14.27 0 0 0 9.8 3a19.79 19.79 0 0 0-3.76 1.369C2.78 9.173 1.89 13.862 2.33 18.5a19.92 19.92 0 0 0 6.073 3.053 14.77 14.77 0 0 0 1.27-2.06 12.88 12.88 0 0 1-2.01-.96c.17-.13.33-.26.49-.4 3.9 1.8 8.12 1.8 11.98 0 .16.14.32.27.49.4-.64.38-1.31.7-2.01.96.37.73.79 1.42 1.27 2.06a19.9 19.9 0 0 0 6.07-3.05c.52-5.34-.85-9.99-3.58-14.13zM8.52 15.66c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.2 0 2.17 1.09 2.15 2.42 0 1.34-.95 2.42-2.15 2.42zm6.96 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.2 0 2.17 1.09 2.15 2.42 0 1.34-.95 2.42-2.15 2.42z"/>
    </svg>
  );
}

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z"/>
    </svg>
  );
}

function YouTubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

const items = [
  { href: SOCIAL.discord, label: "Discord", icon: <DiscordIcon /> },
  { href: SOCIAL.tiktok, label: "TikTok", icon: <TikTokIcon /> },
  { href: SOCIAL.youtube, label: "YouTube", icon: <YouTubeIcon /> },
];

export function SocialIcons() {
  return (
    <div className="flex items-center gap-1">
      {items.map((item) => (
        <motion.a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="p-2.5 rounded-xl border border-border text-text-secondary hover:text-accent-hover hover:border-accent/50 hover:bg-accent/5 transition-all"
          aria-label={item.label}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
}