export function BottomLine() {
  return (
    <section className="bg-sidebar-bg text-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
      <div className="relative z-10 max-w-4xl">
        <h3 className="text-2xl md:text-3xl font-black mb-6">
          &quot;The data supports a strong campaign — but not a passive one.&quot;
        </h3>
        <p className="text-blue-100/80 leading-relaxed text-lg mb-8">
          Mrakas&apos; 2022 result was dominant, but the lower turnout means the next election should be treated as a mobilization campaign. The campaign should protect strong areas, expand in Ward 3, aggressively mobilize Wards 4 and 6, use internet voting as a central vote-banking channel, and make September the major visibility and voter-commitment month.
        </p>
        <div className="flex justify-end">
          <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest opacity-60">
            Prepared for campaign presentation and strategic planning
          </span>
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-primary/20 to-transparent pointer-events-none" />
    </section>
  );
}
