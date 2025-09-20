import { jsx as _jsx } from "react/jsx-runtime";
export default function AnimatedHeadline({ lines, className = "", startDelaySec = 0.05, perCharDelaySec = 0.028, lineStaggerSec = 0.18, }) {
    return (_jsx("h1", { className: className, children: lines.map((line, li) => (_jsx("div", { children: Array.from(line).map((ch, ci) => {
                const delay = startDelaySec + li * lineStaggerSec + ci * perCharDelaySec;
                return (_jsx("span", { className: "char", style: { animationDelay: `${delay}s` }, children: ch === " " ? "\u00A0" : ch }, ci));
            }) }, li))) }));
}
