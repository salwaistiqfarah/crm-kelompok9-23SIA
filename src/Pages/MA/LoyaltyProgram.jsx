import React, { useState, useEffect } from "react";

// Simulasi data user (bisa diganti dari auth context atau API)
const currentUser = {
  name: "Jelly",
  role: "user", // ubah jadi "admin" untuk lihat tampilan admin
};

const LoyaltyProgram = () => {
  const [userRole, setUserRole] = useState("user"); // default "user"
  const [userPoints, setUserPoints] = useState(120); // contoh poin
  const pointHistory = [
    { id: 1, action: "Transaksi Rp50.000", change: "+5 poin", date: "2025-06-10" },
    { id: 2, action: "Tukar 100 poin - Diskon", change: "-100 poin", date: "2025-06-14" },
  ];

  useEffect(() => {
    // Simulasi ambil role user dari backend/context
    setUserRole(currentUser.role);
  }, []);

  const isAdmin = userRole === "admin";

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Program Loyalitas</h1>

      <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
        {!isAdmin ? (
          <>
            {/* --- USER VIEW --- */}
            <p className="text-gray-700 text-lg leading-relaxed">
              Dapatkan 1 poin untuk setiap transaksi Rp10.000. Tukarkan poin untuk diskon atau layanan gratis.
            </p>

            <div className="bg-indigo-100 rounded-xl p-4 text-indigo-800 font-semibold">
              Jumlah Poin Anda: {userPoints} poin
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Riwayat Poin</h2>
              <ul className="text-gray-700 space-y-1">
                {pointHistory.map((item) => (
                  <li key={item.id} className="flex justify-between border-b py-1">
                    <span>{item.action} ({item.date})</span>
                    <span className="font-medium">{item.change}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mt-6 mb-2">Reward yang Tersedia:</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>50 poin: Cuci rambut gratis</li>
                <li>100 poin: Diskon 30%</li>
                <li>150 poin: Potong rambut gratis</li>
              </ul>
            </div>
          </>
        ) : (
          <>
            {/* --- ADMIN VIEW --- */}
            <h2 className="text-lg font-semibold mb-2">Pengaturan Sistem Poin</h2>
            <ul className="text-gray-700 list-disc list-inside">
              <li>1 poin per transaksi Rp10.000</li>
              <li>Batas penukaran: minimal 50 poin</li>
              <li>Reward dapat dikonfigurasi via dashboard admin</li>
            </ul>

            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Monitoring Poin Pengguna</h2>
              <table className="w-full text-left text-sm text-gray-700 border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2">Nama</th>
                    <th className="px-4 py-2">Poin</th>
                    <th className="px-4 py-2">Terakhir Ditukar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">Budi</td>
                    <td className="px-4 py-2">120</td>
                    <td className="px-4 py-2">2025-06-14</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Sari</td>
                    <td className="px-4 py-2">60</td>
                    <td className="px-4 py-2">2025-06-11</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoyaltyProgram;