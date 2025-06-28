import React, { useState } from "react";
import { Hourglass, Scissors, CheckCircle } from "lucide-react";

const ServiceStatusAdmin = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Budi',
      service: 'Potong Rambut',
      barber: 'Fajar',
      date: '2025-06-28',
      time: '14:00',
      status: 'Menunggu'
    },
    {
      id: 2,
      name: 'Sari',
      service: 'Cukur Jenggot',
      barber: 'Agus',
      date: '2025-06-28',
      time: '15:00',
      status: 'Dilayani'
    },
    {
      id: 3,
      name: 'Andi',
      service: 'Hair Spa',
      barber: 'Rudi',
      date: '2025-06-28',
      time: '15:30',
      status: 'Selesai'
    }
  ]);

  const handleStatusUpdate = (id, newStatus) => {
    const updated = services.map(item =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setServices(updated);
  };

  const renderStatusBadge = (status) => {
    switch (status) {
      case 'Menunggu':
        return (
          <span className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium border border-yellow-300">
            <Hourglass size={16} /> Menunggu
          </span>
        );
      case 'Dilayani':
        return (
          <span className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium border border-blue-300">
            <Scissors size={16} /> Dilayani
          </span>
        );
      case 'Selesai':
        return (
          <span className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium border border-green-300">
            <CheckCircle size={16} /> Selesai
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <main className="p-8 bg-white min-h-screen text-[#5A4634]">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-[#8B5E3C]">🛠️ Status Layanan Pelanggan</h1>
        <p className="text-sm text-gray-500 mt-1">
         
        </p>
      </header>

      <section className="space-y-5">
        {services.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-gray-50 p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            <div>
              <h3 className="text-lg font-bold text-[#8B5E3C]">{item.name}</h3>
              <p className="text-sm text-gray-700">✂️ Layanan: {item.service}</p>
              <p className="text-sm text-gray-700">🧔 Capster: {item.barber}</p>
              <p className="text-sm text-gray-700">📅 {item.date} ⏰ {item.time}</p>
            </div>

            <div className="flex flex-col items-end gap-2">
              {renderStatusBadge(item.status)}

              <select
                value={item.status}
                onChange={(e) => handleStatusUpdate(item.id, e.target.value)}
                className="mt-1 border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 shadow-sm focus:ring focus:ring-[#8B5E3C]/30"
              >
                <option value="Menunggu">Menunggu</option>
                <option value="Dilayani">Dilayani</option>
                <option value="Selesai">Selesai</option>
              </select>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default ServiceStatusAdmin;
