import React, { ReactElement } from 'react'
import Transaction from './Transaction'

interface Props {
  transactionList: Transaction[],
  deleteTransaction: DeleteTransaction
}

export default function TransactionList({transactionList, deleteTransaction}: Props): ReactElement {
  return (
    <div className="table w-1/2 border-solid border-2 border-gray-200 rounded">
      <div className="table-row-group d">   
      {transactionList.map(transaction => (
        <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction}/>  
      ))}
    </div>
    </div>
    
  )
}
