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
  { name: 'Cukur Rambut', value: 40 },
  { name: 'Cukur + Cuci', value: 25 },
  { name: 'Cukur + Pijat', value: 15 },
  { name: 'Hair Coloring', value: 10 },
  { name: 'Lainnya', value: 10 },
];

const COLORS = ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#00CFE8'];

const transactionHistory = [
  {
    id: 'TX001',
    name: 'Raka Pratama',
    service: 'Cukur + Cuci',
    amount: 35000,
    date: '2025-06-27',
    status: 'Completed',
  },
  {
    id: 'TX002',
    name: 'Salsabila',
    service: 'Hair Coloring',
    amount: 75000,
    date: '2025-06-27',
    status: 'Pending',
  },
  {
    id: 'TX003',
    name: 'Dimas Aditya',
    service: 'Cukur Rambut',
    amount: 25000,
    date: '2025-06-26',
    status: 'Completed',
  },
];

const Dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HEADER */}
      <Header />

      {/* KONTEN DASHBOARD */}
      <div className="p-6 max-w-7xl mx-auto space-y-8 text-gray-800">
        {/* Balance Info */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h2 className="text-lg text-gray-500">Saldo Utama</h2>
            <h1 className="text-3xl font-bold text-[#7367F0]">Rp 12.430.000</h1>
            <p className="text-sm text-gray-400">Per 27 Juni 2025</p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <p className="text-xs text-gray-500">Pendapatan Mingguan</p>
              <p className="text-lg font-bold text-[#28C76F]">Rp 3.200.000</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <p className="text-xs text-gray-500">Jumlah Booking</p>
              <p className="text-lg font-bold text-[#00CFE8]">56 Booking</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <p className="text-xs text-gray-500">Layanan Terlaris</p>
              <p className="text-lg font-bold text-[#EA5455]">Cukur + Cuci</p>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Chart Booking */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-sm font-semibold mb-2">Statistik Booking Mingguan</h3>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={bookingStats}>
                <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                <YAxis hide />
                <Tooltip />
                <Bar dataKey="bookings" fill="#7367F0" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Chart Service */}
          <div className="bg-white rounded-xl shadow p-4">
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

          {/* Jadwal Ringkas */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-sm font-semibold mb-2">Jadwal Hari Ini</h3>
            <ul className="text-sm space-y-1">
              <li><FaCalendarAlt className="inline mr-2 text-purple-500" /> 10:00 - Fajar (Cukur)</li>
              <li><FaCalendarAlt className="inline mr-2 text-green-500" /> 11:00 - Sari (Cat Rambut)</li>
              <li><FaCalendarAlt className="inline mr-2 text-yellow-500" /> 13:00 - Reno (Paket Komplit)</li>
            </ul>
          </div>
        </div>

        {/* Riwayat Transaksi */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Riwayat Transaksi</h3>
          <table className="w-full text-sm">
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
                  <td className="py-2">{tx.name}</td>
                  <td>{tx.service}</td>
                  <td>{tx.date}</td>
                  <td>Rp {tx.amount.toLocaleString()}</td>
                  <td>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
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
