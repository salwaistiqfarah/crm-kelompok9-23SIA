import React from 'react';

const PaymentDigital = () => {
  const digitalPayments = [
    { id: 1, platform: 'GoPay', user: 'Ayu Kurnia', amount: 50000, date: '2025-06-11' },
    { id: 2, platform: 'OVO', user: 'Dian Permana', amount: 70000, date: '2025-06-09' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pembayaran Digital</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {digitalPayments.map((payment) => (
          <div key={payment.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold mb-1">{payment.platform}</h2>
            <p className="text-sm text-gray-600">Nama Pengguna: {payment.user}</p>
            <p className="text-sm text-gray-600">Tanggal: {payment.date}</p>
            <p className="text-sm text-gray-600 mt-1">
              Jumlah: <strong>Rp{payment.amount.toLocaleString()}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentDigital;
