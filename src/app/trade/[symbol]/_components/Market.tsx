"use client";

import { useState } from "react";
import { Card } from "@/components/card/Card";
import { Tabs } from "@/components/tabs/Tabs";
import MarketList from "./Market/MarketList";
import Search from "@/components/search/Search";

export default function Market() {
  const [selected, setSelected] = useState("USDT");
  const [search, setSearch] = useState("");

  return (
    <Card
      style={{ gridArea: "market" }}
      px={0}
      header={
        <>
          <Search search={search} setSearch={setSearch} />
          <Card.Header>
            <Tabs.Wrapper
              list={["Pre-Market", "USDT", "FDUSD", "TUSD"]}
              selected={selected}
              setSelected={setSelected}
            >
              <Tabs.TabList />
            </Tabs.Wrapper>
          </Card.Header>
        </>
      }
    >
      <div className="max-h-[350px] overflow-y-scroll">
        <MarketList search={search} />
      </div>
    </Card>
  );
}
