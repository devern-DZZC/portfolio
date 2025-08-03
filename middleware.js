import { NextResponse } from 'next/server';

export function middleware(request) {
  const geo = request.geo;

  if (geo) {
    const country = geo.country || 'unknown';
    const region = geo.region || 'unknown';
    const city = geo.city || 'unknown';

    console.log(`Visitor from ${city}, ${region}, ${country}`);
  }

  return NextResponse.next();
}
