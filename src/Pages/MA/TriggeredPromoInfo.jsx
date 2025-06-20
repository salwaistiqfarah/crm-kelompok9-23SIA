import React from "react";

const TriggeredPromoInfo = () => {
  const triggeredPromos = [
    {
      id: 1,
      event: "Ulang Tahun",
      promo: "Gratis Creambath + Diskon 20%",
      description: "Berlaku di hari ulang tahun Anda",
    },
    {
      id: 2,
      event: "Transaksi ke-10",
      promo: "Potong rambut gratis",
      description: "Rayakan loyalitas Anda bersama kami!",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Promo Khusus Anda</h1>
      <div className="space-y-4">
        {triggeredPromos.map((item) => (
          <div key={item.id} className="bg-blue-50 border border-blue-200 rounded-2xl p-4 shadow">
            <h2 className="text-lg font-semibold text-blue-800">{item.event}</h2>
            <p className="text-blue-700">{item.promo}</p>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TriggeredPromoInfo;