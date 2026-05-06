"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

export default function Header() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setEmail(user?.email ?? null);
    }

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setEmail(session?.user?.email ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <header className="border-b border-neutral-200 bg-white px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="text-lg font-black text-neutral-950">
          EditWorksheets
        </Link>

   <nav className="flex items-center gap-4 text-sm">
  <Link
    href="/worksheets"
    className="font-semibold text-neutral-700 hover:text-neutral-950"
  >
    Worksheets
  </Link>

  <Link
    href="/5th-grade-editing-passages"
    className="hidden font-semibold text-neutral-700 hover:text-neutral-950 sm:inline"
  >
    Examples
  </Link>

  {email ? (
    <>
      <span className="hidden text-neutral-600 sm:inline">{email}</span>

      <Link
        href="/dashboard"
        className="rounded-full bg-neutral-950 px-4 py-2 font-bold text-white"
      >
        Dashboard
      </Link>

      <button
        onClick={handleSignOut}
        className="text-sm font-semibold text-neutral-600 underline underline-offset-4 hover:text-neutral-950"
      >
        Sign out
      </button>
    </>
  ) : (
    <Link
      href="/login"
      className="rounded-full bg-neutral-950 px-4 py-2 font-bold text-white"
    >
      Sign up
    </Link>
  )}
</nav>
      </div>
    </header>
  );
}