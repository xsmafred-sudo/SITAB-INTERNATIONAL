"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "motion/react";
import Image from "next/image";
import BlurredOrb from "@/components/blurred-orb";

type Tool = {
  name: string;
  lightImage: string;
  darkImage: string;
};

export default function ToolFeature() {
  const tools: Tool[] = [
    {
      name: "Loom",
      lightImage: "/logo/loom-mini-light.svg",
      darkImage: "/logo/loom-mini.svg",
    },
    {
      name: "Notion",
      lightImage: "/logo/notion-mini-light.svg",
      darkImage: "/logo/notion-mini.svg",
    },
    {
      name: "Medium",
      lightImage: "/logo/medium-light.svg",
      darkImage: "/logo/medium.svg",
    },
    {
      name: "Mailchip",
      lightImage: "/logo/mailchip-light.svg",
      darkImage: "/logo/mailchip.svg",
    },
    {
      name: "Calendly",
      lightImage: "/logo/calendly-light.svg",
      darkImage: "/logo/calendly.svg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full lg:py-20 4xl:py-32"
    >
      <Card className="w-full min-h-96 lg:gap-16 flex flex-col items-center justify-center dark:bg-background max-md:ring-0 dark:ring-1 shadow-none lg:py-18 4xl:gap-24">

        <CardContent className="flex flex-col gap-4 items-center justify-center w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="text-center text-3xl md:text-4xl font-aleo 4xl:text-5xl"
          >
            Une Expertise de Confiance
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="text-center text-muted-foreground text-lg md:text-base max-w-lg 4xl:text-3xl 4xl:max-w-4xl"
          >
            SITAB INTERNATIONAL s&apos;engage à utiliser les meilleures technologies 
            et matériaux pour garantir la pérennité de vos installations.
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
