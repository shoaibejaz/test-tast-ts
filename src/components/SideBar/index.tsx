import { FC } from "react";
import "./style.css";

import Logo from "../../images/logo.svg";

import { Collapse } from "antd";

const Panel = Collapse.Panel;

const text: string = `
Champria Chillin’
`;

const text1: string = `
Champria Challenge
`;

const text2: string = `
Sos Spring 2022
`;


const SideBar: FC = () => {
  return (
    <div className="sidebar-container">
      <div className="logo-image-container">
        <img className="sidebar-logo" src={Logo} alt="logo" />
      </div>
      <div className="sidebar-links-container">
        <div className="sidebar-selected-link">Home</div>
        <div className="sidebar-link">Scrims</div>
        <div className="sidebar-link">Recruitment Tools</div>
        <div className="sidebar-link">My Teams</div>
        <div className="sidebar-link">Overwatch Data</div>
        <div className="drawer">
          {/* @ts-ignore */}
          <Collapse
            expandIconPosition={"right"}
            accordion={true}>
            {/* @ts-ignore */}
            <Panel header="Events"  key="1">
              <p>{text}</p>
              <p>{text1}</p>
              <p>{text2}</p>
            </Panel>
          </Collapse>
        </div>
        <div className="sidebar-link">About</div>
        <div className="sidebar-link">Blog</div>
        <div className="sidebar-link">Contact Us</div>
      </div>
    </div>
  );
};

export default SideBar;
