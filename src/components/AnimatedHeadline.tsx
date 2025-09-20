import React from "react";

type Props = {
  lines: string[];
  className?: string;
  startDelaySec?: number;   // delay before the first char
  perCharDelaySec?: number; // spacing between chars
  lineStaggerSec?: number;  // extra delay between lines
};

export default function AnimatedHeadline({
  lines,
  className = "",
  startDelaySec = 0.05,
  perCharDelaySec = 0.028,
  lineStaggerSec = 0.18,
}: Props) {
  return (
    <h1 className={className}>
      {lines.map((line, li) => (
        <div key={li}>
          {Array.from(line).map((ch, ci) => {
            const delay = startDelaySec + li * lineStaggerSec + ci * perCharDelaySec;
            return (
              <span
                key={ci}
                className="char"
                style={{ animationDelay: `${delay}s` }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            );
          })}
        </div>
      ))}
    </h1>
  );
}
