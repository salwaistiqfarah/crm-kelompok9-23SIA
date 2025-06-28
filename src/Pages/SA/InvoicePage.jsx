import React, { useState } from 'react';

const hairCardPrices = {
  'Basic Haircut': 30000,
  'Hair Spa': 50000,
  'Coloring': 80000,
  'Grooming Paket': 90000,
  'Cukur Jenggot': 25000,
};

const NotificationPage = () => {
  const [invoices, setInvoices] = useState([
    {
      id: 1,
      name: 'Budi',
      selectedCards: ['Basic Haircut'],
      voucher: '',
      status: 'Belum Bayar',
      method: 'Cash',
      paidAmount: '',
      change: 0,
    },
    {
      id: 2,
      name: 'Sari',
      selectedCards: ['Hair Spa', 'Cukur Jenggot'],
      voucher: 'DISKON10',
      status: 'Belum Bayar',
      method: 'QR',
      paidAmount: '',
      change: 0,
    },
  ]);

  const calculateTotal = (selectedCards, voucher = '') => {
    const subtotal = selectedCards.reduce((sum, card) => sum + (hairCardPrices[card] || 0), 0);
    if (voucher === 'DISKON10') {
      return Math.floor(subtotal * 0.9); // diskon 10%
    }
    return subtotal;
  };

  const handleCardChange = (id, newCards) => {
    setInvoices(prev =>
      prev.map(inv => {
        if (inv.id === id) {
          const total = calculateTotal(newCards, inv.voucher);
          const change = inv.paidAmount - total;
          return { ...inv, selectedCards: newCards, change: change >= 0 ? change : 0 };
        }
        return inv;
      })
    );
  };

  const handleVoucherChange = (id, newVoucher) => {
    setInvoices(prev =>
      prev.map(inv => {
        if (inv.id === id) {
          const total = calculateTotal(inv.selectedCards, newVoucher);
          const change = inv.paidAmount - total;
          return { ...inv, voucher: newVoucher, change: change >= 0 ? change : 0 };
        }
        return inv;
      })
    );
  };

  const handleMethodChange = (id, newMethod) => {
    setInvoices(prev =>
      prev.map(inv =>
        inv.id === id ? { ...inv, method: newMethod, paidAmount: '', change: 0 } : inv
      )
    );
  };

  const handlePaidAmountChange = (id, value) => {
    setInvoices(prev =>
      prev.map(inv => {
        if (inv.id === id) {
          const total = calculateTotal(inv.selectedCards, inv.voucher);
          const change = value - total;
          return { ...inv, paidAmount: value, change: change >= 0 ? change : 0 };
        }
        return inv;
      })
    );
  };

  const handleCompletePayment = (id) => {
    setInvoices(prev =>
      prev.map(inv => (inv.id === id ? { ...inv, status: 'Lunas' } : inv))
    );
  };

  const handleToggleCard = (id, card) => {
    setInvoices(prev =>
      prev.map(inv => {
        if (inv.id === id) {
          let updatedCards = inv.selectedCards.includes(card)
            ? inv.selectedCards.filter(c => c !== card)
            : [...inv.selectedCards, card];
          const total = calculateTotal(updatedCards, inv.voucher);
          const change = inv.paidAmount - total;
          return { ...inv, selectedCards: updatedCards, change: change >= 0 ? change : 0 };
        }
        return inv;
      })
    );
  };

  return (
    <main className="p-8 bg-white min-h-screen text-[#5A4634]">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-[#8B5E3C]">💳 Kasir - HairCard</h1>
        <p className="text-sm text-gray-500">Pilih layanan, hitung otomatis, dan proses diskon voucher.</p>
      </header>

      <section className="grid gap-6">
        {invoices.map((inv) => {
          const total = calculateTotal(inv.selectedCards, inv.voucher);
          return (
            <div key={inv.id} className="bg-gray-50 border rounded-xl p-5 shadow-sm space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">{inv.name}</h3>

                  <div className="mt-2">
                    <label className="block font-medium mb-1">Pilih HairCard:</label>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.keys(hairCardPrices).map((card) => (
                        <label key={card} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={inv.selectedCards.includes(card)}
                            onChange={() => handleToggleCard(inv.id, card)}
                          />
                          {card} (Rp{hairCardPrices[card].toLocaleString()})
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 text-sm text-gray-600">
                    <label className="mr-2">Voucher:</label>
                    <input
                      type="text"
                      placeholder="Contoh: DISKON10"
                      value={inv.voucher}
                      onChange={(e) => handleVoucherChange(inv.id, e.target.value)}
                      className="px-2 py-1 border rounded-md"
                    />
                  </div>

                  <p className="mt-2 text-md font-semibold">
                    Total Tagihan: Rp{total.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">Metode: {inv.method}</p>
                </div>

                <span className={`text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide
                  ${inv.status === 'Lunas' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                  {inv.status}
                </span>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                <div className="flex gap-4">
                  <select
                    value={inv.method}
                    onChange={(e) => handleMethodChange(inv.id, e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                  >
                    <option value="Cash">Cash</option>
                    <option value="QR">QR</option>
                  </select>

                  {inv.method === 'Cash' && (
                    <input
                      type="number"
                      placeholder="Uang Diterima"
                      value={inv.paidAmount}
                      onChange={(e) => handlePaidAmountChange(inv.id, parseInt(e.target.value || 0))}
                      className="border border-gray-300 rounded-md px-3 py-1 text-sm w-40"
                    />
                  )}
                </div>

                {inv.method === 'Cash' && inv.paidAmount >= total && (
                  <p className="text-sm text-green-700 font-medium">
                    Kembalian: Rp{inv.change.toLocaleString()}
                  </p>
                )}

                {inv.status !== 'Lunas' && (
                  <button
                    onClick={() => handleCompletePayment(inv.id)}
                    className="bg-[#8B5E3C] hover:bg-[#6f4a2c] text-white px-4 py-2 rounded-md text-sm transition"
                  >
                    Selesaikan Pembayaran
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default NotificationPage;
