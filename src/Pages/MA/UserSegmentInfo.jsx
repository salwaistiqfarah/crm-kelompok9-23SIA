import React from "react";
import { FaCrown, FaStar } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";

const UserSegmentInfo = () => {
  const user = {
    name: "Budi Santoso",
    isNew: true,
    currentCoins: 12,
    targetCoins: 50,
  };

  const progressPercent = Math.min(
    (user.currentCoins / user.targetCoins) * 100,
    100
  ).toFixed(0);

  return (
    <div className="p-6 bg-gradient-to-br from-[#fff9f0] to-[#ffe8d6] min-h-screen">
      {/* Header Section */}
      <div className="bg-[#ffe0b2] rounded-2xl p-6 shadow-lg mb-6 border-l-8 border-[#f57c00]">
        <h1 className="text-3xl font-bold text-[#6d3d0f] mb-2">
          Hai, {user.name} 👋
        </h1>
        <p className="text-[#4e342e] text-base">
          Selamat datang sebagai <strong className="text-[#d84315]">Pengguna Baru</strong>!
          Kamu bisa meningkatkan loyalitas ke level <strong className="text-[#f57c00]">Gold Member</strong> dengan mengumpulkan koin.
        </p>
      </div>

      {/* Segment Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-center justify-between border border-[#ffe0b2]">
        <div className="flex items-center gap-4">
          <FaStar className="text-yellow-500 text-4xl" />
          <div>
            <h2 className="text-xl font-bold text-[#f57c00]">Status: <span className="text-[#6d3d0f]">Baru</span></h2>
            <p className="text-sm text-gray-600">Kumpulkan lebih banyak koin untuk naik ke level berikutnya!</p>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="mb-2 flex justify-between text-sm text-gray-600 font-semibold">
            <span>{user.currentCoins} koin</span>
            <span>{user.targetCoins} koin</span>
          </div>
          <div className="w-full bg-[#ffe0b2] rounded-full h-4">
            <div
              className="bg-[#f57c00] h-4 rounded-full transition-all"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-xs text-[#6d3d0f] mt-2 text-center">
            Progres kamu: {user.currentCoins} / {user.targetCoins} koin
          </p>
        </div>
      </div>

      {/* Tips or Call to Action */}
      <div className="mt-6 bg-[#fff3e0] border-l-4 border-[#ff9800] rounded-2xl p-5 flex items-start gap-4">
        <GiProgression className="text-[#fb8c00] text-3xl mt-1" />
        <div>
          <h3 className="text-md font-semibold text-[#e65100] mb-1">
            Tips agar cepat naik level:
          </h3>
          <ul className="list-disc list-inside text-sm text-[#4e342e]">
            <li>Booking layanan secara rutin</li>
            <li>Ikut program referensi & loyalty</li>
            <li>Klaim promo pengguna</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserSegmentInfo;
