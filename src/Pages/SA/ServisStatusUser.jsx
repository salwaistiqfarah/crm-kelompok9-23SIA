import React from 'react';
import { CheckCircle, Hourglass, Scissors } from 'lucide-react';

const ServisStatusUser = () => {
  const services = [
    {
      name: 'Budi',
      service: 'Potong Rambut',
      status: 'Menunggu',
      barber: 'Adit',
      waktu: '28 Juni 2025, 14:00',
      progress: 0,
    },
    {
      name: 'Sari',
      service: 'Cukur Jenggot',
      status: 'Dilayani',
      barber: 'Dika',
      waktu: '28 Juni 2025, 14:30',
      progress: 50,
    },
    {
      name: 'Andi',
      service: 'Hair Spa',
      status: 'Selesai',
      barber: 'Rio',
      waktu: '28 Juni 2025, 15:00',
      progress: 100,
    }
  ];

  const renderStatus = (status) => {
    switch (status) {
      case 'Menunggu':
        return (
          <span className="flex items-center gap-2 bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full border border-yellow-300 shadow-sm w-fit mt-2">
            <Hourglass size={16} /> Menunggu
          </span>
        );
      case 'Dilayani':
        return (
          <span className="flex items-center gap-2 bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full border border-blue-300 shadow-sm w-fit mt-2">
            <Scissors size={16} /> Dilayani
          </span>
        );
      case 'Selesai':
        return (
          <span className="flex items-center gap-2 bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full border border-green-300 shadow-sm w-fit mt-2">
            <CheckCircle size={16} /> Selesai
          </span>
        );
      default:
        return null;
    }
  };

  const renderProgressBar = (progress) => (
    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
      <div
        className="bg-[#8B5E3C] h-2 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );

  return (
    <main className="p-8 bg-white min-h-screen text-[#5A4634]">
      <h1 className="text-3xl font-bold text-[#8B5E3C] mb-6">📋 Status Layanan Anda</h1>
      <p className="text-sm text-gray-500 mb-8">Pantau progres layanan yang sedang Anda nikmati di barbershop kami.</p>

      <div className="space-y-5">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition"
          >
            <p className="text-lg font-semibold text-[#8B5E3C]">{item.name}</p>
            <p className="text-sm text-gray-600">✂️ Layanan: {item.service}</p>
            <p className="text-sm text-gray-600">📅 Jadwal: {item.waktu}</p>
            <p className="text-sm text-gray-600">🧔 Barber: {item.barber}</p>

            {renderStatus(item.status)}
            {renderProgressBar(item.progress)}
          </div>
        ))}
      </div>
    </main>
  );
};

export default ServisStatusUser;
