import React, { ReactElement } from 'react'

interface Props {
  transactionList: Transaction[]
}
type CalculateTotal = (transactionList: Transaction[]) => number;

export default function PieChart({ transactionList }: Props): ReactElement {

  const calculateTotal: CalculateTotal = (transactionList: Transaction[]) => {
    var total: number = 0.0;
    transactionList.forEach(function(transaction) {
      total = transaction.income ? total+transaction.amount : total-transaction.amount;
    })
    return total;
  }

  return (
    <div>
      <h2 className="text-2xl">{calculateTotal(transactionList)}</h2>
    </div>
  )
}
