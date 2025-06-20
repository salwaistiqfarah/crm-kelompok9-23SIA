import React from 'react';

const NotificationPageUser = () => {
  const notifications = [
    { id: 1, message: 'Booking Anda untuk Hair Spa telah berhasil!', type: 'success', time: '1 jam yang lalu' },
    { id: 2, message: 'Pembayaran Anda sebesar Rp70.000 telah dikonfirmasi.', type: 'info', time: '2 jam yang lalu' },
    { id: 3, message: 'Layanan Anda sedang dalam proses.', type: 'warning', time: 'Hari ini, 09.00' },
  ];

  const typeColor = {
    success: 'bg-green-100 text-green-800',
    info: 'bg-blue-100 text-blue-800',
    warning: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Notifikasi Layanan</h1>
      <div className="space-y-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`p-4 rounded-xl shadow-md border ${typeColor[notif.type]} flex justify-between items-center`}
          >
            <div>
              <p className="font-medium">{notif.message}</p>
              <p className="text-xs mt-1 opacity-70">{notif.time}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default NotificationPageUser;
