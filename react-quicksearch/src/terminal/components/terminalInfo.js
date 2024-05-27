// terminalInfo.js
import React from 'react';

const TerminalInfo = ({ terminalData }) => {
    return (
        <ul>
            <li className="bizInfo">사업자 정보 : {terminalData ? terminalData.merchantName : 'N/A'}</li>
            <li className="bizInfo">자판기 모델 : {terminalData ? terminalData.modem + "/" + terminalData.code : 'N/A'}</li>
            <li className="bizInfo">모뎀 : {terminalData ? terminalData.model : 'N/A'}</li>
            <li className="bizInfo">소속 : {terminalData ? terminalData.organ : 'N/A'}</li>
            <li className="bizInfo">조직루트 : {terminalData ? terminalData.presentName : 'N/A'}</li>
        </ul>
    );
};

export default TerminalInfo;
