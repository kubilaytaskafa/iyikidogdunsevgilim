// src/components/Statistics.jsx
import React from "react";
import { Heart, Laugh, MessageCircle, Zap } from "lucide-react";

export default function Statistics() {
  const stats = [
    { id: 1, label: "Kavga", value: "7000+", icon: Zap, color: "bg-red-400" },
    {
      id: 2,
      label: "Küsüp Barışma",
      value: "60+",
      icon: MessageCircle,
      color: "bg-yellow-400",
    },
    { id: 3, label: "Gülüş", value: "∞", icon: Laugh, color: "bg-pink-400" },
    { id: 4, label: "Aşk", value: "∞", icon: Heart, color: "bg-purple-400" },
  ];

  return (
    <div className="mt-16 w-full max-w-4xl px-4">
      <h2 className="text-3xl font-bold text-white mb-8 text-center drop-shadow">
        İlişki İstatistiklerimiz 📊
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transform transition  shadow-pink-500"
          >
            <div className={`${stat.color} p-3 rounded-full text-white mb-4`}>
              <stat.icon size={28} />
            </div>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            <p className="text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
