import React, { useState } from 'react'
import { v4 } from 'uuid';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import Header from './Header';
import PieChart from './PieChart';
import Footer from './Footer';

export default function Home() {
  const initialTransactions: Transaction[] = [
    {
      id: v4(),
      income: true,
      amount: 653.50,
      category: "Paycheck"
    },{
      id: v4(),
      income: false,
      amount: 230.00,
      category: "Rent"
    },{
      id: v4(),
      income: false,
      amount: 15.99,
      category: "Takeaways"
    },{
      id: v4(),
      income: false,
      amount: 49.99,
      category: "Clothes"
    },{
      id: v4(),
      income: true,
      amount: 653.50,
      category: "Paycheck"
    },{
      id: v4(),
      income: false,
      amount: 32.50,
      category: "Restaurant"
    },
  ];
  const [transactionList, setTransactionList] = useState(initialTransactions)

  const addTransaction: AddTransaction = (income: boolean, amount: number, category: string) => {
    const newTransactions: Transaction[] = 
      [...transactionList, { id: v4(), income: income, amount: amount, category: category}];
    setTransactionList(newTransactions);
  }

  const deleteTransaction: DeleteTransaction = (id: string) => {
    const newTransactions: Transaction[] = 
      transactionList.filter(transactionItem => id !== transactionItem.id);
    setTransactionList(newTransactions);
  }

  return (
    <div>
      <Header />
      <PieChart transactionList={transactionList}/>
      <AddTransaction addTransaction={addTransaction}/>
      <TransactionList transactionList={transactionList} deleteTransaction={deleteTransaction}/>
      <Footer />
    </div>
  )
}
