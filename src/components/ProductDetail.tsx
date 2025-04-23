import { useParams } from "react-router-dom";
import { products } from "../assets/data";
import { motion } from "framer-motion";

export const ProductDetail = () => {
  const { slug } = useParams();
  const items = products.find((p) => p.slug === slug);
  return (
    <section className="relative container mx-auto min-h-dvh place-content-center p-7">
      <motion.div
        className="grid place-content-center place-items-center gap-4 md:grid-cols-2 md:gap-0"
        initial={{ opacity: 0, translateY: -15 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div className="grid place-items-center gap-2">
          <img
            src={items?.image}
            alt={items?.image}
            loading="lazy"
            className="aspect-square w-48 object-cover md:w-52"
          />
          <h1 className="font-winky text-xl font-bold tracking-wide capitalize md:text-2xl">
            {items?.title}
          </h1>
        </div>
        <div className="grid gap-3">
          <p className="font-inter mb-5">{items?.text}</p>
          <h3 className="font-winky text-lg font-semibold capitalize md:text-xl">
            {items?.benefit?.title}
          </h3>
          <div className="font-inter grid gap-2">
            <p>{items?.benefit?.detail1}</p>
            <p>{items?.benefit?.detail2}</p>
            <p>{items?.benefit?.detail3}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
