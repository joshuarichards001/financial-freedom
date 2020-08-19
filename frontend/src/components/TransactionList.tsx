import React, { ReactElement } from 'react'
import Transaction from './Transaction'

interface Props {
  transactionList: Transaction[],
  deleteTransaction: DeleteTransaction
}

export default function TransactionList({transactionList, deleteTransaction}: Props): ReactElement {
  return (
    <ul>
      {transactionList.map(transaction => (
        <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction}/>  
      ))}
    </ul>
  )
}
