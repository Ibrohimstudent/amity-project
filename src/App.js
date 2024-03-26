import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Kabinet from "./components/Kabinet";
import Category from "./components/Pages/category";
import Xodimlar from "./components/Pages/xodimlar";
import Kontaktlar from "./components/Pages/kontaktlar";
import Vebinar from "./components/Pages/vebinar";
import Elonlar from "./components/Pages/elonlar";
import Kurslar from "./components/Pages/kurslar";
import Login from "./components/Pages/login";



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