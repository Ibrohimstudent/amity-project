import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify";
import Kabinet from "../Kabinet";
import Kurslar from "./kurslar";
import Logo from "../assets/black 1.svg"
import { Button, Checkbox, Form, Input } from 'antd';


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

function Login(props) {
    const [email,setEmail] = useState("");
    const [password,setPassword] =useState("");

    const navigate = useNavigate();

    const checkEmail =(e)=>{
        e.preventDefault()
        if (email === "ibrohimxudoyberdiyev@gmail.com" && password === "2006"){
            navigate("/kabinet")

        }else {
            toast("Email yoki parol xato ", {
                position:"top-right",
                autoClose: 3000,
                theme:"dark"
            })

        }

    }
    return (
        <>
            <img style={{width:"250px", margin:"150px 35% 30px 35%"}} src={Logo} alt=""/>
        <Form
            name="basic"

            layout={"vertical"}

            wrapperCol={{
                span: 18,
            }}
            style={{
                maxWidth: 600,
                margin:"0 30% 0 35%"
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Email"

                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input  value={email} onChange={(e)=>setEmail(e.target.value)} />
            </Form.Item>

            <Form.Item
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} />
            </Form.Item>



            <Form.Item

            >
                <Button  form={"form"} onClick={checkEmail}  style={{backgroundColor:"#FEC200",color:"white", width:"150px"}} htmlType="submit">
                    Log In ->
                </Button>
            </Form.Item>
        </Form>
        </>
    );
}

export default Login;