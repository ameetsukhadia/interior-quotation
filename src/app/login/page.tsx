export default function LoginPage() {
  return (
    <section style={{padding:'3rem 1.25rem', maxWidth:420, margin:'0 auto'}}>
      <h1 style={{fontSize:28, marginBottom:12}}>Sign in</h1>
      <p style={{color:'#555', marginBottom:24}}>This is a placeholder. Hook it to Supabase Auth later.</p>
      <form style={{display:'grid', gap:'0.75rem'}}>
        <label>
          <span style={{display:'block', fontSize:12, color:'#444'}}>Email</span>
          <input type="email" placeholder="you@example.com" style={{width:'100%', padding:'0.6rem 0.7rem', border:'1px solid #ccc', borderRadius:8}} />
        </label>
        <label>
          <span style={{display:'block', fontSize:12, color:'#444'}}>Password</span>
          <input type="password" placeholder="••••••••" style={{width:'100%', padding:'0.6rem 0.7rem', border:'1px solid #ccc', borderRadius:8}} />
        </label>
        <button type="button" style={{padding:'0.7rem 1rem', border:'1px solid #111', borderRadius:8}}>Sign in</button>
      </form>
      <div style={{marginTop:16}}>
        <a href="/dashboard" style={{fontSize:12, color:'#111'}}>Skip to dashboard (placeholder)</a>
      </div>
    </section>
  );
}
