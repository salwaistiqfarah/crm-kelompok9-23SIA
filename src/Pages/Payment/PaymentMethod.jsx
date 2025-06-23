import React from 'react';

const PaymentMethod = () => {
  const methods = [
    {
      id: 'gopay',
      name: 'GoPay',
      description: 'Pembayaran melalui dompet digital GoPay.',
      url: 'https://www.gojek.com/gopay/',
    },
    {
      id: 'ovo',
      name: 'OVO',
      description: 'Bayar cepat dengan OVO.',
      url: 'https://www.ovo.id/',
    },
  ];

  const handleSelect = (method) => {
    if (method.url) {
      window.open(method.url, '_blank');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pilih Metode Pembayaran Digital</h1>
      <div className="space-y-4">
        {methods.map((method) => (
          <div
            key={method.id}
            onClick={() => handleSelect(method)}
            className="cursor-pointer border rounded-lg p-4 transition hover:border-blue-400"
          >
            <h2 className="text-lg font-semibold">{method.name}</h2>
            <p className="text-sm text-gray-500">{method.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethod;