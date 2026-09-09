export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <style>{`
        @keyframes car-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes speed-line {
          0% { transform: translateX(8px); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateX(-16px); opacity: 0; }
        }
        @keyframes road-move {
          to { background-position: -28px 0; }
        }
        .car-bounce { animation: car-bounce 1.1s ease-in-out infinite; }
        .speed-line { animation: speed-line 0.9s linear infinite; }
        .road-line { animation: road-move 0.5s linear infinite; }
      `}</style>

      <div className="flex flex-col items-center justify-center gap-6 -translate-y-2">
        <div className="relative flex h-28 w-64 flex-col items-center justify-end">
          <div className="absolute left-2 top-8 flex flex-col gap-2">
            <span
              className="speed-line block h-0.5 w-6 rounded-full bg-white/70"
              style={{ animationDelay: "0s" }}
            />
            <span
              className="speed-line block h-0.5 w-8 rounded-full bg-white/70"
              style={{ animationDelay: "0.15s" }}
            />
            <span
              className="speed-line block h-0.5 w-5 rounded-full bg-white/70"
              style={{ animationDelay: "0.3s" }}
            />
          </div>

          <div className="car-bounce">
            <svg viewBox="0 0 120 46" width="170" height="65" fill="none">
              <path
                d="M102,34 L102,27 Q102,23 98,23 L84,23 L74,11 Q72,9 69,9 L51,9 Q48,9 46,11 L36,23 L22,23 Q18,23 18,27 L18,34"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="60"
                y1="10"
                x2="60"
                y2="23"
                stroke="white"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <line
                x1="18"
                y1="34"
                x2="102"
                y2="34"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="100" cy="20" r="1.6" fill="white" />

              <g>
                <circle cx="34" cy="34" r="8" fill="black" stroke="white" strokeWidth="3" />
                <g>
                  <line x1="34" y1="29" x2="34" y2="39" stroke="white" strokeWidth="1.5" />
                  <line x1="29" y1="34" x2="39" y2="34" stroke="white" strokeWidth="1.5" />
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 34 34"
                    to="360 34 34"
                    dur="0.5s"
                    repeatCount="indefinite"
                  />
                </g>
              </g>
              <g>
                <circle cx="86" cy="34" r="8" fill="black" stroke="white" strokeWidth="3" />
                <g>
                  <line x1="86" y1="29" x2="86" y2="39" stroke="white" strokeWidth="1.5" />
                  <line x1="81" y1="34" x2="91" y2="34" stroke="white" strokeWidth="1.5" />
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 86 34"
                    to="360 86 34"
                    dur="0.5s"
                    repeatCount="indefinite"
                  />
                </g>
              </g>
            </svg>
          </div>

          <div
            className="road-line mt-1 h-0.5 w-56 rounded-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 8px, transparent 8px, transparent 18px)",
            }}
          />
        </div>

        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.25em] text-white/90 sm:text-xs">
          <span>driving to the next destination...</span>
          <span>100%</span>
        </div>
      </div>
    </main>
  );
}
