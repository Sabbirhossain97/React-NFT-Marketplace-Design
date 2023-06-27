import React from "react";
import "./Collections.css";
import "../../fonts/IntegralCFRegular.ttf";

export default function Collections() {
  return (
    <div>
      <div className="collection-container">
        <div class="collection-group1">
          <img
            src="assets/collections/collection-big-image.png"
            width="400px"
            height="424px"
            alt="error"
          />
          <div class="collection-group1-bottom">
            <p class="collection-group1-bottom-text1">The Futr Abstr</p>
            <p class="collection-group1-bottom-text2">Highest Bid</p>
            <img
              src="assets/collections/avatar-medium.png"
              class="collection-group1-bottom-avatar"
              alt="error"
            />
            <img
              src="assets/collections/ethereum3.png"
              class="collection-group1-bottom-icon"
              style={{ width: "13px", height: " 21.333px", flexShrink: 0 }}
              alt="error"
            />
            <p class="collection-group1-bottom-text3">10 in the stock</p>
            <p class="collection-group1-bottom-text4">0.25 ETH</p>
          </div>
        </div>
        <div class="collection-group2">
          {[1, 2, 3].map((item, key) => (
            <div class="collection-group2-elements" key={key}>
              <img
                src={`assets/collections/collection-image-${item}.png`}
                alt="error"
              />
              <p class="collection-group2-text1">The Futr Abstr</p>
              <img
                src="assets/collections/avatar-medium.png"
                class="collection-group2-avatar"
                alt="error"
              />
              <div class="collection-group2-frame">
                <img src="assets/collections/ethereum2.png" alt="error" />
                <p class="collection-group2-text2">0.25 ETH</p>
              </div>
              <p class="collection-group2-text3">1 of 8</p>
              <div>
                <button class={`collection-group2-btn${item}`}>
                  Place a bid
                </button>
              </div>
            </div>
          ))}
        </div>
        <div class="collection-group3">
          <div class="collection-group3-elements-top">
            <p
              style={{ fontFamily: "Integral CF, sans-serif" }}
              class="collection-group3-header"
            >
              TOP COLLECTIONS OVER
            </p>
            <p class="collection-group3-subheader">last 7 Days</p>
          </div>
          <div class="collection-group3-elements">
            <p class="collection-group3-elements-rank">1</p>
            <img
              class="collection-group3-elements-icon"
              src="assets/collections/top-collections/ethereum-big.png"
              alt="error"
            />
            <p class="collection-group3-elements-name">CryptoFunks</p>
            <img
              src="assets/collections/top-collections/cryptofunks.png"
              class="collection-group3-elements-logo"
              alt="error"
            />
            <p class="collection-group3-elements-count">19,769.39</p>
            <p class="collection-group3-elements-percentage">+26.52%</p>
            <img
              src="assets/collections/top-collections/verify.png"
              class="verify"
              alt="error"
            />
          </div>
          <div class="collection-group3-elements">
            <p class="collection-group3-elements-rank">2</p>
            <img
              class="collection-group3-elements-icon"
              src="assets/collections/top-collections/ethereum-big.png"
              alt="error"
            />
            <p class="collection-group3-elements-name">Cryptix</p>
            <img
              src="assets/collections/top-collections/cryptix.png"
              class="collection-group3-elements-logo"
              alt="error"
            />
            <p class="collection-group3-elements-count">2,769.39</p>
            <p
              class="collection-group3-elements-percentage"
              style={{ color: "#FF002E" }}
            >
              +10.52%
            </p>
          </div>
          <div class="collection-group3-elements">
            <p class="collection-group3-elements-rank">3</p>
            <img
              class="collection-group3-elements-icon"
              src="assets/collections/top-collections/ethereum-big.png"
              alt="error"
            />
            <p class="collection-group3-elements-name">Frensware</p>
            <img
              src="assets/collections/top-collections/frensware.png"
              class="collection-group3-elements-logo"
              alt="error"
            />
            <p class="collection-group3-elements-count">9,232.39</p>
            <p class="collection-group3-elements-percentage">+2.52%</p>
          </div>
          <div class="collection-group3-elements">
            <p class="collection-group3-elements-rank">4</p>
            <img
              class="collection-group3-elements-icon"
              src="assets/collections/top-collections/ethereum-big.png"
              alt="error"
            />
            <p class="collection-group3-elements-name">PunkArt</p>
            <img
              src="assets/collections/top-collections/punkart.png"
              class="collection-group3-elements-logo"
              alt="error"
            />
            <p class="collection-group3-elements-count">3,769.39</p>
            <p class="collection-group3-elements-percentage">+1.52%</p>
            <img
              src="assets/collections/top-collections/verify.png"
              class="verify"
              alt="error"
            />
          </div>
          <div class="collection-group3-elements" style={{ border: "none" }}>
            <p class="collection-group3-elements-rank">5</p>
            <img
              class="collection-group3-elements-icon"
              src="assets/collections/top-collections/ethereum-big.png"
              alt="error"
            />
            <p class="collection-group3-elements-name">Art Crypto</p>
            <img
              src="assets/collections/top-collections/artcrypto.png"
              class="collection-group3-elements-logo"
              alt="error"
            />
            <p class="collection-group3-elements-count">10,769.39</p>
            <p
              class="collection-group3-elements-percentage"
              style={{ color: "#FF002E" }}
            >
              +2.52%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
