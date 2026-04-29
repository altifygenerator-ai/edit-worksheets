"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function DownloadButton({
  onDownload,
}: {
  onDownload: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [user, setUser] = useState<any>(null);

  const router = useRouter();
  const supabase = createClient();

  // 🔹 Get logged-in user
  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    }

    getUser();
  }, []);

  const isLoggedIn = !!user;

  // 🔹 Handle click
  function handleClick() {
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }

    onDownload();
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        onClick={handleClick}
        className="rounded-xl bg-neutral-950 px-6 py-3 font-bold text-white transition hover:bg-neutral-800"
      >
        Download PDF
      </button>

      {/* 🔻 Tooltip when NOT logged in */}
      {!isLoggedIn && hovered && (
        <div className="absolute left-1/2 top-full z-10 mt-2 w-60 -translate-x-1/2 rounded-lg bg-black px-3 py-2 text-xs text-white shadow-lg">
          Sign in to download a clean printable PDF
        </div>
      )}
    </div>
  );
}