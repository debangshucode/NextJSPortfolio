import { memo } from "react";
import { motion } from "framer-motion";

interface CounterCardProps {
  count: number;
  label: string;
}

const CounterCard: React.FC<CounterCardProps> = memo(({ count, label }) => {
  return (
    <div className="text-center p-4 sm:p-5 rounded-lg backdrop-blur-lg bg-white/10 border border-white/20 shadow-md w-full max-w-xs sm:max-w-sm md:max-w-52 lg:max-w-60 fade-in">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">
        {count}
        <span className="text-red-500">+</span>
      </h2>
      <p className="text-red-300 text-xs sm:text-sm">{label}</p>
    </div>
  );
});

CounterCard.displayName = "CounterCard";
export default CounterCard;
