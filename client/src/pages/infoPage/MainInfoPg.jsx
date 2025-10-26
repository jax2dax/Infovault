
import "../../styles/Products.css"
import { useNavigate } from "react-router-dom";


export default function GeneralInfos() {
  const infos = [
    { id: 1, title: "Timezone", category: "Timezone confusion problems?", date: "2025-11-04", link:gotoTimezone },
    { id: 2, title: "VAR system updated for fairer play", category: "Technology", date: "2025-11-04" },
    { id: 3, title: "New environmental rules for stadiums", category: "Sustainability", date: "2025-11-06" },
  ];

  const navigate = useNavigate();
 function gotoTimezone(){
    navigate("/mainlist/getInfo/timezone-am-pm");
     console.log("navigated to timezon-am -pm")
 }

  return (
    <div className="info-container">
      <h1 className="info-title">General Football Information</h1>
      <p className="info-subtitle">Latest updates and insights from the football world</p>

      <div className="info-grid">
        {infos.map((info) => (
          <div key={info.id} className="info-card" onClick={info.link}>
            <h3 className="info-news-title">{info.title}</h3>
            <p className="info-category">Category: {info.category}</p>
            <p className="info-date">Date: {info.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}