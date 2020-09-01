import React, { ReactElement } from 'react'
import Chart from "react-google-charts";

interface Props {
  transactionList: Transaction[]
}

/**
 * A component that represents a pie chart that compares the
 * users spending on all expense categories. It uses 
 * react-google-charts to achieve this
 * 
 * @param transactionList the list of the users transactions
 */
export default function CategoryPieChart({transactionList}: Props): ReactElement {
  let categoryMap = expenseCategories();

  // calculates how much the user has spent on each category
  function expenseCategories(): {}[] {
    let map = new Map<string, number>();
    for(let transaction of transactionList) {
      if (!transaction.income) {
        const amount: number = Number(transaction.amount)
        if (map.has(transaction.category)) {
          map.set(transaction.category, Number(map.get(transaction.category))+amount);
        } else {
          map.set(transaction.category, amount);
        }
      }
    }
    let output = [['Category', 'Amount'], {}]
    for(let [key, value] of map) {
      output.push([key, value]);
    }
    output.splice(1, 1);
    return output;
  }

  return (
      <div>
        <Chart
          width={'400px'}
          height={'280px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={
            categoryMap
          }
          options={{
            title: 'Expense Categories',
            backgroundColor: "#ffffff",
            titleTextStyle: {color: 'black'},
            legendTextStyle: { color: 'black' }
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
  )
}
