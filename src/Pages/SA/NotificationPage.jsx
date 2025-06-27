import React, { useState } from 'react';
import { Search } from 'lucide-react';

const initialNotifications = [
  {
    id: 1,
    type: 'order',
    name: 'Budi Santoso',
    avatar: 'https://i.pravatar.cc/150?img=11',
    message: 'Telah memesan layanan Cukur + Cuci',
    time: '10 menit yang lalu',
  },
  {
    id: 2,
    type: 'payment',
    name: 'Sari Oktaviani',
    avatar: 'https://i.pravatar.cc/150?img=12',
    message: 'Telah melakukan pembayaran Rp35.000',
    time: '8 menit yang lalu',
  },
  {
    id: 3,
    type: 'status',
    name: 'Andi Prakoso',
    avatar: 'https://i.pravatar.cc/150?img=13',
    message: 'Sedang dilayani oleh barber Rudi',
    time: '5 menit yang lalu',
  },
  {
    id: 4,
    type: 'invoice',
    name: 'Dodi Firmansyah',
    avatar: 'https://i.pravatar.cc/150?img=14',
    message: 'Telah dibuatkan tagihan layanan',
    time: '2 menit yang lalu',
  },
  {
    id: 5,
    type: 'cancel',
    name: 'Nina Ayu',
    avatar: 'https://i.pravatar.cc/150?img=15',
    message: 'Pesanannya dibatalkan oleh sistem',
    time: '1 menit yang lalu',
  },
];

const NotificationPage = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [search, setSearch] = useState('');

  const handleDelete = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const filtered = notifications.filter((n) =>
    n.name.toLowerCase().includes(search.toLowerCase()) ||
    n.message.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Custom Header */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold text-gray-800">BarberShop Notification</h1>
          <p className="text-sm text-gray-500">Pantau semua aktivitas pelanggan secara real-time</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Cari notifikasi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
      </div>

      {/* Notification List */}
      <div className="space-y-4">
        {filtered.length > 0 ? (
          filtered.map((notif) => (
            <div
              key={notif.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex items-center justify-between hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={notif.avatar}
                  alt={notif.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-gray-800 font-medium">
                    <span className="font-semibold">{notif.name}</span> - {notif.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                </div>
              </div>
              <span
                className="text-xs text-gray-400 hover:underline cursor-pointer"
                onClick={() => handleDelete(notif.id)}
              >
                hapus
              </span>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-400 py-10">
            Tidak ada notifikasi ditemukan.
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationPage;
