import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getExpenses } from '../application/selectors/expenses';
import { getLoading } from '../application/selectors/loading'
import { pageLoaded } from '../application/actions/loading';
import { putExpense } from '../application/actions/expenses';

// exporting default function that will be interpreted as App by the import
export default () => {

  const dispatch = useDispatch();

  // take part of the state that is being stored on the redux store.
  const expenses = useSelector(getExpenses)
  const loading = useSelector(getLoading);
  console.log(expenses)

  useEffect(() => {
    dispatch(pageLoaded)
  }, [dispatch])  
 
  return (
    <div className="App">
      <h1> Expenses </h1>
      {loading ? 
      'Loading expenses...' : 
      (<ul>
        {expenses.map(expense => (
          <li
            key={expense.id}
            onClick={() => dispatch(putExpense({...expenses, ...{id: 2, name: 'energia', anything: 0}}))}
          >
            {expense.name}
          </li>
        ))}
      </ul>)
      }
    </div>
  );
}
