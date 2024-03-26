import React, {useState} from 'react';
import Drawer from "./drawerElonlar";
import {Button, Divider} from "antd";

function Elonlar(props) {
    const [open, setOpen] = useState(false);
    return (
        <div style={{width:"95%"}} className={'container position-relative my-4'}>
            <h2 style={{fontSize: "30px", fontWeight: "400", position: "absolute"}}>E'lonlar</h2>
            <Drawer open={open} setOpen={setOpen}/>


            <button style={{
                backgroundColor: "#FEC200", width: "150px", fontWeight: "400",color:"white", fontSize: "16px", borderRadius: "5px",
                border: "1px solid transparent", marginBottom: "20px"
            }} onClick={() => setOpen(prevState => !prevState)}
                    className={"float-end "}>+ E'lon yozish
            </button>


            <Divider/>
        </div>
    );
}

export default Elonlar;