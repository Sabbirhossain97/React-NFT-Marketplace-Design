import React, { useEffect } from "react";
import "./FeaturedNFT.css";
import "../../fonts/IntegralCFRegular.ttf";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FeaturedNFT() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div class="featured-nft-container">
        <div
          class="featured-nft-title"
          style={{ fontFamily: "Integral CF, sans-serif" }}
          data-aos="fade-up"
        >
          <p
            class="featured-nft-title-text"
          >
            COLLECTION FEATURED NFTS
          </p>
        </div>
        <div class="featured-nft-frame-wrapper">
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
              class="featured-nft-frame-child"
              key={key}
             
            >
              <div class="featured-nft-frame-child-wrapper">
                <div class="item1 grid-items">
                  <div>
                    <img
                      src={`assets/featured-nfts/${item.field1}.png`}
                      alt="error"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
                <div class="item2 grid-items">
                  <img
                    src={`assets/featured-nfts/${item.field2}.png`}
                    alt="error"
                  />
                </div>
                <div class="item3 grid-items">
                  <div>
                    <img
                      src={`assets/featured-nfts/${item.field3}.png`}
                      alt="error"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
                <div class="item4 grid-items">
                  <div>
                    <img
                      src={`assets/featured-nfts/${item.field4}.png`}
                      alt="error"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
                <div class="item5 grid-items">
                  <p class="featured-nft-bottom-header">Amazing Collection</p>
                  <img
                    class="featured-nft-avatar"
                    src="assets/featured-nfts/featured-nft-avatar.png"
                    alt="error"
                  />
                  <p class="featured-nft-bottom-name ">by Arkhan</p>
                  <p class="featured-nft-bottom-count">Total 54 Items</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
