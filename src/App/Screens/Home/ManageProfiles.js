import MyHeading from '../../components/MyHeading'
import UserScreens from '../../components/UserScreens'
import './Welcome.css'
import { screensData } from '../../constantData/Index'

const Welcome = () => {

    const ShowScreens = ({ items }) => {
        let item = items;

        return (
            <UserScreens item={item} />
        )
    }

    return (
        <div className='container'>
            <MyHeading title={`Manage Profiles:`} />

            <div className='dataBox'>
                {screensData.map(item => {
                    return (
                        <ShowScreens items={item} key={item?.id} />
                    )
                })}
            </div>

            <a className='link'>Done</a>
        </div>
    )
}

export default Welcome
