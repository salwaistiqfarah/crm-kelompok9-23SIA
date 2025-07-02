// src/Pages/SFA/BookingHistory.jsx
import React from 'react';
import Card from '../../components/Card';

const dummyBookings = [
  {
    id: 1,
    name: 'Rudi',
    avatar: 'https://i.pravatar.cc/150?img=31',
    service: 'Potong Rambut',
    date: '2025-06-27',
    time: '13:00',
    capster: 'Adit',
    submittedAt: '2025-06-24 10:30',
    status: 'Selesai',
  },
  {
    id: 2,
    name: 'Jojo',
    avatar: 'https://i.pravatar.cc/150?img=32',
    service: 'Cukur Jenggot',
    date: '2025-06-25',
    time: '15:30',
    capster: 'Dika',
    submittedAt: '2025-06-22 11:15',
    status: 'Selesai',
  },
  {
    id: 3,
    name: 'Bayu',
    avatar: 'https://i.pravatar.cc/150?img=35',
    service: 'Cuci Rambut',
    date: '2025-06-20',
    time: '10:00',
    capster: 'Dian',
    submittedAt: '2025-06-18 09:00',
    status: 'Selesai',
  },
  {
    id: 4,
    name: 'Fikri',
    avatar: 'https://i.pravatar.cc/150?img=36',
    service: 'Potong Rambut',
    date: '2025-06-18',
    time: '16:30',
    capster: 'Fajar',
    submittedAt: '2025-06-15 13:45',
    status: 'Selesai',
  },
];

const BookingHistory = ({ isAdmin = false }) => {
  return (
    <div className="w-full px-6 mt-10 space-y-6">
      <h2 className="text-3xl font-bold text-[#8B5E3C] mb-4 flex items-center gap-2">
        🗂️ Histori Booking {isAdmin ? 'Semua Pengguna' : 'Anda'}
      </h2>

      {dummyBookings.map((item) => (
        <Card
          key={item.id}
          className="flex flex-row items-center gap-6 border border-gray-200 rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition w-full"
        >
          <img
            src={item.avatar}
            alt={item.name}
            className="w-20 h-20 rounded-full border border-[#8B5E3C] shadow-sm"
          />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
            <div className="space-y-1 text-sm text-gray-700">
              <h3 className="text-lg font-semibold text-[#5A4634]">{item.name} <span className="text-sm text-gray-400">(ID #{item.id})</span></h3>
              <p>📝 <span className="font-medium text-[#5A4634]">Diajukan:</span> {item.submittedAt}</p>
              <p>✂️ <span className="font-medium text-[#5A4634]">{item.service}</span></p>
              <p>📅 <span className="font-medium text-[#5A4634]">{item.date}</span> — ⏰{' '}
                <span className="text-[#5A4634] font-medium">{item.time}</span>
              </p>
              <p>🧔 Capster: <span className="font-medium text-[#5A4634]">{item.capster}</span></p>
            </div>

            <div className="mt-4 sm:mt-0 sm:text-right">
              <p className="text-sm text-green-600 font-semibold">✅ Status: {item.status}</p>
            </div>
          </div>
        </Card>
      ))}

      {dummyBookings.length === 0 && (
        <p className="text-center text-gray-500 italic mt-10">Belum ada histori booking.</p>
      )}
    </div>
  );
};

export default BookingHistory;
