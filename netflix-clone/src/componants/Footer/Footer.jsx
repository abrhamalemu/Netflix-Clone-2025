import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icon">
          <FacebookRoundedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li> Jobs</li>
              <li> Cookies Performance</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Use</li>
            </ul>
          </div>
        </div>
        <div className="Service_code">
          <p>sercice cde</p>
        </div>
        <div className="Coppy_write">&copy;1997*2024 Netflix, Inc.</div>
      </div>
    </div>
  );
};
