import React from 'react';
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
} from 'chart.js';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const layanan = [
    { nama: 'Cukur Rambut', gambar: 'https://i.pinimg.com/736x/2c/db/5a/2cdb5a2f0508be3c4db90be6dda27618.jpg' },
    { nama: 'Cat Rambut', gambar: 'https://i.pinimg.com/736x/ac/68/53/ac68534e90ff9cee4b8bd1b9536d6828.jpg' },
    { nama: 'Perawatan', gambar: 'https://i.pinimg.com/736x/e8/cb/c5/e8cbc507ca7c528de8b160e33ee6c3ab.jpg' },
    { nama: 'Paket Komplit', gambar: 'https://i.pinimg.com/736x/ae/67/cc/ae67cc1dbd55374c282c0ca4a2a63f15.jpg' },
  ];

  const media = [
    "https://www.youtube.com/watch?v=_GSc3uAm8rQ", // ini video akan autoplay
    "https://i.pinimg.com/736x/eb/00/4b/eb004bc70f9def4750e1e4bb9dcc3c9f.jpg",
    "https://i.pinimg.com/736x/ce/78/cc/ce78cc5df7586e97783006d2a4365d61.jpg"
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const renderMedia = (url) => {
  if (url.includes("youtube.com")) {
    const videoId = url.split("v=")[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&rel=0&showinfo=0`;

    return (
      <iframe
        src={embedUrl}
        title="YouTube Video"
        className="w-full h-full object-cover"
        allow="autoplay; encrypted-media"
        frameBorder="0"
        allowFullScreen
      />
    );
  } else {
    return (
      <img
        src={url}
        alt="hero"
        className="w-full h-full object-cover transition-all duration-500"
      />
    );
  }
};


  return (
    <div className="space-y-16">
      {/* Hero Section with Swipeable Carousel */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {renderMedia(media[currentIndex])}
        </div>
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4 z-10">
          <h1 className="text-4xl font-bold md:text-5xl mb-4">BRINGING BACK HANDSOME</h1>
          <p className="max-w-2xl text-sm md:text-base mb-6">
            Since 1999, Barbershop has been on a mission to redefine the men’s grooming industry. With over 60 authentic barbershops nationwide, a curated selection of men’s grooming products and premium service offerings... V’s is bringing back handsome. One gentleman at a time.
          </p>
          <div className="flex gap-4">
            <Link to="/booking">
              <button className="bg-green-900 px-5 py-2 rounded-md font-medium">ORDER BOOKING</button>
            </Link>
          </div>
        </div>
        <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-20">
          <ChevronLeft />
        </button>
        <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-20">
          <ChevronRight />
        </button>
      </div>

      {/* Jenis Layanan */}
      <div className="px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#5B4636]">Jenis Layanan di Barbershop Kami</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {layanan.map((item) => (
            <div key={item.nama} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.gambar} alt={item.nama} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.nama}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Upload Sistem */}
      <div className="px-6">
        <h2 className="text-2xl font-bold text-center mb-4 text-[#5B4636]">Info & Update dari Sistem</h2>
        <img
          src="https://i.pinimg.com/736x/09/8d/92/098d92891a7189a924ac87a842199814.jpg"
          alt="Info Sistem"
          className="w-full rounded-lg mb-6"
        />
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          Semua info terbaru dari sistem, promo, dan pengumuman penting akan tampil di sini. Pantau terus halaman dashboard untuk informasi terkini.
        </p>
      </div>

      {/* Value & Brand Philosophy Section */}
      <div className="bg-[#FFF7F0] py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#5B4636]">AUTHENTIC AND OLD-FASHIONED</h2>
        <img
          src="https://i.pinimg.com/736x/f2/4d/50/f24d509fcf4163df6d7cfa59d2c248af.jpg"
          alt="Vintage Barbershop"
          className="mx-auto rounded-lg mb-6"
        />
        <p className="max-w-2xl mx-auto text-gray-600">
          At V's, we bring you nostalgia with a modern twist. From the authentic barber chairs, our vintage décor, to our real straight-edge razors — we’re committed to quality, detail, and gentlemanly style.
        </p>
      </div>

      {/* Lokasi & Kontak */}
      <div className="px-6 text-center space-y-6">
        <h2 className="text-2xl font-bold text-[#5B4636]">Lokasi Kami</h2>
        <p className="text-gray-600">Jl. Setia Budi No. 153, Kec. Lima Puluh, Kota Pekanbaru, Riau 28155</p>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.292!2d101.4443!3d0.5333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ac4c4f7cb91f%3A0xb98fdc45a1c9e7a1!2sJl.%20Setia%20Budi%20No.153%2C%20Pekanbaru%2C%20Riau!5e0!3m2!1sid!2sid!4v1719950000000!5m2!1sid!2sid"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow"
        ></iframe>
        <p className="text-gray-600">Jam Operasional: Setiap Hari, Pukul 10.00 - 21.00</p>
      </div>

      {/* Footer Kontak */}
      <footer className="bg-[#FAEFE3] py-8 text-center mt-16">
        <div className="flex justify-center items-center gap-6 mb-4">
          <a href="https://wa.me/6285276553333" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-6 h-6" />
            <span className="text-gray-700">0852-7655-3333</span>
          </a>
          <a href="https://instagram.com/barber.stc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="IG" className="w-6 h-6" />
            <span className="text-gray-700">@barber.stc</span>
          </a>
        </div>
        <p className="text-sm text-gray-500">&copy; 2025 STC Barbershop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
