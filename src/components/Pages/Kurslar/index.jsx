import React, {useState} from 'react';
import "../index.css"
import {useDispatch, useSelector} from "react-redux";
import {message,Divider, Popconfirm,Table} from "antd";
import Drawer from "../DrawerKurslar";



function Kurslar(props) {
    const{kurslar} = useSelector(state => state.KurslarReducer)
    const[open,setOpen]=useState(false)

    const dispatch =useDispatch()
    function editItem(item) {
        dispatch({type:"EDIT_COURSEDATA", payload: item})
        setOpen(prevState => !prevState)

    }
    const columns = [
        {
            title:"Course name",
            dataIndex: 'name',
        },
        {
            title:"Course price",
            dataIndex: 'price',
        },
        {
            title:"Direction",
            dataIndex: 'direction',
        },
        {
            title:"Category",
            dataIndex: 'category',
        },
        {
            title:"Description",
            dataIndex: 'description',
        },
        {
            title:"Actions",

            render: (item)=> <div>


                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this course?"
                    onConfirm={() => confirm(item)}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <i className={"bi bi-trash-fill  mx-2 text-danger "}></i>

                </Popconfirm>
                <i className={"bi bi-pencil-fill  mx-2 text-primary "} onClick={() => editItem(item)}
                ></i>
            </div>
        }


    ];
    const confirm = (e) => {
        console.log(e);
        message.success('Deleted');
        dispatch({type:"DELETE_COURSE",payload:e.id})
    };
    const cancel = (e) => {
        console.log(e);
        message.error('No Deleted');
    };

    return (
        <div className='kurs'>
            <Drawer  open={open} setOpen={setOpen}/>
            <div className="k">
                <h2>Course</h2>
                <button style={{
                    backgroundColor: "#FEC200", width: "150px", fontWeight: "600",
                    fontSize: "16px", borderRadius: "5px", color: "white",
                    border: "1px solid transparent", marginBottom: "20px"
                }} onClick={() => setOpen(prevState => !prevState)}
                        className={"float-end "}>+ Add Course
                </button>
            </div>

            <Divider/>

            <Table 
             columns={columns}
            dataSource={kurslar} >

            </Table>



        </div>
    );
}

export default Kurslar;