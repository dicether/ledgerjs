//@flow
import type { FiatUnit } from "../types";
// inspired by https://github.com/smirzaei/currency-formatter/blob/master/currencies.json
const units: { [key: string]: Object } = {
  AED: { name: "Emirati Dirham", code: "AED", symbol: "د.إ.", magnitude: 2 },
  AUD: { name: "Australian Dollar", code: "AUD", symbol: "$", magnitude: 2 },
  BGN: { name: "Bulgarian lev", code: "BGN", symbol: "лв.", magnitude: 2 },
  BHD: { name: "Bahraini Dinar", code: "BHD", symbol: "د.ب.", magnitude: 3 },
  BRL: { name: "Brazilian real", code: "BRL", symbol: "R$", magnitude: 2 },
  CAD: { name: "Canadian Dollar", code: "CAD", symbol: "$", magnitude: 2 },
  CHF: { name: "Swiss Franc", code: "CHF", symbol: "CHF", magnitude: 2 },
  CLP: { name: "Chilean Peso", code: "CLP", symbol: "$", magnitude: 2 },
  CNY: {
    name: "Yuan or chinese renminbi",
    code: "CNY",
    symbol: "¥",
    magnitude: 2
  },
  CRC: { name: "Costa Rican colón", code: "CRC", symbol: "₡", magnitude: 2 },
  CZK: { name: "Czech koruna", code: "CZK", symbol: "Kč", magnitude: 2 },
  DKK: { name: "Danish krone", code: "DKK", symbol: "kr.", magnitude: 2 },
  EUR: { name: "Euro", code: "EUR", symbol: "€", magnitude: 2 },
  GBP: { name: "British Pound", code: "GBP", symbol: "£", magnitude: 2 },
  GHS: { name: "Ghanaian Cedi", code: "GHS", symbol: "₵", magnitude: 2 },
  HKD: { name: "Hong Kong dollar", code: "HKD", symbol: "HK$", magnitude: 2 },
  HRK: { name: "Croatian kuna", code: "HRK", symbol: "kn", magnitude: 2 },
  HUF: { name: "Hungarian forint", code: "HUF", symbol: "Ft", magnitude: 2 },
  IDR: { name: "Indonesian Rupiah", code: "IDR", symbol: "Rp", magnitude: 0 },
  ILS: { name: "Israeli Shekel", code: "ILS", symbol: "₪", magnitude: 2 },
  INR: { name: "Indian Rupee", code: "INR", symbol: "₹", magnitude: 2 },
  IRR: { name: "Iranian Rial", code: "IRR", symbol: "﷼", magnitude: 2 },
  JPY: { name: "Japanese yen", code: "JPY", symbol: "¥", magnitude: 0 },
  KES: { name: "Kenyan Shilling", code: "KES", symbol: "S", magnitude: 2 },
  KHR: { name: "Cambodian Riel", code: "KHR", symbol: "៛", magnitude: 0 },
  KRW: { name: "South Korean won", code: "KRW", symbol: "₩", magnitude: 0 },
  MUR: { name: "Mauritian rupee", code: "MUR", symbol: "₨", magnitude: 2 },
  MXN: { name: "Mexico Peso", code: "MXN", symbol: "$", magnitude: 2 },
  MYR: { name: "Malaysian Ringgit", code: "MYR", symbol: "RM", magnitude: 2 },
  NGN: { name: "Nigerian Naira", code: "NGN", symbol: "₦", magnitude: 2 },
  NOK: { name: "Norwegian krone", code: "NOK", symbol: "kr", magnitude: 2 },
  NZD: { name: "New Zealand Dollar", code: "NZD", symbol: "$", magnitude: 2 },
  PHP: { name: "Philippine Peso", code: "PHP", symbol: "₱", magnitude: 2 },
  PKR: { name: "Pakistani Rupee", code: "PKR", symbol: "₨", magnitude: 2 },
  PLN: { name: "Polish złoty", code: "PLN", symbol: "zł", magnitude: 2 },
  RON: { name: "Romanian leu", code: "RON", symbol: "lei", magnitude: 2 },
  RUB: { name: "Russian Rouble", code: "RUB", symbol: "₽", magnitude: 2 },
  SEK: { name: "Swedish krona", code: "SEK", symbol: "kr", magnitude: 2 },
  SGD: { name: "Singapore Dollar", code: "SGD", symbol: "$", magnitude: 2 },
  THB: { name: "Thai Baht", code: "THB", symbol: "฿", magnitude: 2 },
  TRY: { name: "Turkish Lira", code: "TRY", symbol: "TL", magnitude: 2 },
  TZS: { name: "Tanzanian Shilling", code: "TZS", symbol: "TSh", magnitude: 2 },
  UAH: { name: "Ukrainian Hryvnia", code: "UAH", symbol: "₴", magnitude: 2 },
  UGX: { name: "Ugandan Shilling", code: "UGX", symbol: "USh", magnitude: 2 },
  USD: { name: "US Dollar", code: "USD", symbol: "$", magnitude: 2 },
  VEF: {
    name: "Venezuelan bolivar",
    code: "VEF",
    symbol: "Bs. F.",
    magnitude: 2
  },
  VND: { name: "Vietnamese Dong", code: "VND", symbol: "₫", magnitude: 1 },
  VUV: { name: "Ni-Vanuatu Vatu", code: "VUV", symbol: "VT", magnitude: 0 },
  ZAR: { name: "South African Rand", code: "ZAR", symbol: "R", magnitude: 2 }
};
for (let u in units) {
  units[u].showAllDigits = true;
  units[u].ticker = units[u].code;
}

export type Fiat = $Keys<typeof units>;

export function hasFiatUnit(fiat: string): boolean {
  return fiat in units;
}

export function getFiatUnit(fiat: string): FiatUnit {
  const unit: FiatUnit = units[fiat];
  if (!unit) {
    throw new Error(`unit "${fiat}" not found`);
  }
  return unit;
}
