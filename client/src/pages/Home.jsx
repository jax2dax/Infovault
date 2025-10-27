
import evalImg from "../assets/docEvimgs/evaluationpenimg.jpg"
import { useNavigate } from "react-router-dom";
export default function Home() {
     
    return(
        <div >
            <div className="Home">
                <div className="display">
                    <img className="homeimg" src={evalImg}/>
                </div>

            </div>
        </div>
    )
}