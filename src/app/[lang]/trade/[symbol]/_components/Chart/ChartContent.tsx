"use client";

import { createChart, CrosshairMode, LineStyle } from "lightweight-charts";
import { random } from "lodash";
import { useEffect, useRef } from "react";
import mockData from "../../_mock/dummyChart.json";

const maData = mockData.map((item) => ({
  time: item.time,
  value: item.close + random(-2000, 1000),
}));

export default function ChartContent() {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.offsetWidth,
      height: 420,
      layout: {
        background: {
          color: "transparent",
        },
        textColor: "#fff",
      },
      grid: {
        vertLines: {
          color: "#444",
          style: LineStyle.Dotted,
        },
        horzLines: {
          color: "#444", // 수평선 색상
          style: LineStyle.Dotted,
        },
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#0ECB81",
      downColor: "#F6465D",
      borderUpColor: "#0ECB81",
      borderDownColor: "#F6465D",
      wickUpColor: "#0ECB81",
      wickDownColor: "#F6465D",
      lastValueVisible: false,
      priceLineVisible: false,
    });
    candlestickSeries.setData(mockData);

    const baselineSeries = chart.addBaselineSeries({
      topLineColor: "#FCD535",
      topFillColor1: "rgba(0,0,0,0)",
      topFillColor2: "rgba(0,0,0,0)",
      bottomLineColor: "#FCD535",
      bottomFillColor1: "rgba(0,0,0,0)",
      bottomFillColor2: "rgba(0,0,0,0)",
      lineWidth: 1,
      lastValueVisible: false,
      priceLineVisible: false,
      crosshairMarkerVisible: false,
    });
    baselineSeries.setData(maData);

    chart.applyOptions({
      crosshair: {
        mode: CrosshairMode.Normal,
        vertLine: {
          labelBackgroundColor: "#707A8A",
        },
        horzLine: {
          labelBackgroundColor: "#707A8A",
        },
      },
      localization: {
        locale: "en",
        timeFormatter: (time: Date) => {
          const date = new Date(time);
          return `${date.getMonth() + 1}/${date.getDate()}`;
        },
      },
    });
    chart.timeScale().fitContent();

    return () => {
      chart.remove();
    };
  }, []);

  return (
    <div
      ref={chartContainerRef}
      id="chart"
      style={{
        width: "100%",
        height: "420px",
        position: "relative",
      }}
    />
  );
}
