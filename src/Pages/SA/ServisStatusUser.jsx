import React from 'react';

const ServisStatusUser = () => {
  const services = [
    { name: 'Budi', service: 'Potong Rambut', status: 'Menunggu' },
    { name: 'Sari', service: 'Cukur Jenggot', status: 'Dilayani' },
    { name: 'Andi', service: 'Hair Spa', status: 'Selesai' }
  ];

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Status Layanan Saya</h1>
      <div className="space-y-4">
        {services.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4 border flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-500">{item.service}</p>
            </div>
            <span className={`text-sm px-3 py-1 rounded-full font-medium tracking-wide
              ${item.status === 'Menunggu' ? 'bg-yellow-100 text-yellow-700' :
                item.status === 'Dilayani' ? 'bg-blue-100 text-blue-700' :
                'bg-green-100 text-green-700'}`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ServisStatusUser;