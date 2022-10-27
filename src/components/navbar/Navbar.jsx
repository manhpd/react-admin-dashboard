import React from 'react';
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="Search..."></input>
                <SearchOutlinedIcon/>
            </div>
            <div className="items">
                <div className="item">
                    <LanguageOutlinedIcon className='icon'/>
                    English
                </div>
                <div className="item">
                    <DarkModeOutlinedIcon className='icon'/>
                </div>
                <div className="item">
                    <FullscreenExitOutlinedIcon className='icon'/>
                </div>
                <div className="item">
                    <NotificationsNoneOutlinedIcon className='icon'/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ChatBubbleOutlineOutlinedIcon className='icon'/>
                    <div className="counter">2</div>
                </div>
                <div className="item">
                    <ListOutlinedIcon className='icon'/>
                </div>
                <div className="item">
                    <img
                    src="https://yt3.ggpht.com/yti/AJo0G0mBDFItiW06HcdLDFnkZ7IDD7hKR0E7iFeyvqlfAIM=s88-c-k-c0x00ffffff-no-rj-mo"
                    alt="Profile Picture"
                    className='avatar'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar