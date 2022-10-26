import React from 'react';
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <div className="logo">Manh Pham</div>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className='title'>
                        MAIN
                    </p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>
                            Dashboard
                        </span>
                    </li>
                    <p className='title'>
                        LIST
                    </p>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon' />
                        <span>
                            Users
                        </span>
                    </li>
                    <li>
                        <ShoppingCartOutlinedIcon className='icon' />
                        <span>
                            Products
                        </span>
                    </li>
                    <li>
                        <CreditCardOutlinedIcon className='icon' />
                        <span>
                            Orders
                        </span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon' />
                        <span>
                            Deliver
                        </span>
                    </li>
                    <p className='title'>
                        USEFULL
                    </p>
                    <li>
                        <InsertChartIcon className='icon' />
                        <span>
                            Stats
                        </span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <span>
                            Notifications
                        </span>
                    </li>
                    <p className='title'>SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon' />
                        <span>
                            System Health
                        </span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className='icon' />
                        <span>
                            Log
                        </span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className='icon' />
                        <span>
                            Settings
                        </span>
                    </li>
                    <p className='title'>
                        USER
                    </p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon' />
                        <span>
                            Profile
                        </span>
                    </li>
                    <li>
                        <ExitToAppOutlinedIcon className='icon' />
                        <span>
                            Logout
                        </span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar