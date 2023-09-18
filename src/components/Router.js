import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calendly from "../pages/Calendly";
import Individuals from "../pages/Individuals";
import Teams from "../pages/Teams";
import Enterprise from "../pages/Enterprise";

const Router = () => {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Calendly />} />
                <Route path="/Individuals" element={<Individuals />} />
                <Route path="/Teams" element={<Teams />} />
                <Route path="/Enterprise" element={<Enterprise />} />
            </Routes>





        </div>
    );
}

export default Router;
