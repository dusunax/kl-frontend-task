"use client";
import { createContext, PropsWithChildren, ReactNode, useContext } from "react";

interface CardWrapperProps {
  className?: string;
  style?: React.CSSProperties;
  header?: ReactNode;
}

function Header({ children }: { children: ReactNode }) {
  return (
    <header className="h-10 flex items-center justify-between px-4 text-sm font-bold border-b border-[var(--color-line)]">
      {children}
    </header>
  );
}

function SubHeader({ children }: { children: ReactNode }) {
  return (
    <div className="h-10 flex items-center justify-between px-4 text-sm font-bold">
      {children}
    </div>
  );
}

const TabListContext = createContext<{
  selected: string;
  setSelected: (selected: string) => void;
  list: string[];
  subHeader?: boolean;
}>({ selected: "", setSelected: () => {}, list: [], subHeader: false });

function Tabs({
  className,
  children,
  ...props
}: {
  list: string[];
  selected: string;
  setSelected: (selected: string) => void;
  subHeader?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    props.setSelected(target.innerText);
  };

  return (
    <TabListContext.Provider value={props}>
      <div
        className={`h-full flex ${
          props.subHeader ? "gap-2" : "gap-6"
        } ${className}`}
        onClick={(e) => handleClick(e)}
      >
        {children}
      </div>
    </TabListContext.Provider>
  );
}

function TabList() {
  const { selected, list, subHeader } = useContext(TabListContext);

  const TabComponent = subHeader ? SubTab : Tab;

  return (
    <>
      {list.map((item) => (
        <TabComponent key={item} item={item} isSelected={selected === item} />
      ))}
    </>
  );
}

function Tab({ item, isSelected }: { item: string; isSelected: boolean }) {
  return (
    <div
      className={`relative flex items-center justify-between text-sm font-bold cursor-pointer text-[var(--color-TertiaryText)] hover:text-[var(--color-PrimaryText)] transition-colors duration-300 ${
        isSelected ? "text-[var(--color-PrimaryText)]" : ""
      }`}
    >
      {item}
      {isSelected && (
        <div className="w-4 absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-[var(--color-PrimaryYellow)]" />
      )}
    </div>
  );
}

function SubTab({ item, isSelected }: { item: string; isSelected: boolean }) {
  return (
    <div
      className={`relative flex items-center justify-between text-xs font-bold cursor-pointer text-[var(--color-TertiaryText)] hover:text-[var(--color-PrimaryText)] transition-colors duration-300 ${
        isSelected ? "text-[var(--color-PrimaryText)]" : ""
      }`}
    >
      {item}
    </div>
  );
}

function Card({
  children,
  className,
  style,
  header,
}: PropsWithChildren<CardWrapperProps>) {
  return (
    <div
      className={`bg-[var(--color-BasicBg)] rounded-md ${className}`}
      style={style}
    >
      {header}
      <div className="px-4 h-full">{children}</div>
    </div>
  );
}

Card.Header = Header;
Card.SubHeader = SubHeader;

Card.Tabs = Tabs;
Card.TabList = TabList;

export { Card };
