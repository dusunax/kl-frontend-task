"use client";

import {
  createChart,
  CrosshairMode,
  LineStyle,
  type MouseEventHandler,
  type MouseEventParams,
  type Time,
} from "lightweight-charts";
import { random } from "lodash";
import { useEffect, useRef } from "react";
import mockData from "../../_mock/dummyChart.json";
import dayjs from "dayjs";

const maData = mockData.map((item) => ({
  time: item.time,
  value: item.close + random(-2000, 1000),
}));

export default function ChartContent() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartLegendRef = useRef<HTMLDivElement>(null);
  const maLegendRef = useRef<HTMLDivElement>(null);

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

    const chartLegend = chartLegendRef.current;
    const maLegend = maLegendRef.current;

    const setChartLegendHtml = ({
      time,
      open,
      high,
      low,
      close,
    }: {
      time: string;
      open: number;
      high: number;
      low: number;
      close: number;
    }) => {
      if (!chartLegend) return;
      const formattedTime = dayjs(time).format("YYYY/MM/DD 00:00");
      chartLegend.innerHTML = `
        <span>${formattedTime}</span>
        <p>
          open: <strong class="text-[var(--color-PrimaryText)]">${open}</strong>
        </p>
        <p>
          high: <strong class="text-[var(--color-PrimaryText)]">${high}</strong>
        </p>
        <p>
          low: <strong class="text-[var(--color-PrimaryText)]">${low}</strong>
        </p>
        <p>
          close: <strong class="text-[var(--color-PrimaryText)]">${close}</strong>
        </p>
      `;
    };

    const setMaLegendHtml = ({ value }: { value: number }) => {
      if (!maLegend) return;
      maLegend.innerHTML = `
        <span>MA(7):</span>
        <p class="text-[var(--color-primary)]">${value}</p>
      `;
    };

    const updateLegend: MouseEventHandler<Time> = (param) => {
      const validCrosshairPoint = !(
        param === undefined || param.time === undefined
      );
      if (!validCrosshairPoint) return;

      const data = param.seriesData.get(candlestickSeries) as {
        time: string;
        open: number;
        high: number;
        low: number;
        close: number;
      };
      const maData = param.seriesData.get(baselineSeries) as { value: number };

      setChartLegendHtml(data);
      setMaLegendHtml(maData);
    };

    chart.subscribeCrosshairMove(updateLegend);
    updateLegend({
      seriesData: {
        get: () => ({
          time: "2024-10-08",
          open: 72000,
          high: 73000,
          low: 71000,
          close: 72500,
        }),
      },
    } as unknown as MouseEventParams<Time>);

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
          return dayjs(time).format("YYYY/MM/DD 00:00");
        },
      },
    });
    chart.timeScale().fitContent();

    return () => {
      chart.remove();
    };
  }, []);

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
    </div>
  );
}
