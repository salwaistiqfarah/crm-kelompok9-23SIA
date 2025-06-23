import React from 'react';

const NotificationPage = () => {
  const notifications = [
    { message: 'Pesanan Budi telah berhasil dibooking.', type: 'booking', time: '10 menit yang lalu' },
    { message: 'Pembayaran Sari telah lunas.', type: 'payment', time: '8 menit yang lalu' },
    { message: 'Andi sedang dilayani oleh barber Rudi.', type: 'status', time: '5 menit yang lalu' },
    { message: 'Tagihan baru dibuat untuk pelanggan Dodi.', type: 'invoice', time: '1 menit yang lalu' }
  ];

  const getTypeStyle = (type) => {
    switch (type) {
      case 'booking': return 'bg-blue-50 border-blue-200 text-blue-900';
      case 'payment': return 'bg-green-50 border-green-200 text-green-900';
      case 'status': return 'bg-yellow-50 border-yellow-200 text-yellow-900';
      case 'invoice': return 'bg-purple-50 border-purple-200 text-purple-900';
      default: return 'bg-gray-50 border-gray-200 text-gray-900';
    }
  };

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Notifikasi Layanan</h1>
        <p className="text-sm text-gray-500 mt-1">Lihat semua aktivitas terbaru dari pelanggan dan status layanan</p>
      </header>

      <section className="space-y-3">
        {notifications.map((notif, index) => (
          <div
            key={index}
            className={`border p-4 rounded-xl shadow-sm ${getTypeStyle(notif.type)}`}
          >
            <p className="text-sm font-medium">{notif.message}</p>
            <p className="text-xs text-gray-500">{notif.time}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default NotificationPage;