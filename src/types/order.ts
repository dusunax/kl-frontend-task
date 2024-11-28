export interface OrderItem {
  price: number;
  amount: number;
  total: number;
  sumBTC: number;
}

export type OrderBookFilter = "all" | "buy" | "sell";
