import React, { useState } from "react";
import {
  CodeOutlined,
  TeamOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import './index.less'
import HeaderIndex from "./components/Header";
const { Sider, Content } = Layout;
const Layouts = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="container">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <TeamOutlined />,
              label: "厂商管理",
            },
            {
              key: "2",
              icon: <ApartmentOutlined />,
              label: "接口管理",
            },
            {
              key: "3",
              icon: <CodeOutlined />,
              label: "云云对接测试",
            },
          ]}
        />
      </Sider>
      <Layout>
          <HeaderIndex></HeaderIndex>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          context
        </Content>
      </Layout>
    </Layout>
  );
};
export default Layouts;
