import { useCallback, useState } from "react";
import debounce from "lodash/debounce";
import SearchIcon from "@/assets/icons/svg-58.svg";
import ClearIcon from "@/assets/icons/svg-34.svg";

export default function Search({
  search,
  setSearch,
  className,
}: {
  search: string;
  setSearch: (value: string) => void;
  className?: string;
}) {
  const [inputValue, setInputValue] = useState(search);

  const handleChange = useCallback(
    debounce((value: string) => {
      setSearch(value);
    }, 200),
    []
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handleChange(e.target.value);
  };

  const handleClear = () => {
    setInputValue("");
    setSearch("");
  };

  return (
    <div className="w-full h-[30px] px-2 relative flex items-center gap-2 rounded-md border-[1px] border-[var(--color-DisableText)] hover:border-[var(--color-PrimaryYellow)] transition-colors">
      <SearchIcon color="var(--color-TertiaryText)" width={16} height={16} />
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        className={`flex-1 bg-transparent text-[var(--color-PrimaryText)] text-sm font-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-right ${className}`}
      />
      <button
        type="button"
        className="flex items-center justify-center]"
        onClick={handleClear}
      >
        <ClearIcon color="var(--color-TertiaryText)" width={16} height={16} />
      </button>
    </div>
  );
}
