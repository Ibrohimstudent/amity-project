import React, {useState} from 'react';
import {Button, Modal, Form, Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import TextArea from "antd/es/input/TextArea";

const App = ({isModalOpen,setIsModalOpen}) => {
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const {editData} = useSelector(state => state.CategoryReducer)


    const dispatch = useDispatch()

    const [form] = Form.useForm()


    function onFinish(value) {
        if (editData.id){
            dispatch({type:"EDIT_SAVE",payload:value})

        }

        else {
            dispatch({type:"ADD_CATEGORY", payload:value})


        }


        form.resetFields()

    }
    return (
        <>
            <Modal title="Basic Drawer"   open={isModalOpen}  onCancel={handleCancel}>

                <Form form={form} onFinish={onFinish} layout={"vertical"}>
                    <Form.Item initialValue={editData.name} name={"name"} label={"Name"} rules={[{required:true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item initialValue={editData.idx} name={"idx"} label={"Id"} rules={[{required:true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item  >
                        <Button htmlType={"submit"} type={"primary"} onClick={handleOk} className={"w-25"}>Ok</Button>
                    </Form.Item>
                </Form>
            </Modal>



        </>
    );
};
export default App;