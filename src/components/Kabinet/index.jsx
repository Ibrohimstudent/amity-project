import React, { useState } from 'react';
import {Link,Outlet,useNavigate} from "react-router-dom";
import logo  from "../assets/black 1.svg"
import {
    CaretLeftOutlined,
    CaretRightOutlined,



} from '@ant-design/icons';
import { Layout, Menu, Button, theme,Switch } from 'antd';
const {  Sider, Content } = Layout;
const Kabinet = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate=useNavigate();


    return (
        <Layout style={{width:"100%",height:"100vh"}}>
            <Sider trigger={null}

                   collapsible collapsed={collapsed} style={{backgroundColor:"white"}}>
                <img className={"p-2"} src={logo} alt=""/>
                <Menu
                    theme={"light"}
                    mode="inline"
                    defaultOpenKeys={['1']}
                    onClick={(e)=>navigate(e.key)}
                    style={{fontSize:"14px",fontWeight:"500"}}
                    items={[
                        {
                            key:"/kabinet/kurslar",
                            icon: <i style={{fontSize:"20px"}} className="bi bi-stack"></i>,
                            label:"Kurslar"
                        },
                        {
                            key:"/kabinet/elonlar",
                            icon: <i style={{fontSize:"20px"}} className="bi bi-pen-fill"></i>,
                            label:"E'lonlar"
                        },
                        {
                            key:"/kabinet/vebinar",
                            icon: <i style={{fontSize:"20px"}} className="bi bi-mic-fill"></i>,

                            label:"Vebinar"
                        },
                        {
                            key:"/kabinet/xodimlar",
                            icon: <i style={{fontSize:"20px"}} className="bi bi-people-fill"></i>,


                            label:"Xodimlar"
                        },
                        {
                            key:"/kabinet/category",
                            icon: <i style={{fontSize:"20px"}} className="bi bi-bookmarks-fill"></i>,

                            label:"Category"
                        },
                        {
                            key:"/kabinet/kontaktlar",
                            icon: <i style={{fontSize:"20px"}} className="bi bi-telephone"></i>,

                            label:"Kontaktlar"
                        },
                    ]}
                >



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
                            fontSize: '20px',
                            width: 64,
                            height: 64,
                            borderRadius:"50%",
                            margin:" 450px 0px 0px -30px  ",
                            backgroundColor:"lightgray",
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