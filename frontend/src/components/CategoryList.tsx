import React, { ReactElement } from 'react'
import styles from '../Main.module.css'
import Category from './Category'
import { EXPENSE_CATEGORIES } from '../helper/Constants';

interface Props {
  transactionList: Transaction[];
}

/**
 * A component that represents the expense categories and 
 * renders them as a table
 * 
 * @param categoryList the list of expense categories
 * @param transactionList the list of the users expenses
 */
export default function CategoryList({transactionList}: Props): ReactElement {
  const categoryList: string[] = EXPENSE_CATEGORIES;
  const categories: Map<string, number> = expenseCategories();

  function expenseCategories() {
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
    return map;
  }

  return (
    <div className={styles.tableStyle} style={{height: '560px'}}>
      <table>   
        <thead>
          <tr>
            <th>Category</th>
            <th>Budget</th>
            <th>Spent</th>
          </tr>
        </thead>
        <tbody>
          {categoryList.slice(1).map(category => {
            for(let [key, value] of categories) {
              if (key === category) {
                return <Category key={category} category={category} amount={value}/>  
              }
            }
            return <Category key={category} category={category} amount={0}/>
          })}
        </tbody>
    </table>
    </div>
  )
}
