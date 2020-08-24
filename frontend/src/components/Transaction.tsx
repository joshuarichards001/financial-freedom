import React, { ReactElement } from "react";
import styles from "../Main.module.css";

interface Props {
  transaction: Transaction;
  deleteTransaction: HandleDeleteTransaction;
}

export default function Transaction({
  transaction,
  deleteTransaction,
}: Props): ReactElement {
  return (
    <tr style={{ color: transaction.income ? "green" : "red" }}>
      <td className={styles.transactionItem}>{transaction.category}</td>
      <td className={styles.transactionItem}>{transaction.amount}</td>
      <td className={styles.transactionItem}>
        <button
          className={styles.deleteButton}
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          X
        </button>
      </td>
    </tr>
  );
}
