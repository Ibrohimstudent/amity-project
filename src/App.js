import React from 'react';
import Kabinet from "./components/Kabinet";
import Course from "./components/Pages/course";
import Advertisement from "./components/Pages/advertisement";
import {Routes,Route} from "react-router-dom";
import Webinar from "./components/Pages/webinar";
import Team from "./components/Pages/team";
import Category from "./components/Pages/category";
import Contact from "./components/Pages/contact";

function App(props) {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Kabinet/>}>
                    <Route path={"/kabinet/kurslar"} element={<Course/>}/>
                    <Route path={"/kabinet/elonlar"} element={<Advertisement/>}/>
                    <Route path={"/kabinet/vebinar"} element={<Webinar/>}/>
                    <Route path={"/kabinet/hodimlar"} element={<Team/>}/>
                    <Route path={"/kabinet/category"} element={<Category/>}/>
                    <Route path={"/kabinet/kontaktlar"} element={<Contact/>}/>
                </Route>
            </Routes>


        </div>
    );
}

export default App;