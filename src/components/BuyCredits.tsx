"use client";

export default function BuyCredits() {
  async function buyCredits(pack: "single" | "five" | "twenty") {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pack }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Checkout failed");
      return;
    }

    window.location.href = data.url;
  }

  return (
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      <button
        onClick={() => buyCredits("single")}
        className="rounded-2xl border bg-white p-5 text-left shadow-sm"
      >
        <p className="text-2xl font-black">$2</p>
        <p className="mt-1 font-bold">1 PDF Download</p>
      </button>

      <button
        onClick={() => buyCredits("five")}
        className="rounded-2xl border bg-white p-5 text-left shadow-sm"
      >
        <p className="text-2xl font-black">$8</p>
        <p className="mt-1 font-bold">5 PDF Downloads</p>
      </button>

      <button
        onClick={() => buyCredits("twenty")}
        className="rounded-2xl border bg-white p-5 text-left shadow-sm"
      >
        <p className="text-2xl font-black">$25</p>
        <p className="mt-1 font-bold">20 PDF Downloads</p>
      </button>
    </div>
  );
}