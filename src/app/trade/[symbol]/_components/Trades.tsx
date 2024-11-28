"use client";

import { useState } from "react";
import { Card } from "@/components/card/Card";
import { Tabs } from "@/components/tabs/Tabs";
import OrderBookItemHeader from "./OrderBook/OrderBookItemHeader";
import OrderBookList from "./OrderBook/OrderBookList";

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
          <OrderBookList.List type="buy" />
        </OrderBookList>
      </div>
    </Card>
  );
}

const DUMMY_LIST = {
  buy: [
    { price: 96211.23, amount: 0.07903, total: 7600 },
    { price: 96210.14, amount: 0.05075, total: 4880 },
    { price: 96209.76, amount: 0.00257, total: 247.25908 },
    { price: 96209.75, amount: 0.07687, total: 7400 },
    { price: 96209.74, amount: 0.3116, total: 29980 },
    { price: 96209.26, amount: 0.85818, total: 82560 },
    { price: 96208.67, amount: 0.23061, total: 22190 },
    { price: 96208.66, amount: 0.07422, total: 7140 },
    { price: 96208.01, amount: 0.29611, total: 28490 },
    { price: 96208.0, amount: 0.0094, total: 904.3552 },
    { price: 96207.55, amount: 0.51949, total: 49980 },
    { price: 96207.54, amount: 0.00006, total: 5.77245 },
    { price: 96206.9, amount: 0.38539, total: 37080 },
    { price: 96206.89, amount: 0.54, total: 51950 },
    { price: 96206.34, amount: 0.29499, total: 28380 },
    { price: 96205.81, amount: 0.07583, total: 7300 },
    { price: 96205.76, amount: 0.09886, total: 9510 },
    { price: 96205.75, amount: 0.00054, total: 51.9511 },
    { price: 96205.51, amount: 0.07268, total: 6990 },
    { price: 96205.5, amount: 0.15686, total: 15090 },
    { price: 96205.33, amount: 0.08106, total: 7800 },
    { price: 96205.05, amount: 0.52386, total: 50400 },
    { price: 96205.03, amount: 0.25974, total: 24990 },
    { price: 96204.76, amount: 0.06544, total: 6300 },
    { price: 96204.31, amount: 0.002, total: 192.40862 },
    { price: 96204.2, amount: 0.0001, total: 9.62042 },
    { price: 96204.19, amount: 0.00007, total: 6.73429 },
    { price: 96204.06, amount: 0.08103, total: 7800 },
    { price: 96204.05, amount: 0.00085, total: 81.77344 },
    { price: 96204.03, amount: 0.33843, total: 32560 },
    { price: 96204.0, amount: 0.0094, total: 904.3176 },
    { price: 96203.94, amount: 0.00008, total: 7.69632 },
    { price: 96203.69, amount: 0.05365, total: 5160 },
    { price: 96203.61, amount: 0.07687, total: 7400 },
    { price: 96202.73, amount: 0.00006, total: 5.77216 },
    { price: 96202.42, amount: 0.08103, total: 7800 },
    { price: 96202.4, amount: 0.09696, total: 9330 },
    { price: 96202.18, amount: 0.00008, total: 7.69617 },
    { price: 96202.01, amount: 0.14227, total: 13690 },
    { price: 96200.83, amount: 0.00013, total: 12.50611 },
  ],
  sell: [
    { price: 96274.63, amount: 0.20752, total: 19980 },
    { price: 96274.56, amount: 0.25974, total: 25010 },
    { price: 96274.17, amount: 0.15226, total: 14660 },
    { price: 96273.44, amount: 0.00008, total: 7.70188 },
    { price: 96272.3, amount: 0.37214, total: 35830 },
    { price: 96272.0, amount: 0.1087, total: 10460 },
    { price: 96271.48, amount: 0.00011, total: 10.58986 },
    { price: 96270.79, amount: 0.01038, total: 999.2908 },
    { price: 96270.66, amount: 0.00006, total: 5.77624 },
    { price: 96270.08, amount: 0.00006, total: 5.7762 },
    { price: 96269.97, amount: 0.04, total: 3850 },
    { price: 96269.85, amount: 0.07824, total: 7530 },
    { price: 96268.56, amount: 0.0308, total: 2970 },
    { price: 96268.34, amount: 0.00061, total: 58.72369 },
    { price: 96268.0, amount: 0.0993, total: 9560 },
    { price: 96267.99, amount: 0.00008, total: 7.70144 },
    { price: 96267.36, amount: 0.30873, total: 29720 },
    { price: 96266.33, amount: 0.2386, total: 22970 },
    { price: 96266.32, amount: 0.00024, total: 23.10392 },
    { price: 96265.27, amount: 0.00006, total: 5.77592 },
    { price: 96264.72, amount: 0.2, total: 19250 },
    { price: 96264.71, amount: 0.0003, total: 28.87941 },
    { price: 96264.02, amount: 0.03642, total: 3510 },
    { price: 96264.0, amount: 0.09938, total: 9570 },
    { price: 96263.99, amount: 0.00024, total: 23.10336 },
    { price: 96263.98, amount: 0.00024, total: 23.10336 },
    { price: 96263.97, amount: 0.0001, total: 9.6264 },
    { price: 96262.96, amount: 0.0001, total: 9.6263 },
    { price: 96262.12, amount: 0.0001, total: 9.62621 },
    { price: 96262.11, amount: 0.0001, total: 9.62621 },
    { price: 96261.05, amount: 0.00006, total: 5.77566 },
    { price: 96260.66, amount: 0.23511, total: 22630 },
    { price: 96260.65, amount: 0.00945, total: 909.66314 },
    { price: 96260.64, amount: 0.00016, total: 15.4017 },
    { price: 96260.55, amount: 0.12975, total: 12430 },
    { price: 96260.54, amount: 0.00006, total: 5.77554 },
    { price: 96260.53, amount: 0.00006, total: 5.77554 },
  ],
};
