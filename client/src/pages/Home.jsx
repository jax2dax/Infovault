
import evalImg from "../assets/docEvimgs/evaluationpenimg.jpg"
import { useNavigate } from "react-router-dom";
import "../index.css"
export default function Home() {
    const navigate= useNavigate();
    function gotomain(){
        navigate("/mainlist");
        console.log("clicked")
    }
    return(
        <div > 
            <div className="hero">
  <div className="hero-content">
    <h1 className="hero-title">Discover the Future of Innovation</h1>
    <p className="hero-subtitle">
      Stay ahead with the latest technology news, insights, and trends from around the world.
    </p>
    <button className="hero-btn" onClick={gotomain}>Explore Now</button>
  </div>
  
</div>
        </div>
    )
}
const co =`
<div > 
            <div className="hero">
  <div className="hero-content">
    <h1 className="hero-title">Discover the Future of Innovation</h1>
    <p className="hero-subtitle">
      Stay ahead with the latest technology news, insights, and trends from around the world.
    </p>
    <button className="hero-btn" onClick={gotomain}>Explore Now</button>
  </div>
  <div className="hero-image">
    <img src="https://images.unsplash.com/photo-1678203699263-917199c725b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVybyUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" alt="Innovation" />
  </div>
</div>
        </div>`