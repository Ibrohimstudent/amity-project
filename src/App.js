import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Kabinet from "./components/Kabinet/index";
import Category from "./components/Pages/Category/index";
import Xodimlar from "./components/Pages/Xodimlar/index";
import Kontaktlar from "./components/Pages/Kontaktlar/index";
import Vebinar from "./components/Pages/Vebinar/index";
import Elonlar from "./components/Pages/Elonlar/index";
import Kurslar from "./components/Pages/Kurslar/index";
import Login from "./components/Pages/Login/index"



function App(props) {
    const location= useLocation()
    console.log(location)
    return (
        <div className={"container-fluid p-0"}>
            {location.pathname !== "/login" }
            <Routes>
                <Route path={"/login"} element={<Login/>} />

                <Route path={"/kabinet"} element={<Kabinet/>}>
                    <Route path={"/kabinet/kurslar"} element={<Kurslar/>}/>
                    <Route path={"/kabinet/elonlar"} element={<Elonlar/>}/>
                    <Route path={"/kabinet/vebinar"} element={<Vebinar/>}/>
                    <Route path={"/kabinet/xodimlar"} element={<Xodimlar/>}/>
                    <Route path={"/kabinet/category"} element={<Category/>}/>
                    <Route path={"/kabinet/kontaktlar"} element={<Kontaktlar/>}/>
                </Route>

            </Routes>




        </div>
    );
}

export default App;