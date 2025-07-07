import React from 'react';
import Header from '../../components/Header';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { FaCalendarAlt } from 'react-icons/fa';

const bookingStats = [
  { day: 'Senin', bookings: 3 },
  { day: 'Selasa', bookings: 5 },
  { day: 'Rabu', bookings: 2 },
  { day: 'Kamis', bookings: 4 },
  { day: 'Jumat', bookings: 6 },
  { day: 'Sabtu', bookings: 1 },
  { day: 'Minggu', bookings: 0 },
];

const serviceData = [
  { name: 'Cukur Rambut', value: 45 },
  { name: 'Cukur + Cuci', value: 30 },
  { name: 'Hair Coloring', value: 15 },
  { name: 'Lainnya', value: 10 },
];

const COLORS = ['#A1887F', '#6D4C41', '#8D6E63', '#5D4037'];

const transactionHistory = [
  { id: 'TX001', name: 'Raka Pratama', service: 'Cukur + Cuci', amount: 35000, date: '2025-06-27', status: 'Completed' },
  { id: 'TX002', name: 'Andi Wijaya', service: 'Hair Coloring', amount: 75000, date: '2025-06-27', status: 'Pending' },
  { id: 'TX003', name: 'Dimas Aditya', service: 'Cukur Rambut', amount: 25000, date: '2025-06-26', status: 'Completed' },
  ...Array.from({ length: 51 }, (_, i) => {
    const names = ['Fajar', 'Reno', 'Budi', 'Adit', 'Raka Pratama', 'Dimas Aditya', 'Andi Wijaya', 'Reza Maulana', 'Yusuf Hidayat', 'Fikri Ananda'];
    const services = ['Cukur Rambut', 'Cukur + Cuci', 'Hair Coloring', 'Lainnya'];
    const statuses = ['Completed', 'Pending'];
    const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const randomAmount = Math.floor(Math.random() * (100000 - 20000 + 1)) + 20000;
    const randomDate = `2025-06-${String(Math.floor(Math.random() * 8) + 20).padStart(2, '0')}`;

    return {
      id: `TX${String(i + 4).padStart(3, '0')}`,
      name: random(names),
      service: random(services),
      amount: randomAmount,
      date: randomDate,
      status: random(statuses),
    };
  }),
];

const Dashboard = () => {
  return (
    <div className="bg-[#f9f7f5] min-h-screen">
      <Header />

      <div className="p-6 max-w-7xl mx-auto space-y-8 text-gray-800">
        <h1 className="text-4xl font-extrabold text-[#5D4037] text-center mb-4 drop-shadow-sm">BARBER STC</h1>

        <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h2 className="text-lg text-gray-600">Saldo Utama</h2>
            <h1 className="text-3xl font-bold text-[#388E3C] drop-shadow-md">Rp 12.430.000</h1>
            <p className="text-sm text-gray-400">Per 27 Juni 2025</p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#EFEBE9] p-4 rounded-2xl text-center shadow-md">
              <p className="text-xs text-gray-600">Pendapatan Mingguan</p>
              <p className="text-lg font-bold text-[#6D4C41]">Rp 3.200.000</p>
            </div>
            <div className="bg-[#D7CCC8] p-4 rounded-2xl text-center shadow-md">
              <p className="text-xs text-gray-600">Jumlah Booking</p>
              <p className="text-lg font-bold text-[#4E342E]">56 Booking</p>
            </div>
            <div className="bg-[#BCAAA4] p-4 rounded-2xl text-center shadow-md">
              <p className="text-xs text-gray-600">Layanan Terlaris</p>
              <p className="text-lg font-bold text-[#3E2723]">Cukur + Cuci</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-4">
            <h3 className="text-sm font-semibold mb-2">Statistik Booking Mingguan</h3>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={bookingStats}>
                <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                <YAxis hide />
                <Tooltip />
                <Bar dataKey="bookings" fill="#6D4C41" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4">
            <h3 className="text-sm font-semibold mb-2">Distribusi Layanan</h3>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={serviceData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                  labelLine={false}
                  label={({ name }) => name}
                >
                  {serviceData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4">
            <h3 className="text-sm font-semibold mb-2">Jadwal Hari Ini</h3>
            <ul className="text-sm space-y-1">
              <li><FaCalendarAlt className="inline mr-2 text-[#5D4037]" /> 10:00 - Fajar (Cukur)</li>
              <li><FaCalendarAlt className="inline mr-2 text-[#6D4C41]" /> 11:00 - Reno (Cat Rambut)</li>
              <li><FaCalendarAlt className="inline mr-2 text-[#8D6E63]" /> 13:00 - Budi (Paket Komplit)</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
          <h3 className="text-lg font-semibold mb-4">Riwayat Transaksi</h3>
          <table className="w-full text-sm min-w-[600px]">
            <thead className="text-left text-gray-500">
              <tr>
                <th>Nama</th>
                <th>Layanan</th>
                <th>Tanggal</th>
                <th>Jumlah</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {transactionHistory.map(tx => (
                <tr key={tx.id} className="border-t">
                  <td className="py-2 whitespace-nowrap">{tx.name}</td>
                  <td className="whitespace-nowrap">{tx.service}</td>
                  <td className="whitespace-nowrap">{tx.date}</td>
                  <td className="whitespace-nowrap">Rp {tx.amount.toLocaleString()}</td>
                  <td>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                      tx.status === 'Completed'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;