import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const Counter = ({ target }: { target: number }) => {
  const count = useMotionValue(0); // Начальное значение 0
  const rounded = useSpring(count, { stiffness: 100, damping: 20 });

  useEffect(() => {
    count.set(target); // Устанавливаем конечное значение
  }, [target, count]);

  return (
    <motion.span>
      {rounded.get().toFixed(0)} {/* Округляем и отображаем число */}
    </motion.span>
  );
};
