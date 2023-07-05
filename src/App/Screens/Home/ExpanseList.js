import React, { useState } from 'react'
import ExpanseItem from '../../components/ExpanseItem'
import './ExpanseList.css'
import Header from '../../components/Header'
import ExpenseForm from '../../components/NewExpanse/ExpenseForm'


const ExpanseList = () => {
    
    const [expenses, setExpenses] = useState([])

    // SAVE DATA IN ARRAY
    const addExpanseHandler = (text) => {
        let ff = [text, ...expenses]
        setExpenses(ff)
    }

    const ItemRender = ({ item }) => {

        return (
            <ExpanseItem item={item} />
        )
    }

    return (
        <div>
            <Header />
            <div className='container'>

                <ExpenseForm addExpanseHandler={addExpanseHandler} />
                {expenses &&
                    expenses.map(item => {
                        return <ItemRender item={item} key={item?.id} />
                    })
                }
            </div>
        </div>
    )
}

export default ExpanseList
