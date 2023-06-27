import React from "react";
import "./Footer.css";
import "../../fonts/IntegralCFRegular.ttf";

export default function Footer() {
  return (
    <div>
      <div class="footer-container">
        <div class="footer-right-section">
          <p
            class="footer-right-section-header"
            style={{ fontFamily: "Integral CF, sans-serif" }}
          >
            NFTERS
          </p>
          <p class="footer-right-section-subheader">
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
          <img
            class="footer-right-section-icon1"
            src="assets/footer/facebook.png"
          />
          <img
            class="footer-right-section-icon2"
            src="assets/footer/twitter.png"
          />
          <img
            class="footer-right-section-icon3"
            src="assets/footer/linkedin.png"
          />
        </div>
        <div class="footer-marketplace-section">
          <p class="footer-marketplace-title">Market Place</p>
          <div style={{ listStyle: "none" }} class="footer-marketplace-items">
            <li>All NFTs</li>
            <li>New</li>
            <li>Art</li>
            <li>Sports</li>
            <li>Utility</li>
            <li>Music</li>
            <li>Domain Name</li>
          </div>
        </div>
        <div class="footer-account-section">
          <p class="footer-account-title">My Account</p>
          <div style={{ listStyle: "none" }} class="footer-account-items">
            <li>Profile</li>
            <li>Favorite</li>
            <li>My Collection</li>
            <li>Settings</li>
          </div>
        </div>
        <div class="footer-subscribe-section">
          <p class="footer-subscribe-header">Stay In The Loop</p>
          <p class="footer-subscribe-subheader">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating NFTs.
          </p>
          <div class="footer-subscribe-wrapper">
            <input
              class="footer-subscribe-input"
              placeholder="Enter your email address.."
            />
            <button class="footer-subscribe-btn">Subscibe Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
