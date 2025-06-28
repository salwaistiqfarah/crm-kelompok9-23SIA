import React from 'react';

const UserNotificationPage = () => {
  const notifications = [
    {
      id: 1,
      title: 'Pembayaran Anda Berhasil',
      message: 'Terima kasih, pembayaran layanan potong rambut sebesar Rp50.000 telah berhasil.',
      type: 'success',
      time: '2 jam lalu',
    },
    {
      id: 2,
      title: 'Layanan Siap Dilakukan',
      message: 'Reservasi Anda untuk tanggal 28 Juni 2025 pukul 14:00 telah dikonfirmasi.',
      type: 'info',
      time: '1 hari lalu',
    },
    {
      id: 3,
      title: 'Promo Hari Ini!',
      message: 'Diskon 10% untuk semua layanan hari ini! Berlaku hingga pukul 20.00.',
      type: 'promo',
      time: 'Hari ini',
    },
    {
      id: 4,
      title: 'Pembayaran Belum Diselesaikan',
      message: 'Layanan “Cukur + Cuci” senilai Rp70.000 belum dibayar. Segera selesaikan pembayaran Anda.',
      type: 'warning',
      time: '3 hari lalu',
    }
  ];

  const getColor = (type) => {
    switch (type) {
      case 'success': return 'bg-green-100 text-green-800 border-green-300';
      case 'warning': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'promo': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'info': return 'bg-blue-100 text-blue-800 border-blue-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <main className="min-h-screen bg-white p-6 text-[#5A4634]">
      <h1 className="text-3xl font-bold text-[#8B5E3C] mb-6">🔔 Notifikasi Anda</h1>

      <div className="space-y-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`border-l-4 p-4 rounded-xl shadow-sm border ${getColor(notif.type)} transition hover:scale-[1.01]`}
          >
            <h3 className="font-semibold text-lg">{notif.title}</h3>
            <p className="text-sm mt-1">{notif.message}</p>
            <p className="text-xs mt-2 text-gray-500">{notif.time}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default UserNotificationPage;
