"use client";

import { useState } from "react";
import { Card } from "@/components/card/Card";
import { Tabs } from "@/components/tabs/Tabs";

export default function UserInfo() {
  const [selected, setSelected] = useState("Open Orders");

  return (
    <Card
      style={{ gridArea: "userInfo" }}
      header={
        <Card.Header>
          <Tabs.Wrapper
            list={[
              "Open Orders",
              "Order History",
              "Trade History",
              "Funds",
              "Grid Order",
            ]}
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
