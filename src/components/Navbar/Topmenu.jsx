import React from "react";
import "./Topmenu.css";
import "../../fonts/IntegralCFRegular.ttf";

export default function Topmenu() {
  return (
    <nav className="topmenu-container">
      {/* <div class="topmenu"> */}
        <div class="logo">
          <p style={{ fontFamily: "Integral CF, sans-serif" }}>NFTERS</p>
        </div>
        <div class="topmenu-cta">
          <p>
            <a class="topmenu-cta-items" href="#">
              Marketplace
            </a>
          </p>
          <p>
            <a class="topmenu-cta-items" href="#">
              Resource
            </a>
          </p>
          <p>
            <a class="topmenu-cta-items" href="#">
              About
            </a>
          </p>
        </div>
        <div class="searchbar-wrapper">
          <input class="searchbar" placeholder="Search" />
          <img
            class="search-icon"
            src="assets/topmenu/search.png"
            alt="search"
          />
        </div>
        <div class="topmenu-btn">
          <button class="top-btn-1">Upload</button>
          <button class="top-btn-2">Connect Wallet</button>
        </div>
      {/* </div> */}
    </nav>
  );
}
