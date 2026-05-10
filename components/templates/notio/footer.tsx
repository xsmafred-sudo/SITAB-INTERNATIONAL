"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Footer() {
  const socialLinks: { label: string; href: string; icon: string }[] = [
    {
      label: "X",
      href: "#",
      icon: "/icons/x.svg",
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: "/icons/linkedin.svg",
    },
    {
      label: "Facebook",
      href: "#",
      icon: "/icons/facebook.svg",
    },
    {
      label: "Instagram",
      href: "#",
      icon: "/icons/instagram.svg",
    },
    {
      label: "Tiktok",
      href: "#",
      icon: "/icons/tiktok.svg",
    },
  ];

  return (
    <footer id="contact" className="max-md:relative flex flex-col max-md:px-4 lg:ml-3">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative isolate flex flex-col gap-16 lg:flex-row items-center justify-center w-full mx-auto px-6 py-12 md:p-16 xl:p-20 min-h-[95dvh] md:min-h-[70dvh] rounded-4xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 -z-10 rotate-180 rounded-4xl overflow-hidden bg-footer-radial-light lg:dark:bg-footer-radial-dark max-lg:bg-footer-radial-light-mobile max-lg:dark:bg-footer-radial-dark-mobile [--bg-pos-footer:14%] md:[--bg-pos-footer:-5%]"
        />
        <section className="max-md:absolute max-md:bottom-50 max-md:-translate-y-1/2 flex flex-col gap-8 md:gap-4 z-10 text-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-aleo"
          >
            Prêt à transformer <br /> votre habitat ?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-base max-w-xs lg:max-w-2xl 4xl:text-3xl"
          >
            Contactez SITAB INTERNATIONAL dès aujourd&apos;hui pour un devis gratuit 
            et personnalisé. Nous intervenons rapidement à Yaoundé et ses environs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <a 
              href="https://wa.me/237697082105" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "w-fit 4xl:text-2xl 4xl:px-12 4xl:h-18")}
            >
              Contactez-nous sur WhatsApp
            </a>
          </motion.div>
        </section>
      </motion.div>

      <section className="max-md:absolute max-md:bottom-10 max-md:left-1/2 max-md:-translate-x-1/2 flex flex-col gap-8 lg:gap-12 items-center justify-center lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <div className="font-aleo text-2xl font-bold tracking-tight">
            SITAB <span className="text-primary">INTERNATIONAL</span>
          </div>
          <p className="text-muted-foreground text-sm mt-2 max-w-xs mx-auto">
            Montée EKOUNOU, CARROSSELLE, YAOUNDÉ<br />
            danvoxsimpatico@yahoo.fr | +237 697 08 21 05
          </p>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-6 md:gap-8 text-muted-foreground 4xl:text-2xl"
        >
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#about">À Propos</Link></li>
          <li><Link href="https://wa.me/237697082105">Devis Gratuit</Link></li>
          <li><Link href="mailto:danvoxsimpatico@yahoo.fr">Contact</Link></li>
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex gap-3 md:ap-4 4xl:gap-8 items-center justify-center"
        >
          {socialLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <Image
                src={link.icon}
                alt={link.label}
                width={24}
                height={24}
                className="invert dark:invert-0 max-md:w-7 4xl:w-10 4xl:h-10"
              />
            </Link>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-muted-foreground text-sm 4xl:text-2xl"
        >
          &copy; {new Date().getFullYear()} SITAB INTERNATIONAL. Tous droits réservés.
        </motion.p>
      </section>
    </footer>
  );
}
