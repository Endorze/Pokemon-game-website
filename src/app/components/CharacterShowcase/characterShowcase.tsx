"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const characters = [
  { id: 1, name: "Character 1", img: "/kaisa.jpg" },
  { id: 2, name: "Character 2", img: "/akali.png" },
  { id: 3, name: "Character 3", img: "/kaisa.jpg" },
  { id: 4, name: "Character 4", img: "/kaisa.jpg" },
  { id: 5, name: "Character 5", img: "/kaisa.jpg" },
];

const CharacterShowcase = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="flex w-full h-[700px] overflow-hidden">
      {characters.map((char) => {
        const isActive = char.id === activeId;

        return (
          <motion.div
            key={char.id}
            layout
            transition={{ duration: 0.4, type: "spring" }}
            onClick={() => setActiveId(isActive ? null : char.id)}
            className={`cursor-pointer relative overflow-hidden`}
            style={{
              flex: isActive ? 4 : 1,
              position: "relative",
              transition: "flex 0.4s ease-in-out",
            }}
          >
            <img
              src={char.img}
              alt={char.name}
              className="w-full h-full object-cover object-top-left"
            />
            {isActive && (
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full">
                {char.name}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default CharacterShowcase;
