"use client";

import { useState } from "react";
import { Card } from "@/components/card/Card";
import { Tabs } from "@/components/tabs/Tabs";
import ChartContent from "./Chart/ChartContent";

export default function Chart() {
  const [selected, setSelected] = useState("Chart");
  const [subSelected, setSubSelected] = useState("1D");

  return (
    <Card
      style={{ gridArea: "chart" }}
      header={
        <>
          <Card.Header>
            <Tabs.Wrapper
              list={["Chart", "Info", "Tranding Data", "Square"]}
              selected={selected}
              setSelected={setSelected}
            >
              <Tabs.TabList />
            </Tabs.Wrapper>
          </Card.Header>

          <Card.Header>
            <Tabs.Wrapper
              list={["Time", "1s", "15m", "1H", "4H", "1D", "1W"]}
              selected={subSelected}
              setSelected={setSubSelected}
              subHeader
            >
              <Tabs.TabList />
            </Tabs.Wrapper>
          </Card.Header>
        </>
      }
    >
      <ChartContent />
    </Card>
  );
}
