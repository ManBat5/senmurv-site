import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function GetStarted() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        notes: "",
    });
    const submit = (e) => {
        e.preventDefault();
        const body = `Name: ${form.name}\n` +
            `Email: ${form.email}\n` +
            `Company: ${form.company}\n\n` +
            `Notes:\n${form.notes}\n`;
        const url = `mailto:hello@senmurv.ai?subject=${encodeURIComponent("Pilot Request")}&body=${encodeURIComponent(body)}`;
        window.location.href = url;
    };
    return (_jsxs("div", { className: "mx-auto max-w-2xl px-4 pt-24 pb-24", children: [_jsx("h1", { className: "font-head text-3xl tracking-[.18em] mb-6", children: "Request a Pilot" }), _jsxs("form", { onSubmit: submit, className: "space-y-4", children: [["name", "email", "company"].map((k) => (_jsxs("div", { children: [_jsx("label", { className: "block text-sm text-white/80 mb-1 capitalize", children: k }), _jsx("input", { required: k !== "company", type: k === "email" ? "email" : "text", className: "w-full rounded-xl bg-neutral-900 border border-white/15 px-3 py-2 outline-none focus:border-white/40", value: form[k], onChange: (e) => setForm({ ...form, [k]: e.target.value }) })] }, k))), _jsxs("div", { children: [_jsx("label", { className: "block text-sm text-white/80 mb-1", children: "Notes" }), _jsx("textarea", { rows: 6, className: "w-full rounded-xl bg-neutral-900 border border-white/15 px-3 py-2 outline-none focus:border-white/40", value: form.notes, onChange: (e) => setForm({ ...form, notes: e.target.value }) })] }), _jsx("button", { type: "submit", className: "rounded-full bg-white text-black font-medium px-5 py-2", children: "Send to hello@senmurv.ai" })] }), _jsx("p", { className: "text-xs text-white/50 mt-3", children: "This opens your email client with the details filled in." })] }));
}
