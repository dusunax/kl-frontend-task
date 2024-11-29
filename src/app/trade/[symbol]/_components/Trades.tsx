"use client";

import { useState } from "react";
import { Card } from "@/components/card/Card";
import { Tabs } from "@/components/tabs/Tabs";
import OrderBookItemHeader from "./OrderBook/OrderBookItemHeader";
import OrderBookList from "./OrderBook/OrderBookList";
import DUMMY_LIST from "../_mock/dummyOrderBook.json";

export default function Trades() {
  const [selected, setSelected] = useState("Market Trades");

  return (
    <Card
      style={{ gridArea: "trades" }}
      header={
        <Card.Header>
          <Tabs.Wrapper
            list={["Market Trades", "My Trades"]}
            selected={selected}
            setSelected={setSelected}
          >
            <Tabs.TabList />
          </Tabs.Wrapper>
        </Card.Header>
      }
    >
      <div className="mt-2">
        <OrderBookItemHeader />
      </div>

      <div className="max-h-[260px] overflow-y-scroll">
        <OrderBookList
          list={DUMMY_LIST.buy}
          isHigherThanBefore={true}
          filter="all"
        >
          <OrderBookList.List type="buy" onSelectOrder={() => {}} />
        </OrderBookList>
      </div>
    </Card>
  );
}
