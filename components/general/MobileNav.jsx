"use client";
import { motion } from "framer-motion";
import { Heart, Menu, SquareX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const links = [
  {
    path: "",
    name: "Acasă",
  },
  {
    path: "",
    name: "Noi doi",
  },
  {
    path: "",
    name: "Eveniment",
  },
  {
    path: "",
    name: "Unde și cand",
  },
  {
    path: "",
    name: "Confirmare",
  },
];
const navVariants = {
  closed: { x: "-100%" },
  open: { x: 0 },
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-5 right-5 z-50">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="active:scale-90 transition-all ease-in-out duration-200"
      >
        <Menu size={36} color="white" />
      </div>
      <motion.div
        variants={navVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3, ease: "linear" }}
        className="h-screen w-full bg-accentGreen bg-center bg-no-repeat bg-cover fixed top-0 left-0 z-50"
      >
        <div
          className="absolute top-3 right-3 active:scale-90 transition-all ease-in-out duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <SquareX size={32} strokeWidth={1.2} />
        </div>
        {/* Main inside wrapper */}
        <div className="flex flex-col items-center justify-between py-16 h-full">
          {/* Top part wrapper */}
          {/* Name Date */}
          <div className="flex flex-col items-center">
            <div className="relative w-28 h-12">
              <Image
                src="/assets/branch.png"
                fill
                alt="Branch icon"
                className="object-contain"
              />
            </div>
            <div className="font-alexBrush tracking-widest font-light mb-1 text-3xl">
              Deniz & Alexandru
            </div>
            <div>30 Mai 2026</div>
          </div>
          {/* Link list */}
          <div className="flex flex-col items-center justify-center space-y-6">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="hover:underline underline-offset-4 transition-all ease-linear duration-100 hover:scale-105"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bottom part */}
          <div>
            <div className="w-36 bg-amber-700 h-[1px] mx-auto mb-2" />
            <p className="text-sm">Vă asteptăm cu drag!</p>
            <Heart
              size={24}
              strokeWidth={1.5}
              className="mx-auto"
              color="red"
              fill="red"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNav;
