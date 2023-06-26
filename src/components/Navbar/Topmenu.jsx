import React from "react";
import "./Navbar.css";
import "../../fonts/IntegralCFRegular.ttf";

export default function Topmenu() {
  return (
    <div class="topmenu">
      <div>
        <p class="logo" style={{ fontFamily: "Integral CF, sans-serif" }}>
          NFTERS
        </p>
      </div>
      <div class="topmenu-cta">
        <p>Marketplace</p>
        <p>Resource</p>
        <p>About</p>
      </div>
      <div class="searchbar-wrapper">
        <input class="searchbar" placeholder="Search" />
        <img class="search-icon" src="/assets/search.png" />
      </div>
      <div class="topmenu-btn">
        <button class="top-btn-1">Upload</button>
        <button class="top-btn-2">Connect Wallet</button>
      </div>
    </div>
  );
}
