import React from "react";
import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export const Header = () => {
  return (
    <>
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header_left">
            <ul>
              <li>
                {/* <img src={NetflixLogo} alt="Netflix Logo" width="100" /> */}
              </li>
              <li>Netflix</li>
              <li>Home</li>
              <li>TvShow</li>
              <li>Movice</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Language</li>
            </ul>
          </div>
          <div className="header_right">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
