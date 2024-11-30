"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ConnectionStatus from "./Footer/ConnectionStatus";

export type ConnectionStatusType =
  | "Stable Connection"
  | "Unstable Connection"
  | "Disconnected"
  | "Connecting";

const TIMEOUT_DURATION = 500;

const ping = async () => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_DURATION);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ping`, {
      signal: controller.signal,
    });
    clearTimeout(timeout);

    return { ok: response.ok, aborted: false };
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.log("접속 시간 초과");
      return { ok: false, aborted: true };
    }
    return { ok: false, aborted: false };
  }
};

export default function Footer() {
  const [status, setStatus] = useState<ConnectionStatusType>("Connecting");

  const { data, isFetching } = useQuery({
    queryKey: ["ping"],
    queryFn: () => ping(),
    staleTime: 0,
    refetchInterval: status === "Stable Connection" ? 30 * 1000 : 5 * 1000,
  });

  useEffect(() => {
    if (data === undefined || isFetching) {
      setStatus("Connecting");
    } else if (data.aborted) {
      setStatus("Unstable Connection");
    } else {
      setStatus(data.ok ? "Stable Connection" : "Disconnected");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <footer className="h-8 fixed items-center bottom-0 w-full bg-[var(--color-BasicBg)] border-t-4 border-[var(--color-TradeBg)] rounded-md px-4 pb-1">
      <ConnectionStatus status={status} />
    </footer>
  );
}
