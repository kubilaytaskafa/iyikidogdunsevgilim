import { useEffect, useRef, useState, useCallback } from "react";

import image2 from "../images/sevgilimle2.jpg";
import image3 from "../images/seymaya1.jpg";
import image4 from "../images/seymaya2.jpg";
import image5 from "../images/seymaya3.jpg";
import image6 from "../images/seymaya4.jpg";
import image7 from "../images/seymaya5.jpg";

export default function PhotoGallery() {
  const photos = [image2, image3, image4, image5, image6, image7];

  const [visible, setVisible] = useState([]);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [
              ...new Set([...prev, entry.target.dataset.index]),
            ]);
          }
        });
      },
      { threshold: 0.3 }
    );

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const ref = useCallback(
    (el) => {
      if (el && observer.current) {
        observer.current.observe(el);
      }
    },
    [] // boş bağımlılık, fonksiyon sadece bir kere oluşturulur
  );

  return (
    <div className="w-full max-w-4xl mx-auto mt-20 px-4">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        📸 Anılarımız
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((src, idx) => (
          <div
            key={idx}
            data-index={idx}
            ref={ref}
            className={`rounded-xl shadow-pink-400 overflow-hidden shadow-lg transform transition-all duration-700 ${
              visible.includes(String(idx))
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src={src}
              alt={`Anı ${idx + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
