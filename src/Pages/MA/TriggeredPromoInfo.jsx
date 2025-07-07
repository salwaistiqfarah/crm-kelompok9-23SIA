import React, { useEffect, useState } from "react";

const TriggeredPromo = () => {
  const [triggeredPromos, setTriggeredPromos] = useState([]);

  useEffect(() => {
    const isNewUser = true;

    const dummyTriggered = [
      {
        id: 1,
        title: "Selamat Datang di STC Barbershop!",
        condition: "Khusus untuk pelanggan baru",
        image: "https://i.pinimg.com/736x/1b/98/29/1b9829fc388268be03661fa8a55ee5b4.jpg",
        action: "Dapatkan Diskon 20% untuk layanan pertama kamu di barbershop kami!",
      },
    ];

    if (isNewUser) {
      setTriggeredPromos(dummyTriggered);
    }
  }, []);

  const handleClaim = (title) => {
    alert(`Promo "${title}" berhasil diklaim! 🎉`);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-[#fdf7f1] via-[#fceee4] to-[#fdf6ef]">
      {/* Header Section with Gradient */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#5B4636] mb-2 animate-pulse">
          🎉 PROMO KHUSUS UNTUK PELANGGAN BARU
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Kamu spesial! Sebagai pelanggan baru, nikmati layanan eksklusif dan pengalaman terbaik di STC Barbershop.
        </p>
      </div>

      {/* Promo Card Section */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {triggeredPromos.map((promo) => (
          <div
            key={promo.id}
            className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#f1e8de] transition-all hover:scale-[1.01]"
          >
            <div className="relative">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#A47551] text-white px-3 py-1 text-xs rounded-full shadow-md">
                NEW USER
              </div>
            </div>
            <div className="p-5">
              <h2 className="text-2xl font-bold text-[#A47551] mb-2">
                {promo.title}
              </h2>
              <p className="text-sm text-gray-600 italic mb-2">
                {promo.condition}
              </p>
              <p className="text-sm text-gray-700 mb-4">
                {promo.action}
              </p>
              <button
                onClick={() => handleClaim(promo.title)}
                className="w-full py-2 rounded-lg bg-[#A47551] text-white font-semibold hover:bg-[#8a5f3f] transition shadow-md"
              >
                Klaim Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Section Bottom */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>
          ✂️ STC Barbershop - Gaya & Percaya Diri Sejak 1999 ✨
        </p>
      </div>
    </div>
  );
};

export default TriggeredPromo;