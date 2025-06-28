// src/Pages/SFA/BookingHistory.jsx
import React from 'react';
import Card from '../../components/Card';

const dummyBookings = [
  {
    id: 1,
    name: 'Salwa',
    service: 'Potong Rambut',
    date: '2025-06-27',
    time: '13:00',
    capster: 'Adit',
  },
  {
    id: 2,
    name: 'Jojo',
    service: 'Cukur Jenggot',
    date: '2025-06-25',
    time: '15:30',
    capster: 'Dika',
  },
];

const BookingHistory = ({ isAdmin = false }) => {
  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-4">
      <h2 className="text-3xl font-bold text-[#8B5E3C] mb-6">
        🗂️ Histori Booking {isAdmin ? 'Semua Pengguna' : 'Anda'}
      </h2>

      {dummyBookings.map((item) => (
        <Card key={item.id} className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-[#5A4634]">👤 Nama:</span> {item.name}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-[#5A4634]">✂️ Layanan:</span> {item.service}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-[#5A4634]">📅 Tanggal:</span> {item.date}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-[#5A4634]">⏰ Jam:</span> {item.time}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-[#5A4634]">🧔 Capster:</span> {item.capster}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default BookingHistory;
