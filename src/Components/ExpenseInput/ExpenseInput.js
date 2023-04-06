import './ExpenseInput.css';
import { useState } from 'react';

const ExpenseInput = ({ onAddExpense }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('income')
    const [date, setDate] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handleAmountChange = (e) => setAmount(e.target.value);
    const handleTypeChange = (e) => setType(e.target.value);
    const handleDateChange = (e) => setDate(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const expense = {name, amount: parseFloat(amount), type, date};
        onAddExpense(expense);
        setName('');
        setAmount(0);
        setType('income');
        setDate('');
    }
    return (
        <form className='expense__input' onSubmit={handleSubmit}>
            <label htmlFor='name'>
                Nome della spesa
                <input type='text' id='name' value={name} onChange={handleNameChange} />
            </label>
            <label htmlFor='amount'>
                Importo
                <input type='number' id='amount' value={amount} onChange={handleAmountChange}/>
            </label>
            <label htmlFor='type'>
                Tipo di spesa
                <select id='type' value={type} onChange={handleTypeChange}>
                    <option value='income'>Entrata</option>
                    <option value='expense'>Uscita</option>
                </select>
            </label>
            <label>
                Data
                <input type='date' value={date} onChange={handleDateChange} />
            </label>
            <button type='submit'>Aggiungi Spesa</button>
        </form>
    )
}

export default ExpenseInput