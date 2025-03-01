import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CounterCardProps {
  count: number;
  label: string;
}

const CounterCard: React.FC<CounterCardProps> = ({ count, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation runs only once
    threshold: 0.3, // Triggers when 30% of the card is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center p-5 rounded-lg backdrop-blur-lg bg-white/10 border border-white/20 shadow-md w-full md:w-52"
    >
      <h2 className="text-4xl font-bold text-white">
        {inView && <CountUp start={0} end={count} duration={3} />}
        <span className="text-red-500">+</span>
      </h2>
      <p className="text-red-300 text-sm">{label}</p>
    </motion.div>
  );
};

export default CounterCard;
