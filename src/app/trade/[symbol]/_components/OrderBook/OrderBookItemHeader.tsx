export default function OrderBookItemHeader() {
  return (
    <ul className="flex justify-between text-xs text-[var(--color-TertiaryText)] font-semibold mb-3">
      <li>Price (USDT)</li>
      <li className="flex-1 text-right">Amount (BTC)</li>
      <li className="w-24 shrink-0 text-right">Total</li>
    </ul>
  );
}
