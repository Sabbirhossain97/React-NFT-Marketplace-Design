import React from "react";
import "./Topmenu.css";
import "../../fonts/IntegralCFRegular.ttf";

export default function Topmenu() {
  return (
    <div className="topmenu-container">
      <div class="topmenu">
        <div>
          <p class="logo" style={{ fontFamily: "Integral CF, sans-serif" }}>
            NFTERS
          </p>
        </div>
        <div class="topmenu-cta">
          <p ><a class="topmenu-cta-items" href="#">Marketplace</a></p>
          <p ><a class="topmenu-cta-items" href="#">Resource</a></p>
          <p ><a class="topmenu-cta-items" href="#">About</a></p>
        </div>
        <div class="searchbar-wrapper">
          <input class="searchbar" placeholder="Search" width="100px" />
          <img class="search-icon" src="assets/topmenu/search.png" alt="search" />
        </div>
        <div class="topmenu-btn">
          <button class="top-btn-1">Upload</button>
          <button class="top-btn-2">Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}
