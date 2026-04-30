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

  const worksheet = await req.json();

  if (!worksheet?.studentText) {
    return NextResponse.json({ error: "Missing worksheet" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("worksheets")
    .insert({
      user_id: user.id,
      title: worksheet.title || "Editing Worksheet",
      worksheet_json: worksheet,
    })
    .select("id")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ id: data.id });
}