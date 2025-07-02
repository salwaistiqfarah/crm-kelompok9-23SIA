import React, { useState } from "react";
import { MdPayments, MdOutlinePendingActions } from "react-icons/md";
import { BsBank, BsPaypal } from "react-icons/bs";

const ServiceStatusUser = () => {
  const [status, setStatus] = useState("Selesai"); // Bisa juga "Diproses", "Menunggu"
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [isPaid, setIsPaid] = useState(false);

  const layananDiambil = [
    { nama: "Cukur Rambut", harga: 30000 },
    { nama: "Cat Rambut", harga: 55000 },
  ];

  const totalPayment = layananDiambil.reduce((sum, item) => sum + item.harga, 0);

  const handleBayarClick = () => {
    setShowPaymentOptions(true);
  };

  const handlePayment = (method) => {
    const newPayment = {
      id: Date.now(),
      method,
      amount: totalPayment,
      date: new Date().toLocaleString(),
    };
    setPaymentHistory([newPayment, ...paymentHistory]);
    setShowPaymentOptions(false);
    setIsPaid(true);
    alert(`Pembayaran berhasil melalui ${method}! ✅`);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-[#fff9f0] to-[#ffe8d6] min-h-screen">
      {/* Status Pemesanan */}
      <div className="bg-white rounded-2xl shadow-md p-6 border-l-8 border-[#ff9800] mb-6">
        <h1 className="text-2xl font-bold text-[#A47551] mb-2">Status Layanan Kamu ✂️</h1>
        <p className="text-sm text-gray-600">
          Pantau terus status pemesananmu di sini dan lakukan pembayaran setelah layanan selesai.
        </p>
      </div>

      {/* Status Booking */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <MdOutlinePendingActions className="text-3xl text-[#ffa726]" />
          <div>
            <h2 className="text-lg font-semibold text-[#A47551]">
              Status Booking: <span className="text-[#fb8c00]">{status}</span>
            </h2>
            <p className="text-sm text-gray-600">
              Layananmu sedang {status.toLowerCase()}. Mohon tunggu sebentar ya!
            </p>
          </div>
        </div>
      </div>

      {/* Invoice & Pembayaran */}
      {status === "Selesai" && (
        <div className="mt-6 bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#4caf50] space-y-4">
          <h3 className="text-lg font-bold text-[#388e3c]">Invoice Layanan</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            {layananDiambil.map((item, i) => (
              <li key={i} className="flex justify-between border-b pb-1">
                <span>{item.nama}</span>
                <span>Rp {item.harga.toLocaleString()}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-between font-semibold text-[#4caf50] text-lg pt-2 border-t">
            <span>Total</span>
            <span>Rp {totalPayment.toLocaleString()}</span>
          </div>

          {!isPaid && !showPaymentOptions && (
            <button
              onClick={handleBayarClick}
              className="w-full bg-[#4caf50] hover:bg-[#388e3c] text-white py-2 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              <MdPayments className="text-xl" /> Bayar Sekarang
            </button>
          )}

          {/* Pilihan Pembayaran */}
          {showPaymentOptions && (
            <div>
              <p className="text-sm text-gray-600 mb-2">Pilih metode pembayaran:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* GoPay */}
                <div
                  onClick={() => handlePayment("GoPay")}
                  className="flex flex-col items-center p-4 bg-[#e0f7fa] rounded-xl hover:shadow-md cursor-pointer"
                >
                  <img
                    src="https://asset.kompas.com/crops/NdLpQHJULWvV90rbGfP3Qk9o2EM=/0x0:1000x667/750x500/data/photo/2022/10/05/633d7a459af3b.png"
                    alt="GoPay"
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-sm mt-2 font-medium">GoPay</span>
                </div>

                {/* M-Banking */}
                <div
                  onClick={() => handlePayment("M-Banking")}
                  className="flex flex-col items-center p-4 bg-[#ede7f6] rounded-xl hover:shadow-md cursor-pointer"
                >
                  <BsBank className="text-3xl text-[#6a1b9a]" />
                  <span className="text-sm mt-2 font-medium">M-Banking</span>
                </div>

                {/* ShopeePay */}
                <div
                  onClick={() => handlePayment("ShopeePay")}
                  className="flex flex-col items-center p-4 bg-[#fff3e0] rounded-xl hover:shadow-md cursor-pointer"
                >
                  <img
                    src="https://play-lh.googleusercontent.com/F6nlgJMQKghZAYyazKQPMfFzGk0mM94I2ldWu7D5qlbtOqgqVZci3vJrm2HZyK1AVw"
                    alt="ShopeePay"
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-sm mt-2 font-medium">ShopeePay</span>
                </div>

                {/* PayPal */}
                <div
                  onClick={() => handlePayment("PayPal")}
                  className="flex flex-col items-center p-4 bg-[#e3f2fd] rounded-xl hover:shadow-md cursor-pointer"
                >
                  <BsPaypal className="text-3xl text-[#003087]" />
                  <span className="text-sm mt-2 font-medium">PayPal</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Riwayat Pembayaran */}
      {paymentHistory.length > 0 && (
        <div className="mt-8 bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-bold text-[#A47551] mb-4">Riwayat Pembayaran</h3>
          <ul className="space-y-3">
            {paymentHistory.map((pay) => (
              <li
                key={pay.id}
                className="flex justify-between items-center bg-[#fdf5e6] p-3 rounded-xl border"
              >
                <div>
                  <p className="text-sm text-gray-700 font-medium">{pay.method}</p>
                  <p className="text-xs text-gray-500">{pay.date}</p>
                </div>
                <span className="text-sm font-semibold text-[#4caf50]">
                  Rp {pay.amount.toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceStatusUser;
