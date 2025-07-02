import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const initialInvoices = [
  {
    id: "INV-00124",
    client: "Budi Santoso",
    date: "2025-07-02",
    status: "SENT",
    total: 150000,
    address: "Jl. Melati No. 5, Pekanbaru",
    phone: "+62 812-3456-7890",
    services: [
      { name: "Potong Rambut", qty: 1, rate: 50000 },
      { name: "Cukur Jenggot", qty: 1, rate: 100000 },
    ],
  },
  {
    id: "INV-00125",
    client: "Rian Saputra",
    date: "2025-07-01",
    status: "PENDING",
    total: 100000,
  },
  {
    id: "INV-00126",
    client: "Teguh Wahyu",
    date: "2025-07-01",
    status: "DRAFT",
    total: 120000,
  },
  {
    id: "INV-00127",
    client: "Andi Hartono",
    date: "2025-06-30",
    status: "SENT",
    total: 80000,
    address: "Jl. Mawar No. 12, Pekanbaru",
    phone: "+62 812-9999-0000",
    services: [
      { name: "Cuci Rambut", qty: 1, rate: 80000 },
    ],
  },
];

const InvoicePage = () => {
  const [invoices, setInvoices] = useState(initialInvoices);
  const [selected, setSelected] = useState(initialInvoices[0]);
  const [modalContent, setModalContent] = useState(null);

  const handleMarkAsPaid = (id) => {
    const updated = invoices.map((inv) =>
      inv.id === id ? { ...inv, status: "LUNAS" } : inv
    );
    setInvoices(updated);
    setSelected(updated.find((inv) => inv.id === id));
  };

  const handleAction = (action) => {
    let content = null;
    if (action === "Record Payment") {
      content = (
        <div>
          <h3 className="text-lg font-bold mb-2">Record Payment</h3>
          <p className="text-sm text-gray-600 mb-4">
            Pembayaran invoice <strong>{selected.id}</strong> sejumlah <strong>Rp {selected.total.toLocaleString()}</strong>.
          </p>
          <div className="bg-gray-50 p-3 rounded border text-sm text-gray-700">
            Invoice atas nama: <strong>{selected.client}</strong><br />
            Layanan: {selected.services?.map((s) => s.name).join(", ")}<br />
            Status: {selected.status === "LUNAS" ? "LUNAS" : selected.status}
          </div>
          <button
            className="mt-5 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            onClick={() => {
              handleMarkAsPaid(selected.id);
              setModalContent(null);
            }}
          >
            Tandai Lunas
          </button>
        </div>
      );
    } else if (action === "Export") {
      content = (
        <div>
          <h3 className="text-lg font-bold mb-2">Ekspor Invoice</h3>
          <p className="text-sm text-gray-600">Unduh invoice dalam format PDF atau Excel</p>
          <button className="w-full mt-2 border p-2 rounded hover:bg-gray-100">Download PDF</button>
          <button className="w-full mt-2 border p-2 rounded hover:bg-gray-100">Download Excel</button>
        </div>
      );
    }
    setModalContent(content);
  };

  const closeModal = () => setModalContent(null);

  return (
    <div className="flex h-screen font-sans bg-gradient-to-br from-[#e0f7fa] via-[#f1f8e9] to-[#fce4ec] relative">
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-400 hover:text-black">&times;</button>
            {modalContent}
          </div>
        </div>
      )}

      <div className="w-1/3 border-r overflow-y-auto bg-white shadow-md">
        <div className="p-4 font-bold text-xl border-b bg-white">All Invoices</div>
        {invoices.map((inv) => (
          <div
            key={inv.id}
            onClick={() => setSelected(inv)}
            className={`flex justify-between items-center px-4 py-3 border-b cursor-pointer transition ${
              inv.id === selected.id ? "bg-blue-50" : "hover:bg-gray-50"
            }`}
          >
            <div>
              <div className="font-semibold text-[#333]">{inv.client}</div>
              <div className="text-sm text-gray-500">{inv.id} | {inv.date}</div>
            </div>
            <div className="text-sm font-semibold text-right">
              <div>Rp {inv.total.toLocaleString()}</div>
              <div className={
                inv.status === "LUNAS" ? "text-green-500" :
                inv.status === "SENT" ? "text-green-500" :
                inv.status === "PENDING" ? "text-red-500" :
                "text-gray-400"
              }>{inv.status}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-2/3 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#2c3e50] flex items-center gap-2">
            Invoice: {selected.id}
            {selected.status === "LUNAS" && <FaCheckCircle className="text-green-500" title="Lunas" />}
          </h2>
          <div className="space-x-2">
            <button onClick={() => handleAction('Record Payment')} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-sm transition">Record Payment</button>
            <button onClick={() => handleAction('Export')} className="border px-4 py-2 rounded shadow-sm hover:bg-gray-100 transition">Export</button>
          </div>
        </div>

        <div className="bg-white rounded shadow-2xl p-6 transform transition-transform duration-300 hover:scale-[1.01]">
          <div className="flex justify-between mb-6">
            <div>
              <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                selected.status === "LUNAS" ? "bg-green-100 text-green-600" :
                selected.status === "SENT" ? "bg-green-100 text-green-600" :
                selected.status === "PENDING" ? "bg-yellow-100 text-yellow-600" :
                "bg-gray-100 text-gray-500"
              }`}>
                STATUS : {selected.status}
              </span>
              <div className="mt-4">
                <p className="text-sm">Invoice Number</p>
                <h3 className="font-bold text-lg">{selected.id}</h3>
                <p className="text-sm text-gray-500">Issue Date: {selected.date}</p>
              </div>
            </div>
            <div className="text-right">
              <h3 className="font-bold text-xl text-blue-700">BARBER STC</h3>
              <p className="text-sm text-gray-500">Jl. Cendana No. 9, Pekanbaru</p>
              <p className="text-sm text-gray-500">0812-2222-1111</p>
            </div>
          </div>

          {(selected.status === "SENT" || selected.status === "LUNAS") && selected.services && (
            <>
              <div className="border-t border-b py-4 mb-6">
                <div className="text-sm text-gray-600 mb-1">Client</div>
                <h4 className="font-bold text-[#333]">{selected.client}</h4>
                <p className="text-sm text-gray-500">{selected.address}</p>
                <p className="text-sm text-gray-500">{selected.phone}</p>
              </div>
              <table className="w-full text-sm mb-4">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2">#</th>
                    <th>Item & Description</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {selected.services.map((item, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="py-2">{idx + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.qty}</td>
                      <td>Rp {item.rate.toLocaleString()}</td>
                      <td>Rp {(item.qty * item.rate).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-right">
                <p>Sub Total: <strong>Rp {selected.total.toLocaleString()}</strong></p>
                <p>Total: <strong>Rp {selected.total.toLocaleString()}</strong></p>
                <p className="text-lg font-bold mt-2">Balance Due: Rp {selected.total.toLocaleString()}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
