import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { About } from "../pages/About"


export const RouterApp = () =>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}      />
        </Routes>
        </>
    )
}