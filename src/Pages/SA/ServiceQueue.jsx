import React, { useState } from "react";

const ServiceQueue = () => {
  const [queue, setQueue] = useState([
    { id: 1, name: 'Budi', service: 'Potong Rambut', status: 'Menunggu' },
    { id: 2, name: 'Sari', service: 'Cukur Jenggot', status: 'Dilayani' },
    { id: 3, name: 'Andi', service: 'Hair Spa', status: 'Selesai' }
  ]);

  const handleStatusChange = (id, newStatus) => {
    const updated = queue.map(item =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setQueue(updated);
  };

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manajemen Antrian Pelanggan</h1>
        <p className="text-sm text-gray-500 mt-1">Pantau dan ubah status layanan pelanggan di sini</p>
      </header>

      <section className="grid gap-5">
        {queue.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white p-5 rounded-xl shadow-sm border"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.service}</p>
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
                onChange={(e) => handleStatusChange(item.id, e.target.value)}
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

export default ServiceQueue;