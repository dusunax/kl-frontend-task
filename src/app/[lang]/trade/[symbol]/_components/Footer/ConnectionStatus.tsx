import { ConnectionStatusType } from "../Footer";

const getColor = (status: ConnectionStatusType) => {
  return status === "Stable Connection"
    ? "#0ECB81"
    : status === "Disconnected"
    ? "#B7BDC6"
    : "#F0B90B";
};

export default function ConnectionStatus({
  status,
}: {
  status: ConnectionStatusType;
}) {
  const textColor = getColor(status);

  return (
    <div
      className={`h-full flex items-center gap-1 text-xs`}
      style={{ color: textColor }}
    >
      <ConnectionSvg status={status} />
      {status}
    </div>
  );
}

function ConnectionSvg({ status }: { status: ConnectionStatusType }) {
  const color = getColor(status);

  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6.33331H0V9.66665H2V6.33331Z"
        fill={color}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.33333 4.33331H3.33333V9.66665H5.33333V4.33331Z"
        fill={color}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.66667 2.33331H8.66667V9.66665H6.66667V2.33331Z"
        fill={color}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0.333313H10V9.66665H12V0.333313Z"
        fill={color}
      ></path>
    </svg>
  );
}
