"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function CreditCounter({
  refreshKey = 0,
}: {
  refreshKey?: number;
}) {
  const [credits, setCredits] = useState<number | null>(null);

  useEffect(() => {
    async function loadCredits() {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setCredits(null);
        return;
      }

      const { data } = await supabase
        .from("profiles")
        .select("pdf_credits")
        .eq("id", user.id)
        .single();

      setCredits(data?.pdf_credits ?? 0);
    }

    loadCredits();
  }, [refreshKey]);

  if (credits === null) {
    return (
      <span className="rounded-full bg-neutral-100 px-3 py-2 text-xs font-bold text-neutral-600">
        Sign in to download
      </span>
    );
  }

  return (
    <span className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
      {credits} PDF credit{credits === 1 ? "" : "s"}
    </span>
  );
}