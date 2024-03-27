import React, {useState} from 'react';
import Drawer from "../DrawerElonlar";
import { Divider} from "antd";
import img1 from "../../assets/mountains green forest and river landscape sunny.jpg"


function Elonlar(props) {
    const [open, setOpen] = useState(false);
    return (
        <div style={{width: "95%"}} className={'container position-relative my-4'}>
            <h2 style={{fontSize: "30px", fontWeight: "400", position: "absolute"}}>E'lonlar</h2>
            <Drawer open={open} setOpen={setOpen}/>


            <button style={{
                backgroundColor: "#FEC200",
                width: "150px",
                fontWeight: "400",
                color: "white",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid transparent",
                marginBottom: "20px"
            }} onClick={() => setOpen(prevState => !prevState)}
                    className={"float-end "}>+ E'lon yozish
            </button>


            <Divider/>
            <div className="cards">
                <div className="card mx-5 mb-2">
                    <img className="width" src={img1} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Shohruh</h5>
                        <p className="card-text text-secondary">This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content is a little bit longer.</p>

                    </div>
                </div>



            </div>
        </div>
    );
}

export default Elonlar;