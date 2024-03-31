import React from 'react';
import "../index.css"


function Kurslar(props) {
    return (
        <div className='kurs'>
            <div className="k">
                <h2>Kurs qo'shish</h2>
                <button className='yellow  '>+ Add Course </button>
            </div>

            <div className="box">
                <div className="cardd bg-white">
                    <div className="f">
                        <h5>English</h5>
                        <p>B2</p>
                    </div>
                    <img src="" alt="no image"/>
                    <div className="b">
                        <h4 style={{fontWeight: "400"}}>350,000 so'm</h4>
                        <p>Category</p>


                    </div>

                    <div className="ff">
                        <button className={"mx-5"}><i className="bi bi-pen"></i></button>
                        <button className={"mx-5"}><i className="bi bi-trash-fill"></i></button>
                    </div>
                </div>
                <div className="cardd bg-white">
                    <div className="f">
                        <h5>Frontend</h5>
                        <p>Web Developer</p>
                    </div>
                    <img src="" alt="no image"/>
                    <div className="b">
                        <h4 style={{fontWeight: "400"}}>700,000 so'm</h4>
                        <p>Category</p>


                    </div>

                    <div className="ff">
                        <button className={"mx-5"}><i className="bi bi-pen"></i></button>
                        <button className={"mx-5"}><i className="bi bi-trash-fill"></i></button>
                    </div>
                </div>
                <div className="cardd bg-white">
                    <div className="f">
                        <h5>Arabic</h5>
                        <p>B1</p>
                    </div>
                    <img src="" alt="no image"/>
                    <div className="b">
                        <h4 style={{fontWeight: "400"}}>250,000 so'm</h4>
                        <p>Category</p>


                    </div>

                    <div className="ff">
                        <button className={"mx-5"}><i className="bi bi-pen"></i></button>
                        <button className={"mx-5"}><i className="bi bi-trash-fill"></i></button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Kurslar;