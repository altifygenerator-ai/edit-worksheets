"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href = "/dashboard";
  }

  async function signup() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Account created. Check your email if confirmation is turned on.");
    window.location.href = "/dashboard";
  }

  return (
    <main className="min-h-screen bg-[#f7f2e8] px-6 py-20 text-neutral-950">
      <div className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <Link href="/" className="text-sm font-bold text-emerald-700">
          ← Back to home
        </Link>

        <h1 className="mt-6 text-3xl font-black">Sign in or create account</h1>

        <p className="mt-3 text-neutral-600">
          Create an account to buy credits and download printable worksheets.
        </p>

        <input
          className="mt-6 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="mt-4 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="mt-6 w-full rounded-xl bg-neutral-950 px-4 py-3 font-bold text-white"
        >
          Sign in
        </button>

        <button
          onClick={signup}
          className="mt-3 w-full rounded-xl border border-neutral-300 px-4 py-3 font-bold"
        >
          Create account
        </button>
      </div>
    </main>
  );
}