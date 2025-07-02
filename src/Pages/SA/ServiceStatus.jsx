import React, { useState } from "react";
import { Hourglass, Scissors, CheckCircle, CalendarDays, Clock, History } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ServiceStatusAdmin = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'Budi', profilePic: 'https://i.pravatar.cc/150?img=11', service: 'Potong Rambut', barber: 'Fajar', date: new Date("2025-06-25T14:00:00"), status: 'Menunggu' },
    { id: 2, name: 'Andi', profilePic: 'https://i.pravatar.cc/150?img=13', service: 'Cukur Jenggot', barber: 'Agus', date: new Date("2025-06-25T15:00:00"), status: 'Dilayani' },
    { id: 3, name: 'Rian', profilePic: 'https://i.pravatar.cc/150?img=15', service: 'Cuci Rambut', barber: 'Dian', date: new Date("2025-06-25T16:30:00"), status: 'Selesai' },
    { id: 4, name: 'Bayu', profilePic: 'https://i.pravatar.cc/150?img=17', service: 'Potong Rambut', barber: 'Fajar', date: new Date("2025-07-01T10:00:00"), status: 'Menunggu' },
    { id: 5, name: 'Rizki', profilePic: 'https://i.pravatar.cc/150?img=18', service: 'Cukur Jenggot', barber: 'Agus', date: new Date("2025-07-01T11:00:00"), status: 'Menunggu' },
    { id: 6, name: 'Yoga', profilePic: 'https://i.pravatar.cc/150?img=19', service: 'Cuci Rambut', barber: 'Dian', date: new Date("2025-07-02T13:30:00"), status: 'Selesai' },
    { id: 7, name: 'Fikri', profilePic: 'https://i.pravatar.cc/150?img=20', service: 'Potong Rambut', barber: 'Fajar', date: new Date("2025-07-03T09:00:00"), status: 'Menunggu' },
    { id: 8, name: 'Teguh', profilePic: 'https://i.pravatar.cc/150?img=21', service: 'Cukur Jenggot', barber: 'Agus', date: new Date("2025-07-03T10:30:00"), status: 'Dilayani' },
    { id: 9, name: 'Ilham', profilePic: 'https://i.pravatar.cc/150?img=22', service: 'Cuci Rambut', barber: 'Dian', date: new Date("2025-07-03T15:00:00"), status: 'Menunggu' },
    { id: 10, name: 'Aldi', profilePic: 'https://i.pravatar.cc/150?img=23', service: 'Potong Rambut', barber: 'Fajar', date: new Date("2025-07-03T16:30:00"), status: 'Selesai' },
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleStatusUpdate = (id, newStatus) => {
    const updated = services.map(item => item.id === id ? { ...item, status: newStatus } : item);
    setServices(updated);
  };

  const renderStatusBadge = (status) => {
    switch (status) {
      case 'Menunggu':
        return <span className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium border border-yellow-300"><Hourglass size={16} /> Menunggu</span>;
      case 'Dilayani':
        return <span className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium border border-blue-300"><Scissors size={16} /> Dilayani</span>;
      case 'Selesai':
        return <span className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium border border-green-300"><CheckCircle size={16} /> Selesai</span>;
      default:
        return null;
    }
  };

  const filteredServices = services.filter(service => service.date.toDateString() === selectedDate.toDateString());

  return (
    <main className="p-8 bg-gradient-to-b from-[#fdf8f3] to-[#fffdf8] min-h-screen text-[#5A4634]">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-[#8B5E3C] flex items-center gap-2">🛠️ Status Layanan Pelanggan</h1>
        <p className="text-sm text-gray-500 mt-1">Kelola dan pantau status layanan berdasarkan tanggal dan waktu.</p>
      </header>

      <div className="mb-8 bg-white p-4 rounded-xl shadow-md border border-gray-200 w-fit">
        <label className="block text-sm text-gray-600 font-semibold mb-2 flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-[#8B5E3C]" /> Pilih Tanggal
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring focus:ring-[#8B5E3C]/30"
          calendarClassName="!bg-white !rounded-xl !shadow-lg"
          dayClassName={date => date.toDateString() === selectedDate.toDateString() ? "bg-[#8B5E3C] text-white rounded-full" : undefined}
        />
      </div>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-[#8B5E3C] flex items-center gap-2 mb-4">
          <History size={20} /> Riwayat Layanan: {selectedDate.toLocaleDateString()}
        </h2>
        {filteredServices.length === 0 ? (
          <p className="text-center text-gray-400 italic">Tidak ada layanan pada tanggal ini.</p>
        ) : (
          filteredServices.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center gap-4">
                <img src={item.profilePic} alt={item.name} className="w-12 h-12 rounded-full border border-[#8B5E3C] shadow-sm" />
                <div>
                  <h3 className="text-lg font-bold text-[#8B5E3C]">{item.name}</h3>
                  <p className="text-sm text-gray-700">✂️ Layanan: {item.service}</p>
                  <p className="text-sm text-gray-700">🧔 Capster: {item.barber}</p>
                  <p className="text-sm text-gray-700 flex items-center gap-1">
                    <Clock size={16} /> {item.date.toLocaleDateString()} - {item.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                {renderStatusBadge(item.status)}
                <select
                  value={item.status}
                  onChange={(e) => handleStatusUpdate(item.id, e.target.value)}
                  className="mt-1 border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 shadow-sm focus:ring focus:ring-[#8B5E3C]/30"
                >
                  <option value="Menunggu">Menunggu</option>
                  <option value="Dilayani">Dilayani</option>
                  <option value="Selesai">Selesai</option>
                </select>
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  );
};

export default ServiceStatusAdmin;
