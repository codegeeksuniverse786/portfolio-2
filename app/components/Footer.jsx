'use client';
import { Link } from 'lucide-react';
import { navLinks, socialLinks } from '../utils/dataBase';
import Image from 'next/image';

function Footer() {
  const renderSocialIcons = () =>
    socialLinks.map(({ href, icon, label }) => (
      <Link
        key={label}
        href={href}
        target="_blank"
        aria-label={label}
        className="text-black transition hover:text-black/60"
      >
        {icon}
      </Link>
    ));

  const renderLinks = () => {
    return navLinks.map(({ id, label }) => (
      <li
        key={id}
        className="text-sm font-semibold text-gray-900 transition cursor-pointer hover:text-orange-500"
        onClick={() => handleLinkClick(id)}
      >
        {label}
      </li>
    ));
  };
  return (
    <footer className="mt-[3rem] flex flex-col justify-center items-center gap-6 md:gap-12 py-12 bg-[#f8f8f8]">
      <Image
        src="/logo.svg"
        alt="logo"
        className="transition-transform duration-300 cursor-pointer hover:-rotate-6"
        width={150}
        height={50}
      />

      <ul className="hidden gap-4 md:flex">{renderLinks()}</ul>

      <div className="flex items-center gap-4 ">
        {renderSocialIcons()}
      </div>

      <p className="text-sm text-black/60">
        Copyright ©2024{' '}
        <span className="text-orange-400">Code geeks</span> All rights
        reserved. Inc.
      </p>
    </footer>
  );
}

export default Footer;
