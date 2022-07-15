import React from "react"
import './App.css'
import {Link, Outlet} from 'react-router-dom'

export default function App() {

    return (
        <div className="App absolute inset-0">
            <nav className={`flex justify-center`}>
                <Link to="">To App</Link>
                <Link to="profile">To profile</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}
