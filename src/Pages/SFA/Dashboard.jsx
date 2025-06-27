import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

const Dashboard = () => {
  const stats = [
    { label: "Pendapatan Hari Ini", value: "$53,000", percent: "+55%", color: "green" },
    { label: "Pengguna Hari Ini", value: "2,300", percent: "+3%", color: "blue" },
    { label: "Klien Baru", value: "+3,462", percent: "-2%", color: "red" },
    { label: "Penjualan", value: "$103,430", percent: "+5%", color: "purple" },
  ]

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "Penjualan (ribu $)",
        data: [12, 19, 14, 17, 22, 30, 28, 26, 32, 35, 40, 45],
        backgroundColor: "rgba(99, 102, 241, 0.7)",
      },
    ],
  }

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Penjualan Bulanan Tahun Ini' },
    },
  }

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "Jumlah Pelanggan",
        data: [50, 75, 120, 180, 220, 260, 300, 350, 400, 430, 460, 500],
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: "rgba(59, 130, 246, 0.3)",
        fill: true,
        tension: 0.3,
        pointRadius: 4,
      },
    ],
  }

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Pertumbuhan Pelanggan Tahun Ini' },
    },
  }

  return (
    <div className="p-6 space-y-6">
      {/* Statistik utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ label, value, percent, color }) => (
          <div key={label} className="bg-white rounded-xl shadow p-5">
            <p className="text-sm text-gray-500">{label}</p>
            <h2 className={`text-2xl font-bold text-${color}-600 flex items-center gap-2`}>
              {value}
              <span className={`text-xs font-semibold text-${color}-500`}>{percent}</span>
            </h2>
          </div>
        ))}
      </div>

      {/* Layout 2 kolom konten besar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* KIRI */}
        <div className="space-y-6">
          {/* Grafik Penjualan */}
          <div className="bg-white rounded-xl shadow p-6">
            <Bar options={barOptions} data={barData} />
          </div>

          {/* Ringkasan Pemesanan Hari Ini */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Ringkasan Pemesanan Hari Ini</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-purple-100 text-purple-800 rounded-lg">✂️ Cukur Rambut: <strong>28</strong></div>
              <div className="p-4 bg-blue-100 text-blue-800 rounded-lg">🎨 Cat Rambut: <strong>12</strong></div>
              <div className="p-4 bg-green-100 text-green-800 rounded-lg">🧖 Perawatan: <strong>7</strong></div>
              <div className="p-4 bg-yellow-100 text-yellow-800 rounded-lg">💈 Paket Komplit: <strong>5</strong></div>
            </div>
          </div>
        </div>

        {/* KANAN */}
        <div className="space-y-6">
          {/* Grafik Pertumbuhan Pelanggan */}
          <div className="bg-white rounded-xl shadow p-6">
            <Line options={lineOptions} data={lineData} />
          </div>

          {/* Notifikasi Terbaru */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Notifikasi Terbaru</h3>
            <ul className="space-y-3 text-sm">
              <li className="border-l-4 border-purple-400 pl-4">✉️ Pesan baru dari pelanggan - 5 menit lalu</li>
              <li className="border-l-4 border-blue-400 pl-4">💳 Pembayaran digital berhasil - 10 menit lalu</li>
              <li className="border-l-4 border-yellow-400 pl-4">🛠️ Jadwal layanan penuh hari ini</li>
            </ul>
          </div>

          {/* Pelanggan Baru */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Pelanggan Baru</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex justify-between"><span>👤 Raka Pratama</span><span>+6281234</span></li>
              <li className="flex justify-between"><span>👤 Salsabila</span><span>+6285678</span></li>
              <li className="flex justify-between"><span>👤 Dimas Aditya</span><span>+6289012</span></li>
            </ul>
          </div>

          {/* Jadwal Hari Ini */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Jadwal Layanan Hari Ini</h3>
            <table className="w-full text-sm text-gray-600">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">Jam</th>
                  <th>Nama</th>
                  <th>Layanan</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="py-2">10:00</td><td>Fajar</td><td>Cukur</td></tr>
                <tr><td className="py-2">11:00</td><td>Sari</td><td>Cat Rambut</td></tr>
                <tr><td className="py-2">13:00</td><td>Reno</td><td>Paket Komplit</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
