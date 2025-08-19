export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <section style={{padding:'2rem 1.25rem', maxWidth:1100, margin:'0 auto'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16}}>
        <h1 style={{fontSize:28}}>Admin</h1>
        <nav style={{display:'flex', gap:'0.5rem', flexWrap:'wrap'}}>
          <a href="/admin/products">Products</a>
          <a href="/admin/tiers">Tiers</a>
          <a href="/admin/quotes">Quotes</a>
          <a href="/admin/customers">Customers</a>
          <a href="/admin/settings">Settings</a>
        </nav>
      </div>
      <div style={{background:'#fafafa', border:'1px solid #eee', borderRadius:12, padding:'1rem'}}>
        <p style={{fontSize:12, color:'#555'}}>Placeholder only. Add role-based guards later to restrict access.</p>
        {children}
      </div>
    </section>
  );
}
