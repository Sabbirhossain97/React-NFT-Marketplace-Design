import React from 'react'
import "./SignUpNFT.css"
import "../../fonts/IntegralCFRegular.ttf";

export default function SignUpNFT() {
  return (
    <div>
      <div class="signup-nft-container">
        <div class="signup-nft-left-section">
          <img
            class="signup-nft-image1"
            src="assets/signup-nft/signup-nft-image1.png"
          />
          <img
            class="signup-nft-image2"
            src="assets/signup-nft/signup-nft-image2.png"
          />
          <img
            class="signup-nft-image3"
            src="assets/signup-nft/signup-nft-image3.png"
          />
          <img
            class="signup-nft-avatar1"
            src="assets/signup-nft/signup-nft-avatar1.png"
          />
          <img
            class="signup-nft-avatar2"
            src="assets/signup-nft/signup-nft-avatar2.png"
          />
          <img
            class="signup-nft-avatar3"
            src="assets/signup-nft/signup-nft-avatar3.png"
          />
        </div>
        <div class="signup-nft-right-section">
          <div class="signup-nft-right-section-header-wrapper">
            <p
              class="signup-nft-right-section-header"
              style={{ fontFamily: "Integral CF, sans-serif" }}
            >
              CREATE AND SELL YOUR NFTS
            </p>
          </div>
          <div class="signup-nft-right-section-subheader-wrapper">
            <p class="signup-nft-right-section-subheader">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
              ac phasellus placerat a pellentesque tellus sed egestas. Et
              tristique dictum sit tristique sed non. Lacinia lorem id
              consectetur pretium diam ut. Pellentesque eu sit blandit fringilla
              risus faucibus.
            </p>
          </div>
          <div class="signup-nft-right-section-btn-wrapper">
            <button class="signup-nft-right-section-btn">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
