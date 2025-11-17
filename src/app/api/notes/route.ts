import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/notes
export async function GET() {
  const notes = await prisma.greeting.findMany({
    orderBy: { id: "desc" },
  });
  return NextResponse.json(notes);
}

// POST /api/notes
export async function POST(req: Request) {
  const body = await req.json();
  const { name, message } = body;

  if (!name || !message) {
    return NextResponse.json(
      { error: "Nombre y mensaje son requeridos" },
      { status: 400 }
    );
  }

  const newNote = await prisma.greeting.create({
    data: { name, message },
  });

  return NextResponse.json({ success: true, note: newNote }, { status: 201 });
}
