import { createContext, useContext } from "react";
import type { OrderItem, OrderBookFilter } from "@/types/order";
import ArrowDown from "@/assets/icons/svg-18.svg";
import useSelectOrderContent from "../../_hooks/useSelectOrderContent";

interface OrderBookListProps {
  isHigherThanBefore: boolean;
  list: OrderItem[];
  filter: OrderBookFilter;
  children: React.ReactNode;
}
type OrderBookContextProps = Omit<OrderBookListProps, "children">;

const OrderBookContext = createContext<OrderBookContextProps | undefined>(
  undefined
);

function List({
  type,
  onSelectOrder,
}: {
  type: Exclude<OrderBookFilter, "all">;
  onSelectOrder: ReturnType<typeof useSelectOrderContent>["handleSelectOrder"];
}) {
  const context = useContext(OrderBookContext);
  if (!context) return null;

  const { list, filter } = context;
  const color = type === "buy" ? "var(--color-Buy)" : "var(--color-Sell)";

  let newList = list;
  if (filter === "all") {
    newList = list.slice(0, 17);
  }

  const handleSelectOrder = (
    e: React.MouseEvent<HTMLDivElement>,
    item: OrderItem
  ) => {
    const target = e.target as HTMLElement;
    onSelectOrder(
      item,
      type,
      target.dataset.field as "price" | "amount" | "total"
    );
  };

  return (
    <ul className="flex flex-col text-xs font-semibold my-1 cursor-pointer">
      {newList.map((item) => {
        return (
          <div
            className="flex justify-between py-[2px] opacity-80 hover:opacity-100"
            key={item.price}
            onClick={(e) => handleSelectOrder(e, item)}
          >
            <p style={{ color }} data-field="price">
              {item.price}
            </p>
            <p className="flex-1 text-right" data-field="amount">
              {item.amount}
            </p>
            <p className="w-24 shrink-0 text-right" data-field="total">
              {item.total}
            </p>
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
