import React, { useState } from "react";

const sampleFeedbacks = [
  {
    id: 1,
    customerName: "Rizky Pratama",
    content: "Potongan rambutnya rapi dan cepat. Pelayanan ramah banget!",
    rating: 5,
    mediaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRen3WESx7rXkU5gz74-rvfpPLdUlCf2fAVMQ&s",
  },
  {
    id: 2,
    customerName: "Dewi Larasati",
    content: "Suka banget suasana di sini, bersih dan nyaman buat nongkrong.",
    rating: 4,
    mediaUrl: "https://media.istockphoto.com/id/1266590027/id/foto/wajah-laki-laki-dengan-hasil-cukur.jpg?s=612x612&w=0&k=20&c=-NhEcP6X2kSVOcHY3_B_-sVv8nJ1la3F10wNci7rVGs=",
  },
  {
    id: 3,
    customerName: "Andi Saputra",
    content: "Harga terjangkau, hasilnya memuaskan. Bakal balik lagi!",
    rating: 5,
    mediaUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 4,
    customerName: "Sari Melati",
    content: "Pelayanan cukup cepat, tapi ruang tunggunya agak sempit.",
    rating: 3,
    mediaUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 5,
    customerName: "Budi Santoso",
    content: "Barbershopnya keren, alat-alatnya modern dan stafnya profesional.",
    rating: 4,
    mediaUrl: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];

function renderStars(rating) {
  const maxStars = 5;
  let stars = "";
  for (let i = 1; i <= maxStars; i++) {
    stars += i <= rating ? "★" : "☆";
  }
  return stars;
}

export default function FeedbackTable() {
  const [previewMedia, setPreviewMedia] = useState(null);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Feedback Pelanggan</h1>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase">Nama Pelanggan</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase">Feedback</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600 uppercase">Rating</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600 uppercase">Media</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sampleFeedbacks.map(({ id, customerName, content, rating, mediaUrl }) => (
              <tr key={id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{customerName}</td>
                <td className="px-6 py-4 text-gray-600">{content}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-yellow-500 text-lg">{renderStars(rating)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button
                    onClick={() => setPreviewMedia(mediaUrl)}
                    className="text-indigo-600 hover:text-indigo-900 font-medium"
                  >
                    Preview
                  </button>
                </td>
              </tr>
            ))}
            {sampleFeedbacks.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  Tidak ada feedback tersedia.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Preview */}
      {previewMedia && (
        <div
          onClick={() => setPreviewMedia(null)}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 cursor-pointer"
        >
          <img
            src={previewMedia}
            alt="Preview Media"
            className="max-w-full max-h-[80vh] rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setPreviewMedia(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            aria-label="Close preview"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}