import React, { ReactElement, useState } from "react";

interface Props {
  addTransaction: AddTransaction;
}

export default function AddTransaction({
  addTransaction,
}: Props): ReactElement {
  const expenseColor: string = "#fef5f5";
  const incomeColor: string = "#e5ffe7";
  const [income, setIncome] = useState(false);
  const [amount, setAmount] = useState(0.0);
  const [category, setCategory] = useState("");
  const [color, setColor] = useState(expenseColor);

  return (
    <div className="pb-4">
      <form className="">
        <div className="pt-6">
          <div className="inline-block pr-3">
          <button
            className="inline-block appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight"
            type="submit"
            style={{ backgroundColor: incomeColor }}
            onClick={(e) => {
              e.preventDefault();
              setColor(incomeColor);
              setIncome(true);
            }}
          >
            Income
          </button>
          </div>
          <div className="inline-block">
          <button
            className="inline-block appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight"
            type="submit"
            style={{ backgroundColor: expenseColor }}
            onClick={(e) => {
              e.preventDefault();
              setColor(expenseColor);
              setIncome(false);
            }}
          >
            Expense
          </button>
          </div>
        </div>
        <div className="w-full">
          <div className="inline-block pr-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Amount
            </label>
            <input
              className="appearance-none w-full bg-gray-200 text-gray-700 border  rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="number"
              value={amount}
              placeholder="Amount..."
              style={{ backgroundColor: color }}
              onChange={(e) => {
                setAmount(e.target.valueAsNumber);
              }}
            />
          </div>
          <div className="inline-block pr-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Category
            </label>
            <input
              className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={category}
              style={{ backgroundColor: color }}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="inline-block inline-block appearance-none block w-100 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight"
            style={{ backgroundColor: color }}
            onClick={(e) => {
              e.preventDefault();
              addTransaction(income, amount, category);
              setIncome(false);
              setAmount(0.0);
              setCategory("");
            }}
          >
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
}
