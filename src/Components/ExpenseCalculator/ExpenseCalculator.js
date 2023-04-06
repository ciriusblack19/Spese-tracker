import { useState } from 'react';
import './ExpenseCalculator.css';

const ExpenseCalculator = ({ expenses }) => {
  const [total, setTotal] = useState(0);

  // Calcola il totale iniziale all'avvio
  useState(() => {
    const initialTotal = expenses.reduce((total, expense) => {
      return expense.type === 'income' ? total + expense.amount : total - expense.amount;
    }, 0);
    setTotal(initialTotal);
  }, [expenses]);

  // Aggiorna il totale ogni volta che la prop `expenses` cambia
  useState(() => {
    const updatedTotal = expenses.reduce((total, expense) => {
      return expense.type === 'income' ? total + expense.amount : total - expense.amount;
    }, 0);
    setTotal(updatedTotal);
  }, [expenses]);

  let message = '';
  if (total === 0) {
    message = 'Non ci sono spese.';
  } else if (total < 0) {
    message = `Devi assolutamente migliorare il tuo Cashflow, sei a €${total}`;
  } else if (total > 0 && total < 1000) {
    message = `Il tuo cash flow è di €${total} , sei sulla buona strada`;
  } else if (total > 1000) {
    message = `Hai raggiunto un cash flow di €${total} , COMPLIMENTI`;
  }

  return (
    <div className="expenseCalculator">
      <div className="expenseCalculator__message">{message}</div>
    </div>
  );
};

export default ExpenseCalculator;
