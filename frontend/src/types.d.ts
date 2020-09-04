interface Transaction {
  id: string,
  income: boolean,
  amount: number,
  category: string,
  owner_id: number,
}

interface userInfo {
  email: string,
  id: number,
  username: string
}

type HandleAddTransaction = (income: boolean, amount: number, category: string) => void;
type HandleDeleteTransaction = (id: string) => void;
type HandleFetchTransactions = () => void;

// For CSS
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

type ApiDataType = {
  message: string
  status: string
  transactions: Transaction[]
  transaction?: Transaction
}