import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  if (url.hostname === 'zarbol-masal.de') {
    url.protocol = 'https:';
    url.hostname = 'www.zarbol-masal.de';
    url.port = '';
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}
