// import React from 'react';
// import axios from "axios";
//
// // class App extends React.Component<any, any>{
// //     componentDidMount() {
// //         this.getMovies();
// //     }
// //
// //     async getMovies() {
// //         try {
// //             const response = await axios.get('https://devapi.ubcn.co.kr:17881/vmms/terminals/2000031223');
// //
// //             console.log(response);
// //             console.log(response.data.company);
// //
// //             // const movies = response.data.data.movies;
// //
// //             // console.log(movies);
// //
// //         } catch (error){
// //             console.error(error);
// //         }
// //     }
// //
// //     render() {
// //         return <div>영화를 불러오는 중입니다..</div>
// //     }
// // }
//
// async function getTerminal() {
//     try {
//         const resTerminal = await axios.get('https://devapi.ubcn.co.kr:17881/vmms/terminals/2000031223');
//
//         // console.log(resTerminal);
//
//         console.log(resTerminal.data);
//     }catch (e){
//         console.error(e);
//     }
// }
//
//
//
// function App() {
//   return (
//     <div className="App">
//       <h2>Test Ksm</h2>
//         <div>
//             <ul>
//                 <li className="bizInfo">사업자 정보 : </li>
//             </ul>
//         </div>
//         <button onClick={getTerminal}>clcik</button>
//     </div>
//   );
// }
//
// export default App;
//

import React, {useState} from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { terminalState, fetchTerminalSelector } from './state/terminalState';
import TerminalInfo from "./components/terminalInfo";
// import {Simulate} from "react-dom/test-utils";
// import submit = Simulate.submit;

function TerminalMain() {
    const [terminalID, setTerminalID] = useState("");

    const [terminalData, setTerminalData] = useRecoilState(terminalState);
    const terminalLoadable = useRecoilValueLoadable(fetchTerminalSelector(terminalID));

    //검색TID
    const SendTerminalId = (e) => {
        setTerminalID(e.target.value);
    }

    //통신 상태를 보임
    const handleClick = async () => {
        if (terminalLoadable.state === 'hasValue') {
            setTerminalData(terminalLoadable.contents);
        } else if (terminalLoadable.state === 'loading') {
            console.log('Loading...');
        } else if (terminalLoadable.state === 'hasError') {
            console.error(terminalLoadable.contents);
        }
    };

    const [testName, setName] = useState("")

    return (
        <div className="App">
            <h2>Test Ksm</h2>
            <input type="text" name='terminalId' onChange={SendTerminalId} />
            <div>
                {terminalData != null && <TerminalInfo terminalData={terminalData} />}
            </div>
            <button onClick={handleClick}>click</button>

            <h2>안녕하세요. {testName} 입니다.</h2>
            <button onClick={ () => {
                setName(testName === "kim" ? "lee" : "Kim");}}>submit!</button>
        </div>
    );

}

export default TerminalMain;
