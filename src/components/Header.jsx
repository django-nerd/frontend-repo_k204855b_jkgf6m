import React from "react";

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_10%,#ff6ef8_0%,transparent_25%),radial-gradient(circle_at_80%_20%,#6ef7ff_0%,transparent_22%),radial-gradient(circle_at_40%_80%,#ffd66e_0%,transparent_25%),radial-gradient(circle_at_80%_80%,#9bff6e_0%,transparent_25%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-14">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
            Digitális Szombat
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Tiszta, tudatos tér a megálláshoz, a levegővételhez és a természetes ritmushoz való visszatéréshez. Blog, e‑book tesztek, életmód tippek és finom kihívások.
          </p>
        </div>
      </div>
    </header>
  );
}
