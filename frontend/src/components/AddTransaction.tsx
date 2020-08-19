import React, { ReactElement, useState } from "react";

interface Props {
  addTransaction: AddTransaction;
}

export default function AddTransaction({addTransaction}: Props): ReactElement {
  const [income, setIncome] = useState(false);
  const [amount, setAmount] = useState(0.0);
  const [category, setCategory] = useState("");
  const [color,setColor]=useState("tomato");

  return (
    <div>
      <form>
        <button
          type="submit"
          style={{ backgroundColor: "lightGreen" }}
          onClick={(e) => {
            e.preventDefault();
            setColor("lightGreen");
            setIncome(true);
          }}
        >
          Income
        </button>
        <button
          type="submit"
          style={{ backgroundColor: "tomato" }}
          onClick={(e) => {
            e.preventDefault();
            setColor("tomato");
            setIncome(false);
          }}
        >
          Expense
        </button>
        <input
          type="number"
          value={amount}
          style={{ backgroundColor: color }}
          onChange={(e) => {
            setAmount(e.target.valueAsNumber);
          }}
        />
        <input
          type="text"
          value={category}
          style={{ backgroundColor: color }}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <button
          type="submit"
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
      </form>
    </div>
  );
}
