import React from "react";
import "./Hero.css";
import "../../fonts/IntegralCFRegular.ttf";
export default function Hero() {
  return (
    <div>
      <div className="hero-container">
        <div class="hero-right-section">
          <p
            class="hero-heading"
            style={{ fontFamily: "Integral CF, sans-serif" }}
          >
            DISCOVER, AND COLLECT DIGITAL ART NFTS
          </p>
          <p className="hero-subheading">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <div class="hero-btn">
            <button class="hero-btn-text">Explore Now</button>
          </div>
          <div className="hero-right-section-bottom">
            {[
              { count: "98k+", category: "Artwork" },
              { count: "12k+", category: "Auction" },
              { count: "15k+", category: "Artist" },
            ].map((item, key) => (
              <div key={key} class="hero-right-section-bottom-container">
                <span class="hero-right-section-bottom-header">
                  {item.count}
                </span>
                <span class="hero-right-section-bottom-subheader">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* hero-section-left */}
        <div class="hero-left-section">
          <div class="hero-image-1">
            <div>
              <p class="hero-image-1-header">Abstr Gradient NFT</p>
              <img src="assets/Hero/avatar1.png" class="hero-image-1-avatar" alt="error" />
              <p class="hero-image-1-subheader">Arkhan17</p>
            </div>
            <div class="hero-image-1-bottom">
              <p class="hero-image-1-bottom-text1">Current Bid</p>
              <p class="hero-image-1-bottom-text2">Ends in</p>
              <img src="assets/Hero/ethereum.png" class="hero-image-1-avatar2" alt="error" />
              <p class="hero-image-1-bottom-text3">
                12h&nbsp;&nbsp;43m&nbsp;&nbsp;42s
              </p>
              <p class="hero-image-1-bottom-text4"> 0.25 ETH </p>
            </div>
            <img src="assets/Hero/hero-image-1.png"  alt="error"/>
          </div>
          <div class="hero-image-2">
            <img src="assets/Hero/hero-image-2.png"  alt="error"/>
          </div>
          <div class="hero-image-3">
            <img src="assets/Hero/hero-image-3.png" alt="error" />
          </div>
          <img src="assets/Hero/ethereum-circle.png" class="hero-image-1-logo"  />
        </div>
        <img src="assets/Hero/Dot.png" class="dot" alt="error" />
      </div>
    </div>
  );
}
