"use client";

import { Card } from "@/components/card/Card";
import { useState } from "react";

export default function Chart() {
  const [selected, setSelected] = useState("Chart");
  const [subSelected, setSubSelected] = useState("Time");

  return (
    <Card
      style={{ gridArea: "chart" }}
      header={
        <>
          <Card.Header>
            <Card.Tabs
              list={["Chart", "Info", "Tranding Data", "Square"]}
              selected={selected}
              setSelected={setSelected}
            >
              <Card.TabList />
            </Card.Tabs>
          </Card.Header>

          <Card.Header>
            <Card.Tabs
              list={["Time", "1s", "15m", "1H", "4H", "1D", "1W"]}
              selected={subSelected}
              setSelected={setSubSelected}
              subHeader
            >
              <Card.TabList />
            </Card.Tabs>
          </Card.Header>
        </>
      }
    ></Card>
  );
}
