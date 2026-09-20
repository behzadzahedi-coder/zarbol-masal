import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  if (url.hostname === 'zarbol-masal.de') {
    url.protocol = 'https:';
    url.hostname = 'www.zarbol-masal.de';
    url.port = '';
    return NextResponse.redirect(url, 308);
  }
  if (url.pathname === '/') {
    url.pathname = request.cookies.get('zarbol_locale')?.value === 'fa' ? '/fa' : '/de';
    const response = NextResponse.redirect(url, 307);
    response.headers.set('Cache-Control','private, no-store');
    response.headers.set('Vary','Cookie');
    return response;
  }
  if (/^\/(lernpaket|ueber-die-sammlung|sprichwoerter|themen)(\/|$)/.test(url.pathname)) {
    url.pathname = '/de' + url.pathname.replace(/\/$/,'');
    return NextResponse.redirect(url, 308);
  }
  const headers = new Headers(request.headers);
  headers.set('x-zarbol-locale', /^\/fa(\/|$)/.test(url.pathname) ? 'fa' : 'de');
  return NextResponse.next({request:{headers}});
}
