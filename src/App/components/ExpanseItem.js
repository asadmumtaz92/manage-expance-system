import React from 'react';
import './ExpanseItem.css';
import Moment from 'react-moment';

const ExpanceItem = (props) => {

    return (
        <div className='expense-item'>
            <div className="expense-date">
                <div className="expense-date__month">
                    <Moment format="MMMM">{props?.item?.date}</Moment>
                </div>
                <div className="expense-date__year">
                    <Moment format="YYYY">{props?.item?.date}</Moment>
                </div>
                <div className="expense-date__day">
                    <Moment format="DD">{props?.item?.date}</Moment>
                </div>
            </div>

            <div className='expense-item__description'>
                <h2>{props?.item?.title}</h2>
                <div className='expense-item__price'>${props?.item?.amount}</div>
            </div>
        </div>
    )
}

export default ExpanceItem
