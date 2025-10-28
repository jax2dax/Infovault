
import evalImg from "../assets/docEvimgs/evaluationpenimg.jpg"
import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate= useNavigate();
    function gotomain(){
        navigate("/mainlist");
        console.log("clicked")
    }
    return(
        <div >
            <div className="Home">
                <div className="display">
                    <img alt=""className="homeimg" />
                    <button onClick={gotomain}>Explore</button>
                </div>

            </div>
        </div>
    )
}