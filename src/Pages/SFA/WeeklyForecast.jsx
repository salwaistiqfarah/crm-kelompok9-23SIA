// src/Pages/SFA/WeeklyForecast.jsx
import React from 'react';
import Card from '../../components/Card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const dummyStats = [
  { day: 'Senin', bookings: 3 },
  { day: 'Selasa', bookings: 5 },
  { day: 'Rabu', bookings: 2 },
  { day: 'Kamis', bookings: 4 },
  { day: 'Jumat', bookings: 6 },
  { day: 'Sabtu', bookings: 1 },
  { day: 'Minggu', bookings: 0 },
];

const WeeklyForecast = ({ isAdmin = false }) => {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">
        Statistik Booking Mingguan {isAdmin ? '(Semua Pengguna)' : '(Anda)'}
      </h2>
      <Card>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dummyStats}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="bookings" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default WeeklyForecast;
