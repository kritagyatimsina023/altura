"use client";

import { useEffect, useState } from "react";

type ProgressBarProps = {
  data: unknown[];
};

const ProgressBar = ({ data }: ProgressBarProps) => {
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    const nums = document.querySelectorAll(".prog-index");

    const obs = new MutationObserver(() => {
      nums.forEach((el, i) => {
        const element = el as HTMLElement;

        if (element.dataset.active === "true") {
          setActive(i);
        }
      });
    });

    nums.forEach((el) => {
      obs.observe(el, {
        attributes: true,
        attributeFilter: ["data-active"],
      });
    });

    return () => obs.disconnect();
  }, []);

  const pct = data.length <= 1 ? 100 : (active / (data.length - 1)) * 100;

  return (
    <div className="fixed left-10 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col items-center gap-8">
      {/* Progress Line */}
      <div className="relative w-[1px] h-40 bg-white/10">
        <div
          className="absolute top-0 w-full bg-white origin-top transition-all duration-500"
          style={{ height: `${pct}%` }}
        />
      </div>

      {/* Numbers */}
      <div className="flex flex-col gap-4 text-[10px] font-bold tracking-tighter">
        {data.map((_, i) => (
          <span
            key={i}
            data-active={i === active ? "true" : "false"}
            className={`prog-index transition-all duration-500 ${
              active === i ? "text-white scale-125" : "text-zinc-600"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
