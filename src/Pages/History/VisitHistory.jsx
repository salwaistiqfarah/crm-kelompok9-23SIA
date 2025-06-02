import React, { useState } from "react";

const initialHistory = [
  {
    id: 1,
    date: "2025-06-01",
    customer: "Rizky Pratama",
    service: "Potong Rambut",
    mediaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRen3WESx7rXkU5gz74-rvfpPLdUlCf2fAVMQ&s",
  },
  {
    id: 2,
    date: "2025-05-28",
    customer: "Dewi Larasati",
    service: "Cukur Jenggot",
    mediaUrl: "https://media.istockphoto.com/id/1266590027/id/foto/wajah-laki-laki-dengan-hasil-cukur.jpg?s=612x612&w=0&k=20&c=-NhEcP6X2kSVOcHY3_B_-sVv8nJ1la3F10wNci7rVGs=",
  },
  {
    id: 3,
    date: "2025-05-20",
    customer: "Fajar Nugroho",
    service: "Cuci Rambut",
    mediaUrl: "https://img.freepik.com/free-photo/young-man-barbershop-trimming-hair_1303-26220.jpg",
  },
  {
    id: 4,
    date: "2025-05-10",
    customer: "Ayu Kurnia",
    service: "Hair Spa",
    mediaUrl: "https://img.freepik.com/free-photo/woman-getting-hair-spa_1303-2562.jpg",
  },
  {
    id: 5,
    date: "2025-05-05",
    customer: "Dian Permana",
    service: "Creambath",
    mediaUrl: "https://img.freepik.com/free-photo/hairdresser-applying-cream-hair-young-woman_1303-26222.jpg",
  },
];

export default function VisitHistory() {
  const [history, setHistory] = useState(initialHistory);

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus riwayat ini?")) {
      setHistory(history.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Riwayat Kunjungan Pelanggan</h1>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase">Tanggal</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase">Nama Pelanggan</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase">Layanan</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600 uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {history.map(({ id, date, customer, service }) => (
              <tr key={id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{service}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button
                    onClick={() => handleDelete(id)}
                    className="text-red-600 hover:text-red-900 font-medium"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {history.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  Tidak ada riwayat kunjungan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}