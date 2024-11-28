"use client";
import Chart from "./_components/Chart";
import Footer from "./_components/Footer";
import Market from "./_components/Market";
import MarketActivity from "./_components/MarketActivity";
import OrderBook from "./_components/OrderBook";
import Orderform from "./_components/Orderform";
import SubHeader from "./_components/SubHeader";
import Trades from "./_components/Trades";
import UserInfo from "./_components/UserInfo";
import useSelectOrderContent from "./_hooks/useSelectOrderContent";

export default function Page() {
  const { selectedOrder, handleSelectOrder } = useSelectOrderContent();

  return (
    <main className="relative flex justify-center bg-[var(--color-TradeBg)]">
      <div
        className="grid gap-1 m-1 border-[var(--color-TradeBg)]"
        style={{
          gridTemplateColumns:
            "minmax(253px, 320px) minmax(300px, 880px) minmax(253px, 320px)",
          gridTemplateRows:
            "56px 360px 160px minmax(169px, 1fr) minmax(146px, auto) 560px 24px",
          gridTemplateAreas: `
          "subHeader subHeader market"
          "orderbook chart market"
          "orderbook chart trades"
          "orderbook orderform trades"
          "orderbook orderform marketActivity"
          "userInfo userInfo userInfo"
        `,
        }}
      >
        <SubHeader />
        <OrderBook onSelectOrder={handleSelectOrder} />
        <Chart />
        <Market />
        <Trades />
        <MarketActivity />
        <Orderform selectedOrder={selectedOrder} />
        <UserInfo />
      </div>

      <Footer />
    </main>
  );
}
