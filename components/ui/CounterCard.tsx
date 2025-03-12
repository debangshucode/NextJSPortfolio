import { memo } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CountUp = dynamic(() => import("react-countup"), { ssr: false });

interface CounterCardProps {
  count: number;
  label: string;
}

const CounterCard: React.FC<CounterCardProps> = memo(({ count, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="text-center p-4 sm:p-5 rounded-lg backdrop-blur-lg bg-white/10 border border-white/20 shadow-md w-full max-w-xs sm:max-w-sm md:max-w-52 lg:max-w-60"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white">
        {inView ? <CountUp start={0} end={count} duration={0.5} /> : 0}
        <span className="text-red-500">+</span>
      </h2>
      <p className="text-red-300 text-xs sm:text-sm">{label}</p>
    </motion.div>
  );
});
CounterCard.displayName = "CounterCard";
export default CounterCard;
