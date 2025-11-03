
import "../../styles/Products.css"
import { useNavigate } from "react-router-dom";


export default function DocEvAgent() {
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
    <div className="info-container" style={{backgroundColor:`rgba(0, 0, 0, 1)`}}>
      <title>AI Agents and Assistants</title>
      <meta name="description" content=" Complete AI assistant for a Educational Document and credential evaluation"></meta>
      <h1 className="info-title" style={{backgroundColor:`rgba(255, 0, 98, 1)`,borderRadius:"60px",
      color:"white",padding:"25px",paddingTop:"10px", paddingBottom:"10px"

      }}>Coming Soon...</h1>
      <p className="info-subtitle"></p>

     
    </div>
  );
}