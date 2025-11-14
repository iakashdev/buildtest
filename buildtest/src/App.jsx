import { useEffect, useState } from "react";

export default function App() {
  const [now, setNow] = useState(new Date());
  const [is24h, setIs24h] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const cities = [
    { name: "Los Angeles", offset: -8 },
    { name: "New York", offset: -5 },
    { name: "London", offset: 0 },
    { name: "Paris", offset: 1 },
  ];

  const utcTime = (offset) => {
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utc + offset * 3600000);
  };

  const formatBig = (d) => d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: !is24h });
  const formatSmall = (d) => d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: !is24h });

  return (
    <div className="min-h-screen bg-[#e74600] flex items-center justify-center p-6">
      <div className="w-full max-w-7xl bg-[#f1f1f1] rounded-[28px] overflow-hidden shadow-2xl border border-gray-200">

        {/* Header - Fixed to match image */}
        <div className="flex items-center justify-between px-10 py-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl">⏱</div>
            <div className="text-2xl font-bold tracking-tight">TimeSpot</div>
          </div>

          <div className="flex-1 flex justify-center"> 
            <div className="inline-flex items-center gap-2 text-gray-500 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35" />
                <circle cx="11" cy="11" r="6" strokeWidth="2" />
              </svg>
              Search
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-lg font-medium">Log In</button>
            <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium">Get the App</button>
          </div>
        </div>

        {/* Big clock section - Fixed layout */}
        <section className="px-12 py-10 border-t border-b border-gray-200 bg-white">
          <div className="flex items-start justify-between gap-8">
            <div style={{ flex: 1 }}>
              <div className="big-time" aria-hidden>
                {formatBig(now)}
              </div>
              <div className="mt-6 text-xl text-gray-600 font-medium">Sum 1:07:12-17:17 (10h 00m)</div>
              <div className="mt-2 text-xl text-gray-600 font-medium">
                {now.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}
              </div>
            </div>

            <div className="w-64 text-right pt-4">
              <div className="text-lg text-gray-500 mb-4 font-medium">Current</div>
              <div className="inline-flex items-center gap-1 bg-gray-100 rounded-full p-1 shadow-sm">
                <button 
                  onClick={() => setIs24h(false)} 
                  className={`px-5 py-2 rounded-full text-lg font-medium ${!is24h ? 'bg-black text-white' : 'text-gray-600'}`}
                >
                  12h
                </button>
                <button 
                  onClick={() => setIs24h(true)} 
                  className={`px-5 py-2 rounded-full text-lg font-medium ${is24h ? 'bg-black text-white' : 'text-gray-600'}`}
                >
                  24h
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content section - Fixed to match image layout */}
        <main className="px-12 py-12 bg-[#f1f1f1]">
          <div className="grid grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-6xl font-light leading-tight tracking-tight">
                London,<br/>
                <span className="text-5xl font-normal">United Kingdom</span>
              </h2>
            </div>
            <div className="text-right text-xl text-gray-600 leading-relaxed">
              Life moves fast. Stay on time<br/>
              and enjoy every moment!
            </div>
          </div>

          {/* Cities grid - Fixed layout */}
          <div className="flex gap-6 overflow-x-auto pb-6 items-stretch">
            {cities.map((c) => {
              const t = utcTime(c.offset);
              const isDay = t.getHours() >= 6 && t.getHours() < 18;
              
              return (
                <div key={c.name} className={`min-w-[280px] rounded-2xl p-6 shadow-sm border flex flex-col justify-between ${
                  c.name === "London" 
                    ? "bg-black text-white border-4 border-orange-500" 
                    : "bg-white text-black"
                }`}>
                  <div className="flex justify-between text-base mb-4">
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-sm opacity-70">UTC{c.offset >= 0 ? '+' + c.offset : c.offset}</div>
                  </div>
                  <div className={`mt-2 mb-4 ${c.name === "London" ? "text-7xl" : "text-5xl"} font-bold leading-tight`}>
                    {formatSmall(t)}
                  </div>
                  <div className="text-sm opacity-70 mb-2">
                    {t.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
                  </div>
                  <div className={`text-sm font-medium ${
                    c.name === "London" 
                      ? "text-orange-400" 
                      : isDay ? "text-blue-600" : "text-purple-600"
                  }`}>
                    {isDay ? 'Day' : 'Night'}
                  </div>
                </div>
              );
            })}

            {/* Add City card */}
            <div className="min-w-[280px] bg-white rounded-2xl p-6 shadow-sm border flex flex-col items-center justify-center text-gray-500 text-lg font-medium border-dashed">
              <div className="text-3xl mb-2">+</div>
              Add Another City
            </div>
          </div>
        </main>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap');
        * { 
          font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; 
        }
        .big-time {
          font-weight: 900;
          color: #000;
          font-size: 160px;
          line-height: 0.8;
          letter-spacing: -0.03em;
          margin-bottom: 0;
        }
        @media (min-width: 1400px) { 
          .big-time { 
            font-size: 200px; 
          } 
        }
        @media (max-width: 768px) { 
          .big-time { 
            font-size: 80px; 
            line-height: 1;
          } 
        }
      `}</style>
    </div>
  );
}