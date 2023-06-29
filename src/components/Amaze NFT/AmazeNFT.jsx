import React from "react";
import "./AmazeNFT.css";
import "../../fonts/IntegralCFRegular.ttf";

export default function AmazeNFT() {
  return (
    <div>
      <div class="amazenft-container">
        <div class="amazenft-child">
          <p
            style={{ fontFamily: "Integral CF, sans-serif", width: "398px" }}
            class="amaze-nft-group1-text"
          >
            THE AMAZING NFT ART OF THE WORLD HERE
          </p>
        </div>
        <div class="amazenft-child">
          <div class="amaze-nft-group2-text">
            <img
              src="assets/amaze-nft/card-tick.png"
              class="amaze-nft-icon"
              alt="error"
            />
            <p class="amaze-nft-group2-header">Fast Transaction</p>
            <p class="amaze-nft-group2-subheader">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus imperdiet.
            </p>
          </div>
        </div>
        <div class="amazenft-child">
          <div class="amaze-nft-group2-text">
            <p class="amaze-nft-group2-header">Growth Transaction</p>
            <p class="amaze-nft-group2-subheader">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus
            </p>
            <img
              src="assets/amaze-nft/chart-square.png"
              class="amaze-nft-icon"
              alt="error"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
