import React from 'react';

function Index(props) {
    return (
        <div className={"container m-3 "}>
            <div className="row">
                <div className="col-md-6">
                    <h2>Home</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 my-5 ">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/9yP9287oZRg?si=AmYrmHjMDptfd8Hp"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={"fs-5 fw-bold"}>ANGRENDA ILK MAROTIBA IT O`QUV MARKAZI - IBS school ochilish marosimi ANGREN HOKIMINI MASLAXATLARI</p>
                </div>
                <div className="col-md-6 my-5 ">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/SXibtPzaxhU?si=P_0qlYyHInhwF8vq"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={"fs-5 fw-bold"}>IBS SCHOOL Ochilish Marosimi.</p>
                </div>
            </div>

        </div>
    );
}

export default Index;