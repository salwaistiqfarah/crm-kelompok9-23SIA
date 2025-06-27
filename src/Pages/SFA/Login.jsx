import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Eye, EyeOff } from 'lucide-react';
import logo from '../../assets/logobarber.jpg';
import barberBg from '../../assets/cukur rambut.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (window.location.pathname === '/signin') {
      if (role === 'admin') navigate('/admin/weeklyforecast', { replace: true });
      else if (role === 'user') navigate('/user/booking', { replace: true });
    }
  }, [navigate]);

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
    navigate(role === 'admin' ? '/admin/laporan' : '/user/booking');
  };

  return (
    <div className="flex min-h-screen">
      {/* Kiri: Background */}
      <div
        className="hidden md:flex w-1/2 items-center justify-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${barberBg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center text-white text-center px-4">
          <img
            src={logo}
            alt="Logo"
            className="w-28 h-28 mb-4 rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-3xl font-bold mb-2">BARBERSHOP STC</h1>
          <p className="text-lg max-w-sm">
            Selamat datang! Silakan login untuk mengakses layanan kami.
          </p>
        </div>
      </div>

      {/* Kanan: Login Card */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-8">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl border border-gray-200"
        >
          <div className="flex flex-col items-center gap-2 mb-6">
            <img src={logo} alt="Logo" className="w-16 h-16 rounded-full" />
            <div className="flex items-center gap-2">
              <LogIn className="text-[#A67C52]" />
              <h2 className="text-xl font-semibold text-gray-800">LOGIN</h2>
            </div>
          </div>

          {error && (
            <div className="bg-red-100 text-red-600 px-4 py-2 rounded mb-4 text-sm text-center">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#A67C52] focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#A67C52] focus:outline-none pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-[#A67C52]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#A67C52] text-black py-2 rounded-lg hover:bg-[#8c6239] transition font-semibold text-center"
          >
            Login
          </button>

          <p className="mt-6 text-sm text-center text-gray-500">
            © {new Date().getFullYear()} BARBERSHOP STC. All rights reserved.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
