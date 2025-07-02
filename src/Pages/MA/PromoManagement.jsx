import React, { useState } from "react";
import { Gift, ChevronRight } from "lucide-react";
import TriggeredPromo from "./TriggeredPromo";

const PromoManagement = () => {
  const [showTriggered, setShowTriggered] = useState(false);

  const promos = [
    {
      id: 1,
      title: "Diskon 20% Pelajar",
      status: "Aktif",
      preview: "Diskon untuk pelajar aktif",
      startDate: "2025-07-01",
      endDate: "2025-07-15",
      type: "manual",
    },
    {
      id: 2,
      title: "Promo Akhir Pekan",
      status: "Aktif",
      preview: "Diskon akhir pekan untuk pelanggan loyal",
      startDate: "2025-07-06",
      endDate: "2025-07-07",
      type: "manual",
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-b from-[#fdf7f0] to-[#fefefe] min-h-screen space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#8C6239]">Manajemen Promo</h1>
          <p className="text-sm text-[#A1662F]">Atur dan tetapkan promo khusus untuk pelanggan terpilih.</p>
        </div>
        <button
          onClick={() => setShowTriggered(!showTriggered)}
          className="flex items-center gap-2 bg-[#A1662F] text-white px-4 py-2 rounded-md shadow hover:bg-[#8C6239] transition"
        >
          <Gift size={18} />
          Promo Otomatis
          <ChevronRight size={16} />
        </button>
      </div>

      {!showTriggered ? (
        <>
          <div className="grid md:grid-cols-2 gap-6">
            {promos.map((promo) => (
              <div key={promo.id} className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition border border-[#ebdccc]">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold text-[#A1662F]">{promo.title}</h2>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${promo.status === "Aktif" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                    {promo.status}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-2">{promo.preview}</p>
                <p className="text-xs text-gray-500">Periode: {promo.startDate} - {promo.endDate}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="bg-white p-6 rounded-xl shadow-xl border border-[#ebdccc]">
            <div className="flex items-center gap-3 mb-4">
              <Gift className="text-[#A1662F]" size={22} />
              <h2 className="text-xl font-bold text-[#A1662F]">Promo Otomatis Berdasarkan Loyalitas</h2>
            </div>
            <TriggeredPromo />
          </div>
        </>
      )}
    </div>
  );
};

export default PromoManagement;
