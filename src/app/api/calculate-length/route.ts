import { NextResponse } from 'next/server';

interface NameRequest {
  name: string;
}

export async function POST(request: Request) {
  try {
    const { name } = await request.json() as NameRequest;
    const length = name.trim().length;
    
    return NextResponse.json({ length });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to calculate length' },
      { status: 400 }
    );
  }
} 