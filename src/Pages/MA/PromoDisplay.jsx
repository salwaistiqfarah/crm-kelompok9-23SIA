import React, { useEffect, useState } from "react";
import { FaGift, FaTag, FaStar, FaBolt, FaUserFriends } from "react-icons/fa";

const PromoDisplay = () => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    const dummyPromos = [
      {
        id: 1,
        title: "Diskon 20% Pelajar",
        preview: "Tunjukkan kartu pelajar dan dapatkan diskon!",
        icon: <FaTag className="text-pink-500" />,
        image: "https://i.pinimg.com/736x/b4/f3/37/b4f33726fec60de995173ac1f8b7fccd.jpg",
      },
      {
        id: 2,
        title: "Promo Akhir Pekan",
        preview: "Nikmati potongan harga setiap akhir pekan!",
        icon: <FaStar className="text-yellow-500" />,
        image: "https://i.pinimg.com/736x/24/0d/a5/240da557ae7028d8f330be20f2aa2eaa.jpg",
      },
      {
        id: 3,
        title: "Cashback 10%",
        preview: "Dapatkan cashback setelah potong rambut.",
        icon: <FaBolt className="text-blue-500" />,
        image: "https://i.pinimg.com/736x/83/0b/c8/830bc82277ab18222c4f16baab33a1fc.jpg",
      },
      {
        id: 4,
        title: "Gratis Cuci Rambut",
        preview: "Untuk transaksi di atas Rp50.000.",
        icon: <FaGift className="text-green-500" />,
        image: "https://i.pinimg.com/736x/a5/4b/b9/a54bb9af5a47277b751afb4264a2c8fb.jpg",
      },
      {
        id: 5,
        title: "Refer a Friend",
        preview: "Ajak teman dan dapatkan bonus loyalty.",
        icon: <FaUserFriends className="text-purple-500" />,
        image: "https://i.pinimg.com/736x/b3/3d/0a/b33d0adc7e37ba4ffee20606363d8c64.jpg",
      },
      {
        id: 6,
        title: "Promo Ulang Tahun",
        preview: "Gratis layanan khusus di hari ulang tahunmu.",
        icon: <FaGift className="text-red-500" />,
        image: "https://i.pinimg.com/736x/2e/b2/7f/2eb27fdd31cc909ac444f85dfa2ee463.jpg",
      },
    ];

    setPromos(dummyPromos);
  }, []);

  const handleClaim = (title) => {
    alert(`Promo "${title}" berhasil diklaim! 🎉`);
  };

  return (
    <div className="p-6 bg-white">
      {/* Banner Section */}
      <div className="rounded-2xl p-6 mb-10 flex items-center justify-between gap-6 shadow-xl bg-gradient-to-r from-[#fff8f1] via-[#fbeee1] to-[#fef6ed]">
        <div className="p-5 rounded-xl max-w-2xl shadow-md bg-white/80">
          <h1 className="text-3xl md:text-4xl font-bold text-[#5B4636] mb-3">✨ Promo Eksklusif untuk Kamu</h1>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            Dapatkan berbagai layanan menarik hanya di STC Barbershop. Klaim promomu dan tampil lebih percaya diri setiap hari!
          </p>
          <p className="text-xs text-gray-500 italic">* Promo berlaku terbatas & syarat ketentuan berlaku</p>
        </div>
      </div>

      {/* Promo Grid */}
      <h2 className="text-2xl font-bold text-center text-[#5B4636] mb-8">🎁 Penawaran Spesial Minggu Ini</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {promos.map((promo) => (
          <div
            key={promo.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-[#f0e6dd]"
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-2 text-[#5B4636] font-semibold">
                {promo.icon}
                <h2 className="text-lg">{promo.title}</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4 flex-grow">{promo.preview}</p>
              <button
                onClick={() => handleClaim(promo.title)}
                className="mt-auto py-2 rounded-lg bg-[#A47551] text-white font-semibold hover:bg-[#8a5f3f] transition shadow"
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
