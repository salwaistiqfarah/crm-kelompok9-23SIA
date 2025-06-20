import React, { useEffect, useState } from "react";

const PromoDisplay = () => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    const dummyPromos = [
      { id: 1, title: "Diskon 20% Pelajar", status: "Aktif", preview: "Detail promo pelajar" },
      { id: 2, title: "Promo Akhir Pekan", status: "Aktif", preview: "Diskon khusus weekend" },
      { id: 3, title: "Cashback 10%", status: "Aktif", preview: "Cashback setelah potong" },
      { id: 4, title: "Diskon Member Gold", status: "Nonaktif", preview: "Khusus pelanggan gold" },
      { id: 5, title: "Gratis Cuci Rambut", status: "Aktif", preview: "Untuk pemotongan di atas Rp50.000" },
      { id: 6, title: "Refer a Friend", status: "Aktif", preview: "Dapatkan poin jika ajak teman" },
      { id: 7, title: "Promo Ulang Tahun", status: "Aktif", preview: "Khusus pelanggan berulang tahun" },
      { id: 8, title: "Diskon Gopay", status: "Nonaktif", preview: "Bayar dengan Gopay, dapat diskon" },
      { id: 9, title: "Flash Sale Hari Ini", status: "Aktif", preview: "Promo terbatas hari ini" },
    ];

    const aktifOnly = dummyPromos.filter((promo) => promo.status === "Aktif");
    setPromos(aktifOnly);
  }, []);

  const handleClaim = (title) => {
    alert(`Promo "${title}" berhasil diklaim! 🎉`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Promo Tersedia</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {promos.map((promo) => (
          <div key={promo.id} className="bg-white p-4 shadow rounded-2xl">
            <h2 className="text-xl font-semibold">{promo.title}</h2>
            <p className="text-gray-600 mt-1">{promo.preview}</p>
            <span className="inline-block text-sm font-medium text-green-600 mt-2">{promo.status}</span>
            <button
              onClick={() => handleClaim(promo.title)}
              className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
            >
              Klaim Promo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoDisplay;