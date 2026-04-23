import { NextRequest, NextResponse } from 'next/server';

const translatedEnPaths = new Set(['/en', '/en/activities', '/en/pricing', '/en/contact']);

const enToFrFallback: Record<string, string> = {
  '/en/le-club': '/le-club',
  '/en/activites': '/activites',
  '/en/cours': '/cours',
  '/en/lessons': '/cours',
  '/en/stages': '/stages',
  '/en/camps': '/stages',
  '/en/tarifs': '/tarifs',
  '/en/galerie': '/galerie',
  '/en/gallery': '/galerie',
  '/en/actualites': '/actualites',
  '/en/news': '/actualites',
  '/en/blog': '/actualites',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/en')) {
    if (!translatedEnPaths.has(pathname)) {
      const fallback = enToFrFallback[pathname];
      if (fallback) {
        const url = request.nextUrl.clone();
        url.pathname = fallback;
        return NextResponse.redirect(url, 301);
      }
      if (pathname !== '/en') {
        const url = request.nextUrl.clone();
        url.pathname = '/';
        return NextResponse.redirect(url, 301);
      }
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images|fonts|.*\\..*).*)',
  ],
};
