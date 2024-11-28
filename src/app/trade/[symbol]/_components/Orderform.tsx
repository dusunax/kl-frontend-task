"use client";

import { useState } from "react";
import { Card } from "@/components/card/Card";
import { Tabs } from "@/components/tabs/Tabs";

export default function Orderform() {
  const [selected, setSelected] = useState("Spot");
  const [subSelected, setSubSelected] = useState("Limit");

  return (
    <Card
      style={{ gridArea: "orderform" }}
      header={
        <Card.Header>
          <Tabs.Wrapper
            list={["Spot", "Cross", "Isolated", "Grid"]}
            selected={selected}
            setSelected={setSelected}
          >
            <Tabs.TabList />
          </Tabs.Wrapper>
        </Card.Header>
      }
    >
      <div className="flex justify-between">
        <Tabs.Wrapper
          list={["Limit", "Market", "Stop Limit"]}
          selected={subSelected}
          setSelected={setSubSelected}
          subHeader
        >
          <Tabs.TabList className="!text-sm !gap-4 py-2" />
        </Tabs.Wrapper>
      </div>
    </Card>
  );
}
