// src/Pages/SFA/BookingHistory.jsx
import React from 'react';
import Card from '../../components/Card';

const dummyBookings = [
  { id: 1, name: 'Salwa', service: 'Potong Rambut', date: '2025-06-27', time: '13:00' },
  { id: 2, name: 'Jojo', service: 'Cukur Jenggot', date: '2025-06-25', time: '15:30' },
];

const BookingHistory = ({ isAdmin = false }) => {
  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Histori Booking {isAdmin ? 'Semua Pengguna' : 'Anda'}</h2>
      {dummyBookings.map((item) => (
        <Card key={item.id}>
          <p><strong>Nama:</strong> {item.name}</p>
          <p><strong>Layanan:</strong> {item.service}</p>
          <p><strong>Tanggal:</strong> {item.date}</p>
          <p><strong>Jam:</strong> {item.time}</p>
        </Card>
      ))}
    </div>
  );
};

export default BookingHistory;
