import React, { useEffect } from "react";
import "./DiscoverNFT.css";
import "../../fonts/IntegralCFRegular.ttf";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DiscoverNFT() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div class="discover-nft-container">
        <div
          class="discover-nft-title"
          style={{ fontFamily: "Integral CF, sans-serif" }}
          data-aos="fade-right"
        >
          DISCOVER MORE NFTS
        </div>
        <div class="discover-nft-categories">
          <div class="discover-nft-menu">
            <div class="discover-nft-menu-items-active">All Categories</div>
            <div class="discover-nft-menu-items">Art</div>
            <div class="discover-nft-menu-items">Celebrities</div>
            <div class="discover-nft-menu-items">Gaming</div>
            <div class="discover-nft-menu-items">Sport</div>
            <div class="discover-nft-menu-items">Music</div>
            <div class="discover-nft-menu-items">Crypto</div>
          </div>
          <div class="discover-nft-filter">
            <img
              src="assets/discover-nfts/filter.png"
              class="filter-icon"
              alt="error"
            />
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
            <div key={key} class="discover-nft-contents-item">
              <img
                src={`assets/discover-nfts/discover-nft-image${item.id}.png`}
                class="discover-nft-image"
                alt="error"
              />
              <img
                src="assets/discover-nfts/discover-nft-avatar1.png"
                class="discover-nft-avatar1"
                alt="error"
              />
              <img
                src="assets/discover-nfts/discover-nft-avatar2.png"
                class="discover-nft-avatar2"
                alt="error"
              />
              <img
                src="assets/discover-nfts/discover-nft-avatar3.png"
                class="discover-nft-avatar3"
                alt="error"
              />
              <img
                src="assets/discover-nfts/discover-nft-avatar4.png"
                class="discover-nft-avatar4"
                alt="error"
              />
              <img
                src="assets/discover-nfts/discover-nft-ethereum.png"
                class="discover-nft-icon"
                alt="error"
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
        <div class="btn-wrapper">
          <div class="btn" data-aos="fade-up">
            More NFTs
          </div>
        </div>
      </div>
    </div>
  );
}
