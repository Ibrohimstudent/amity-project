import React from 'react';
import "../index.css"
import vebinar from "../../assets/photo_2024-03-27_18-39-27.jpg"

function Vebinar(props) {
    return (
        <div className='kurs'>
            <div className="k">
                <h1>Vebinar</h1>
                <div className='two'>
                    <input type="text" placeholder='Search Videos' className='form-control w-25'/>
                    <button className='yellow'>Add Video +</button>
                </div>
            </div>

            <div className="box x">
                <div className="cardd">
                    <div className="f">
                        <h4>Vebinar</h4>
                        <h4>Tesla</h4>
                    </div>
                    <div className="b">
                        <img src={vebinar} alt="" />
                    </div>

                    <div className="ff">
                        <button><i className="bi bi-pen"></i></button>
                        <button><i className="bi bi-trash-fill"></i></button>
                    </div>
                </div>
                <div className="cardd">
                    <div className="f">
                        <h4>Vebinar</h4>
                        <h4>Amazon</h4>
                    </div>
                    <div className="b">
                        <img src={vebinar} alt="" />
                    </div>

                    <div className="ff">
                        <button><i className="bi bi-pen"></i></button>
                        <button><i className="bi bi-trash-fill"></i></button>
                    </div>
                </div>
                <div className="cardd">
                    <div className="f">
                        <h4>Vebinar</h4>
                        <h4>Google</h4>
                    </div>
                    <div className="b">
                        <img src={vebinar} alt="" />
                    </div>

                    <div className="ff">
                        <button><i className="bi bi-pen"></i></button>
                        <button><i className="bi bi-trash-fill"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vebinar;