import './App.css';
import { useState } from 'react';
import ExpenseInput from './Components/ExpenseInput/ExpenseInput';
import ExpenseTable from './Components/ExpenseTable/ExpenseTable';
import ExpenseCalculator from './Components/ExpenseCalculator/ExpenseCalculator';

function App() {
  const [expenses, setExpenses] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  const handleDeleteExpense = (expenseToDelete) => {
    setExpenses(expenses.filter((expense) => expense !== expenseToDelete))
  }

  return (
    <div className="App">
      <ExpenseInput onAddExpense={addExpenseHandler} />
      <ExpenseTable expenses={expenses} onDeleteExpense={handleDeleteExpense} />
      <ExpenseCalculator key={expenses.length} expenses={expenses}/>
    </div>
  );
}

export default App;
