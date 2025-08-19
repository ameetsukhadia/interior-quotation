export const metadata = {
  title: "Interior Quotation",
  description: "Create quotes with premium, average, and low-cost materials",
};

import '../styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{padding:'1rem 1.25rem', borderBottom:'1px solid #eee', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
            <img src="/logo.svg" alt="Logo" width={32} height={32} />
            <strong>Interior Quotation</strong>
          </div>
          <nav style={{display:'flex', gap:'1rem'}}>
            <a href="/">Home</a>
            <a href="/quote/new">Get a Quote</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/admin">Admin</a>
          </nav>
        </header>
        <main style={{minHeight:'70vh'}}>{children}</main>
        <footer style={{padding:'2rem 1.25rem', borderTop:'1px solid #eee', fontSize:12, color:'#666'}}>
          © {new Date().getFullYear()} Interior Quotation • Built with Next.js
        </footer>
      </body>
    </html>
  );
}
