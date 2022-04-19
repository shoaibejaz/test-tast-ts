import React, { FC } from "react";
import "./style.css";

import upEmpty from "../../images/upEmpty.svg";
import downEmpty from "../../images/downEmpty.svg";
import upload from "../../images/upload.svg";
import MehImage from '../../images/Meh empty.svg';

const ScrimReview: FC = () => {
  return (
    <div className="review-content-bar">
      <div className="review-content-container">
        <div className="review-content-heading">PandaChan vs DDRS</div>
        <div className="review-content-text">Rocket League | NA-WEST</div>
        <div className="review-content-text">Nov 11 | 5:00PM EST | 1 Hour</div>
      </div>
      <div className="review-logos-container">
        <img
          style={{ paddingLeft: 2, paddingRight: 2 }}
          src={upEmpty}
          alt="logo"
        />
        <img
          style={{ paddingLeft: 2, paddingRight: 2 }}
          src={MehImage}
          alt="logo"
        />
                <img
          style={{ paddingLeft: 2, paddingRight: 2 }}
          src={downEmpty}
          alt="logo"
        />
        <img
          style={{ paddingLeft: 2, paddingRight: 2 }}
          src={upload}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default ScrimReview;
