import React from "react";

export default function PsychedelicStripe() {
  return (
    <div className="relative h-24 sm:h-28 my-8">
      <div className="absolute inset-0 blur-2xl opacity-60 bg-[conic-gradient(from_0deg_at_50%_50%,#ff6ef8, #6ef7ff, #ffd66e, #9bff6e, #b18bff, #ff6ef8)] animate-[spin_20s_linear_infinite]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:18px_100%]" />
      <div className="relative h-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-md" />
    </div>
  );
}
