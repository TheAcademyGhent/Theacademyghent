"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, CTA_HREF } from "@/lib/constants";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-academy ${
          scrolled
            ? "bg-ink/85 backdrop-blur-md border-b border-surface-hairline"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container-academy flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="The Academy Ghent — Home">
            <Image
              src="/images/tag-lockup.png"
              alt="The Academy Ghent — The Academy of Golden Gloves"
              width={340}
              height={90}
              className="h-12 md:h-16 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-label uppercase tracking-widest2 text-xs transition-colors ${
                  pathname === item.href ? "text-bone" : "text-bone-muted hover:text-bone"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href={CTA_HREF} variant="primary" size="md">
              Schrijf je in
            </Button>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex items-center justify-center h-11 w-11 text-bone"
            aria-label="Open menu"
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </>
  );
}
