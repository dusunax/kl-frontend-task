"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Card } from "@/components/card/Card";
import { Tabs } from "@/components/tabs/Tabs";
import { InputField } from "@/components/input/Input";
import Button from "@/components/button/Button";
import type { OrderItem } from "@/types/order";
import useSelectOrderContent from "../_hooks/useSelectOrderContent";

type Order = OrderItem & { type: "sell" | "buy" };

export default function Orderform({
  selectedOrder,
}: {
  selectedOrder: ReturnType<typeof useSelectOrderContent>["selectedOrder"];
}) {
  const [selected, setSelected] = useState("Spot");
  const [subSelected, setSubSelected] = useState("Limit");
  const [orders, setOrders] = useState<Order>();
  const [sellAmount, setSellAmount] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);

  useEffect(() => {
    if (!selectedOrder) {
      setSellAmount(0);
      setBuyAmount(0);
      return;
    }
    setOrders(selectedOrder);
    setSellAmount(selectedOrder.type === "sell" ? selectedOrder.sumBTC : 0);
    setBuyAmount(selectedOrder.type === "buy" ? selectedOrder.sumBTC : 0);
  }, [selectedOrder.price, selectedOrder.type, selectedOrder]);

  const renderInputFields = (
    type: "buy" | "sell",
    amount: number,
    setAmount: Dispatch<SetStateAction<number>>,
  ) => (
    <>
      <InputField>
        <InputField.Label>Price</InputField.Label>
        <InputField.Number
          step={0.01}
          type="number"
          setValue={(value) =>
            setOrders((prev) => (
              prev?.type === type
                ? { ...prev, price: Number(value) }
                : prev
            ))
          }
          value={orders?.price || 0}
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
    </>
  );

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
              {renderInputFields("buy", buyAmount, setBuyAmount)}
            </div>
            <Button variant="buy">Buy</Button>
          </div>
          <div className="w-1/2 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              {renderInputFields("sell", sellAmount, setSellAmount)}
            </div>
            <Button variant="sell">Sell</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
