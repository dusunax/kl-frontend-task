import { createContext, useContext } from "react";
import ArrowDown from "@/assets/icons/svg-18.svg";
import type { OrderBookItem, OrderBookFilterType } from "../OrderBook";

interface OrderBookListProps {
  isHigherThanBefore: boolean;
  list: OrderBookItem[];
  filter: OrderBookFilterType;
  children: React.ReactNode;
}
type OrderBookContextProps = Omit<OrderBookListProps, "children">;

const OrderBookContext = createContext<OrderBookContextProps | undefined>(
  undefined
);

function List({ type }: { type: OrderBookFilterType }) {
  const context = useContext(OrderBookContext);
  if (!context) return null;

  const { list, filter } = context;
  const color = type === "buy" ? "var(--color-Buy)" : "var(--color-Sell)";

  let newList = list;
  if (filter === "all") {
    newList = list.slice(0, 17);
  }

  return (
    <ul className="flex flex-col text-xs font-semibold my-1">
      {newList.map((item) => {
        return (
          <div className="flex justify-between py-[2px]" key={item.price}>
            <p style={{ color }}>{item.price}</p>
            <p className="flex-1 text-right">{item.amount}</p>
            <p className="w-24 shrink-0 text-right">{item.total}</p>
          </div>
        );
      })}
    </ul>
  );
}

function Ticker() {
  const context = useContext(OrderBookContext);
  if (!context) return null;

  const { isHigherThanBefore } = context;

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-1">
        <p
          className={`py-1 text-xl ${
            isHigherThanBefore
              ? "text-[var(--color-Buy)]"
              : "text-[var(--color-Sell)]"
          }`}
        >
          95,571.98
        </p>
        <ArrowDown
          width={16}
          height={16}
          color={`${
            isHigherThanBefore ? "var(--color-Buy)" : "var(--color-Sell)"
          }`}
          className={`-ml-1 ${isHigherThanBefore ? "rotate-180" : ""}`}
        />
        <p className="text-[var(--color-TertiaryText)] text-xs">$95,571.98</p>
      </div>
    </div>
  );
}

function OrderBookList({ children, ...props }: OrderBookListProps) {
  return (
    <OrderBookContext.Provider value={props}>
      {children}
    </OrderBookContext.Provider>
  );
}

OrderBookList.List = List;
OrderBookList.Ticker = Ticker;

export default OrderBookList;
