import './ExpenseTable.css'

const ExpenseTable = ({ expenses, onDeleteExpense }) => {
    const handleDelete = (expense) => {
        onDeleteExpense(expense);
    }

    let expenseRows = null;
    if (expenses) {
        expenseRows = expenses.map((expense, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{expense.name}</td>
                    <td className={`${expense.type.toLowerCase()}`}>€ {expense.amount}</td>
                    <td>{expense.date}</td>
                    <td><button onClick={() => handleDelete(expense)}>Elimina</button></td>
                </tr>
            );
        });
    }
    return (
        <table className='expense__table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Spesa</th>
                    <th>Importo</th>
                    <th>Data</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>{expenseRows}</tbody>
        </table>
    )
}

export default ExpenseTable;