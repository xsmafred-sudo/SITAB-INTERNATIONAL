"use client";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const authPath = `${pathname.replace(/\/$/, "")}/auth/login`;

  const navItems: { label: string; href: string }[] = [
    { label: "Services", href: "#services" },
    { label: "À Propos", href: "#about" },
  ];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 mx-2 md:mx-4 lg:mx-6 w-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl bg-background/80 backdrop-blur-sm py-2 px-4 rounded-xl">
      <div className="flex flex-row justify-between items-center py-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-2"
        >
          <span className="text-xl font-bold tracking-tighter font-aleo">SITAB</span>
          <span className="text-xs font-medium text-muted-foreground hidden sm:block">INTERNATIONAL</span>
        </motion.div>

        <div className="hidden md:flex flex-row items-center gap-4 4xl:gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.1 + index * 0.1,
              }}
            >
              <Link
                href={item.href}
                className="flex flex-row items-center gap-1"
              >
                <p className="text-sm font-medium 4xl:text-2xl">{item.label}</p>
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.1 + navItems.length * 0.1,
            }}
          >
            <Link 
              href="#contact"
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "4xl:text-2xl")}
            >
              Contact
            </Link>
          </motion.div>
          <ThemeToggle />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.2 + navItems.length * 0.1,
            }}
          >
            <Link 
              href="https://wa.me/237697082105"
              className={cn(buttonVariants({ variant: "default" }), "4xl:text-2xl 4xl:h-16 4xl:px-8")}
            >
              Devis Gratuit
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:hidden"
        >
          <Button
            variant="ghost"
            className="p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <XIcon className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <MenuIcon className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="flex flex-col gap-4 py-4"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex flex-row items-center gap-1 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <p className="text-sm font-medium">{item.label}</p>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2, delay: navItems.length * 0.1 }}
                className="flex flex-col gap-2 pt-2"
              >
                <ThemeToggle />
                <Link 
                  href="#contact"
                  className={cn(buttonVariants({ variant: "ghost" }), "w-full")}
                >
                  Contact
                </Link>
                <Link 
                  href="https://wa.me/237697082105"
                  className={cn(buttonVariants({ variant: "default" }), "w-full")}
                >
                  Devis Gratuit
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
