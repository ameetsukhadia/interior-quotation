export default function HomePage() {
  return (
    <section style={{padding:'4rem 1.25rem', maxWidth:960, margin:'0 auto'}}>
      <h1 style={{fontSize:36, marginBottom:12}}>Fast interior quotations, no hassle.</h1>
      <p style={{fontSize:16, color:'#555', marginBottom:24}}>
        Pick products by material tier — <strong>Premium</strong>, <strong>Average</strong>, or <strong>Low-cost</strong> —
        and generate a branded PDF quotation in minutes.
      </p>
      <div style={{display:'flex', gap:'0.75rem', flexWrap:'wrap', marginBottom:32}}>
        <a href="/quote/new" style={{padding:'0.75rem 1rem', border:'1px solid #111', borderRadius:8, textDecoration:'none'}}>Get a Quote</a>
        <a href="/login" style={{padding:'0.75rem 1rem', border:'1px solid #ccc', borderRadius:8, textDecoration:'none'}}>Sign in</a>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'1rem'}}>
        <div style={{border:'1px solid #eee', borderRadius:12, padding:'1rem'}}>
          <h3>Premium</h3>
          <p style={{color:'#555'}}>High-end materials & finishes.</p>
        </div>
        <div style={{border:'1px solid #eee', borderRadius:12, padding:'1rem'}}>
          <h3>Average</h3>
          <p style={{color:'#555'}}>Balanced quality and price.</p>
        </div>
        <div style={{border:'1px solid #eee', borderRadius:12, padding:'1rem'}}>
          <h3>Low-cost</h3>
          <p style={{color:'#555'}}>Budget-friendly essentials.</p>
        </div>
      </div>

      <div style={{marginTop:40}}>
        <h2 style={{fontSize:24, marginBottom:12}}>How it works</h2>
        <ol style={{color:'#555', lineHeight:1.7}}>
          <li>Sign up and log in.</li>
          <li>Select products by tier and add quantities.</li>
          <li>Save your draft quote.</li>
          <li>Generate and download a branded PDF.</li>
        </ol>
      </div>

      <div style={{marginTop:40}}>
        <h2 style={{fontSize:24, marginBottom:12}}>Getting started</h2>
        <div style={{border:'1px solid #eee', borderRadius:12, padding:'1rem', background:'#fff'}}>
          <ol style={{color:'#555', lineHeight:1.7}}>
            <li>Copy <code>.env.local.example</code> to <code>.env.local</code> and fill Supabase keys.</li>
            <li>Run the SQL migrations in <code>supabase/migrations/</code> (001 → 003).</li>
            <li>Set dev cookies: <code>session=1</code> (and <code>role=admin</code> for admin) to explore guarded routes.</li>
            <li>Browse admin: <a href="/admin">/admin</a> • Customer flow: <a href="/quote/new">/quote/new</a></li>
            <li>Preview PDF template: <a href="/quote/preview">/quote/preview</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}
