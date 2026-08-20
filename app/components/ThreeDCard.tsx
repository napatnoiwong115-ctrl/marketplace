'use client';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ThreeDCard({ item }: { item: Product }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 shadow-lg transition-all duration-200 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10"
    >
      <div 
        style={{ transform: "translateZ(30px)" }} 
        className="w-full aspect-square bg-slate-100 dark:bg-slate-800/80 rounded-2xl flex items-center justify-center text-4xl mb-3 shadow-inner"
      >
        {item.image}
      </div>
      <div style={{ transform: "translateZ(15px)" }}>
        <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1 line-clamp-2">
          {item.name}
        </h2>
        <p className="text-indigo-600 dark:text-indigo-400 font-bold text-base">
          ฿{item.price}
        </p>
      </div>
    </motion.div>
  );
}