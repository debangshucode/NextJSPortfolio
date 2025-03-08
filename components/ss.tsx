import { motion } from "framer-motion";
import CounterCard from "./ui/CounterCard";
import { counterData } from "@/data";

{
  /* Counter Data (For Large Screens) */
}
<div className="hidden lg:flex absolute top-1/2 right-[-40px] transform -translate-y-1/2 flex-col gap-4">
  {counterData.map((item, index) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      <CounterCard count={item.count} label={item.label} />
    </motion.div>
  ))}
</div>;

{
  /* Counter Data (For Mobile) */
}
<div className="flex w-full justify-center items-center flex-row text-center mt-10 md:hidden">
  <div className="grid w-full grid-cols-3 gap-4">
    {counterData.map((item) => (
      <CounterCard key={item.id} count={item.count} label={item.label} />
    ))}
  </div>
</div>;
