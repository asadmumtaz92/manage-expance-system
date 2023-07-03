import './ExpanseItem.css';

const ExpanceItem = (props) => {

    const month = props?.item?.date.toLocaleString('en-US', { month: 'long' });
    const day = props?.item?.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props?.item?.date.getFullYear();

    return (
        <div className='expense-item'>
            <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__day">{day}</div>
            </div>

            <div className='expense-item__description'>
                <h2>{props?.item?.title}</h2>
                <div className='expense-item__price'>${props?.item?.amount}</div>
            </div>
        </div>
    )
}

export default ExpanceItem
