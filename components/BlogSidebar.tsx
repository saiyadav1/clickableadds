export default function BlogSidebar() {
  return (
    <aside className="space-y-6 sticky top-32">
      {/* Search Widget */}
      <div className="p-2 bg-slate-50 rounded-2xl border border-slate-100 flex items-center">
        <input 
          placeholder="Search articles..." 
          className="bg-transparent w-full px-4 py-3 text-sm outline-none font-medium"
        />
        <button className="bg-[#05003b] text-white p-3 rounded-xl hover:bg-blue-600 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
      </div>

      {/* Category Widget */}
      <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm">
        <h4 className="text-[#05003b] font-black mb-6 flex items-center gap-2">
           <span className="w-1.5 h-4 bg-blue-600 rounded-full" />
           Categories
        </h4>
        <div className="space-y-3">
          {["Market Trends", "SEO Strategy", "Tech News", "Growth"].map(item => (
            <div key={item} className="flex justify-between items-center p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
              <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600">{item}</span>
              <span className="text-[10px] font-black text-slate-400 bg-slate-100 px-2 py-1 rounded-md group-hover:bg-blue-100 group-hover:text-blue-600">12</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}