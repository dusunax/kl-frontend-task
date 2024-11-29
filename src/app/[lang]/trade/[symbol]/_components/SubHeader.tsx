"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/card/Card";
import Star from "@/assets/icons/svg-50.svg";

export default function SubHeader() {
  const isHigherThanBefore = true;
  const is24hChangeHigherThanBefore = true;
  const tokenTags = ["POW", "Payments", "Vol", "Hot", "Price Protection"];

  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => setIsFavorite(!isFavorite);

  return (
    <Card style={{ gridArea: "subHeader" }}>
      <div className="h-full flex items-center gap-2">
        <button
          type="button"
          className={`border rounded-md flex items-center justify-center w-6 h-6 outline-none ${
            isFavorite
              ? "border-[var(--color-PrimaryYellow)]"
              : "border-[var(--color-DisabledText)]"
          }`}
          onClick={handleFavorite}
        >
          <Star
            width={16}
            height={16}
            color={
              isFavorite
                ? "var(--color-PrimaryYellow)"
                : "var(--color-DisabledText)"
            }
          />
        </button>

        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-bold">BTC/USDT</h1>
          <Link
            href="#"
            className="underline text-xs text-[var(--color-TertiaryText)] mb-1"
          >
            Bitcoin Price
          </Link>
        </div>

        <div className="mx-2">
          <p
            className={`text-xl font-black ${
              isHigherThanBefore
                ? "text-[var(--color-success)]"
                : "text-[var(--color-error)]"
            }`}
          >
            95,752.00
          </p>
          <p className="text-xs font-semibold mb-1">$95,752.00</p>
        </div>

        <ol className="flex items-center gap-4">
          <li>
            <p className="text-xs text-[var(--color-TertiaryText)]">
              24h Change
            </p>
            <p
              className={`text-xs font-semibold ${
                is24hChangeHigherThanBefore
                  ? "text-[var(--color-success)]"
                  : "text-[var(--color-error)]"
              }`}
            >
              2,337.53 +2.51%
            </p>
          </li>
          <li>
            <p className="text-xs text-[var(--color-TertiaryText)]">24h High</p>
            <p className="text-xs font-semibold">95,752.00</p>
          </li>
          <li>
            <p className="text-xs text-[var(--color-TertiaryText)]">24h Low</p>
            <p className="text-xs font-semibold">90,791.10</p>
          </li>
          <li>
            <p className="text-xs text-[var(--color-TertiaryText)]">
              24h Volume(USDT)
            </p>
            <p className="text-xs font-semibold">4,148,137,618.44</p>
          </li>
          <li>
            <p className="text-xs text-[var(--color-TertiaryText)]">
              Token Tags
            </p>
            <p className="text-xs font-semibold flex items-center gap-1">
              {tokenTags.map((e) => (
                <span
                  className="text-[var(--color-TextLink)] bg-[var(--color-CUSTOM-yellow)] px-[3px] py-[1px] rounded-sm"
                  key={e}
                >
                  {e}
                </span>
              ))}
            </p>
          </li>
        </ol>
      </div>
    </Card>
  );
}
