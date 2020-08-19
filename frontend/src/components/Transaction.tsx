import React, { ReactElement } from 'react'

interface Props {
  transaction: Transaction,
  deleteTransaction: DeleteTransaction
}

export default function Transaction({transaction, deleteTransaction}: Props): ReactElement {
  return (
    <div style={{ color: transaction.income ? "green" : "red"}}>
      {transaction.amount}{" - "}
      {transaction.category}{"  "}
      <button 
        onClick={() => { deleteTransaction(transaction.id) }}
        style={{ backgroundColor: "red"}}>X</button>
    </div>
  )
}
