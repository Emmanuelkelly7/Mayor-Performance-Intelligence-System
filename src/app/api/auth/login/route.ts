import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Simulate database lookup and validation
    if (email === 'mayor@cityhall.gov' && password === 'password') {
      return NextResponse.json({
        success: true,
        user: {
          id: '1',
          email: 'mayor@cityhall.gov',
          name: 'Executive Mayor',
          role: 'mayor',
        },
        token: 'mock-jwt-token-12345',
      });
    }

    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  } catch {
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
