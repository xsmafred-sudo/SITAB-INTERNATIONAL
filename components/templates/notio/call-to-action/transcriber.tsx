"use client";

import useCountdown from "@/hooks/use-countdown";
import {
  BatteryFullIcon,
  RotateCcwIcon,
  SignalHighIcon,
  WifiIcon,
  XIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "usehooks-ts";

export default function Transcriber() {
  const messages = [
    { id: 1, text: "Bienvenue chez SITAB INTERNATIONAL ! En quoi pouvons-nous vous aider ?", sender: "bot", delay: 0.5 },
    { id: 2, text: "Bonjour, j'ai besoin d'un levé topographique pour un terrain à Soa.", sender: "user", delay: 2.5 },
    { id: 3, text: "Très bien ! Nos ingénieurs sont prêts. S'agit-il d'un lotissement ou d'une simple délimitation ?", sender: "bot", delay: 4.5 },
    { id: 4, text: "C'est pour un lotissement de 2 hectares. Quel est votre délai ?", sender: "user", delay: 6.5 },
  ];

  return (
    <div className="w-full max-w-xs md:max-w-sm xl:max-w-md 4xl:max-w-2xl p-[1px] rounded-4xl bg-gradient-to-r from-primary/50 via-secondary/40 to-muted-foreground/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col h-[500px] md:h-[600px] w-full bg-gradient-to-b from-background to-zinc-100 dark:to-muted dark:lg:to-neutral-950 rounded-4xl border-0 overflow-hidden"
      >
        {/* Status Bar */}
        <motion.section
          className="flex flex-row items-center justify-between py-3 px-8 shrink-0"
        >
          <p className="text-xs md:text-sm font-medium">9:41</p>
          <div className="flex flex-row items-center gap-1.5">
            <SignalHighIcon className="w-4 h-4" />
            <WifiIcon className="w-4 h-4" />
            <BatteryFullIcon className="w-4 h-4" />
          </div>
        </motion.section>

        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-foreground/5 bg-background/50 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="text-primary font-bold text-xs">SI</span>
            </div>
            <div>
              <p className="text-sm font-bold leading-none">SITAB INTERNATIONAL</p>
              <p className="text-[10px] text-green-500 mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                En ligne
              </p>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 no-scrollbar">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, x: msg.sender === "bot" ? -20 : 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: msg.delay, duration: 0.5 }}
              className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                msg.sender === "bot"
                  ? "bg-muted dark:bg-neutral-800 self-start rounded-tl-none"
                  : "bg-primary text-primary-foreground self-end rounded-tr-none"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
          
          {/* Typing Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 8, duration: 2, repeat: Infinity }}
            className="self-start bg-muted dark:bg-neutral-800 p-2 rounded-xl rounded-tl-none flex gap-1 items-center"
          >
            <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" />
            <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.2s]" />
            <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.4s]" />
          </motion.div>
        </div>

        {/* Chat Input / CTA */}
        <div className="p-6 bg-background/50 backdrop-blur-md border-t border-foreground/5 mt-auto shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Button
              asChild
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white border-0 h-12 rounded-2xl shadow-lg shadow-[#25D366]/20 transition-all active:scale-[0.98]"
            >
              <a 
                href="https://wa.me/237697082105" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Discuter sur WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
