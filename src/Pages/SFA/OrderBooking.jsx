import React, { useState } from 'react';
import logoBarber from '../../assets/logobarber.jpg';

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

  const capsterList = ['Fatih', 'Fajri', 'Rian', 'Fajar'];
  const layananList = ['Potong Rambut', 'Cukur Jenggot', 'Paket Grooming'];

  return (
    <div className="bg-cover bg-center py-12 px-4 min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517048676732-d65bc937f952)' }}>
      <div className="max-w-3xl mx-auto bg-white bg-opacity-90 shadow-2xl rounded-xl p-10 relative">
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <img
            src={logoBarber}
            alt="Logo Barber"
            className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>

        <h2 className="text-3xl font-bold text-center text-[#5B4636] mt-20 mb-8">Form Booking Layanan</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block font-semibold text-gray-700 mb-2">Nama Lengkap</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Masukkan nama lengkap"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8B5E3C] outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="service" className="block font-semibold text-gray-700 mb-2">Jenis Layanan</label>
              <select
                id="service"
                value={form.service}
                onChange={(e) => handleChange('service', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8B5E3C] outline-none"
                required
              >
                <option value="">-- Pilih layanan --</option>
                {layananList.map((service, idx) => (
                  <option key={idx} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block font-semibold text-gray-700 mb-2">Tanggal</label>
              <input
                id="date"
                type="date"
                value={form.date}
                onChange={(e) => handleChange('date', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8B5E3C] outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="time" className="block font-semibold text-gray-700 mb-2">Jam</label>
              <input
                id="time"
                type="time"
                value={form.time}
                onChange={(e) => handleChange('time', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8B5E3C] outline-none"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="capster" className="block font-semibold text-gray-700 mb-2">Pilih Capster</label>
              <select
                id="capster"
                value={form.capster}
                onChange={(e) => handleChange('capster', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8B5E3C] outline-none"
                required
              >
                <option value="">-- Pilih capster --</option>
                {capsterList.map((c, idx) => (
                  <option key={idx} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#8B5E3C] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#74492d] transition"
          >
            Booking Sekarang
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderBooking;