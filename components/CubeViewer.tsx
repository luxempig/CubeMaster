import { useEffect, useRef } from "react";

type Props = {
  alg: string;
  onStateChange: (state: string) => void;
};

export default function CubeViewer({ alg, onStateChange }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.jsdelivr.net/npm/@cubing/twisty";
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!hostRef.current) return;
    hostRef.current.innerHTML = "";
    const el = document.createElement("twisty-player");
    el.setAttribute("visualization", "3D");
    el.setAttribute("background", "none");
    el.setAttribute("controls", "play-pause");
    el.style.width = "340px";
    el.style.height = "340px";
    // @ts-ignore
    el.alg = alg;
    hostRef.current.appendChild(el);
  }, [alg]);

  function appendMove(m: string) {
    const next = alg.trim() ? `${alg} ${m}` : m;
    onStateChange(next);
  }

  const MOVES = [
    "U",
    "U'",
    "U2",
    "R",
    "R'",
    "R2",
    "F",
    "F'",
    "F2",
    "L",
    "L'",
    "L2",
    "D",
    "D'",
    "D2",
    "B",
    "B'",
    "B2",
  ];

  return (
    <div style={{ display: "grid", gap: 10 }}>
      <div ref={hostRef} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(52px, 1fr))",
          gap: 6,
        }}
      >
        {MOVES.map((m) => (
          <button
            key={m}
            onClick={() => appendMove(m)}
            style={{
              border: "1px solid #ddd",
              padding: "8px 6px",
              borderRadius: 8,
              fontFamily: "monospace",
            }}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
}
