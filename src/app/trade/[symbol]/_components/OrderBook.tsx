"use client";
import { useState } from "react";
import { Card } from "@/components/card/Card";
import MeatBall from "@/assets/icons/svg-57.svg";
import OrderBookFilter from "./OrderBook/OrderBookFilter";
import OrderBookItemHeader from "./OrderBook/OrderBookItemHeader";
import OrderBookList from "./OrderBook/OrderBookList";

export type OrderBookFilterType = "all" | "buy" | "sell";
export interface OrderBookItem {
  price: number;
  amount: number;
  total: number;
}

const DUMMY_LIST = {
  buy: [
    { price: 95476.19, amount: 2.78586, total: 265.98 },
    { price: 95476.02, amount: 0.0001, total: 9.5476 },
    { price: 95476.01, amount: 0.00016, total: 15.27616 },
    { price: 95476.0, amount: 0.01188, total: 1.13 },
    { price: 95473.92, amount: 0.0001, total: 9.54739 },
    { price: 95473.9, amount: 0.00018, total: 17.1853 },
    { price: 95473.89, amount: 0.00018, total: 17.1853 },
    { price: 95473.88, amount: 0.00018, total: 17.1853 },
    { price: 95473.87, amount: 0.0001, total: 9.54739 },
    { price: 95473.3, amount: 0.00024, total: 22.91359 },
    { price: 95472.01, amount: 0.00016, total: 15.27552 },
    { price: 95472.0, amount: 0.00956, total: 912.71232 },
    { price: 95471.75, amount: 0.00051, total: 48.69059 },
    { price: 95470.68, amount: 0.00058, total: 55.37299 },
    { price: 95470.56, amount: 0.00014, total: 13.36588 },
    { price: 95470.55, amount: 0.00011, total: 10.50176 },
    { price: 95470.2, amount: 0.00064, total: 61.10093 },
  ],
  sell: [
    { price: 95626.11, amount: 0.1401, total: 13400 },
    { price: 95625.15, amount: 0.0001, total: 9.56251 },
    { price: 95625.0, amount: 0.0001, total: 9.5625 },
    { price: 95624.93, amount: 0.0001, total: 9.56249 },
    { price: 95624.48, amount: 0.26967, total: 25790 },
    { price: 95624.42, amount: 0.0001, total: 9.56244 },
    { price: 95624.0, amount: 0.0994, total: 9510 },
    { price: 95623.99, amount: 0.00029, total: 27.73096 },
    { price: 95622.94, amount: 0.0001, total: 9.56229 },
    { price: 95622.47, amount: 0.0001, total: 9.56225 },
    { price: 95622.42, amount: 0.0001, total: 9.56224 },
    { price: 95622.31, amount: 0.0001, total: 9.56223 },
    { price: 95622.18, amount: 0.0001, total: 9.56222 },
    { price: 95621.91, amount: 0.0001, total: 9.56219 },
    { price: 95621.9, amount: 0.0001, total: 9.56219 },
    { price: 95621.89, amount: 0.0001, total: 9.56219 },
    { price: 95620.02, amount: 5.79691, total: 554300 },
  ],
};

export default function OrderBook() {
  const [filter, setFilter] = useState<OrderBookFilterType>("all");

  return (
    <Card
      style={{ gridArea: "orderbook" }}
      header={
        <Card.Header>
          Order Book
          <MeatBall width={16} height={16} color="var(--color-IconNormal)" />
        </Card.Header>
      }
    >
      <OrderBookFilter filter={filter} setFilter={setFilter} />
      <OrderBookItemHeader />
      <OrderBookList list={DUMMY_LIST.buy} type="buy" isHigherThanBefore={true}>
        <OrderBookList.List type="sell" />
        <OrderBookList.Ticker />
        <OrderBookList.List type="buy" />
      </OrderBookList>
    </Card>
  );
}
