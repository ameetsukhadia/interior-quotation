export default function DashboardPage() {
  return (
    <section style={{padding:'2rem 1.25rem', maxWidth:960, margin:'0 auto'}}>
      <h1 style={{fontSize:28, marginBottom:8}}>Your Dashboard</h1>
      <p style={{color:'#555', marginBottom:20}}>Quick links to start building your interior quotation.</p>
      <div style={{display:'flex', gap:'0.75rem', flexWrap:'wrap'}}>
        <a href="/quote/new" style={{padding:'0.6rem 0.9rem', border:'1px solid #111', borderRadius:8, textDecoration:'none'}}>Create New Quote</a>
        <a href="/quotes" style={{padding:'0.6rem 0.9rem', border:'1px solid #ccc', borderRadius:8, textDecoration:'none'}}>View Quotes</a>
      </div>
      <div style={{marginTop:28}}>
        <h2 style={{fontSize:20, marginBottom:8}}>Recent Activity</h2>
        <ul style={{color:'#666'}}>
          <li>Placeholder: No recent quotes.</li>
        </ul>
      </div>
    </section>
  );
}
