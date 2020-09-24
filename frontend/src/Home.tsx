import React, { useState, useEffect } from "react";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import Header from "./components/Header";
import Balance from "./components/Balance";
import FlowPieChart from "./components/FlowPieChart";
import CategoryPieChart from "./components/CategoryPieChart";
import CategoryList from "./components/CategoryList";
import Footer from "./components/Footer";
import styles from "./Main.module.css";
import {
  getTransactions,
  addTransaction,
  deleteTransaction,
} from "./actions/transactionAPI";
import { userDetails, logoutUser } from "./actions/userAPI";

interface Props {
  token: string;
}

export default function Home({ token }: Props) {
  const [userId, setUserId] = useState(-1);
  const [transactionList, setTransactionList] = useState<Transaction[]>([]);

  const [showTransactions, setShowTransactions] = useState(true);
  const [showAddTransactions, setShowAddTransactions] = useState(true);
  const [showBalance, setShowBalance] = useState(true);
  const [showData, setShowData] = useState(true);
  const [showBudget, setShowBudget] = useState(true);

  const onAddTransClick = (e) => {
    e.preventDefault();
    setShowAddTransactions(!showAddTransactions);
  };

  const onTransClick = (e) => {
    e.preventDefault();
    setShowTransactions(!showTransactions);
  };

  const onBalanceClick = (e) => {
    e.preventDefault();
    setShowBalance(!showBalance);
  };

  const onDataClick = (e) => {
    e.preventDefault();
    setShowData(!showData);
  };

  const onBudgClick = (e) => {
    e.preventDefault();
    setShowBudget(!showBudget);
  };

  const onLogoutClick = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to log out of this account?")) {
      logoutUser(token);
      localStorage.clear();
      window.location.reload(false);
    }
  };

  useEffect(() => {
    handleFetchUserData();
  }, []);

  useEffect(() => {
    if (userId !== -1) handleFetchTransactions();
  }, [userId]);

  // Gets the users data
  const handleFetchUserData = () => {
    userDetails(token)
      .then(({ data }: userInfo | any) => {
        setUserId(data.id);
      })
      .catch((err: Error) => console.log(err));
  };

  // Gets a list of all transactions from API
  const handleFetchTransactions: HandleFetchTransactions = () => {
    getTransactions(token)
      .then(({ data }: Transaction[] | any) => {
        setTransactionList(data.reverse());
      })
      .catch((err: Error) => console.log(err));
  };

  // Adds the given transaction to the API
  const handleAddTransaction: HandleAddTransaction = (
    income: boolean,
    amount: number,
    category: string
  ) => {
    addTransaction(token, income, amount, category)
      .then(() => {
        handleFetchTransactions();
      })
      .catch((err) => console.log(err));
  };

  // Deletes the given transaction from the API
  const handleDeleteTransaction: HandleDeleteTransaction = (id: string) => {
    deleteTransaction(token, id)
      .then(() => {
        handleFetchTransactions();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className={styles.headerContainer}>
        <Header
          transClick={onTransClick}
          dataClick={onDataClick}
          budgClick={onBudgClick}
          logoutClick={onLogoutClick}
          showTrans={showTransactions}
          showData={showData}
          showBudg={showBudget}
        />
      </div>
      <div className={styles.contentContainer}>
        {showTransactions ? (
          <div className={styles.container}>
            <Balance transactionList={transactionList} />
            <AddTransaction addTransaction={handleAddTransaction} />
            <TransactionList
              transactionList={transactionList}
              deleteTransaction={handleDeleteTransaction}
            />
          </div>
        ) : null}
        {showData ? (
          <div>
            <div className={styles.container}>
              <h2>Data</h2>
              <FlowPieChart transactionList={transactionList} />
              <CategoryPieChart transactionList={transactionList} />
            </div>
          </div>
        ) : null}
        {showBudget ? (
          <div className={styles.container}>
            <h2>Budget</h2>
            <CategoryList transactionList={transactionList} />
          </div>
        ) : null}
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
}
