
import "../../styles/getinfostyles/info.css"
import { useNavigate } from "react-router-dom";
import demoimg from "../../assets/demoimg.webp"


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
      <title>Expand Your General Knowledge | Trending Topics and Global Updates</title>
      <meta name="description" content="Get the latest updates and general knowledge on the world's most relevant topics. Discover insights across technology, environment, sports (VAR), and science."></meta>
      <h1 className="info-title">Stay informed and expand your understanding of Technology, Sustainability and Current affairs. </h1>
      <p className="info-subtitle">Expertly Vetted Content: Discover in-depth articles and authoritative insights guaranteed to be current and factually precise.</p>

      <div className="info-grid">
        {infos.map((info) => (
          <div key={info.id} className="info-card" onClick={info.link}>
            <div className="info-image-container"><img alt="info"className="info-img" src={demoimg}/></div>
            <h3 className="info-news-title">{info.title}</h3>
            <p className="info-category">Category: {info.category}</p>
            <p className="info-date">Date: {info.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}