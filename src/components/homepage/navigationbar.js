// Navbar.js
import React from 'react';
import logotradethrill from '../../logotradethrill.svg';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneRounded';
import ProfileIcon from '@mui/icons-material/AccountCircleRounded';
import InputBase from '@mui/material/InputBase'; // Change import to InputBase
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import './navigationbar.css'; // Import the navbar.css file
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Navbar = () => {
  const navigate = useNavigate();

  
  const goToSellPage = () => {
    // Use navigate function to navigate to the SellPage component
    navigate('/sellpage');  // Replace '/sell' with the actual path to your SellPage
  };

  const goToChatPage = () => {
    // Use navigate function to navigate to the SellPage component
    navigate('/chatpage');  // Replace '/sell' with the actual path to your SellPage
  };

  const goToNotificationPage = () => {
    // Use navigate function to navigate to the SellPage component
    navigate('/notify');  // Replace '/sell' with the actual path to your SellPage
  };

  const goToProfilePage = () => {
    // Use navigate function to navigate to the SellPage component
    navigate('/profilepage');  // Replace '/sell' with the actual path to your SellPage
  };

  return (
    <div className="navbar">
      <img src={logotradethrill} alt="logo" className="navbar-logo" />
      <div className="navbar-logo-name">TradeThrill</div>
      <div className="search-container">
        <InputBase // Change Input to InputBase
          className="searchbar"
          placeholder="Search for items"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon className="search-icon" />
            </InputAdornment>
          }
        />
      </div>
      <FavoriteBorderIcon className="favoriteicon" />
      <button className="navbar-button" onClick={goToSellPage}>
        +SELL
      </button>
      <button className="navbar-button" onClick={goToChatPage}>+CHAT</button>
      <NotificationsIcon className="notificationicon" onClick={goToNotificationPage}/>
      <ProfileIcon className="profileicon"  onClick={goToProfilePage}/>
    </div>
  );
};

export default Navbar;
