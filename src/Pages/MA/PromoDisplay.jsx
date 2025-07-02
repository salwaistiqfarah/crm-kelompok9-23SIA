import React, { useEffect, useState } from "react";

const PromoDisplay = () => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    const dummyPromos = [
      {
        id: 1,
        title: "Diskon 20% Pelajar",
        preview: "Tunjukkan kartu pelajar dan dapatkan diskon!",
        image: "https://i.pinimg.com/736x/b4/f3/37/b4f33726fec60de995173ac1f8b7fccd.jpg",
      },
      {
        id: 2,
        title: "Promo Akhir Pekan",
        preview: "Nikmati potongan harga setiap akhir pekan!",
        image: "https://i.pinimg.com/736x/24/0d/a5/240da557ae7028d8f330be20f2aa2eaa.jpg",
      },
      {
        id: 3,
        title: "Cashback 10%",
        preview: "Dapatkan cashback setelah potong rambut.",
        image: "https://i.pinimg.com/736x/83/0b/c8/830bc82277ab18222c4f16baab33a1fc.jpg",
      },
      {
        id: 4,
        title: "Gratis Cuci Rambut",
        preview: "Untuk transaksi di atas Rp50.000.",
        image: "https://i.pinimg.com/736x/a5/4b/b9/a54bb9af5a47277b751afb4264a2c8fb.jpg",
      },
      {
        id: 5,
        title: "Refer a Friend",
        preview: "Ajak teman dan dapatkan bonus loyalty.",
        image: "https://i.pinimg.com/736x/b3/3d/0a/b33d0adc7e37ba4ffee20606363d8c64.jpg",
      },
      {
        id: 6,
        title: "Promo Ulang Tahun",
        preview: "Gratis layanan khusus di hari ulang tahunmu.",
        image: "https://i.pinimg.com/736x/2e/b2/7f/2eb27fdd31cc909ac444f85dfa2ee463.jpg",
      },
    ];

    setPromos(dummyPromos);
  }, []);

  const handleClaim = (title) => {
    alert(`Promo "${title}" berhasil diklaim! 🎉`);
  };

  return (
    <div className="p-6">
      {/* Banner Section */}
      <div
        className="rounded-2xl p-6 mb-8 flex items-center justify-between gap-6 shadow bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/d2/8b/25/d28b25918312c5cf18ea5aadd0130f6f.jpg')",
        }}
      >
        <div className="bg-white/70 p-4 rounded-xl">
          <h1 className="text-2xl md:text-3xl font-bold text-[#A47551] mb-2">Nikmati Promomu 🎉</h1>
          <p className="text-sm md:text-base text-gray-700 max-w-md">
            Dapatkan layanan lebih menarik hanya di V's Barbershop. Yuk, klaim sekarang sebelum kehabisan!
          </p>
        </div>
      </div>

      {/* Promo Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {promos.map((promo) => (
          <div
            key={promo.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-[#A47551] mb-1">
                {promo.title}
              </h2>
              <p className="text-sm text-gray-600 mb-3">{promo.preview}</p>
              <button
                onClick={() => handleClaim(promo.title)}
                className="w-full py-2 rounded-lg bg-[#A47551] text-white font-semibold hover:bg-[#8a5f3f] transition"
              >
                Klaim Promo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoDisplay;
