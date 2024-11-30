"use client";

import { useRef } from "react";
import { useTradeChart } from "./_hooks/useTradeChart";

export default function ChartContent() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartLegendRef = useRef<HTMLDivElement>(null);
  const maLegendRef = useRef<HTMLDivElement>(null);
  const volumeLegendRef = useRef<HTMLDivElement>(null);

  useTradeChart(
    chartContainerRef,
    chartLegendRef,
    maLegendRef,
    volumeLegendRef
  );

  return (
    <div className="w-full h-[420px] relative">
      <div
        ref={chartContainerRef}
        id="chart"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <div className="absolute top-0 left-0 p-2 text-xs font-bold text-[var(--color-TertiaryText)]">
        <div ref={chartLegendRef} id="chart-legend" className="flex gap-2" />
        <div ref={maLegendRef} id="ma-legend" className="flex gap-2" />
      </div>
      <div className="absolute bottom-[90px] left-0 p-2 text-xs font-bold text-[var(--color-TertiaryText)]">
        <div ref={volumeLegendRef} id="volume-legend" className="flex gap-2" />
      </div>
    </div>
  );
}
