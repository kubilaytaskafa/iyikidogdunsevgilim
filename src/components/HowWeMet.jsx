import React from "react";

export default function HowWeMet() {
  return (
    <div className="flex items-center justify-center w-full bg-gray-100 mt-12 rounded-2xl lg:w-1/2 shadow-lg shadow-pink-400 ">
      <div className="w-full   bg-gray-900  shadow-lg rounded-2xl p-4">
        <h2 className="text-lg font-semibold text-center mb-4">
          Nasıl Tanıştık?
        </h2>

        {/* Mesajlar Alanı */}
        <div className="space-y-4">
          {/* Kubilay'ın mesajı */}
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-xs shadow-md">
              Sen gerçek misin?
            </div>
          </div>

          {/* Şeyma'nın cevabı */}
          <div className="flex justify-start">
            <div className="bg-gray-800 text-gray-400 px-4 py-2 rounded-2xl max-w-xs shadow-md">
              Yok fakeyim kanka 😂
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
