import React, { ReactElement, useState, useRef, useEffect } from "react";
import styles from "../Main.module.css";
import { EXPENSE_CATEGORIES, INCOME_CATEGORIES } from "../Constants";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Main.module.css";

interface Props {
  addTransaction: HandleAddTransaction;
}

export default function AddTransaction({
  addTransaction,
}: Props): ReactElement {
  const expenseColor: string = "#ffe6e6";
  const incomeColor: string = "#e5ffe7";
  const categorySelect = useRef<HTMLSelectElement>(null);
  const [income, setIncome] = useState(false);
  const [amount, setAmount] = useState(0.0);
  const [category, setCategory] = useState("");
  const [color, setColor] = useState(expenseColor);
  const [startDate, setStartDate] = useState(new Date());

  // sets whether the categories shown are for an income or expense based on what was clicked
  useEffect(() => {
    if (categorySelect && categorySelect.current) {
      var categorySelectList = categorySelect.current.options;
      categorySelectList.length = 0;
      if (income) {
        INCOME_CATEGORIES.forEach((option) =>
          categorySelectList.add(new Option(option))
        );
      } else {
        EXPENSE_CATEGORIES.forEach((option) =>
          categorySelectList.add(new Option(option))
        );
      }
    }
  }, [income]);

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
        <label className={styles.labelStyle}>Amount</label>
        <label className={styles.labelStyle}>Category</label>
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
        <select
          ref={categorySelect}
          value={category}
          className={styles.inputStyle}
          style={{ backgroundColor: color }}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        {/* <label className={styles.labelStyle}>Date</label>
        <label className={styles.labelStyle}>Time</label>
        <DatePicker
          selected={startDate}
          showTimeSelect
          dateFormat="dd/MM/yyyy HH:mm"
          onChange={(date) => setStartDate(date)}
        /> */}
        <button
          type="submit"
          className={styles.buttonStyle}
          onClick={(e) => {
            e.preventDefault();
            addTransaction(income, amount, category);
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
