import React from 'react';
import "../index.css"


function Kurslar(props) {
    return (
        <div className='kurs'>
            <div className="k">
                <h1>Kurs qo'shish</h1>
                <button className='yellow'>Add Course +</button>
            </div>

            <div className="box">
                <div className="cardd">
                    <div className="f">
                        <h4>English</h4>
                        <h4>B2</h4>
                    </div>
                    <div className="b">
                        <h3>350,000 so'm</h3>
                        <h3>Category</h3>
                    </div>

                    <div className="ff">
                        <button><i className="bi bi-pen"></i></button>
                        <button><i className="bi bi-trash-fill"></i></button>
                    </div>
                </div>
                <div className="cardd">
                    <div className="f">
                        <h4>Frontend</h4>
                        <h4>Web Developer</h4>
                    </div>
                    <div className="b">
                        <h3>700,000 so'm</h3>
                        <h3>Category</h3>
                    </div>

                    <div className="ff">
                        <button><i className="bi bi-pen"></i></button>
                        <button><i className="bi bi-trash-fill"></i></button>
                    </div>
                </div>
                <div className="cardd">
                    <div className="f">
                        <h4>Backend</h4>
                        <h4>Web Developer</h4>
                    </div>
                    <div className="b">
                        <h3>800,000 so'm</h3>
                        <h3>Category</h3>
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

export default Kurslar;