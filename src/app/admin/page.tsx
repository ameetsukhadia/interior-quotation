import StatCard from '@/components/cards/StatCard'

export default function AdminHomePage() {
  return (
    <div style={{padding:'1rem'}}>
      <h2 style={{fontSize:22, marginBottom:16}}>Overview</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'1rem', marginBottom:24}}>
        <StatCard label="Products" value={0} sub="Active: 0" />
        <StatCard label="Quotes (7d)" value={0} sub="Accepted: 0" />
        <StatCard label="Customers" value={0} sub="New this week: 0" />
        <StatCard label="Revenue (mock)" value="₹0" sub="Last 30 days" />
      </div>
      <div style={{border:'1px solid #eee', borderRadius:12, background:'#fff', overflow:'hidden'}}>
        <div style={{padding:'0.8rem 1rem', borderBottom:'1px solid #eee', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <strong>Recent Quotes</strong>
          <a href="/admin/quotes" style={{fontSize:12}}>View all</a>
        </div>
        <div style={{padding:'0.8rem 1rem'}}>
          <table style={{width:'100%', borderCollapse:'collapse'}}>
            <thead>
              <tr style={{textAlign:'left', fontSize:12, color:'#666'}}>
                <th style={{padding:'0.5rem'}}>Quote #</th>
                <th style={{padding:'0.5rem'}}>Customer</th>
                <th style={{padding:'0.5rem'}}>Status</th>
                <th style={{padding:'0.5rem'}}>Total</th>
                <th style={{padding:'0.5rem'}}>Updated</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding:'0.6rem', borderTop:'1px solid #f0f0f0'}}>—</td>
                <td style={{padding:'0.6rem', borderTop:'1px solid #f0f0f0'}}>—</td>
                <td style={{padding:'0.6rem', borderTop:'1px solid #f0f0f0'}}><span style={{padding:'2px 6px', border:'1px solid #ddd', borderRadius:999}}>draft</span></td>
                <td style={{padding:'0.6rem', borderTop:'1px solid #f0f0f0'}}>₹0.00</td>
                <td style={{padding:'0.6rem', borderTop:'1px solid #f0f0f0'}}>—</td>
              </tr>
            </tbody>
          </table>
          <p style={{fontSize:12, color:'#888', marginTop:8}}>Data will appear here once you wire Supabase.</p>
        </div>
      </div>
      <div style={{display:'flex', gap:'0.75rem', marginTop:24, flexWrap:'wrap'}}>
        <a href="/admin/products" style={{padding:'0.6rem 0.9rem', border:'1px solid #111', borderRadius:8, textDecoration:'none'}}>Manage Products</a>
        <a href="/admin/tiers" style={{padding:'0.6rem 0.9rem', border:'1px solid #ccc', borderRadius:8, textDecoration:'none'}}>Manage Tiers</a>
        <a href="/admin/settings" style={{padding:'0.6rem 0.9rem', border:'1px solid #ccc', borderRadius:8, textDecoration:'none'}}>Settings</a>
      </div>
    </div>
  );
}
