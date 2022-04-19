import React, { FC } from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import { Row, Col } from "antd";

import SideBar from "../src/components/SideBar/index";
import Footer from "../src/components/Footer/index";
import Content from "./components/Content";

const App: FC = () => {
  return (
    <div>
      <Row>
        <Col xs={0} sm={0} md={4} lg={4}>
          <div className="sidebar-container-responsive">
            <SideBar />
          </div>
        </Col>
        <Col xs={24} sm={24} md={20} lg={20}>
          <Content />
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Footer />
        </Col>
      </Row>
    </div>
  );
};

export default App;
