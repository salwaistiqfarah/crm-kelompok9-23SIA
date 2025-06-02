import React, { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data dikirim:", form);
    // simpan ke database (mock)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrasi Akun</h2>
      <input type="text" placeholder="Nama" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Daftar</button>
    </form>
  );
};

export default Register;
