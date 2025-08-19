import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const session = req.cookies.get('session')?.value === '1'
  const role = req.cookies.get('role')?.value || 'customer'

  const needsAuth =
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/quotes') ||
    (pathname.startsWith('/quote/') && !pathname.startsWith('/quote/preview')) ||
    pathname === '/quote/new'

  if (needsAuth && !session) {
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  if (pathname.startsWith('/admin')) {
    if (!session || role !== 'admin') {
      const url = req.nextUrl.clone()
      url.pathname = '/login'
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard','/quotes/:path*','/quote/:path*','/admin/:path*'],
}
