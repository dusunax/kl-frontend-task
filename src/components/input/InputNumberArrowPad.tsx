import ArrowUpIcon from "@/assets/icons/svg-54.svg";
import ArrowDownIcon from "@/assets/icons/svg-55.svg";

const getDecimals = (step: number) => {
  return step.toString().split(".")[1]?.length || 0;
};

const roundToFixed = (value: number, decimalPlaces: number): number => {
  const multiplier = Math.pow(10, decimalPlaces);
  return Math.round(value * multiplier) / multiplier;
};

interface InputArrowPadProps {
  step: number;
  min?: number;
  max?: number;
  value: number;
  setValue: (value: number) => void;
}

export default function InputArrowPad({
  step,
  min,
  max,
  value,
  setValue,
}: InputArrowPadProps) {
  const decimals = getDecimals(Number(step));

  const handleIncrement = () => {
    const newValue = Math.min(
      max !== undefined ? Number(max) : Infinity,
      roundToFixed(value + Number(step), decimals)
    );
    setValue(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(
      min !== undefined ? Number(min) : -Infinity,
      roundToFixed(value - Number(step), decimals)
    );
    setValue(newValue);
  };

  return (
    <div className="w-6 h-full -mr-2 flex flex-col border-l-[1px] border-[var(--color-DisableText)]">
      <button
        type="button"
        className="w-full h-1/2 flex items-center justify-center border-b-[1px] border-[var(--color-DisableText)]"
        onClick={handleIncrement}
      >
        <ArrowUpIcon color="var(--color-TertiaryText)" width={16} height={16} />
      </button>
      <button
        type="button"
        className="w-full h-1/2 flex items-center justify-center"
        onClick={handleDecrement}
      >
        <ArrowDownIcon
          color="var(--color-TertiaryText)"
          width={16}
          height={16}
        />
      </button>
    </div>
  );
}
