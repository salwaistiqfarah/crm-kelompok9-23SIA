import React, { useState } from "react";

const ServiceStatus = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'Budi', service: 'Potong Rambut', barber: 'Fajar', status: 'Menunggu' },
    { id: 2, name: 'Sari', service: 'Cukur Jenggot', barber: 'Agus', status: 'Dilayani' },
    { id: 3, name: 'Andi', service: 'Hair Spa', barber: 'Rudi', status: 'Selesai' }
  ]);

  const handleStatusUpdate = (id, newStatus) => {
    const updated = services.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setServices(updated);
  };

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Status Layanan Pelanggan</h1>
        <p className="text-sm text-gray-500 mt-1">Pantau siapa yang sedang menangani pelanggan dan ubah status jika diperlukan</p>
      </header>

      <section className="grid gap-5">
        {services.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white p-5 rounded-xl shadow-sm border"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">Layanan: {item.service}</p>
              <p className="text-sm text-gray-500">Barber: {item.barber}</p>
            </div>

            <div className="flex items-center gap-4">
              <span className={`text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide
                ${item.status === 'Menunggu' ? 'bg-yellow-200 text-yellow-800' :
                  item.status === 'Dilayani' ? 'bg-blue-200 text-blue-800' :
                  'bg-green-200 text-green-800'}`}
              >
                {item.status}
              </span>
              <select
                value={item.status}
                onChange={(e) => handleStatusUpdate(item.id, e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 shadow-sm focus:ring focus:ring-blue-200"
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

export default ServiceStatus;