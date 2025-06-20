import React, { useState } from 'react';

const NotificationPage = () => {
  const [invoices, setInvoices] = useState([
    { id: 1, name: 'Budi', total: 'Rp50.000', status: 'Lunas', method: 'Cash' },
    { id: 2, name: 'Sari', total: 'Rp70.000', status: 'Belum Bayar', method: 'QR' },
    { id: 3, name: 'Andi', total: 'Rp60.000', status: 'Belum Bayar', method: 'QR' }
  ]);

  const handleStatusChange = (id, newStatus) => {
    const updated = invoices.map(item =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setInvoices(updated);
  };

  const handleMethodChange = (id, newMethod) => {
    const updated = invoices.map(item =>
      item.id === id ? { ...item, method: newMethod } : item
    );
    setInvoices(updated);
  };

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Daftar Tagihan Pelanggan</h1>
        <p className="text-sm text-gray-500 mt-1">Admin dapat melihat dan memperbarui status serta metode pembayaran pelanggan</p>
      </header>

      <section className="grid gap-5">
        {invoices.map((inv) => (
          <div
            key={inv.id}
            className="flex justify-between items-center bg-white p-5 rounded-xl shadow-sm border"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{inv.name}</h3>
              <p className="text-sm text-gray-500">Total: {inv.total}</p>
              <p className="text-sm text-gray-500">Metode: {inv.method}</p>
            </div>

            <div className="flex items-center gap-4">
              <span className={`text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide
                ${inv.status === 'Lunas' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}
              >
                {inv.status}
              </span>
              <select
                value={inv.status}
                onChange={(e) => handleStatusChange(inv.id, e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 shadow-sm focus:ring focus:ring-blue-200"
              >
                <option value="Lunas">Lunas</option>
                <option value="Belum Bayar">Belum Bayar</option>
              </select>
              <select
                value={inv.method}
                onChange={(e) => handleMethodChange(inv.id, e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 shadow-sm focus:ring focus:ring-purple-200"
              >
                <option value="Cash">Cash</option>
                <option value="QR">QR</option>
              </select>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default NotificationPage;