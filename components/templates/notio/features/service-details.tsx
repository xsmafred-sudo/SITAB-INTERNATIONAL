"use client";

import { motion } from "motion/react";

const serviceCategories = [
  {
    title: "Travaux de Bâtiment & Rénovation",
    items: [
      "Rénovation complète de villas et appartements",
      "Modification structurelle et agrandissement",
      "Restauration de pièces d'eau et toilettes",
      "Mise aux normes des installations électriques",
      "Coulage de sol en Résine et Epoxy (finition premium)",
      "Installation d'ascenseurs privatifs de maison",
      "Construction et vente de maisons clés en main",
      "Fourniture et installation de surpresseurs d'eau"
    ]
  },
  {
    title: "Curages, Débouchage & Évacuations",
    items: [
      "Débouchage de canalisations publiques et privées",
      "Entretien et curage de ponts et dalots",
      "Débouchage haute pression de WC et tuyauteries",
      "Entretien d'éviers, baignoires et machines à laver",
      "Désinfection et propreté continue des sanitaires",
      "Curage technique de réseaux d'évacuation"
    ]
  },
  {
    title: "Plomberie & Maintenance Sanitaire",
    items: [
      "Installation de chauffe-eaux instantanés performants",
      "Détartrage professionnel de circuits d'eau",
      "Création et remplacement complet de toilettes",
      "Conception et réalisation de salles de bain modernes",
      "Installation de robinetterie et mitigeurs de luxe",
      "Maintenance préventive des réseaux hydrauliques"
    ]
  },
  {
    title: "Topographie, VRD & Études Techniques",
    items: [
      "Levés topographiques de précision (GPS/Station totale)",
      "Bornage et délimitation de terrains au Cameroun",
      "Montage de dossiers techniques et administratifs",
      "Voirie et Réseaux Divers (VRD) pour lotissements",
      "Recherche et identification de terrains oubliés",
      "Secrétariat topographique en ligne pour géomètres",
      "Calculs et plans topo express via WhatsApp"
    ]
  },
  {
    title: "Domotique & Systèmes Intelligents",
    items: [
      "Gestion automatisée de l'éclairage et climatisation",
      "Solutions d'économie d'énergie pour hôtels et résidences",
      "Automatisation de portails et portes (ouverture intelligente)",
      "Systèmes de surveillance et alarmes connectées",
      "Fourniture et pose de baies vitrées blindées",
      "Intégration d'écosystèmes Smart Home complets"
    ]
  }
];

export default function ServiceDetails() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-aleo font-bold md:text-4xl"
        >
          Expertise Technique & Solutions Immobilières
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-muted-foreground max-w-3xl mx-auto"
        >
          Découvrez le détail de nos interventions techniques pour la valorisation 
          et la maintenance de votre patrimoine au Cameroun.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-2xl border border-border/50 bg-secondary/10 p-6 hover:bg-secondary/20 transition-colors"
          >
            <h3 className="mb-4 text-xl font-aleo font-semibold text-primary">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
