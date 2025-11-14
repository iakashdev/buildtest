import { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-md mx-auto p-10 text-center text-3xl">
      <h1 className="mb-6 text-4xl font-bold">Simple Clock</h1>
      <div className="p-6 rounded-2xl shadow-lg border text-5xl">
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
}
