import type { CoinItem } from "@/types/coin";
import NoDataIcon from "@/assets/icons/no-data.svg";
import DUMMY_LIST from "../../_mock/dummyCoinList.json";

export default function MarketList({ search }: { search: string }) {
  const list = DUMMY_LIST.data.filter((e) =>
    e.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul className="text-xs font-black">
      {list.map((e) => (
        <MarketItem coin={e} key={e.symbol} />
      ))}
      {list.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <NoDataIcon />
          <div className="text-[var(--color-TertiaryText)] mt-2">No data</div>
        </div>
      )}
    </ul>
  );
}

function MarketItem({ coin }: { coin: CoinItem }) {
  return (
    <li className="flex justify-between h-6 hover:bg-[var(--color-bg3)] cursor-pointer px-4">
      <div className="flex items-center gap-[2px]">
        {coin.symbol} <MarginTag marginRatio={coin.marginRatio} />
      </div>
    </li>
  );
}

function MarginTag({ marginRatio }: { marginRatio: string }) {
  const margin = Number(marginRatio.split(".")[0]);

  return (
    <div className="flex justify-center items-center px-1 py-[1px] rounded-sm bg-[var(--color-Input)]">
      {margin}x
    </div>
  );
}
