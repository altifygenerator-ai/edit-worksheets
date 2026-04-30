import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "LOGIN_REQUIRED" }, { status: 401 });
  }

  const { worksheetId } = await req.json();

  if (!worksheetId) {
    return NextResponse.json({ error: "Missing worksheet ID" }, { status: 400 });
  }

  const { error } = await supabase
    .from("worksheets")
    .delete()
    .eq("id", worksheetId)
    .eq("user_id", user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}