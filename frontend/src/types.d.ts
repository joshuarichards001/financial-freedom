interface Transaction {
  id: string,
  income: boolean,
  amount: number,
  category: string,
}

type AddTransaction = (income: boolean, amount: number, category: string) => void;
type DeleteTransaction = (id: string) => void;