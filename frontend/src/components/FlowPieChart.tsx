import React, { ReactElement } from 'react'
import Chart from "react-google-charts";

interface Props {
  transactionList: Transaction[]
}

/**
 * A component that represents a pie chart that compares the
 * income of the user to their expenses. It uses 
 * react-google-charts to achieve this
 * 
 * @param transactionList the list of the users transactions
 */
export default function PieChart({transactionList}: Props): ReactElement {
  const income: number = incomeExpense()[0];
  const expense: number = incomeExpense()[1];

  // calculates how much the user earns vs how much they spend
  function incomeExpense(): number[] {
    var income: number = 0;
    var expense: number = 0;
    for(let transaction of transactionList) {
      const amount: number = Number(transaction.amount)
      if (transaction.income) {
        income = income+amount;
      } else {
        expense = expense+amount;
      }
    }
    return [income, expense];
  }

  return (
    <div>
      <Chart
        width={'400px'}
        height={'280px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Category', 'Amount'],
          ['Income', income],
          ['Expenses', expense],
        ]}
        options={{
          title: 'Income vs Expenses',
          backgroundColor: "#ffffff",
          colors: ['green', 'red'],
          titleTextStyle: {color: 'black'},
          legendTextStyle: { color: 'black' }
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )
}
