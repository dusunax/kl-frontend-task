import {
  ComponentProps,
  Dispatch,
  forwardRef,
  SetStateAction,
  useState,
} from "react";
import InputArrowPad from "./InputNumberArrowPad";

const InputLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-sm text-[var(--color-TertiaryText)] font-bold">
      {children}
    </p>
  );
};

const InputField = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-10 px-2 relative flex items-center gap-2 rounded-md border-[1px] border-[var(--color-DisableText)] hover:border-[var(--color-PrimaryYellow)] transition-colors">
      {children}
    </div>
  );
};

type InputProps<T extends string | number | readonly string[]> =
  ComponentProps<"input"> & {
    setValue: Dispatch<SetStateAction<T>> & ((value: T) => void);
    unit?: string;
  };

const InputNumber = forwardRef<HTMLInputElement, InputProps<number>>(
  ({ setValue, className, type, min, max, unit, ...props }, ref) => {
    const [currentValue, setCurrentValue] = useState(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      setCurrentValue(value);
      setValue(value);
    };

    return (
      <>
        <input
          type={type}
          className={`flex-1 bg-transparent text-[var(--color-PrimaryText)] text-sm font-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-right ${className}`}
          ref={ref}
          {...props}
          value={currentValue}
          onChange={handleInputChange}
        />
        {unit && <div className="font-black text-sm">{unit}</div>}

        <InputArrowPad
          step={Number(props.step)}
          value={Number(currentValue ?? 0)}
          setValue={setCurrentValue}
        />
      </>
    );
  }
);

const Input = forwardRef<
  HTMLInputElement,
  InputProps<string | number | readonly string[]>
>(({ unit, setValue, className, type, min, max, ...props }, ref) => {
  const [currentValue, setCurrentValue] = useState<
    string | number | undefined | readonly string[]
  >(props.defaultValue ?? undefined);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <input
        type={type}
        value={currentValue}
        onChange={handleInputChange}
        className={`flex-1 bg-transparent text-[var(--color-PrimaryText)] text-sm font-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${
          currentValue === 0 ? "text-transparent" : ""
        } ${className}`}
        ref={ref}
        {...props}
      />
      {unit && <div className="font-black text-sm">{unit}</div>}
    </>
  );
});

InputField.Label = InputLabel;
InputField.Input = Input;
InputField.Number = InputNumber;

export { InputField };
