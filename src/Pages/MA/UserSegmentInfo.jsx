import React from "react";
import { useLocation } from "react-router-dom";

const UserSegmentInfo = () => {
  const location = useLocation();
  const { name, level, benefits } = location.state || {
    name: "Tere Liye",
    level: "Gold",
    benefits: [
      "Diskon 15% setiap kunjungan",
      "Akses prioritas booking",
      "Promo khusus member",
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Status Keanggotaan</h1>
      <div className="bg-yellow-100 p-4 rounded-2xl shadow">
        <p className="text-xl font-semibold">Hi, {name}!</p>
        <p className="text-lg text-yellow-800 font-bold">Level: {level}</p>
        <ul className="mt-3 list-disc list-inside text-gray-700">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserSegmentInfo;