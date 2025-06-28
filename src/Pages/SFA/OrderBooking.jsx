import React, { useState } from 'react';

const OrderBooking = () => {
  const [form, setForm] = useState({
    name: '',
    service: '',
    date: '',
    time: '',
    capster: ''
  });

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', form);
    // Kirim data booking ke backend di sini
  };

  // Daftar capster (contoh)
  const capsterList = ['fatih', 'fajri', 'Rian', 'Fajar'];

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-[#8B5E3C]">📅 Booking Layanan</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">Nama Lengkap</label>
          <input
            id="name"
            type="text"
            placeholder="Masukkan nama"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-[#8B5E3C]/50"
          />
        </div>

        <div>
          <label htmlFor="service" className="block font-semibold mb-1">Pilih Layanan</label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => handleChange('service', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-[#8B5E3C]/50"
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
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-[#8B5E3C]/50"
          />
        </div>

        <div>
          <label htmlFor="time" className="block font-semibold mb-1">Jam</label>
          <input
            id="time"
            type="time"
            value={form.time}
            onChange={(e) => handleChange('time', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-[#8B5E3C]/50"
          />
        </div>

        <div>
          <label htmlFor="capster" className="block font-semibold mb-1">Pilih Capster</label>
          <select
            id="capster"
            value={form.capster}
            onChange={(e) => handleChange('capster', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-[#8B5E3C]/50"
          >
            <option value="">-- Pilih capster --</option>
            {capsterList.map((c, idx) => (
              <option key={idx} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#8B5E3C] text-white py-2 px-4 rounded-lg hover:bg-[#74492d] transition"
        >
          Booking Sekarang
        </button>
      </form>
    </div>
  );
};

export default OrderBooking;
