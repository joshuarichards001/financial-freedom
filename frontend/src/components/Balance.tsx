import React, { ReactElement } from 'react'
import styles from '../Main.module.css'


interface Props {
  transactionList: Transaction[]
}
type CalculateTotal = (transactionList: Transaction[]) => string;

export default function Balance({ transactionList }: Props): ReactElement {

  const calculateTotal: CalculateTotal = (transactionList: Transaction[]) => {
    var total: number = 0.0;
    transactionList.forEach(function(transaction) {
      var amount: number = Number(transaction.amount)
      total = transaction.income ? total+amount : total-amount;
    })
    return Number(total).toFixed(2);
  }

  return (
    <div>
      <h2 className={styles.pieChart}>Balance: ${calculateTotal(transactionList)}</h2>
    </div>
  )
}
