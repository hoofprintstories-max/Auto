import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  return NextResponse.json({
    accepted: true,
    workflow: [
      "script",
      "storyboard",
      "assets",
      "voiceover",
      "timeline",
      "render",
      "export"
    ],
    input: body
  });
}
