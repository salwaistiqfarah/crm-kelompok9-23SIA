import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "chart.js/auto";

const Laporan = () => {
  // Statistik Ringkas
  const statCards = [
    { label: "Total Pelanggan", value: 120 },
    { label: "Layanan Populer", value: "Haircut + Wash" },
    { label: "Feedback Masuk", value: 45 },
    { label: "Total Pendapatan", value: "Rp 12.000.000" },
  ];

  // Grafik Pendapatan
  const pendapatanData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
    datasets: [
      {
        label: "Pendapatan (juta)",
        data: [10, 15, 12, 18, 20, 25],
        backgroundColor: "#8b5cf6",
      },
    ],
  };

  // Grafik Kunjungan
  const kunjunganData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
    datasets: [
      {
        label: "Kunjungan Pelanggan",
        data: [40, 55, 48, 60, 70, 75],
        fill: false,
        borderColor: "#10b981",
        tension: 0.3,
      },
    ],
  };

  // Grafik Layanan
  const layananData = {
    labels: ["Haircut", "Haircut + Wash", "Coloring", "Shaving"],
    datasets: [
      {
        label: "Layanan",
        data: [45, 30, 15, 10],
        backgroundColor: ["#6366f1", "#ec4899", "#f59e0b", "#10b981"],
      },
    ],
  };

  // Grafik Transaksi
  const transaksiData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
    datasets: [
      {
        label: "Jumlah Transaksi",
        data: [30, 40, 35, 50, 55, 60],
        backgroundColor: "#f97316",
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Laporan Ringkasan</h1>

      {/* Statistik Ringkas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {statCards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <p className="text-gray-500 text-sm">{card.label}</p>
            <p className="text-xl font-semibold text-purple-700">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Grafik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Grafik Pendapatan */}
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
          <h2 className="text-sm font-semibold mb-2 text-center text-gray-700">
            Pendapatan Bulanan
          </h2>
          <Bar data={pendapatanData} />
        </div>

        {/* Grafik Kunjungan */}
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
          <h2 className="text-sm font-semibold mb-2 text-center text-gray-700">
            Kunjungan Pelanggan
          </h2>
          <Line data={kunjunganData} />
        </div>

        {/* Grafik Layanan */}
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
          <h2 className="text-sm font-semibold mb-2 text-center text-gray-700">
            Layanan Terpopuler
          </h2>
          <Pie data={layananData} />
        </div>

        {/* Grafik Transaksi */}
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
          <h2 className="text-sm font-semibold mb-2 text-center text-gray-700">
            Jumlah Transaksi
          </h2>
          <Bar data={transaksiData} />
        </div>
      </div>
    </div>
  );
};

export default Laporan;
