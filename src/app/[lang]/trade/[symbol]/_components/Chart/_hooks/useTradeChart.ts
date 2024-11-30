import { useEffect } from "react";
import {
  createChart,
  CrosshairMode,
  LineStyle,
  MouseEventHandler,
  type MouseEventParams,
  type Time,
} from "lightweight-charts";
import { random } from "lodash";
import dayjs from "dayjs";
import numeral from "numeral";
import mockData from "@/app/[lang]/trade/[symbol]/_mock/dummyChart.json";

const maData = mockData.map((item) => ({
  time: item.time,
  value: item.close + random(-2000, 1000),
}));
const volumeData = mockData.map((item) => ({
  time: item.time,
  value: item.close * 10 + random(-500000, 500000),
  trend: item.close > item.open ? "up" : "down",
}));

export const useTradeChart = (
  chartContainerRef: React.RefObject<HTMLDivElement>,
  chartLegendRef: React.RefObject<HTMLDivElement>,
  maLegendRef: React.RefObject<HTMLDivElement>,
  volumeLegendRef: React.RefObject<HTMLDivElement>
) => {
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
    candlestickSeries.priceScale().applyOptions({
      scaleMargins: {
        top: 0,
        bottom: 0.3,
      },
    });

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
    baselineSeries.priceScale().applyOptions({
      scaleMargins: {
        top: 0,
        bottom: 0.3,
      },
    });

    const volumeSeries = chart.addHistogramSeries({
      priceFormat: {
        type: "volume",
      },
      priceScaleId: "", // set as an overlay by setting a blank priceScaleId
      lastValueVisible: false,
      priceLineVisible: false,
      color: "#707A8A",
    });
    volumeSeries.priceScale().applyOptions({
      scaleMargins: {
        top: 0.85,
        bottom: 0,
      },
    });
    volumeSeries.setData(
      volumeData.map((item) => ({
        time: item.time,
        value: item.value,
        color: item.trend === "up" ? "#2EBD85" : "#F6465D",
      }))
    );

    const chartLegend = chartLegendRef.current;
    const maLegend = maLegendRef.current;
    const volumeLegend = volumeLegendRef.current;

    const setChartLegendHtml = ({
      time,
      open,
      high,
      low,
      close,
      trend,
    }: {
      time: string;
      open: number;
      high: number;
      low: number;
      close: number;
      trend: "up" | "down";
    }) => {
      if (!chartLegend) return;
      const color = trend === "up" ? "#2EBD85" : "#F6465D";

      const formattedTime = dayjs(time).format("YYYY/MM/DD 00:00");
      chartLegend.innerHTML = `
        <span>${formattedTime}</span>
        <p>
          open: <strong style="color: ${color}">${open}</strong>
        </p>
        <p>
          high: <strong style="color: ${color}">${high}</strong>
        </p>
        <p>
          low: <strong style="color: ${color}">${low}</strong>
        </p>
        <p>
          close: <strong style="color: ${color} !important">${close}</strong>
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

    const setVolumeLegendHtml = ({ value }: { value: number }) => {
      if (!volumeLegend) return;
      volumeLegend.innerHTML = `
        <span>Vol:</span>
        <p class="text-[var(--color-PrimaryText)]">${numeral(value).format(
          "0.000a"
        )}</p>
      `;
    };

    const updateLegend: MouseEventHandler<Time> = (param) => {
      const validCrosshairPoint = !(
        param === undefined || param.time === undefined
      );
      if (!validCrosshairPoint) return;

      const chartData = param.seriesData.get(candlestickSeries) as {
        time: string;
        open: number;
        high: number;
        low: number;
        close: number;
      };
      const maData = param.seriesData.get(baselineSeries) as { value: number };
      const volumeData = param.seriesData.get(volumeSeries) as {
        value: number;
      };
      const trend = chartData.close > chartData.open ? "up" : "down";

      setChartLegendHtml({ ...chartData, trend });
      setMaLegendHtml(maData);
      setVolumeLegendHtml(volumeData);
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
  }, [chartContainerRef, chartLegendRef, maLegendRef, volumeLegendRef]);

  return {};
};
