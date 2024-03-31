import React from 'react';
import "../index.css"
import vebinar from "../../assets/photo_2024-03-27_18-39-27.jpg"

function Vebinar(props) {
    return (
        <div className='kurs'>
            <div className="k">
                <h2>Vebinar</h2>
                <div className='two'>
                    <input type="text" placeholder='Search Videos' className='form-control w-25'/>
                    <button className='yellow-2 '>+ Add Video </button>
                </div>
            </div>

            <div className="box x">
                <div className="cardd bg-white">
                    <div className="f">
                        <h5>Vebinar</h5>
                        <p>Tesla</p>
                    </div>
                    <div className="b">
                        <img src={vebinar} alt="" />
                    </div>

                    <div className="ff">
                        <button><i className="bi bi-pen"></i></button>
                        <button><i className="bi bi-trash-fill"></i></button>
                    </div>
                </div>
                <div className="cardd bg-white">
                    <div className="f">
                        <h5>boulan</h5>
                        <p>Amazon</p>
                    </div>
                    <div className="b">
                        <img src={vebinar} alt="" />
                    </div>

                    <div className="ff">
                        <button><i className="bi bi-pen"></i></button>
                        <button><i className="bi bi-trash-fill"></i></button>
                    </div>
                </div>
                <div className="cardd bg-white">
                    <div className="f">
                        <h5>boulan</h5>
                        <p>Google</p>
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