import React, { useEffect, useState } from "react";

const TriggeredPromo = () => {
  const [triggeredPromos, setTriggeredPromos] = useState([]);

  useEffect(() => {
    // Simulasikan user baru
    const isNewUser = true;

    const dummyTriggered = [
      {
        id: 1,
        title: "Selamat Datang di V's Barbershop!",
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
    <div className="p-6">
      {/* Banner background full image */}
      <div
  className="relative rounded-2xl overflow-hidden mb-8 shadow h-48 md:h-60"
  style={{
    backgroundImage: "url('https://i.pinimg.com/736x/7c/6d/e5/7c6de562e121b632f4554c828bc13024.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Semi-transparent text container */}
  <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10">
    <div className="bg-white bg-opacity-70 p-4 rounded-xl w-fit max-w-2xl">
      <h1 className="text-[#A47551] text-xl md:text-3xl font-bold mb-1">
        🎁 Promo Spesial untuk Kamu
      </h1>
      <p className="text-gray-800 text-sm md:text-base">
        Terima kasih telah bergabung dengan V's Barbershop! Sebagai pelanggan baru, kamu mendapatkan promo eksklusif yang hanya bisa diklaim sekali.
      </p>
    </div>
  </div>
</div>

      {/* Promo Card */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {triggeredPromos.map((promo) => (
          <div
            key={promo.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-[#A47551] mb-1">
                {promo.title}
              </h2>
              <p className="text-sm text-gray-600 italic mb-2">
                {promo.condition}
              </p>
              <p className="text-sm text-gray-700 mb-4">{promo.action}</p>
              <button
                onClick={() => handleClaim(promo.title)}
                className="w-full py-2 rounded-lg bg-[#A47551] text-white font-semibold hover:bg-[#8a5f3f] transition"
              >
                Klaim Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TriggeredPromo;
