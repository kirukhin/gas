// components/foodPackaging/Layout.jsx

export default function Layout({ children }) {
    return (
      <div
        className="leading-normal tracking-normal text-white"
        style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
      >
        {/* ================= HERO AREA ================= */}
  
        <div className="pt-24">
          {children[0]}
        </div>
  
        {/* ================= TOP WAVE ================= */}
  
        <div className="relative -mt-12 lg:-mt-24">
  
  
  
        </div>
  
        {/* ================= WHITE CONTENT ================= */}
  
        <main className="bg-white">
  
          {children.slice(1)}
  
        </main>
  
      </div>
    );
  }