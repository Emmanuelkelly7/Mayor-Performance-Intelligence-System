// src/middleware.ts
import { NextResponse } from 'next/server';

export function middleware() {
  // In a real app, you would check for a JWT cookie or similar.
  // For this mock, we'll check a custom header or just skip for now 
  // since localStorage isn't available in middleware.
  // We will handle protection on the client side for this simulation
  // or use a cookie-based approach if requested.
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/analytics/:path*', '/insights/:path*'],
};
