"use client";

import { useState } from "react";
import { Card } from "@/components/card/Card";
import { Tabs } from "@/components/tabs/Tabs";
import { InputField } from "@/components/input/Input";
import Button from "@/components/button/Button";

export default function Orderform() {
  const [selected, setSelected] = useState("Spot");
  const [subSelected, setSubSelected] = useState("Limit");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
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
      <div className="h-full flex flex-col">
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

        <div className="flex-1 flex justify-between gap-4 mt-1 mb-6">
          <div className="w-1/2 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <InputField>
                <InputField.Label>Price</InputField.Label>
                <InputField.Number
                  step={0.01}
                  type="number"
                  setValue={setPrice}
                  value={price}
                  unit="USDT"
                />
              </InputField>

              <InputField>
                <InputField.Label>Amount</InputField.Label>
                <InputField.Number
                  step={0.01}
                  type="number"
                  setValue={setAmount}
                  value={amount}
                  unit="BTC"
                />
              </InputField>
            </div>

            <Button variant="buy">Buy</Button>
          </div>
          <div className="w-1/2 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <InputField>
                <InputField.Label>Price</InputField.Label>
                <InputField.Number
                  step={0.01}
                  type="number"
                  setValue={setPrice}
                  value={price}
                  unit="USDT"
                />
              </InputField>

              <InputField>
                <InputField.Label>Amount</InputField.Label>
                <InputField.Number
                  step={0.01}
                  type="number"
                  setValue={setAmount}
                  value={amount}
                  unit="BTC"
                />
              </InputField>
            </div>

            <Button variant="sell">Sell</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
