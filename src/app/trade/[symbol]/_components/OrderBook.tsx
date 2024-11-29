"use client";
import { useState } from "react";
import { Card } from "@/components/card/Card";
import MeatBall from "@/assets/icons/svg-57.svg";
import type {
  OrderBookFilter as OrderBookFilterType,
} from "@/types/order";
import OrderBookFilter from "./OrderBook/OrderBookFilter";
import OrderBookItemHeader from "./OrderBook/OrderBookItemHeader";
import OrderBookList from "./OrderBook/OrderBookList";
import useSelectOrderContent from "../_hooks/useSelectOrderContent";
import DUMMY_LIST from "../_mock/dummyOrderBook.json";

export default function OrderBook({
  onSelectOrder,
}: {
  onSelectOrder: ReturnType<typeof useSelectOrderContent>["handleSelectOrder"];
}) {
  const [filter, setFilter] = useState<OrderBookFilterType>("all");

  return (
    <Card
      style={{ gridArea: "orderbook", height: "860px" }}
      header={
        <Card.Header>
          Order Book
          <MeatBall width={16} height={16} color="var(--color-IconNormal)" />
        </Card.Header>
      }
    >
      <OrderBookFilter filter={filter} setFilter={setFilter} />
      <div className="mb-2">
        <OrderBookItemHeader />
      </div>
      <OrderBookList
        list={DUMMY_LIST.buy}
        filter={filter}
        isHigherThanBefore={true}
      >
        {filter !== "buy" && (
          <div className="max-h-[710px] overflow-y-scroll">
            <OrderBookList.List type="sell" onSelectOrder={onSelectOrder} />
          </div>
        )}

        <OrderBookList.Ticker />

        {filter !== "sell" && (
          <div className="max-h-[710px] overflow-y-scroll">
            <OrderBookList.List type="buy" onSelectOrder={onSelectOrder} />
          </div>
        )}
      </OrderBookList>
    </Card>
  );
}
