import React, { useState } from 'react';

const OrderBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data Pemesanan:', formData);
    alert('✅ Pemesanan berhasil!');
    setFormData({ name: '', service: '', date: '', time: '' });
  };

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Form Pemesanan Layanan</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Layanan</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          >
            <option value="">-- Pilih Layanan --</option>
            <option value="Potong Rambut">Potong Rambut</option>
            <option value="Cukur Jenggot">Cukur Jenggot</option>
            <option value="Hair Spa">Hair Spa</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tanggal</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Waktu</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Pesan Sekarang
        </button>
      </form>
    </main>
  );
};

export default OrderBooking;
