import React from 'react';
import {Button, Drawer, Form, Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";

const App = ({open,setOpen}) => {

    const {editData} = useSelector(state => state.ContactReducer)


    const dispatch = useDispatch()

    const [form] = Form.useForm()

    const onClose = () => {
        setOpen(false);
    };
    function onFinish(value) {
        if (editData.id){
            dispatch({type:"EDIT_CONTACTSAVE",payload:value})

        }

        else {
            dispatch({type:"ADD_CONTACT", payload:value})


        }

        setOpen(false)
        form.resetFields()

    }
    return (
        <>

            <Drawer title="Add contact" onClose={onClose} open={open}>

                <Form form={form} onFinish={onFinish} layout={"vertical"}>
                
                    <Form.Item initialValue={editData.email} name={"email"}  rules={[{required:true}]}>

                        <Input
                            type={"email"} placeholder={"Email"}/>
                    </Form.Item>
                    <Form.Item initialValue={editData.phone} name={"phone"}  rules={[{required:true}]}>

                        <Input
                            type={"number"} placeholder={"Phone number"}/>

                    </Form.Item>

                    <Form.Item initialValue={editData.address} name={"address"}  rules={[{required:true}]}>
                        <Input
                            type={"text"} placeholder={"Address"}/>
                    </Form.Item>
                    <Form.Item initialValue={editData.twitter} name={"twitter"}  rules={[{required:true}]}>
                        <Input
                            type={"text"} placeholder={"Social Network"}/>
                    </Form.Item>

                    <Form.Item  >
                        <button style={{padding:"7px 20px",fontSize:"17px",color:"white",fontWeight:"500",
                            border:"1px solid transparent"}}
                                htmlType={"submit"}  className={"bg-primary  float-end"}>Submit</button>
                    </Form.Item>

                </Form>

            </Drawer>
        </>
    );
};
export default App;