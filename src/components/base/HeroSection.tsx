import "../../styles/baseComponents/HeroSection.scss";
import LearnMore from "./heroComponents/LearnMore";

import { useState } from "react";

export default function HeroSection() {
  const [showLearnMore, setShowLearnMore] = useState(false);

  function showLearnMoreSection() {
    if (showLearnMore) {
      return (
        <div className="learn-more-section">
          <LearnMore />
        </div>
      );
    }
  }

  return (
    <>
      <div className="hero-section-main-box">
        <div className="hero-section-body">
          <div className="hero-section-body-content">
            <div className="hero-section-main-text">
              <span>Riff is your all-in-one Global people platform</span>
            </div>
            <div className="bottom-section">
              <div className="hero-section-buttons">
                <button>Get started</button>
                <button onClick={() => setShowLearnMore(!showLearnMore)}>Learn more</button>
              </div>
              <div className="hero-section-complement-text">
                <span>
                  Riff helps tens of thousands of copanies expand globally with
                  unmarched speed, flexibility and compilance.
                </span>
              </div>
            </div>

            {showLearnMoreSection()}
          </div>
        </div>
      </div>
    </>
  );
}
