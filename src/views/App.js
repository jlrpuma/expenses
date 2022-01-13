import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getExpenses } from '../application/selectors/expenses';
import { getLoading } from '../application/selectors/loading'
import { pageLoaded } from '../application/actions/loading';
import { putExpense } from '../application/actions/expenses';

const modifiedExpenses = (expenses) => {
  let clonedExpenses = [...expenses]
  clonedExpenses.push({id: 2, name: 'energia', anything: 0})
  return clonedExpenses
}

export default () => {

  const dispatch = useDispatch();

  const expenses = useSelector(getExpenses)
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(pageLoaded)
  }, [dispatch])  
 
  return (
    <div className="App">
      <h1> Expenses </h1>
      <button onClick={() => dispatch(putExpense(modifiedExpenses(expenses)))}>add Expense</button>
      {loading ? 
      'Loading expenses...' : 
      (<ul>
        {expenses.map(expense => (
          <li
            key={expense.id} 
            onClick={() => dispatch(putExpense(modifiedExpenses(expenses)))}
          >
            {expense.name}
          </li>
        ))}
      </ul>)
      }
    </div>
  );
}
