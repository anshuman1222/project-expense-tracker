import { dashboard, expenses, transactions, trend , signout } from '../utils/Icons'
import { FaChartLine} from 'react-icons/fa'
export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <FaChartLine/>,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "Incomes",
        icon:trend,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Expenses",
        icon:expenses,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "SignOut",
        icon: signout,
        link: "/dashboard",
    },
]
