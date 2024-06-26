import React from "react";
import { useState } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  userClassName = ""
}) {
  return (
    <div
      className={`bg-white p-4 rounded-lg text-sm flex shadow-md ${userClassName}`}
    >
      {/* Left side */}
      <div className="w-1/2 pr-2">
        <label className="text-black/60 mb-2 inline-block text-base font-semibold">
          {label}
        </label>
        <input
          className="outline-none w-full bg-transparent py-2 px-2 rounded-md text-black border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Right side */}
      <div className="w-1/2 flex flex-wrap justify-end text-right pl-2">
        <p className="text-black/60 mb-2 w-full text-base font-semibold">
          Currency Type
        </p>
        <select
          className="rounded-lg px-3 py-2 bg-gray-100 cursor-pointer outline-none text-black border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
          
        </select>
      </div>
    </div>
  );
}

export default InputBox;
