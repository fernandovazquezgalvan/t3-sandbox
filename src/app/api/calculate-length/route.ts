import { type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = body.name as string;

    if (!name) {
      return Response.json({ error: "Name is required" }, { status: 400 });
    }

    return Response.json({ length: name.trim().length });
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
} 