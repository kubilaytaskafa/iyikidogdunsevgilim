// src/components/ThenAndNow.jsx
import React from "react";
import ilkFoto from "../images/seymayla-foto.jpg";
import sonFoto from "../images/seymaya5.jpg";
export default function ThenAndNow() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 drop-shadow">
        Geride Kalan 4.5 Senede Neler Değişti? 📸
      </h2>

      {/* Fotoğraflar Flexbox ile */}
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {/* İlk Fotoğraf */}
        <div className="flex-1 bg-white rounded-2xl  overflow-hidden flex flex-col shadow-lg shadow-pink-500">
          <div className="flex-1 flex items-center justify-center bg-gray-100 roundex-xl p-4">
            <img
              src={ilkFoto}
              alt="İlk Fotoğrafımız"
              className="h-86 w-86 rounded-2xl"
            />
          </div>
          <div className="p-6 text-gray-800">
            <h3 className="text-xl font-semibold mb-2">İlk Fotoğrafımız</h3>
            <p className="text-sm">
              Bu fotoğraf, tanışmamızdan kısa bir süre sonra çekildi. O zamanlar
              birbirimize yabancıydık ama gözlerimizde şimdiki sevginin ilk
              kıvılcımları vardı. 😊
            </p>
          </div>
        </div>

        {/* Son Fotoğraf */}
        <div className="flex-1 bg-white rounded-2xl  overflow-hidden flex flex-col shadow-lg shadow-pink-500">
          <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-xl p-4">
            <img
              src={sonFoto}
              alt="Son Fotoğrafımız"
              className="h-86 w-86 rounded-xl"
            />
          </div>
          <div className="p-6 text-gray-800">
            <h3 className="text-xl font-semibold mb-2">Son Fotoğrafımız</h3>
            <p className="text-sm">
              Aradan geçen 4.5 senede yüzlerimiz değişti, saçlarımız farklılaştı
              ama sevgimiz büyüyerek devam etti. Artık her anımızı birlikte
              geçirmek istiyoruz. ❤️
            </p>
          </div>
        </div>
      </div>

      {/* Açıklama Listesi */}
      <div className="mt-12 bg-white/90 rounded-2xl p-6 shadow-lg text-gray-800 shadow-pink-500">
        <h4 className="text-lg font-semibold mb-4">
          Bu süreçte neler değişti?
        </h4>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Birbirimizi daha iyi tanıdık ve anladık.</li>
          <li>Birlikte yüzlerce güzel anı biriktirdik.</li>
          <li>Küçük tartışmaları aşmayı öğrendik.</li>
          <li>Birlikte yeni yerler keşfettik.</li>
          <li>Gülüşlerimiz daha içten, sevgimiz daha güçlü oldu.</li>
          <li>
            Tam tamına 40 kilo aldım ve almaya devam ediyorum. Hatunum iyi
            bakıyor. Ama kendisi hala manken gibi
          </li>
          <li>
            İyi bir gelecek için çok sıkı çalışıyoruz. İkimiz de birbirimize çok
            inanıyoruz
          </li>
          <li>Hala kendisini Beşiktaşlı yapamadım ama eli kulağında</li>
        </ul>
      </div>
    </div>
  );
}
