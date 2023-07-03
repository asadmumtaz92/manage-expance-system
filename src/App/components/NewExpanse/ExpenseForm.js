import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const titleHandler = (event) => {
        setTitle(event?.target?.value)
    }
    const amountHandler = (event) => {
        setAmount(event?.target?.value)
    }
    const dateHandler = (event) => {
        setDate(event?.target?.value)
    }
    const submitHandler = (event) => {
        event.preventDefult();
        console.log(event)

        let userData = {
            title: title,
            amount: amount,
            date: date
        }
        alert(JSON.stringify(userData))

        console.log(JSON.parse(userData))
        setTitle('')
        setAmount('')
        setDate('')
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title:</label>
                    <input type='text' value={title} onChange={titleHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount:</label>
                    <input type='number' min='0.01' step='0.01' value={amount} onChange={amountHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date:</label>
                    <input type='date' min='2023-07-01' max='2023-07-31' value={date} onChange={dateHandler} />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
