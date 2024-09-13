import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border-[#915eff] border-4 rounded-full pointer-events-none z-50"
      style={{
        transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
      }}
      animate={{
        x: mousePosition.x - 16, // Center the circle on the cursor
        y: mousePosition.y - 16,
      }}
      transition={{ duration: 0.01 }}
    />
  );
};

export default CustomCursor;
