"use client";

import { FeatureCardProps } from "@/types/components/feature";
import { Hammer, Wrench, Cpu, Map } from "lucide-react";
import { motion } from "motion/react";
import FeatureCard from "./feature-card";
import ToolFeature from "./tool-feature";
import TranscriptionFeature from "./transcription-feature";
export default function Features() {
  const features: FeatureCardProps[] = [
    {
      title: "Rénovation & Bâtiment",
      description:
        "Experts en rénovation, électricité et modification de structures pour moderniser votre espace de vie.",
      icon: Hammer,
    },
    {
      title: "Plomberie & Curage",
      description:
        "Installation sanitaire, débouchage de canalisations et maintenance de systèmes d'évacuation.",
      icon: Wrench,
    },
    {
      title: "Domotique & Sécurité",
      description:
        "Automatisation de l'éclairage, climatisation et systèmes de surveillance pour un confort intelligent.",
      icon: Cpu,
    },
    {
      title: "Topographie & VRD",
      description:
        "Levés topographiques, bornage et études de Voirie et Réseaux Divers pour vos terrains.",
      icon: Map,
    },
  ];

  return (
    <div id="services" className="flex flex-col gap-8 items-center justify-center p-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-4xl 4xl:text-6xl font-aleo text-center"
      >
        Nos Services Immobiliers
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="text-lg text-center max-w-2xl text-muted-foreground 4xl:text-3xl 4xl:max-w-6xl"
      >
        SITAB INTERNATIONAL vous propose une expertise complète pour transformer, 
        entretenir et sécuriser votre patrimoine immobilier au Cameroun.
      </motion.p>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-md:pt-8 w-full max-w-7xl">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: 0.2 + index * 0.15,
              ease: "easeOut",
            }}
          >
            <FeatureCard feature={feature} />
          </motion.div>
        ))}
      </section>
      <ToolFeature />
      <TranscriptionFeature />
    </div>
  );
}
