import React, {useState} from 'react';
import { BsPencilFill } from "react-icons/bs";
import { BsTrash3Fill } from "react-icons/bs";



import {  message, Popconfirm,  Drawer } from 'antd';
const confirm = (e) => {
    console.log(e);
    message.success('Click on Yes');
};
const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
};

const Kontaktlar = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className="containerr">
            <div className="navbarr d-flex justify-content-between ">
                <input className="form-control w-25 mx-2  my-4 " type="text" placeholder='search...' />
                <button onClick={showDrawer} className="btn bg-primary my-4 float-end">Add contact</button>
                <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                    <input className="form-control my-4" type="text" placeholder='Email' />
                    <input className="form-control my-4" type="number" placeholder='Phone' />
                    <input className="form-control my-4" type="text" placeholder='Address' />
                    <input className="form-control my-4" type="text" placeholder='Social Network' />
                    <button className="btn bg-dark text-white"> Ok</button>
                </Drawer>
            </div>
            <div className="text">
                <h2 className="mx-4 my-3">Contact List</h2>
            </div>
            <table className="table w-75 mx-5 ">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Social Network</th>
                    <th  scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>	john.doe@example.com</td>
                    <td>	123-456-7890</td>
                    <td>@123 Main St</td>
                    <td>Twitter: https://twitter.com/johndoe</td>
                    <td><BsPencilFill /></td>
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >   <td><BsTrash3Fill /></td>
                    </Popconfirm>

                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>	jane.smith@example.com</td>
                    <td>	987-654-3210</td>
                    <td>@	456 Oak St</td>
                    <td>Twitter: https://twitter.com/janesmith</td>
                    <td><BsPencilFill /></td>
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >   <td><BsTrash3Fill /></td>
                    </Popconfirm>
                </tr>

                </tbody>
            </table>
        </div>
    );
}

export default Kontaktlar;
