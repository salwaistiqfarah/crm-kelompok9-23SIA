import React, { useState } from "react";
import { Users, Scissors, Loader, CheckCircle, Menu } from "lucide-react";

const ServiceQueue = () => {
  const [queue] = useState([
    { id: 1, name: 'Budi', avatar: 'https://i.pravatar.cc/150?img=1', service: 'Potong Rambut', status: 'Menunggu' },
    { id: 2, name: 'Sari', avatar: 'https://i.pravatar.cc/150?img=2', service: 'Cukur Jenggot', status: 'Dilayani' },
    { id: 3, name: 'Andi', avatar: 'https://i.pravatar.cc/150?img=3', service: 'Hair Spa', status: 'Selesai' },
    { id: 4, name: 'Rani', avatar: 'https://i.pravatar.cc/150?img=4', service: 'Potong Rambut', status: 'Menunggu' },
    { id: 5, name: 'Doni', avatar: 'https://i.pravatar.cc/150?img=5', service: 'Hair Coloring', status: 'Dilayani' },
    { id: 6, name: 'Lia', avatar: 'https://i.pravatar.cc/150?img=6', service: 'Hair Spa', status: 'Selesai' }
  ]);

  const [showSidebar, setShowSidebar] = useState(false);

  const statusStyles = {
    Menunggu: "bg-yellow-100 text-yellow-800",
    Dilayani: "bg-blue-100 text-blue-800",
    Selesai: "bg-green-100 text-green-800",
  };

  const statusIcon = {
    Menunggu: <Loader className="w-4 h-4 mr-1 animate-spin" />,
    Dilayani: <Scissors className="w-4 h-4 mr-1" />,
    Selesai: <CheckCircle className="w-4 h-4 mr-1" />,
  };

  const countStatus = (status) => queue.filter(item => item.status === status).length;

  const handleMainClick = () => {
    if (showSidebar) setShowSidebar(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fdf8f3] to-[#fffdf8] p-8 relative" onClick={handleMainClick}>
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="bg-[#A1662F] text-white p-4 rounded-xl shadow-lg">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#A1662F]">Manajemen Antrian Layanan</h1>
            <p className="text-sm text-gray-600">Kelola dan pantau status layanan pelanggan berdasarkan pemesanan.</p>
          </div>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); setShowSidebar(!showSidebar); }}
          className="text-[#A1662F] hover:text-[#7b4c28] transition"
          title="Riwayat Layanan"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-4 rounded-xl shadow-md border border-[#eee2d0]">
          <p className="text-sm text-gray-500">Total Antrian</p>
          <h3 className="text-2xl font-bold text-[#5B3710]">{queue.length}</h3>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md border border-[#eee2d0]">
          <p className="text-sm text-yellow-600">Menunggu</p>
          <h3 className="text-xl font-bold text-yellow-600">{countStatus('Menunggu')}</h3>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md border border-[#eee2d0]">
          <p className="text-sm text-blue-600">Dilayani</p>
          <h3 className="text-xl font-bold text-blue-600">{countStatus('Dilayani')}</h3>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md border border-[#eee2d0]">
          <p className="text-sm text-green-600">Selesai</p>
          <h3 className="text-xl font-bold text-green-600">{countStatus('Selesai')}</h3>
        </div>
      </div>

      {/* Queue List */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {queue.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-xl border border-[#eee2d0] p-6 flex flex-col justify-between hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border" />
              <div>
                <h3 className="text-lg font-semibold text-[#5C3B1E]">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.service}</p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-2">
              <span
                className={`flex items-center text-xs font-medium px-3 py-1 rounded-full ${statusStyles[item.status]}`}
              >
                {statusIcon[item.status]} {item.status}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Sidebar Panel */}
      {showSidebar && (
        <div
          className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl p-6 z-50 border-l border-[#eee2d0] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-bold text-[#A1662F] mb-4">Riwayat Layanan</h2>
          <ul className="space-y-4 text-sm text-gray-700">
            <li>
              <strong>Budi:</strong> Potong Rambut — 28 Juni 2025
            </li>
            <li>
              <strong>Sari:</strong> Cukur Jenggot — 27 Juni 2025
            </li>
            <li>
              <strong>Andi:</strong> Hair Spa — 25 Juni 2025
            </li>
            <li>
              <strong>Lia:</strong> Hair Spa — 24 Juni 2025
            </li>
            <li>
              <strong>Rani:</strong> Potong Rambut — 22 Juni 2025
            </li>
          </ul>
        </div>
      )}
    </main>
  );
};

export default ServiceQueue;
