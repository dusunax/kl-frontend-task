"use client";
import { useState } from "react";
import type { OrderItem } from "@/types/order";

export default function useSelectOrderContent() {
  const [selectedOrder, setSelectedOrder] = useState<
    OrderItem & { type: "sell" | "buy"; }
  >({
    price: 0,
    amount: 0,
    total: 0,
    type: "sell",
    sumBTC: 0,
  });

  const handleSelectOrder = (
    order: OrderItem,
    type: "sell" | "buy",
    target: "price" | "amount" | "total"
  ) => {
    setSelectedOrder((prev) => ({
      ...prev,
      ...order,
      type,
      ...(target === "price" ? { sumBTC: 0 } : {}),
    }));
  };

  return { selectedOrder, handleSelectOrder };
}
