import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Home() {
    return (_jsxs("div", { className: "min-h-screen w-full bg-black text-white font-inter", children: [_jsx(Header, {}), _jsxs("section", { id: "top", className: "relative h-screen flex items-center justify-center text-center overflow-hidden", children: [_jsx("video", { className: "absolute inset-0 h-full w-full object-cover", src: "/hero.mp4", autoPlay: true, muted: true, loop: true, playsInline: true }), _jsx("div", { className: "absolute inset-0 bg-black/45" }), _jsx("div", { className: "relative z-10 px-6 w-full", children: _jsx("div", { className: "mx-auto max-w-5xl", children: _jsxs("h1", { className: "text-5xl sm:text-6xl lg:text-7xl font-light leading-snug tracking-tight", children: ["AI-Driven Automation", _jsx("br", {}), "for Every Operation"] }) }) })] }), _jsx(Footer, {})] }));
}
