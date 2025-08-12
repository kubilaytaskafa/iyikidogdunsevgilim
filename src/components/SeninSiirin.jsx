import React from "react";

export default function SeninSiirin() {
  const siir = `
 Şayet bir gün , uzak düşerse meskenim yollarına
 Ellerim ellerine kavuşmak için gün sayarsa
 Yakınırsa gönlüm , sensiz batan günbatımına
 Mağrur gözlerimden akan yaşlar , toprağı bulursa
 Arar ruhum seni cihanın her tarafında
 
 Gayem aşktır , kül olur uğruna bedenim 
 Üzersem seni sarmasın beni kefenim
 Lale diyar olsa , yalnız gülü severim
 Üzerimde ay yıldız gibi, seninle varım, seninim.
 Mazur gör beni , bu fani mizanın tam arafında
  `;

  return (
    <div className="max-w-xl mx-auto mt-16 p-6 bg-white bg-opacity-90 rounded-xl shadow-lg text-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center text-pink-500">
        Senin Şiirin
      </h2>
      <pre className="whitespace-pre-wrap text-lg font-serif leading-relaxed">
        {siir.trim()}
      </pre>
    </div>
  );
}
