import React, { useState } from 'react';

const OrderBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: '',
    time: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      alert('✅ Pemesanan berhasil!');
      setFormData({ name: '', service: '', date: '', time: '' });
      setSubmitted(false);
    }, 300);
  };

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Form Pemesanan Layanan</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto space-y-4"
      >
        {/* Input Nama */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-300"
            placeholder="Nama Lengkap"
          />
        </div>

        {/* Pilih Layanan */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Layanan</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-300"
          >
            <option value="">-- Pilih Layanan --</option>
            <option value="Potong Rambut">Potong Rambut</option>
            <option value="Cukur Jenggot">Cukur Jenggot</option>
            <option value="Hair Spa">Hair Spa</option>
          </select>
        </div>

        {/* Tanggal */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Tanggal</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Waktu */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Waktu</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Ringkasan Pemesanan */}
        {submitted && (
          <div className="p-4 bg-blue-50 text-sm rounded-md border border-blue-200 text-blue-800">
            <p className="font-semibold mb-1">Ringkasan Pemesanan:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Nama:</strong> {formData.name}</li>
              <li><strong>Layanan:</strong> {formData.service}</li>
              <li><strong>Tanggal:</strong> {formData.date}</li>
              <li><strong>Waktu:</strong> {formData.time}</li>
            </ul>
          </div>
        )}

        {/* Tombol Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-semibold"
        >
          Pesan Sekarang
        </button>
      </form>

      {/* Jadwal Tersedia (Optional Dummy View) */}
      <div className="mt-10 max-w-md mx-auto bg-white p-4 rounded-xl shadow">
        <h2 className="text-sm font-semibold mb-2 text-gray-700">📅 Jadwal Tersedia Hari Ini</h2>
        <div className="grid grid-cols-3 gap-2 text-xs text-center">
          <span className="bg-green-100 text-green-800 py-1 rounded">10:00</span>
          <span className="bg-green-100 text-green-800 py-1 rounded">11:00</span>
          <span className="bg-yellow-100 text-yellow-800 py-1 rounded">13:00</span>
          <span className="bg-yellow-100 text-yellow-800 py-1 rounded">14:00</span>
          <span className="bg-red-100 text-red-800 py-1 rounded line-through">15:00</span>
          <span className="bg-green-100 text-green-800 py-1 rounded">16:00</span>
        </div>
      </div>
    </main>
  );
};

export default OrderBooking;
