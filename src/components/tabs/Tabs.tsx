"use client";
import { createContext, ReactNode, useContext } from "react";

const TabListContext = createContext<{
  selected: string;
  setSelected: (selected: string) => void;
  list: string[];
  subHeader?: boolean;
}>({ selected: "", setSelected: () => {}, list: [], subHeader: false });

function Tabs({
  children,
  ...props
}: {
  list: string[];
  selected: string;
  setSelected: (selected: string) => void;
  subHeader?: boolean;
  children?: ReactNode;
}) {
  return (
    <TabListContext.Provider value={props}>{children}</TabListContext.Provider>
  );
}

function TabList({ className }: { className?: string }) {
  const { selected, setSelected, list, subHeader } = useContext(TabListContext);

  const TabComponent = subHeader ? SubTab : Tab;
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    setSelected(target.innerText);
  };

  return (
    <ul
      className={`h-full flex ${
        subHeader ? "gap-2 text-xs" : "gap-6 text-sm"
      } ${className}`}
      onClick={(e) => handleClick(e)}
    >
      {list.map((item) => (
        <TabComponent key={item} item={item} isSelected={selected === item} />
      ))}
    </ul>
  );
}

function Tab({ item, isSelected }: { item: string; isSelected: boolean }) {
  return (
    <li
      className={`relative flex items-center justify-between font-bold cursor-pointer hover:text-[var(--color-PrimaryText)] transition-colors duration-300 ${
        isSelected
          ? "text-[var(--color-PrimaryText)]"
          : "text-[var(--color-TertiaryText)]"
      }`}
    >
      {item}
      {isSelected && (
        <div className="w-4 absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-[var(--color-PrimaryYellow)]" />
      )}
    </li>
  );
}

function SubTab({ item, isSelected }: { item: string; isSelected: boolean }) {
  return (
    <li
      className={`relative flex items-center justify-between font-bold cursor-pointer hover:text-[var(--color-PrimaryText)] transition-colors duration-300 ${
        isSelected
          ? "text-[var(--color-PrimaryText)]"
          : "text-[var(--color-TertiaryText)]"
      }`}
    >
      {item}
    </li>
  );
}

Tabs.Wrapper = Tabs;
Tabs.TabList = TabList;

export { Tabs };
