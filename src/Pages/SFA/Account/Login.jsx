import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogIn } from 'lucide-react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    if (email === 'admin@example.com' && password === 'admin123') {
      localStorage.setItem('admin', JSON.stringify({ email }))
      navigate('/')
    } else {
      setError('Email atau password salah!')
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Left Side Illustration or Branding */}
      <div className="hidden md:flex w-1/2 bg-purple-700 items-center justify-center p-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">BARBER STC</h1>
          <p className="text-purple-200 text-lg">
            Selamat datang kembali! Silakan login untuk mengelola dashboard admin Anda.
          </p>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/admin-login-4489145-3723273.png"
            alt="Admin Login"
            className="mt-10 max-w-xs"
          />
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-8">
        <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <LogIn className="text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Login Admin</h2>
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
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
  )
}

export default Login
