import React from "react";
import Header from "./components/Header";
import PsychedelicStripe from "./components/PsychedelicStripe";
import BlogList from "./components/BlogList";
import TipsChallenges from "./components/TipsChallenges";
import EbookTests from "./components/EbookTests";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-right" dir="rtl">
      {/* subtle galaxy background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(110,247,255,0.08),transparent_25%),radial-gradient(circle_at_90%_20%,rgba(255,110,248,0.08),transparent_25%),radial-gradient(circle_at_50%_90%,rgba(177,139,255,0.08),transparent_25%)]" />

      <Header />
      <PsychedelicStripe />
      <BlogList />
      <TipsChallenges />
      <EbookTests />

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-white/60 text-sm">
        © {new Date().getFullYear()} Digital Sabbath — מרחב לנשימה דיגיטלית
      </footer>
    </div>
  );
}

export default App;
