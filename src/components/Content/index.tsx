import { FC } from "react";
import "./style.css";

import { Select, Row, Col } from "antd";
import { DownOutlined } from "@ant-design/icons";

import search from "../../images/search.svg";
import notifications from "../../images/notifications.svg";
import blackUser from "../../images/blackUser.svg";
import DownIcon from "../../images/keyboardArrowDown.svg";
import DownIconBorder from "../../images/DropDown.svg";
import UpIconBorder from "../../images/DropUp.svg";

import ScrimReview from "../ScrimReview/index";
import ScrimReviewView from "../ScrimReviewView/index";
import Drawer from "../Drawer/index";

const { Option } = Select;

function handleChange(e: string) {
  console.log(`selected ${e}`);
}

const Content: FC = () => {
  return (
    <div>
      <div className="content-container">
        <div className="content-gradient">
          <div>
            <div className="drawer-container-responsive">
              <Drawer />
            </div>
            <div className="content-justify">
              <div></div>
              <div className="content-images-bar">
                <div className="content-img-container">
                  <img src={search} alt="logo" />
                </div>
                <div className="content-img-container">
                  <img src={notifications} alt="logo" />
                </div>
                <div className="content-img-container">
                  <img src={blackUser} alt="logo" />
                </div>
                <div className="content-img-container">
                  <img src={DownIcon} alt="logo" />
                </div>
              </div>
            </div>
          </div>

          <div className="content-justify">
            <div>
              <div className="content-heading">My Scrims</div>

              <div className="content-input-bar">
                <div className="content-dropdown-parent">
                  <Select
                    suffixIcon={
                      <DownOutlined className={"ant-select-suffix"} />
                    }
                    defaultValue="lucy"
                    style={{ width: "100%" }}
                    onChange={handleChange}
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </div>
                <button className="create-btn-content">Create Scrim</button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <Row style={{ marginTop: 30 }}>
          <Col md={0} lg={13} />
          <Col className="scrim-review-container" md={24} lg={10}>
            <div className="content-flex">
              <div className="review-heading">Scrim Review</div>
              <div>
                <img
                  style={{ paddingRight: 5, cursor: "pointer" }}
                  src={DownIconBorder}
                  alt="logo"
                />
                <img
                  style={{ cursor: "pointer" }}
                  src={UpIconBorder}
                  alt="logo"
                />
              </div>
            </div>
            <div>
              <ScrimReview />
              <ScrimReview />
              <ScrimReview />
              <ScrimReviewView />
              <ScrimReviewView />
              <ScrimReviewView />
            </div>
          </Col>
          <Col md={1} lg={1} />
        </Row>
      </div>
    </div>
  );
};

export default Content;
