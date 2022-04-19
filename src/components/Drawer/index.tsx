import { useState, FC } from "react";
import { Drawer, Space } from "antd";

import SideBar from "../SideBar";

const App: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <Space>
        <div onClick={showDrawer}>
        <i className="fa fa-bars" style={{fontSize:25,color:'white'}}></i>
        </div>
      </Space>
      <Drawer
        headerStyle={{ display: "none" }}
        bodyStyle={{ padding: 0 }}
        className="drawer"
        title="Basic Drawer"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        key="left"
      >
        <div style={{ background: "red", height: "100%" }}>
          <SideBar/>
        </div>
      </Drawer>
    </div>
  );
};

export default App;
