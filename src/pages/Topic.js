import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
const copy = {
    "defense-infrastructure": {
        title: "Defense & Infrastructure",
        body: [
            "Harden critical systems with on-prem intelligence that learns in place and stays under control.",
            "Closed, sovereign deployments; measurable improvements with rollback on regression."
        ],
    },
    "working-intelligence": {
        title: "Working Intelligence",
        body: [
            "A decision-maker, not a dashboard. Builds causal models, tests hypotheses, and proves gains in reality.",
        ],
    },
    "on-prem": {
        title: "On-Prem",
        body: [
            "Data stays where it belongs. Proven skills ship as signed, portable capsules.",
        ],
    },
    rd: {
        title: "R&D",
        body: [
            "Multi-agent AGI with governed learning: guardrails → canaries → promotion, with instant rollback if needed.",
        ],
    },
    security: {
        title: "Security",
        body: [
            "Detect pre-incident patterns and respond with proportionate, non-lethal deterrence.",
        ],
    },
    operations: {
        title: "Operations",
        body: [
            "Recover throughput, prevent downtime, stabilize flows — outcomes over instructions.",
        ],
    },
};
export default function Topic() {
    const { slug = "" } = useParams();
    const data = copy[slug] ?? { title: "Topic", body: ["Coming soon."] };
    return (_jsxs("div", { className: "mx-auto max-w-3xl px-4 pt-20 pb-24", children: [_jsx("h1", { className: "font-head text-4xl tracking-[.18em] mb-6", children: data.title }), data.body.map((p, i) => (_jsx("p", { className: "text-white/80 leading-relaxed mt-4", children: p }, i)))] }));
}
