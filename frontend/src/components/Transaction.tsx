import React, { ReactElement } from 'react'

interface Props {
  transaction: Transaction
  deleteTransaction: DeleteTransaction
}

export default function Transaction({transaction, deleteTransaction}: Props): ReactElement {
  return (
    <div style={{ color: transaction.income ? "green" : "red"}} className="p-3 table-row">
      <div className="table-cell px-2 py-2">
        {transaction.category}
      </div>
      <div className="table-cell px-2 py-2">
        {transaction.amount}
      </div>
      <div className="table-cell px-2 py-2">
        <button 
          onClick={() => { deleteTransaction(transaction.id) }}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-0 px-1 rounded"
        >
          X
        </button>
      </div>
    </div>
  )
}
