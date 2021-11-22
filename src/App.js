import React from "react";
import {ToastContainer} from "react-toastify";
import NavbarCom from "./componets/NavbarCom/NavbarCom";

function App() {
    return (
        <div className="App">
            <ToastContainer />
            <NavbarCom />
            <h1>Hello world</h1>
        </div>
    );
}

export default App;