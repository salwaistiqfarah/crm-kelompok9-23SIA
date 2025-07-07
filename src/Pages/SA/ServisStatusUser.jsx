import React, { useState } from "react";
import {
  MdOutlinePendingActions,
  MdPayments,
} from "react-icons/md";
import {
  BsBank,
  BsPaypal,
} from "react-icons/bs";
import {
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaStar,
} from "react-icons/fa";
import {
  SiPayoneer,
  SiCashapp,
} from "react-icons/si";

const ServiceStatusUser = () => {
  const [status, setStatus] = useState("Selesai");
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Selesai":
        return {
          icon: <FaCheckCircle className="text-yellow-700 text-xl" />, // warm pastel tone
          label: "Selesai",
          bg: "bg-gradient-to-br from-yellow-100 to-stone-100 border-yellow-300",
          badge: "bg-yellow-600 text-white",
        };
      case "Diproses":
        return {
          icon: <FaClock className="text-yellow-500 text-xl" />,
          label: "Sedang Diproses",
          bg: "bg-gradient-to-br from-yellow-100 to-yellow-50 border-yellow-400",
          badge: "bg-yellow-500 text-white",
        };
      case "Menunggu":
        return {
          icon: <FaExclamationTriangle className="text-red-500 text-xl" />,
          label: "Menunggu Konfirmasi",
          bg: "bg-gradient-to-br from-red-100 to-red-50 border-red-400",
          badge: "bg-red-500 text-white",
        };
      default:
        return {
          icon: null,
          label: "Tidak Diketahui",
          bg: "bg-gray-100",
          badge: "bg-gray-400 text-white",
        };
    }
  };

  const statusInfo = getStatusStyle(status);

  const handlePayment = (method) => {
    setPaymentSuccess(method);
    setFeedback("");
    setRating(0);
  };

  const handleFeedbackSubmit = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500);
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 px-10 py-12 bg-white shadow-2xl rounded-3xl border border-gray-200 space-y-12">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Status Layanan</h2>
        <span className={`px-5 py-1.5 rounded-full text-sm font-semibold shadow-md ${statusInfo.badge}`}>
          {statusInfo.label}
        </span>
      </div>

      <div className={`rounded-3xl border p-6 flex items-center justify-between ${statusInfo.bg} shadow-inner`}> 
        <div className="flex items-center gap-4">
          {statusInfo.icon}
          <div>
            <p className="text-xl font-semibold text-gray-800">{statusInfo.label}</p>
            <p className="text-sm text-gray-600">Terakhir diperbarui: 7 Juli 2025</p>
          </div>
        </div>
        {status === "Selesai" && (
          <button
            onClick={() => setShowPaymentOptions(true)}
            className="px-7 py-2.5 bg-gradient-to-br from-yellow-300 to-stone-300 hover:brightness-105 text-white text-sm font-bold rounded-full shadow-xl active:scale-95 transform transition-all duration-300 border border-yellow-300"
          >
            Tandai Lunas
          </button>
        )}
      </div>

      {showPaymentOptions && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-700">Pilih Metode Pembayaran</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{ name: "CashApp", icon: <SiCashapp className="text-orange-400 text-2xl" /> },
              { name: "Payoneer", icon: <SiPayoneer className="text-amber-500 text-2xl" /> },
              { name: "M-Banking", icon: <BsBank className="text-gray-700 text-2xl" /> },
              { name: "PayPal", icon: <BsPaypal className="text-blue-500 text-2xl" /> }
            ].map(({ name, icon }) => (
              <div
                key={name}
                onClick={() => handlePayment(name)}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border bg-gradient-to-tr from-stone-50 to-white hover:shadow-xl cursor-pointer transition-all duration-200 hover:scale-105"
              >
                {icon}
                <span className="font-medium text-gray-800 text-sm">{name}</span>
              </div>
            ))}
          </div>

          {paymentSuccess && (
            <div className="mt-6 space-y-6">
              <div className="text-orange-900 text-md font-medium bg-amber-100 px-5 py-4 rounded-xl shadow">
                Pembayaran dengan metode <span className="font-bold">{paymentSuccess}</span> berhasil. Total: <span className="font-semibold">Rp75.000</span>
              </div>

              <div className="bg-gradient-to-br from-stone-50 to-white border border-gray-200 rounded-xl p-5 shadow-md space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Beri Rating dan Komentar</h3>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-xl cursor-pointer ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      onClick={() => setRating(i + 1)}
                    />
                  ))}
                </div>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full h-24 p-3 rounded-lg border focus:ring-2 focus:ring-yellow-400 text-sm text-gray-800 resize-none shadow-inner"
                  placeholder="Bagikan pengalaman kamu setelah melakukan pembayaran..."
                />
                <button
                  onClick={handleFeedbackSubmit}
                  className="px-6 py-2.5 bg-gradient-to-br from-yellow-400 to-stone-400 hover:brightness-105 text-white font-bold rounded-full shadow-lg active:scale-95 transition duration-300"
                >
                  Kirim Feedback
                </button>
              </div>
              {showPopup && (
                <div className="fixed top-6 left-1/2 transform -translate-x-1/2 text-center text-white font-medium bg-green-500 px-6 py-3 rounded-xl shadow-md animate-fade">
                  Feedback Terkirim
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <div className="border-t pt-6 text-sm text-gray-500">
        Jika mengalami kendala, silakan hubungi admin STC Barbershop melalui WhatsApp atau datang langsung ke lokasi.
      </div>
    </div>
  );
};

export default ServiceStatusUser;