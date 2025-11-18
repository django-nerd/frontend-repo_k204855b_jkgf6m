import React, { useEffect, useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function BlogList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API}/api/blogposts`);
        const data = await res.json();
        setItems(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-6 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-white">בלוג</h2>
        <span className="text-white/60 text-sm">ebook friendly</span>
      </div>
      {loading ? (
        <p className="text-white/70">טוען…</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((p) => (
            <article key={p.id || p.slug} className="group p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <h3 className="text-xl text-white font-bold mb-2 group-hover:tracking-tight">
                {p.title}
              </h3>
              {p.excerpt && (
                <p className="text-white/80 text-sm leading-relaxed">{p.excerpt}</p>
              )}
              {p.tags?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/10 text-white/70 text-xs">{t}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
