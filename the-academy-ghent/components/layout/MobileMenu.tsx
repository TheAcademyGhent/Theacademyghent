"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS, CTA_HREF } from "@/lib/constants";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

export default function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-ink flex flex-col"
        >
          <div className="container-academy flex items-center justify-between h-20">
            <span className="font-label uppercase tracking-widest2 text-xs text-bone-muted">
              Menu
            </span>
            <button
              onClick={onClose}
              className="flex items-center justify-center h-11 w-11 text-bone"
              aria-label="Sluit menu"
            >
              <X size={26} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="container-academy flex flex-col gap-2 mt-6">
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={item.href}
                  className={`block py-3 font-display text-4xl font-extrabold tracking-tight border-b border-surface-hairline ${
                    pathname === item.href ? "text-bone" : "text-bone-muted"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="container-academy mt-auto mb-10 flex flex-col gap-4"
          >
            <Link
              href={CTA_HREF}
              className="clip-cut-sm bg-bone text-ink text-center py-4 font-label uppercase tracking-widest2 text-sm font-medium"
            >
              Schrijf je in
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
