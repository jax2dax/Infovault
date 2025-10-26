
import "../../styles/Products.css"
import { useNavigate } from "react-router-dom";


export default function DocEvaluate() {
  const EvaluationList = [
    { id: 1, title: "Doc Evaluation", category: "Timezone confusion problems?", date: "2025-11-04", link:gotoDocEvBasics },
    { id: 2, title: "evaluate documents", category: "Technology", date: "2025-11-04" }
  ];

  const navigate = useNavigate();
 function gotoDocEvBasics(){
    navigate("/mainlist/DocEvPage/Evaluation-basics");
     console.log("navigated to Use of document evaluation")
 }

  return (
    <div className="info-container">
      <h1 className="info-title">Document evaluation</h1>
      <p className="info-subtitle">How does the Evaluation Works</p>

      <div className="info-grid">
        {EvaluationList.map((info) => (
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