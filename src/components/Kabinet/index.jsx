import React, { useState } from 'react';
import {Link,Outlet} from "react-router-dom";
import logo  from "../assets/black 1.svg"
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
const { Header, Sider, Content } = Layout;
const Kabinet = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout style={{width:"100%",height:"100vh"}}>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{backgroundColor:"white"}}>
                <img src={logo} alt=""/>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    >
                    <Menu.Item><Link to={"/kabinet/kurslar"}>Kurslar</Link></Menu.Item>
                    <Menu.Item><Link to={"/kabinet/elonlar"}>E'lonlar</Link></Menu.Item>
                    <Menu.Item><Link to={"/kabinet/vebinar"}>Vebinar</Link></Menu.Item>
                    <Menu.Item><Link to={"/kabinet/hodimlar"}>Hodimlar</Link></Menu.Item>
                    <Menu.Item><Link to={"/kabinet/category"}>Category</Link></Menu.Item>
                    <Menu.Item><Link to={"/kabinet/kontaktlar"}>Kontaktlar</Link></Menu.Item>
                </Menu>

            </Sider>
            <Layout style={{backgroundColor:"#f8f8f8"}}>

                <Content

                    style={{
                        width:"100%",
                        height:"100vh",
                        background: "#f8f8f8",
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};
export default Kabinet;