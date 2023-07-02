import React, { useEffect } from "react";
import "./SignUpNFT.css";
import "../../fonts/IntegralCFRegular.ttf";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SignUpNFT() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div class="signup-nft-container">
        <div class="signup-nft-child">
          <div class="signup-nft-image1-wrapper">
            <img
              class="signup-nft-image1"
              src="assets/signup-nft/signup-nft-image1.png"
              alt="error"
            />
            <img
              class="signup-nft-avatar1"
              src="assets/signup-nft/signup-nft-avatar1.png"
              alt="error"
            />
          </div>
          <div class="signup-nft-image2-wrapper">
            <img
              class="signup-nft-image2"
              src="assets/signup-nft/signup-nft-image2.png"
              alt="error"
            />
            <img
              class="signup-nft-avatar2"
              src="assets/signup-nft/signup-nft-avatar2.png"
              alt="error"
            />
          </div>
          <div class="signup-nft-image3-wrapper">
            <img
              class="signup-nft-image3"
              src="assets/signup-nft/signup-nft-image3.png"
              alt="error"
            />
            <img
              class="signup-nft-avatar3"
              src="assets/signup-nft/signup-nft-avatar3.png"
              alt="error"
            />
          </div>
        </div>
        <div class="signup-nft-child">
          <div class="signup-nft-right-section-header-wrapper">
            <p
              class="signup-nft-right-section-header"
              style={{
                fontFamily: "Integral CF, sans-serif",
              }}
              data-aos="fade-left"
            >
              CREATE AND SELL YOUR NFTS
            </p>
          </div>
          <div style={{ width: "100%" }}>
            <p class="signup-nft-right-section-subheader" data-aos="fade-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
              ac phasellus placerat a pellentesque tellus sed egestas. Et
              tristique dictum sit tristique sed non. Lacinia lorem id
              consectetur pretium diam ut. Pellentesque eu sit blandit fringilla
              risus faucibus.
            </p>
          </div>
          <div
            class="signup-nft-right-section-btn-wrapper"
            data-aos="fade-up"
            style={{ marginTop: "40px" }}
          >
            <button class="signup-nft-right-section-btn">Sign Up Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
