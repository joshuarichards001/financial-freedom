import React, { ReactElement, useState } from "react";
import styles from "../Main.module.css";

interface Props {
  category: string;
  amount: number;
}

/**
 * represents a category as shown in the budget tab.
 * 
 * @param category a string representing the category label
 * @param amount the amount of money spent on that particular category 
 */
export default function Category({ category, amount }: Props): ReactElement {
  const [budget, setBudget] = useState(0);

  return (
    <tr>
      <td className={styles.tableCell}>{category}</td>
      <td>
        <input
          onChange={(e) => setBudget(e.target.valueAsNumber)}
          type="number"
          style={{ width: "100px", backgroundColor: "#cccccc", border: "none", borderRadius: "4px" }}
        />
      </td>
      <td style={{color: amount<=budget ? "green" : "red"}}>{amount}</td>
    </tr>
  );
}
