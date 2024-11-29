export interface CoinItem {
  symbol: string;
  base: string;
  quote: string;
  marginRatio: string;
  isTradeAllowed: boolean;
  isBuyAllowed: boolean;
  isSellAllowed: boolean;
  isBaseBorrowable: boolean;
  isQuoteBorrowable: boolean;
  isBaseTransferIn: boolean;
  isQuoteTransferIn: boolean;
  status: string;
  delistTime: string | null;
}