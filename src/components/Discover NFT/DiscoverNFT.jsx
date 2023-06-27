import React from "react";
import "./DiscoverNFT.css";
import "../../fonts/IntegralCFRegular.ttf";

export default function DiscoverNFT() {
  return (
    <div>
      <div class="discover-nft-container">
        <div
          class="discover-nft-title"
          style={{ fontFamily: "Integral CF, sans-serif" }}
        >
          DISCOVER MORE NFTS
        </div>
        <div class="discover-nft-categories">
          <div class="discover-nft-menu">
            <li class="discover-nft-menu-items-active">All Categories</li>
            <li class="discover-nft-menu-items">Art</li>
            <li class="discover-nft-menu-items">Celebrities</li>
            <li class="discover-nft-menu-items">Gaming</li>
            <li class="discover-nft-menu-items">Sport</li>
            <li class="discover-nft-menu-items">Music</li>
            <li class="discover-nft-menu-items">Crypto</li>
          </div>
          <div class="discover-nft-filter">
            <img src="assets/discover-nfts/filter.png" class="filter-icon" />
            <p class="filter">All Filters</p>
          </div>
        </div>
        <div class="discover-nft-contents-wrapper">
          {[
            {
              id: 1,
              name: "ArtCrypto",
            },
            {
              id: 2,
              name: "This NFT",
            },
            {
              id: 3,
              name: "NameCrypto",
            },
            {
              id: 4,
              name: "KingCrypto",
            },
            {
              id: 4,
              name: "ArtCrypto",
            },
            {
              id: 3,
              name: "This NFT",
            },
            {
              id: 1,
              name: "NameCrypto",
            },
            {
              id: 2,
              name: "KingCrypto",
            },
            {
              id: 1,
              name: "ArtCrypto",
            },
            {
              id: 4,
              name: "This NFT",
            },
            {
              id: 2,
              name: "NameCrypto",
            },
            {
              id: 3,
              name: "KingCrypto",
            },
            {
              id: 3,
              name: "ArtCrypto",
            },
            {
              id: 2,
              name: "This NFT",
            },
            {
              id: 1,
              name: "NameCrypto",
            },
            {
              id: 4,
              name: "KingCrypto",
            },
          ].map((item, key) => (
            <div class="discover-nft-contents-item">
              <img
                src={`assets/discover-nfts/discover-nft-image${item.id}.png`}
                class="discover-nft-image"
              />
              <img
                src="assets/discover-nfts/discover-nft-avatar1.png"
                class="discover-nft-avatar1"
              />
              <img
                src="assets/discover-nfts/discover-nft-avatar2.png"
                class="discover-nft-avatar2"
              />
              <img
                src="assets/discover-nfts/discover-nft-avatar3.png"
                class="discover-nft-avatar3"
              />
              <img
                src="assets/discover-nfts/discover-nft-avatar4.png"
                class="discover-nft-avatar4"
              />
              <img
                src="assets/discover-nfts/discover-nft-ethereum.png"
                class="discover-nft-icon"
              />
              <p class="discover-nft-text1">{item.name}</p>
              <p class="discover-nft-text2">0.25 ETH</p>
              <p class="discover-nft-text3">1 of 321</p>
              <p class="discover-nft-text4">3h 50m 2s left</p>
              <p class="discover-nft-text5">Place a bid</p>
              <hr class="discover-nft-divider" />
            </div>
          ))}
        </div>
        <div class="discover-nft-btn">More NFTs</div>
      </div>
    </div>
  );
}
