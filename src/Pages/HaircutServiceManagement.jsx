import React from "react";

const services = [
  {
    id: 1,
    nama: "Haircut",
    harga: "Rp 25.000",
    durasi: "30 menit",
  },
  {
    id: 2,
    nama: "Haircut + Wash",
    harga: "Rp 35.000",
    durasi: "45 menit",
  },
  {
    id: 3,
    nama: "Hair Spa",
    harga: "Rp 50.000",
    durasi: "60 menit",
  },
  {
    id: 4,
    nama: "Creambath",
    harga: "Rp 45.000",
    durasi: "50 menit",
  },
];

const HaircutServiceManagement = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Manajemen Layanan Potong Rambut</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-purple-100 text-left text-gray-700 text-sm">
              <th className="py-3 px-4 border-b">Nama Layanan</th>
              <th className="py-3 px-4 border-b">Harga</th>
              <th className="py-3 px-4 border-b">Durasi</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="hover:bg-gray-50 text-sm">
                <td className="py-3 px-4 border-b">{service.nama}</td>
                <td className="py-3 px-4 border-b">{service.harga}</td>
                <td className="py-3 px-4 border-b">{service.durasi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HaircutServiceManagement;
