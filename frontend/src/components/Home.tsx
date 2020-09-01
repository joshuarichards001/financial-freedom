import React, { useState, useEffect } from "react";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import Header from "./Header";
import Balance from "./Balance";
import FlowPieChart from "./FlowPieChart";
import CategoryPieChart from "./CategoryPieChart"
import CategoryList from "./CategoryList"
import Footer from "./Footer";
import styles from "../Main.module.css";
import { getTransactions, addTransaction, deleteTransaction } from './API'

export default function Home() {
  const [transactionList, setTransactionList] = useState<Transaction[]>([]);

  useEffect(() => {
    handleFetchTransactions()
  }, [])

  // Gets a list of all transactions from API
  const handleFetchTransactions: HandleFetchTransactions = () => {
    getTransactions()
    .then(({ data }: Transaction[] | any) => {
      setTransactionList(data)
    })
    .catch((err: Error) => console.log(err))
  }

  // Adds the given transaction to the API
  const handleAddTransaction: HandleAddTransaction = (income: boolean, amount: number, category: string) => {
    addTransaction(income, amount, category)
    .then(() => {
      handleFetchTransactions()
    })
    .catch((err) => console.log(err))
  }

  // Deletes the given transaction from the API
  const handleDeleteTransaction: HandleDeleteTransaction = (id: string) => {
    deleteTransaction(id)
    .then(() => {
        handleFetchTransactions()
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={styles.pageContent}>
      <div className={styles.header}>
          <Header />
      </div>
      <div className={styles.content}>
        <div className={styles.container}>
          <Balance transactionList={transactionList} />
          <AddTransaction addTransaction={handleAddTransaction} />
          <TransactionList
            transactionList={transactionList}
            deleteTransaction={handleDeleteTransaction}
          />
        </div>
        <div>
          <div className={styles.container}>
            <h2>Data</h2>
            <FlowPieChart transactionList={transactionList} />
            <CategoryPieChart transactionList={transactionList} />
          </div>
        </div>
        <div className={styles.container}>
          <h2>Budget</h2>
          <CategoryList transactionList={transactionList}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}