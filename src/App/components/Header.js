import React, { useState } from 'react'
import './Header.css'
const Header = () => {

    const [selectedTab, setSelectedTab] = useState(1)
    const HeaderData = [
        {
            id: 1,
            title: 'Tab-1',
        },
        {
            id: 2,
            title: 'Tab-2',
        },
        {
            id: 3,
            title: 'Tab-3',
        },
        {
            id: 4,
            title: 'Tab-4',
        },
    ]

    return (
        <div className="header">
            <p className='logo'>Project Logo</p>
            {HeaderData.map(item => {
                return (
                    <button
                        className={selectedTab == item?.id ? 'tab selectedTab' : 'tab'}
                        onClick={() => setSelectedTab(item?.id)}
                        key={item?.id}
                    >
                        <p className={selectedTab == item?.id ? 'selectedTabText' : 'tabText'}>
                            {item?.title}
                        </p>
                    </button>
                )
            })}
        </div>
    )
}

export default Header
