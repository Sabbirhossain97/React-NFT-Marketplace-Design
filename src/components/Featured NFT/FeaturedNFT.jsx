import React from "react";
import "./FeaturedNFT.css";
import "../../fonts/IntegralCFRegular.ttf";

export default function FeaturedNFT() {
  return (
    <div>
      <div class="featured-nft-container">
        <div
          class="featured-nft-title"
          style={{ fontFamily: "Integral CF, sans-serif" }}
        >
          COLLECTION FEATURED NFTS
        </div>
        <div class="featured-nft-frame-container">
          {[
            {
              field1: "big-image1",
              field2: "small-image1",
              field3: "small-image2",
              field4: "small-image3",
            },
            {
              field1: "big-image2",
              field2: "small-image2",
              field3: "small-image1",
              field4: "small-image4",
              margin: "15px",
            },
            {
              field1: "big-image3",
              field2: "small-image5",
              field3: "small-image6",
              field4: "small-image1",
              margin: "15px",
            },
          ].map((item, key) => (
            <div
              class="featured-nft-frame"
              key={key}
              style={{ marginLeft: item.margin }}
            >
              <img
                class="featured-nft-big-image"
                src={`assets/featured-nfts/${item.field1}.png`}
              />
              <img
                class="featured-nft-small-image1"
                src={`assets/featured-nfts/${item.field2}.png`}
              />
              <img
                class="featured-nft-small-image2"
                src={`assets/featured-nfts/${item.field3}.png`}
              />
              <img
                class="featured-nft-small-image3"
                src={`assets/featured-nfts/${item.field4}.png`}
              />
              <p class="featured-nft-bottom-header">Amazing Collection</p>
              <img
                class="featured-nft-avatar"
                src="assets/featured-nfts/featured-nft-avatar.png"
              />
              <p class="featured-nft-bottom-name">by Arkhan</p>
              <p class="featured-nft-bottom-count">Total 54 Items</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
