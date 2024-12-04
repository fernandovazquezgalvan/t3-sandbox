import { type NextRequest } from "next/server";

interface RequestBody {
  name: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as RequestBody;
    
    if (!body.name || typeof body.name !== 'string') {
      return Response.json({ error: "Name is required and must be a string" }, { status: 400 });
    }

    return Response.json({ length: body.name.trim().length });
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
} 