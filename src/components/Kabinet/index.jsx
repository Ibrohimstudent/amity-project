import React, { useState } from 'react';
import {Link,Outlet} from "react-router-dom";
import logo  from "../assets/black 1.svg"
import {
    CaretLeftOutlined,
    CaretRightOutlined,



} from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
const {  Sider, Content } = Layout;
const Kabinet = () => {
    const [collapsed, setCollapsed] = useState(false);


    return (
        <Layout style={{width:"100%",height:"100vh"}}>
            <Sider trigger={null}

                   collapsible collapsed={collapsed} style={{backgroundColor:"white"}}>
                <Menu
                    theme={"light"}
                    mode="inline"
                    defaultOpenKeys={['1']}

                    style={{fontSize:"14px",fontWeight:"500"}}

                >
                    <Menu.Item className={"my-3"}><Link  to={"/kabinet"}><img src={logo} alt=""/></Link></Menu.Item>
                    <Menu.Item><Link className={"text-decoration-none"} to={"/kabinet"}><i style={{fontSize:"20px",marginRight:"18px",marginLeft:"7px"}} class="bi bi-house-door-fill"></i>Home</Link></Menu.Item>
                    <Menu.Item><Link className={"text-decoration-none"} to={"/kabinet/kurslar"}><i style={{fontSize:"20px",marginRight:"18px",marginLeft:"7px"}} className={"bi bi-stack  "}></i>Courses</Link></Menu.Item>
                    <Menu.Item><Link className={"text-decoration-none"} to={"/kabinet/xodimlar"}> <i style={{fontSize:"20px",marginRight:"18px",marginLeft:"7px"}} className={"bi bi-people-fill  "}></i>Employees</Link></Menu.Item>
                    <Menu.Item><Link className={"text-decoration-none"} to={"/kabinet/category"}><i style={{fontSize:"20px",marginRight:"18px",marginLeft:"7px"}} className={"bi bi-bookmarks-fill  "}></i>Category</Link></Menu.Item>
                    <Menu.Item><Link className={"text-decoration-none"} to={"/kabinet/kontaktlar"}><i style={{fontSize:"20px",marginRight:"18px",marginLeft:"7px"}} className={"bi bi-telephone-fill   "}></i>Contacts</Link></Menu.Item>
                    <Menu.Item style={{marginTop:"200px" }}><Link className="text-decoration-none"
                                                                  to={"/login"}> <i style={{fontSize:"20px",marginRight:"18px"}} className={"bi bi-box-arrow-left"}>

                    </i><span style={{fontSize:"12px"}}>    Log out</span></Link></Menu.Item>


 

                </Menu>



            </Sider>
            <Layout  style={{
                width:"80%",
                height:"100vh",
                background: "#f5f5f5",
            }}>

                <Content
                    style={{position:"relative"}}


                >
                    <Button
                        type="text"
                        icon={collapsed ? <CaretRightOutlined/> : <CaretLeftOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '18px',
                            width: 44,
                            height: 44,
                            borderRadius:"50%",
                            margin:" 450px 0px 0px -30px  ",
                            backgroundColor:"white",
                            border:"1px solid transparent",
                            position:"absolute",

                        }}
                    />

                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};
export default Kabinet;