import { NextResponse } from 'next/server';
import { mockMetrics } from '@/lib/mock-db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get('format') || 'json';

  // Simulate generation latency
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (format === 'csv') {
    // Basic CSV generation simulation
    let csv = 'Metric,Value,Unit,Trend\n';
    mockMetrics.forEach(m => {
      csv += `"${m.name}",${m.value},"${m.unit}",${m.trend}\n`;
    });

    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="executive_report.csv"',
      },
    });
  }

  // Default JSON response
  return NextResponse.json({
    success: true,
    data: mockMetrics,
    generatedAt: new Date().toISOString()
  });
}
