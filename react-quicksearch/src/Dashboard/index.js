import React from 'react'
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

function Main(){

    //이동 왜 안되지
    const navigate = useNavigate();

    const navigateToPurchase = () => {
        navigate("/terminal/terminalMain.js");
    };

    return(
        <div>
            <h2>DashBoard</h2>

            <div>
                <ul>
                    <a className="nav-link active show" id="terminalInfo-tab" data-toggle="tab" href="#terminalInfo"
                       role="tab" aria-controls="terminalInfo" aria-selected="true">단말기정보</a>
                    <li className="nav-item">nav_2</li>
                    <li className="nav-item">nav_3</li>
                    <li className="nav-item">nav_4</li>
                </ul>
            </div>
            {/*<Routes>*/}
            {/*    <Route path="/">sdad</Route>*/}
            {/*</Routes>*/}

            {/*<ul>*/}
            {/*    <Link to="terminal/terminalMain.js"><li>1번상품</li></Link>*/}
            {/*</ul>*/}

            <button size="large" onClick={navigateToPurchase}>  
                이동
            </button>
        </div>
    )
}

export default Main;