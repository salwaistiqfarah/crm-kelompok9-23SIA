import { UserPlus } from 'lucide-react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-white">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <div className="flex items-center gap-2 mb-6 text-purple-700 text-2xl font-bold">
          <UserPlus size={28} />
          <span>Daftar Akun</span>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="Nama lengkap"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
          >
            Daftar
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Sudah punya akun?{' '}
          <Link to="/signin" className="text-purple-600 hover:underline">
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
