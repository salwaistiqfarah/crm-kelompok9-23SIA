import React from "react";
import { MdDone, MdSchedule, MdPayment, MdErrorOutline } from "react-icons/md";

const NotificationPageUser = () => {
  const notifications = [
    {
      id: 1,
      title: "Layanan Selesai",
      message: "Layanan Cukur Rambut kamu telah selesai. Terima kasih telah menggunakan layanan kami!",
      time: "5 menit yang lalu",
      type: "success",
    },
    {
      id: 2,
      title: "Pembayaran Berhasil",
      message: "Pembayaran sebesar Rp85.000 berhasil menggunakan GoPay.",
      time: "10 menit yang lalu",
      type: "payment",
    },
    {
      id: 3,
      title: "Jadwal Layanan Hari Ini",
      message: "Kamu memiliki jadwal layanan Cat Rambut pukul 14:00 WIB.",
      time: "Hari ini - 11:00",
      type: "schedule",
    },
    {
      id: 4,
      title: "Konfirmasi Manual",
      message: "Mohon upload bukti pembayaran untuk layanan Paket Komplit.",
      time: "Kemarin",
      type: "warning",
    },
  ];

  const iconMap = {
    success: <MdDone className="text-green-600 text-xl" />,
    payment: <MdPayment className="text-blue-600 text-xl" />,
    schedule: <MdSchedule className="text-purple-600 text-xl" />,
    warning: <MdErrorOutline className="text-yellow-600 text-xl" />,
  };

  return (
    <div className="p-6 bg-gradient-to-br from-[#fefefe] to-[#fff9f3] min-h-screen">
      <div className="bg-white rounded-2xl shadow-md p-6 border-l-8 border-[#ff9800] mb-6">
        <h1 className="text-2xl font-bold text-[#A47551] mb-2">Notifikasi Kamu 🔔</h1>
        <p className="text-sm text-gray-600">
          Lihat pembaruan terbaru tentang aktivitasmu di layanan kami.
        </p>
      </div>

      <div className="space-y-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="bg-white rounded-xl shadow flex items-start p-4 border-l-4 border-gray-200"
          >
            <div className="mr-4">{iconMap[notif.type]}</div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-800">{notif.title}</h3>
              <p className="text-sm text-gray-600">{notif.message}</p>
              <span className="text-xs text-gray-400">{notif.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPageUser;
