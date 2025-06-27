// src/Pages/SFA/OrderBooking.jsx
import React, { useState } from 'react';

const OrderBooking = () => {
  const [form, setForm] = useState({
    name: '',
    service: '',
    date: '',
    time: ''
  });

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', form);
    // Kirim data booking ke backend di sini
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6">Booking Layanan</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">Nama Lengkap</label>
          <input
            id="name"
            type="text"
            placeholder="Masukkan nama"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="service" className="block font-semibold mb-1">Pilih Layanan</label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => handleChange('service', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
          >
            <option value="">-- Pilih layanan --</option>
            <option value="potong">Potong Rambut</option>
            <option value="cukur">Cukur Jenggot</option>
            <option value="paket">Paket Grooming</option>
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block font-semibold mb-1">Tanggal</label>
          <input
            id="date"
            type="date"
            value={form.date}
            onChange={(e) => handleChange('date', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="time" className="block font-semibold mb-1">Jam</label>
          <input
            id="time"
            type="time"
            value={form.time}
            onChange={(e) => handleChange('time', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Booking Sekarang
        </button>
      </form>
    </div>
  );
};

export default OrderBooking;
