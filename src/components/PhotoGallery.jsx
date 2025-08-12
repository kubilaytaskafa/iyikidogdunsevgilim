import { motion } from "framer-motion";

import image2 from "../images/sevgilimle2.jpg";
import image3 from "../images/seymaya1.jpg";
import image4 from "../images/seymaya2.jpg";
import image5 from "../images/seymaya3.jpg";
import image6 from "../images/seymaya4.jpg";
import image7 from "../images/seymaya5.jpg";

export default function PhotoGallery() {
  const photos = [image2, image3, image4, image5, image6, image7];

  return (
    <div className="w-full max-w-4xl mx-auto mt-20 px-4">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        📸 Anılarımız
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((src, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl shadow-pink-400 overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
          >
            <motion.img
              src={src}
              alt={`Anı ${idx + 1}`}
              className="w-full h-64 object-cover cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
