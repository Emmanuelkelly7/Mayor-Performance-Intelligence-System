import { NextResponse } from 'next/server';
import { mockMetrics } from '@/lib/mock-db';

export async function GET() {
  // Simulate database latency
  await new Promise(resolve => setTimeout(resolve, 500));

  return NextResponse.json({
    success: true,
    data: mockMetrics,
  });
}
