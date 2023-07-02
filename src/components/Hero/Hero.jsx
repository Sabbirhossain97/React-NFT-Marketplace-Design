import React from "react";
import "./Hero.css";
import "../../fonts/IntegralCFRegular.ttf";
export default function Hero() {
  return (
    <div>
      <div class="hero-container">
        <div class="hero-child">
          <div>
            <p
              class="hero-heading"
              style={{ fontFamily: "Integral CF, sans-serif" }}
            >
              DISCOVER, AND COLLECT DIGITAL ART NFTS
            </p>
            <p className="hero-subheading">
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </p>
            <div class="hero-btn-wrapper">
              <button class="hero-btn-text">Explore Now</button>
            </div>
            <div class="hero-left-section-bottom ">
              {[
                { count: "98k+", category: "Artwork" },
                { count: "12k+", category: "Auction" },
                { count: "15k+", category: "Artist" },
              ].map((item, key) => (
                <div key={key} class="hero-left-section-bottom-container ">
                  <p class="hero-left-section-bottom-header">
                    {item.count}
                    <br />
                    <span class="hero-left-section-bottom-subheader">
                      {item.category}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <img src="assets/Hero/Dot.png" class="dot" alt="dot" />
        </div>
        <div class="hero-child">
          <div class="hero-image-container">
            <div class="hero-image-1-container">
              <img
                src="assets/Hero/hero-image-1.png"
                alt="error"
                class="hero-image-1"
              />
              <p class="hero-image-1-header">Abstr Gradient NFT</p>
              <p class="hero-image-1-subheader">Arkhan17</p>

              <img
                src="assets/Hero/avatar1.png"
                class="hero-image-1-avatar"
                alt="error"
              />
              <div class="hero-image-1-bottom">
                <p class="hero-image-1-bottom-text1">Current Bid</p>
                <p class="hero-image-1-bottom-text2">Ends in</p>
                <img
                  src="assets/Hero/ethereum.png"
                  class="hero-image-1-avatar2"
                  alt="error"
                />
                <p class="hero-image-1-bottom-text3">
                  12h&nbsp;&nbsp;43m&nbsp;&nbsp;42s
                </p>
                <p class="hero-image-1-bottom-text4"> 0.25 ETH </p>
              </div>

              <img
                src="assets/Hero/ethereum-circle.png"
                class="hero-image-1-logo"
                alt="logo"
              />
            </div>

            <img
              src="assets/Hero/hero-image-2.png"
              alt="error"
              class="hero-image-2"
            />
            <img
              src="assets/Hero/hero-image-3.png"
              alt="error"
              class="hero-image-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
