import React, { useEffect, useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

function Section({ title, children }) {
  return (
    <div className="p-5 rounded-xl border border-white/10 bg-white/5">
      <h3 className="text-xl text-white font-semibold mb-3">{title}</h3>
      {children}
    </div>
  );
}

export default function TipsChallenges() {
  const [tips, setTips] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [tRes, cRes] = await Promise.all([
          fetch(`${API}/api/tips`),
          fetch(`${API}/api/challenges`),
        ]);
        const [tData, cData] = await Promise.all([tRes.json(), cRes.json()]);
        setTips(tData);
        setChallenges(cData);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <p className="text-white/70">טוען…</p>;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-10 grid md:grid-cols-2 gap-6">
      <Section title="טיפים לאורח חיים">
        <ul className="space-y-2">
          {tips.map((t) => (
            <li key={t.id} className="flex items-start gap-3">
              <div className="mt-1 size-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,247,255,0.8)]" />
              <div>
                <p className="text-white font-medium">{t.title}</p>
                {t.description && (
                  <p className="text-white/80 text-sm">{t.description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="אתגרים עדינים">
        <ul className="space-y-2">
          {challenges.map((c) => (
            <li key={c.id} className="flex items-start gap-3">
              <div className="mt-1 size-1.5 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(255,110,248,0.8)]" />
              <div>
                <p className="text-white font-medium">{c.title}</p>
                {c.description && (
                  <p className="text-white/80 text-sm">{c.description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </section>
  );
}
