import React from 'react';
import {Button, Drawer, Form, Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";

const App = ({open,setOpen}) => {

    const {editData} = useSelector(state => state.KurslarReducer)


    const dispatch = useDispatch()

    const [form] = Form.useForm()

    const onClose = () => {
        setOpen(false);
    };
    function onFinish(value) {
        if (editData.id){
            dispatch({type:"EDIT_SAVE",payload:value})

        }

        else {
            dispatch({type:"ADD_COURSE", payload:value})


        }

        setOpen(false)
        form.resetFields()

    }
    return (
        <>

            <Drawer title="Add Course" onClose={onClose} open={open}>

                <Form form={form} onFinish={onFinish} layout={"vertical"}>
                  
                    <Form.Item initialValue={editData.name} name={"name"}  rules={[{required:true}]}>

                        <Input
                           
                            type={"text"} placeholder={"Course name "}/>
                    </Form.Item>
                    <Form.Item initialValue={editData.number} name={"price"}  rules={[{required:true}]}>

                        <Input
                            type={"number"} placeholder={"Course price"}/>

                    </Form.Item>

                    <Form.Item initialValue={editData.name} name={"direction"}  rules={[{required:true}]}>
                        <Input
                            type={"text"} placeholder={"Course direction"}/>
                    </Form.Item>
                    <Form.Item initialValue={editData.name} name={"category"}  rules={[{required:true}]}>
                        <Input
                            type={"text"} placeholder={"Course category"}/>
                    </Form.Item>
                    <Form.Item initialValue={editData.text} name={"description"}  rules={[{required:true}]}>
                        <Input
                            type={"text"} placeholder={"Description"}/>
                    </Form.Item>

                    <Form.Item  >
                        <button style={{backgroundColor:"#FEC200",padding:"7px 20px",
                            fontSize:"17px",color:"white",fontWeight:"500",
                            border:"1px solid transparent"}}
                                htmlType={"submit"}  className={"  float-end"}>Submit</button>
                    </Form.Item>

                </Form>

            </Drawer>
        </>
    );
};
export default App;