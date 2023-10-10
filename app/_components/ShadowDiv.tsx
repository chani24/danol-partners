import { motion } from "framer-motion";
export default function ShadowDiv() {
  return (
    <motion.div
      initial={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
      }}
      whileInView={{ height: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="bg-[#fff]"
    />
  );
}
