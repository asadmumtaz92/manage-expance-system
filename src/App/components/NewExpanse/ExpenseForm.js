import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('')
    const [titleError, setTitleError] = useState('')
    const [amount, setAmount] = useState('')
    const [amountError, setAmountError] = useState('')
    const [date, setDate] = useState('')
    const [dateError, setDateError] = useState('')

    const titleHandler = (event) => {
        setTitleError('')
        setTitle(event?.target?.value)
    }
    const amountHandler = (event) => {
        setAmountError('')
        setAmount(event?.target?.value)
    }
    const dateHandler = (event) => {
        setDateError('')
        setDate(event?.target?.value)
    }
    const submitHandler = () => {
        let disabled =  false
        if (title) { setTitleError(''); disabled = false }
        else { setTitleError('Enter value first...'); disabled = true }
        if (amount) { setAmountError(''); disabled = false }
        else { setAmountError('Enter value first...'); disabled = true }
        if (date) { setDateError(''); disabled = false }
        else { setDateError('Enter value first...'); disabled = true }

        if (!disabled) {
            let userData = {
                title: title,
                amount: (+amount).toFixed(2),
                date: date
            }
            console.log(userData)
            props?.addExpanseHandler(userData)
            setTitle('')
            setAmount('')
            setDate('')
        }
    }


    return (
        <div className='box'>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title:</label>
                    <input type='text' value={title} onChange={titleHandler} />
                    {titleError && <p className='error'>{titleError}</p>}
                </div>
                <div className='new-expense__control'>
                    <label>Amount:</label>
                    <input type='number' min='0.01' step='0.01' value={amount} onChange={amountHandler} />
                    {amountError && <p className='error'>{amountError}</p>}
                </div>
                <div className='new-expense__control'>
                    <label>Date:</label>
                    {/* <input type='date' min='2023-07-01' max='2023-07-31' value={date} onChange={dateHandler} /> */}
                    <input type='date' value={date} onChange={dateHandler} />
                    {dateError && <p className='error'>{dateError}</p>}
                </div>

                <div className='new-expense__actions'>
                    <label></label>
                    <button className='button' type='submit' onClick={submitHandler}>Add Expense</button>
                </div>
            </div>
        </div>
    );
};

export default ExpenseForm;
