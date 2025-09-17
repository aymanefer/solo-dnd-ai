"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [health, setHealth] = useState<string>("Loading...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/health")
      .then(res => res.json())
      .then(data => setHealth(JSON.stringify(data)))
      .catch(() => setHealth("Backend not reachable"));
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-xl bg-white p-8 shadow-md text-black">
        <h1 className="text-2xl font-bold mb-4">Solo D&D AI</h1>
        <p>Backend Health: {health}</p>
      </div>
    </main>
  );
}
