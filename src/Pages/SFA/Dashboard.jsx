import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { FaStar, FaInstagram, FaWhatsapp, FaHeart } from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();

  const heroMedia = [
    "https://www.youtube.com/embed/_GSc3uAm8rQ?autoplay=1&mute=1&loop=1&playlist=_GSc3uAm8rQ",
    "https://i.pinimg.com/originals/eb/00/4b/eb004bc70f9def4750e1e4bb9dcc3c9f.jpg",
    "https://i.pinimg.com/originals/ce/78/cc/ce78cc5df7586e97783006d2a4365d61.jpg"
  ];

  const [index, setIndex] = React.useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? heroMedia.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setIndex((prev) => (prev === heroMedia.length - 1 ? 0 : prev + 1));
  };

  const renderHero = (url) => {
    if (url.includes("youtube.com")) {
      return (
        <iframe
          src={url}
          title="Hero Video"
          className="w-full h-full object-cover"
          allow="autoplay; encrypted-media"
          frameBorder="0"
          allowFullScreen
        />
      );
    }
    return <img src={url} alt="Hero" className="w-full h-full object-cover" />;
  };

  const styles = [
    {
      nama: 'Undercut',
      gambar: 'https://www.balipost.com/wp-content/uploads/2024/12/balipostcom_dari-undercut-hingga-french-crop-ini-8-gaya-rambut-favorit-pria_01.jpg',
      harga: 30000,
      rating: 4.5,
      deskripsi: 'Gaya potongan klasik pria, sisi pendek dengan atas lebih panjang.',
    },
    {
      nama: 'Curly Undercut',
      gambar: 'https://www-moderngentlemanmagazine-com.translate.goog/wp-content/uploads/2024/09/Curly-Undercut-Hairstyles-for-Men.jpeg?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=imgs',
      harga: 35000,
      rating: 4.7,
      deskripsi: 'Undercut dengan efek curly alami untuk tampil unik.',
    },
    {
      nama: 'Pompadour',
      gambar: 'https://www.moderngentlemanmagazine.com/wp-content/uploads/2024/09/Pompadour-Undercut-Hairstyles-for-Men.jpeg',
      harga: 40000,
      rating: 4.8,
      deskripsi: 'Potongan stylish dengan volume tinggi di bagian atas.',
    },
    {
      nama: 'Buzz Cut',
      gambar: 'https://www.barberstake.com/wp-content/uploads/2025/01/Modern-Buzz-Cut-Fade.jpg',
      harga: 25000,
      rating: 4.3,
      deskripsi: 'Gaya simpel & maskulin, potongan super pendek.',
    },
    {
      nama: 'French Crop',
      gambar: 'https://giovanibarbershop.com/wp-content/uploads/2020/05/French-Crop.jpg',
      harga: 70000,
      rating: 4.6,
      deskripsi: 'Gaya crop dengan tekstur dan poni rapi.',
    },
    {
      nama: 'Comma Hair Mullet',
      gambar: 'https://rri-assets.s3.ap-southeast-3.amazonaws.com/berita/26/o/Comma_Hair_Mullet__A_Bold_and_Edgy_Hairstyle_for_Men/wnhvc6z2w1915rw.jpeg',
      harga: 75000,
      rating: 4.9,
      deskripsi: 'Model Korea hits dengan bentuk koma & layer belakang.',
    },
    {
      nama: 'Buzzed Undercut',
      gambar: 'https://www-moderngentlemanmagazine-com.translate.goog/wp-content/uploads/2024/09/Buzzed-Undercut-Hairstyles-for-Men.jpeg?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=imgs',
      harga: 32000,
      rating: 4.4,
      deskripsi: 'Perpaduan buzz cut dengan bagian samping undercut.',
    },
    {
      nama: 'Comma Hair Undercut',
      gambar: 'https://asset.kompas.com/crops/rybj2ug5fV8O31-a2GJsGIZtOB0=/0x150:1080x870/1200x800/data/photo/2024/08/23/66c85ecd1729d.jpg',
      harga: 80000,
      rating: 4.8,
      deskripsi: 'Gaya Korea dengan poni koma dan gradasi samping.',
    }
  ];

  const handleBooking = (style, harga) => {
    navigate(`/booking?style=${encodeURIComponent(style)}&harga=${harga}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[480px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {renderHero(heroMedia[index])}
        </div>
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow">Gaya Terbaik, Penampilan Terhebat</h1>
          <p className="max-w-2xl text-sm md:text-base mb-6 drop-shadow">
            Temukan potongan rambut dan coloring yang sesuai gayamu di STC Barbershop. Dapatkan pelayanan profesional dengan hasil maksimal.
          </p>
          <Link to="/booking">
            <button className="bg-green-900 hover:bg-green-700 px-6 py-2 rounded-md text-sm font-semibold shadow-md">
              BOOKING SEKARANG
            </button>
          </Link>
        </div>
        <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-20">
          <ChevronLeft />
        </button>
        <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-20">
          <ChevronRight />
        </button>
      </div>

      {/* Style List */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#5B4636]">
          Koleksi Style Rambut & Coloring
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {styles.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition-all overflow-hidden relative">
              <img
                src={item.gambar}
                alt={item.nama}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#5B4636]">{item.nama}</h3>
                <p className="text-sm text-gray-600 mb-1">Rp {item.harga.toLocaleString()}</p>
                <p className="text-xs text-gray-500 italic mb-2">{item.deskripsi}</p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar key={idx} className={idx < Math.round(item.rating) ? '' : 'text-gray-300'} />
                    ))}
                    <span className="ml-2 text-xs text-gray-500">({item.rating})</span>
                  </div>
                  <button className="love-button">
                    <FaHeart />
                  </button>
                </div>
                <button
                  onClick={() => handleBooking(item.nama, item.harga)}
                  className="w-full bg-green-900 hover:bg-green-800 text-white text-sm py-2 rounded-md shadow-md transition"
                >
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mini Footer */}
      <footer className="bg-[#5B4636] text-white text-[10px] px-3 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <p>STC Barbershop - Jl. Setia Budi No.153, Pekanbaru - 10:00-21:00 WIB</p>
          <div className="flex gap-4 justify-center md:justify-end">
            <a href="https://instagram.com/barber.stc" target="_blank" rel="noreferrer" className="hover:text-white text-gray-300">
              <FaInstagram className="inline mr-1" /> @barber.stc
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        .love-button {
          background-color: white;
          color: red !important;
          padding: 0.4rem;
          border-radius: 9999px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .love-button:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
