import React, { useEffect, useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function EbookTests() {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API}/api/ebooktests`);
        const data = await res.json();
        setTests(data);
      } catch (e) {
        console.error(e);
      }
    }
    load();
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <h2 className="text-2xl font-semibold text-white mb-4">E‑book tesztek</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {tests.map((t) => (
          <div key={t.id} className="p-5 rounded-xl border border-white/10 bg-white/5">
            <h3 className="text-lg text-white font-bold">{t.title}</h3>
            {t.description && (
              <p className="text-white/80 text-sm mt-1">{t.description}</p>
            )}
            {t.recommended_reads?.length > 0 && (
              <div className="mt-3">
                <p className="text-white/70 text-sm mb-1">Ajánlott olvasmányok:</p>
                <ul className="list-disc list-inside text-white/80 text-sm">
                  {t.recommended_reads.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
