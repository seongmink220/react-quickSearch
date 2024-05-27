import { useRecoilValue} from "recoil";
import axios from "axios"

async function Main() {

    try {
        const response = await axios.get('https://devapi.ubcn.co.kr:17881/vmms/terminals/2000031223');
    } catch (e) {
        console.log(e);
    }

    // axios.get('https://devapi.ubcn.co.kr:17881/vmms/terminals/2000031223')
    //     .then(function (response){
    //         console.log(response);
    //         console.log(response.data);
    //     })
    //     .catch(function (error) {
    //         // 에러 핸들링
    //         console.log("error==" + error);
    //     })
    //     .then(function (response) {
    //         // 항상 실행되는 영역
    //     });

    return (
        <section className="main">
            <label>TID</label>
            <input type="text" id="termID"/>
            <button className="btn btn-primary btn-lg">submit!</button>

            <div>
                <p></p>
            </div>
            <div>
                <label>사업자번호</label>
                <input type="text" id="bizNo" value="asdsa"/>
            </div>
            <div>
                <label>자판기모델</label>
                <input type="text" id="model" value="asda"/>
            </div>
            <div>
                <label>모뎀</label>
                <input type="text" id="modem" value="asda"/>
            </div>
        </section>
    )
}

export default Main;