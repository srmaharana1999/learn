"use client";
import { useState } from "react";

export default function ChartLayout({
  BarChart,
  Heatmap,
  LineChart,
  Login,
}: {
  BarChart: React.ReactNode;
  Heatmap: React.ReactNode;
  LineChart: React.ReactNode;
  Login: React.ReactNode;
}) {
  const [status, setStatus] = useState(false);

  const isLogin = status;
  return (
    <>
      {isLogin ? (
        <>
          <button
            className="py-1 px-3 bg-red-500 text-white"
            onClick={() => setStatus((prev) => !prev)}
          >
            Logout
          </button>
          <div className="bg-amber-300 h-80 grid p-4 gap-4 mt-6">
            <div className=" flex gap-4">
              <div className="bg-gray-600 flex-1">{BarChart}</div>
              <div className="bg-pink-400 flex-1">{LineChart}</div>
            </div>
            <div className="bg-green-400 ">{Heatmap}</div>
          </div>
        </>
      ) : (
        <div>
          <span>
            <button
              className="py-1 px-3 bg-blue-500 text-white"
              onClick={() => setStatus((prev) => !prev)}
            >
              Login
            </button>
          </span>
          {Login}
        </div>
      )}
    </>
  );
}
