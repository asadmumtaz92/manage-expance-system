import MyHeading from '../../components/MyHeading'
import ExpanseItem from '../../components/ExpanseItem'
import './ExpanseList.css'
import { expenses } from '../../constantData/Index'
import Header from '../../components/Header'
import ExpenseForm from '../../components/NewExpanse/ExpenseForm'

const ExpanseList = () => {

    const ItemRender = ({ item }) => {

        return (
            <ExpanseItem item={item} />
        )
    }

    return (
        <div>
            <Header />
            <div className='container'>

                <ExpenseForm />
                {expenses.map(item => {
                    return (
                        <ItemRender item={item} key={item?.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default ExpanseList
