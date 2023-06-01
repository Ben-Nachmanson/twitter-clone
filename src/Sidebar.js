import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarIcon from '@mui/icons-material/Star';
import TagIcon from '@mui/icons-material/Tag';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className = "sidebar">
        {/* Twitter icon */}
        <TwitterIcon className = "sidebar_twitterIcon"/>
        <SidebarOption active Icon = {HomeIcon} text = "Home"/>
        <SidebarOption Icon = {TagIcon} text = "Explore"/>
        <SidebarOption Icon = {NotificationsNoneIcon} text = "Notifications"/>
        <SidebarOption Icon = {MailOutlineIcon} text = "Messages"/>
        <SidebarOption Icon = {ListAltIcon} text = "Lists"/>
        <SidebarOption Icon = {BookmarkBorderIcon} text = "Bookmarks"/>
        <SidebarOption Icon = {StarIcon} text = "Twitter Blue"/>

        
        <SidebarOption Icon = {PermIdentityIcon} text = "Profile"/>
        <SidebarOption Icon = {MoreHorizIcon} text = "More"/>
        

        
        {/* button -> tweet */}
        <Button variant = "outlined" className = "sidebar__tweet" fullWidth>Tweet</Button>
        </div>
  )
}

export default Sidebar