import React from "react";
import "./AmazeNFT.css";
import "../../fonts/IntegralCFRegular.ttf";

export default function AmazeNFT() {
  return (
    <div>
      <div class="amaze-nft-container">
        <div class="amaze-nft-group1">
          <p
            style={{ fontFamily: "Integral CF, sans-serif",width: "398px" }}
            class="amaze-nft-group1-text"
          >
            THE AMAZING NFT ART OF THE WORLD HERE
          </p>
        </div>
        <div class="amaze-nft-group2">
          <p class="amaze-nft-group2-header">Fast Transaction</p>
          <p class="amaze-nft-group2-subheader">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            etiam viverra tellus imperdiet.
          </p>
          <img src="assets/card-tick.png" class="amaze-nft-icon" />
        </div>
        <div class="amaze-nft-group3">
          <p class="amaze-nft-group2-header">Growth Transaction</p>
          <p class="amaze-nft-group2-subheader">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            etiam viverra tellus
          </p>
          <img src="assets/chart-square.png" class="amaze-nft-icon" />
        </div>
      </div>
    </div>
  );
}
