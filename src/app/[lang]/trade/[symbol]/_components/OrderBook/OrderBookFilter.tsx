import type { OrderBookFilter as OrderBookFilterType } from "@/types/order";
import OrderBookIcon from "@/assets/icons/orderbook.svg";
import BuyOrderIcon from "@/assets/icons/buy-order.svg";
import SellOrderIcon from "@/assets/icons/sell-order.svg";

export default function OrderBookFilter({
  filter,
  setFilter,
}: {
  filter: OrderBookFilterType;
  setFilter: (filter: OrderBookFilterType) => void;
}) {
  const handleFilterClick = (filter: OrderBookFilterType) => {
    setFilter(filter);
  };

  return (
    <div className="flex justify-between pt-2">
      <ul className="flex items-center gap-3">
        <li className={`${filter !== "all" ? "opacity-50" : ""}`}>
          <button onClick={() => handleFilterClick("all")}>
            <OrderBookIcon />
          </button>
        </li>
        <li className={`${filter !== "buy" ? "opacity-50" : ""}`}>
          <button onClick={() => handleFilterClick("buy")}>
            <BuyOrderIcon />
          </button>
        </li>
        <li className={`${filter !== "sell" ? "opacity-50" : ""}`}>
          <button onClick={() => handleFilterClick("sell")}>
            <SellOrderIcon />
          </button>
        </li>
      </ul>
    </div>
  );
}
