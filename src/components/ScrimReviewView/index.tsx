import { FC } from "react";
import "./style.css";

import Vector from "../../images/Vector.svg";

const ScrimReviewView: FC = () => {
  return (
    <div className="review-content-bar">
      <div className="review-content-container">
        <div className="review-content-heading">PandaChan vs DDRS</div>
        <div className="review-content-text">Rocket League | NA-WEST</div>
        <div className="review-content-text">Nov 11 | 5:00PM EST | 1 Hour</div>
      </div>
      <div className="review-icons-container">
        <div className="review-view-text">View</div>
        <img
          style={{ paddingLeft: 2, paddingRight: 2 }}
          src={Vector}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default ScrimReviewView;
