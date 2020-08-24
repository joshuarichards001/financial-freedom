import React, { ReactElement, useState } from "react";
import styles from "../Main.module.css";

interface Props {
  addTransaction: HandleAddTransaction;
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
    <div>
      <form className={styles.gridContainer}>
        <button
          type="submit"
          style={{ backgroundColor: incomeColor }}
          className={styles.buttonStyle}
          onClick={(e) => {
            e.preventDefault();
            setColor(incomeColor);
            setIncome(true);
          }}
        >
          Income
        </button>
        <button
          type="submit"
          style={{ backgroundColor: expenseColor }}
          className={styles.buttonStyle}
          onClick={(e) => {
            e.preventDefault();
            setColor(expenseColor);
            setIncome(false);
          }}
        >
          Expense
        </button>
        <div></div>
        <label>Amount</label>
        <label>Category</label>
        <div></div>
        <input
          type="number"
          value={amount}
          className={styles.inputStyle}
          style={{ backgroundColor: color }}
          onChange={(e) => {
            setAmount(e.target.valueAsNumber);
          }}
        />
        <input
          type="text"
          value={category}
          className={styles.inputStyle}
          style={{ backgroundColor: color }}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <button
          type="submit"
          className={styles.buttonStyle}
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
