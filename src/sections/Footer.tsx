import React from 'react';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/amit-masram/',
  },
  {
    title: 'Twitter',
    href: 'https://x.com/AmitMasram10',
  },
  {
    title: 'Github',
    href: 'https://github.com/Amitmasram',
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip bg-black/55">
      {/* Background decoration */}
      <div className="absolute inset-x-0 bottom-0 h-[400px] bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>

      {/* Footer content */}
      <div className="container mx-auto px-4">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">© 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map(link => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 text-white transition-colors duration-300 relative group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold group-hover:text-transparent bg-gradient-to-r from-blue-500 to-emerald-300 bg-clip-text">
                  {link.title}
                </span>
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
