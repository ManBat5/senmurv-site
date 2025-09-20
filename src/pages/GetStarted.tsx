import React, { useState } from "react";

export default function GetStarted() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    notes: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body =
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Company: ${form.company}\n\n` +
      `Notes:\n${form.notes}\n`;
    const url = `mailto:hello@senmurv.ai?subject=${encodeURIComponent(
      "Pilot Request"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <div className="mx-auto max-w-2xl px-4 pt-24 pb-24">
      <h1 className="font-head text-3xl tracking-[.18em] mb-6">Request a Pilot</h1>
      <form onSubmit={submit} className="space-y-4">
        {(["name","email","company"] as const).map((k) => (
          <div key={k}>
            <label className="block text-sm text-white/80 mb-1 capitalize">{k}</label>
            <input
              required={k !== "company"}
              type={k === "email" ? "email" : "text"}
              className="w-full rounded-xl bg-neutral-900 border border-white/15 px-3 py-2 outline-none focus:border-white/40"
              value={(form as any)[k]}
              onChange={(e) => setForm({ ...form, [k]: e.target.value })}
            />
          </div>
        ))}

        <div>
          <label className="block text-sm text-white/80 mb-1">Notes</label>
          <textarea
            rows={6}
            className="w-full rounded-xl bg-neutral-900 border border-white/15 px-3 py-2 outline-none focus:border-white/40"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          />
        </div>

        <button type="submit" className="rounded-full bg-white text-black font-medium px-5 py-2">
          Send to hello@senmurv.ai
        </button>
      </form>
      <p className="text-xs text-white/50 mt-3">This opens your email client with the details filled in.</p>
    </div>
  );
}
