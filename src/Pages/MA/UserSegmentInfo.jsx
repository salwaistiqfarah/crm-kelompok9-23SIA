import React, { useState } from "react";
import { FaStar, FaCrown } from "react-icons/fa";
import { GiScissors, GiGiftOfKnowledge } from "react-icons/gi";
import { MdOutlineLocalOffer, MdOutlineHistory, MdStars } from "react-icons/md";
import { PiGiftBold } from "react-icons/pi";

const BarbershopLoyaltyPage = () => {
  const [activeTab, setActiveTab] = useState("reward");

  const user = {
    name: "Cakra",
    membership: "Gold Member",
    joinDate: "15 Mei 2023",
    points: 35,
    pointMultiplier: 1.5,
    tierTarget: 200,
  };

  const rewards = [
    {
      title: "Diskon 10%",
      description: "Dapatkan diskon 10% untuk potong rambut berikutnya",
      cost: 200,
      duration: "Berlaku 30 hari",
    },
    {
      title: "Cukur + Cuci Spesial",
      description: "Nikmati potong rambut + cuci dengan harga spesial",
      cost: 300,
      duration: "Berlaku 60 hari",
    },
    {
      title: "Diskon 20%",
      description: "Diskon 20% untuk layanan premium di akhir pekan",
      cost: 800,
      duration: "Berlaku 60 hari",
    },
  ];

  const purchaseHistory = [
    {
      date: "05 Juli 2025",
      service: "Haircut + Wash",
      amount: "Rp45.000",
      pointsEarned: 45,
    },
    {
      date: "28 Juni 2025",
      service: "Haircut",
      amount: "Rp35.000",
      pointsEarned: 35,
    },
    {
      date: "21 Juni 2025",
      service: "Shaving + Styling",
      amount: "Rp40.000",
      pointsEarned: 40,
    },
  ];

  const membershipLevels = [
    {
      tier: "Silver",
      icon: <FaStar className="text-[#bcbcbc] text-4xl drop-shadow-2xl" />,
      requirement: "0 - 50 poin",
      benefit: "1x poin setiap transaksi",
      bg: "bg-gradient-to-br from-[#f7f7f7] via-[#e2e2e2] to-[#c6c6c6] border border-[#cecece] shadow-2xl",
    },
    {
      tier: "Gold",
      icon: <MdStars className="text-[#f5d76e] text-4xl drop-shadow-2xl" />,
      requirement: "51 - 100 poin",
      benefit: "1.5x poin dan akses promo eksklusif",
      bg: "bg-gradient-to-br from-[#fff1c1] via-[#ffe174] to-[#ffcc00] border border-[#e6c200] shadow-2xl",
    },
    {
      tier: "Platinum",
      icon: <FaCrown className="text-[#c0c0c0] text-4xl drop-shadow-2xl" />,
      requirement: "101 - 200 poin",
      benefit: "2x poin + layanan prioritas",
      bg: "bg-gradient-to-br from-[#f1f1f1] via-[#d8d8d8] to-[#bcbcbc] border border-[#b0b0b0] shadow-2xl",
    },
  ];

  const progress = ((user.points / user.tierTarget) * 100).toFixed(0);
  const remainingPoints = user.tierTarget - user.points;

  return (
    <div className="p-6 max-w-6xl mx-auto bg-[#fdfdfd] min-h-screen">
      <h1 className="text-3xl font-bold mb-2 text-center text-[#1e1e1e]">
        Program Loyalty Barbershop
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Kumpulkan poin dari setiap booking dan nikmati berbagai keuntungan eksklusif
      </p>

      {/* User Card */}
      <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between border-l-4 border-yellow-500 mb-6">
        <div>
          <h2 className="text-xl font-bold text-[#333]">{user.name}</h2>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            {user.membership} · Bergabung {user.joinDate}
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-yellow-600">{user.points} poin</p>
          <p className="text-sm text-gray-500">
            {user.pointMultiplier}x poin untuk member {user.membership.split(" ")[0]}
          </p>
        </div>
      </div>

      {/* Progress Section */}
      <div className="bg-[#fffbea] border rounded-xl p-6 mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-2">Progress Menuju Tier Platinum</p>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div
            className="bg-yellow-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600 font-medium">
          <span>Gold ({user.points} poin)</span>
          <span>Platinum ({user.tierTarget} poin)</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          Butuh <span className="font-semibold">{remainingPoints} poin</span> lagi untuk mencapai tier Platinum
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 text-sm font-semibold border-b mb-4 text-gray-600">
        <div
          className={`pb-1 cursor-pointer ${activeTab === "reward" ? "text-yellow-600 border-b-2 border-yellow-500" : ""}`}
          onClick={() => setActiveTab("reward")}
        >
          <span className="inline-flex items-center gap-1"><PiGiftBold className="text-lg" /> Hadiah & Reward</span>
        </div>
        <div
          className={`pb-1 cursor-pointer ${activeTab === "history" ? "text-yellow-600 border-b-2 border-yellow-500" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          <span className="inline-flex items-center gap-1"><MdOutlineHistory className="text-base" /> Riwayat Pembelian</span>
        </div>
        <div
          className={`pb-1 cursor-pointer ${activeTab === "membership" ? "text-yellow-600 border-b-2 border-yellow-500" : ""}`}
          onClick={() => setActiveTab("membership")}
        >
          <span className="inline-flex items-center gap-1"><GiScissors className="text-base" /> Level Membership</span>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "reward" && (
        <div className="grid md:grid-cols-3 gap-4">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className="relative bg-white border rounded-2xl p-5 shadow-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition transform hover:scale-[1.05] flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 text-yellow-300 opacity-20 text-6xl rotate-12">
                <GiGiftOfKnowledge />
              </div>
              <div>
                <h3 className="text-md font-bold text-[#f57c00] flex items-center gap-2 mb-1">
                  <MdOutlineLocalOffer className="text-lg" />
                  {reward.title}
                </h3>
                <p className="text-sm text-gray-600">{reward.description}</p>
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-500 mb-1">{reward.duration}</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-full w-full font-semibold">
                  Klaim Sekarang ({reward.cost} poin)
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "history" && (
        <div className="bg-white p-6 rounded-xl shadow-md mt-6">
          <h2 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
            <MdOutlineHistory /> Riwayat Pembelian
          </h2>
          <ul className="divide-y">
            {purchaseHistory.map((item, i) => (
              <li key={i} className="py-4 flex justify-between text-sm text-gray-700">
                <div>
                  <p className="font-medium">{item.service}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{item.amount}</p>
                  <p className="text-xs text-green-600">+{item.pointsEarned} poin</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === "membership" && (
        <div className="bg-white p-6 rounded-xl shadow-md mt-6">
          <h2 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
            <GiScissors className="text-orange-400" /> Level Membership
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {membershipLevels.map((level, i) => (
              <div
                key={i}
                className={`${level.bg} p-6 rounded-2xl text-center transition transform hover:scale-[1.07] cursor-pointer hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]`}
              >
                <div className="flex justify-center mb-3">{level.icon}</div>
                <h3 className="text-lg font-bold text-gray-800">{level.tier}</h3>
                <p className="text-sm text-gray-700">{level.requirement}</p>
                <p className="text-xs text-gray-600 mt-1">{level.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BarbershopLoyaltyPage;