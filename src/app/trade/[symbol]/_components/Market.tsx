"use client";

import { useState } from "react";
import { Card } from "@/components/card/Card";
import { Tabs } from "@/components/tabs/Tabs";

export default function Market() {
  const [selected, setSelected] = useState("USDT");

  return (
    <Card
      style={{ gridArea: "market" }}
      header={
        <Card.Header>
          <Tabs.Wrapper
            list={["Pre-Market", "USDT", "FDUSD", "TUSD"]}
            selected={selected}
            setSelected={setSelected}
          >
            <Tabs.TabList />
          </Tabs.Wrapper>
        </Card.Header>
      }
    ></Card>
  );
}
