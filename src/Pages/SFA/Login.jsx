import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // ✅ Cek login saat halaman dibuka, hanya jika di /signin
  useEffect(() => {
    const role = localStorage.getItem('role');
    if (window.location.pathname === '/signin') {
      if (role === 'admin') navigate('/admin/weeklyforecast', { replace: true });
      else if (role === 'user') navigate('/user/booking', { replace: true });
    }
  }, [navigate]); // tambahkan navigate untuk mematuhi linter
 
  // ✅ Hapus error saat input berubah
  useEffect(() => {
    setError('');
  }, [email, password]);

  const handleLogin = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    let role = '';
    if (trimmedEmail === 'admin@example.com' && trimmedPassword === 'admin123') {
      role = 'admin';
    } else if (trimmedEmail === 'user@example.com' && trimmedPassword === 'user123') {
      role = 'user';
    } else {
      setError('Email atau password salah!');
      return;
    }

    localStorage.setItem('role', role);
    localStorage.setItem('user', JSON.stringify({ email: trimmedEmail }));

    alert('Login berhasil!');

    if (role === 'admin') navigate('/admin/laporan');
    else navigate('/user/booking');
  };

  return (
    <div className="flex min-h-screen">
      {/* Kiri: Ilustrasi */}
      <div className="hidden md:flex w-1/2 bg-purple-700 items-center justify-center p-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">BARBER STC</h1>
          <p className="text-purple-200 text-lg">
            Selamat datang kembali! Silakan login untuk mengelola dashboard Anda.
          </p>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/admin-login-4489145-3723273.png"
            alt="Login Illustration"
            className="mt-10 max-w-xs"
          />
        </div>
      </div>

      {/* Kanan: Form Login */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-8">
        <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <LogIn className="text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Login</h2>
          </div>

          {error && (
            <div className="bg-red-100 text-red-600 px-4 py-2 rounded mb-4 text-sm">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="admin@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm text-gray-600 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="********"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-sm text-purple-600"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition font-semibold"
          >
            Login
          </button>

          <p className="mt-6 text-sm text-center text-gray-500">
            © {new Date().getFullYear()} UMKM CRM. All rights reserved.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
