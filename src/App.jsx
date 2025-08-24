import { useRef, useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/tr";
import PhotoGallery from "./components/PhotoGallery.jsx";
import music from "./audios/Nerdeysen.mp3";
import HowWeMet from "./components/HowWeMet.jsx";
import Statistics from "./components/Statistics.jsx";
import ThenAndNow from "./components/ThenAndNow.jsx";
import SeninSiirin from "./components/SeninSiirin.jsx";

export default function App() {
  const dogumGunu = dayjs("2004-08-25");
  const [bugun, setBugun] = useState(dayjs());
  const [muzikCal, setMuzikCal] = useState(true);
  const audioRef = useRef(null);

  const buguneKadarGecenGun = bugun.diff(dogumGunu, "day");

  useEffect(() => {
    const interval = setInterval(() => {
      setBugun(dayjs());
    }, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  const toggleMusic = () => {
    if (muzikCal) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.log("Müzik çalma hatası:", err);
      });
    }
    setMuzikCal(!muzikCal);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-red-400 flex flex-col items-center justify-center text-white text-center px-4 py-12 font-sans relative">
      {/* Müzik */}
      <audio ref={audioRef} src={music} loop />

      <button
        onClick={toggleMusic}
        className="absolute top-4 right-4 bg-white text-pink-600 px-4 py-2 rounded-xl shadow-lg hover:bg-pink-100 transition"
      >
        {muzikCal ? "🔇 Sesi Kapat" : "🔊 Sesi Aç"}
      </button>

      <h1 className="text-4xl mt-12 md:text-5xl font-bold mb-6 drop-shadow-xl">
        Bir prensesin doğuşunun üzerinden...
      </h1>

      <p className="text-3xl md:text-4xl font-semibold mb-4 drop-shadow">
        💖 {buguneKadarGecenGun} gün geçti...
      </p>

      <p className="text-2xl font-bold  md:text-2xl mb-10 mt-4 drop-shadow">
        İyi ki Doğdun Güzelim! 🎉🎂🎈
      </p>

      <div className="animate-pulse text-xl mt-10 font-bold">
        Hazırlayan: Kubişin 💘
      </div>

      <PhotoGallery />
      <HowWeMet />
      <div className="mt-16 text-lg text-gray-800">
        <p className="mb-4 text-lg text-gray-800 p-4 text-shadow-2xl font-semibold text-shadow-gray">
          Her şey yağmurlu bir Manavgat gününde telefonuma gelen bir bildirim
          ile başladı. Şu günlerde X olarak tabir edilen Twitter üzerinden bir
          takip isteği aldım. Tanrı benim alın yazımı modern bir şekilde yazmış
          galiba... İşte tam o günden beridir aşığım sana. Seninle birlikte
          geçen senelerim için Tanrıya binlerce , yüzbinlerce kez şükür
          ediyorum. Çok şükür ki birlikte büyüyüp birlikte yaş alıyoruz. Dilerim
          nice yaşları da birlikte karşılarız.
        </p>
        <p className="mb-4 text-md font-semibold text-gray-800 p-4 text-shadow-md">
          Doğum günün kutlu olsun sevgilim... nice birlikte senelerimize
          inşallah. Ömrümde bir seni sevdim,
          <span className="text-red-600 text-4xl"> seviyorum ,seveceğim!</span>
        </p>
      </div>
      <Statistics />
      <ThenAndNow />
      <SeninSiirin />
    </div>
  );
}
