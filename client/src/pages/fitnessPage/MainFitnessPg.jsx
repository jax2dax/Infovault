
//import "../../styles/Products.css"
import { useNavigate } from "react-router-dom";


export default function Fitness() {
  const FitnessList = [
    { id: 1, title: "Food and nutrition ", category: "fitness", date: "2025-11-04", link:gotogotonutrition },
    { id: 2, title: "Intensity, Muscle building", category: "fitness", date: "2025-11-04" },
    { id: 2, title: "The golden Intensity and Reps ratio", category: "fitness", date: "2025-11-04" },
    { id: 3, title: "Supplements and Muscle Building", category: "fitness", date: "2025-11-04" }
  ];

  const navigate = useNavigate();
 function gotogotonutrition(){navigate("/mainlist/Nutrition-and-fitness/");}
 function gotosupplements(){navigate("/mainlist/supplements/");}
 

  return (
    <div className="info-container">
        <title>Fitness & Nutrition Guide: Muscle Building, Exercise Science, and Body Compositi</title>
        <meta name="description" content="Master your workouts and nutrition. Learn how your body uses energy, optimize muscle building, and understand key metrics like BMI and Body-Fat ratio."></meta>
         
      <h1 className="info-title">Fitness and Nutrition Science</h1>
      <p className="info-subtitle">Your Comprehensive Guide to Exercise, Muscle Building, and Body Composition</p>

      <div className="info-grid">
        {FitnessList.map((info) => (
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