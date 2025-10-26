
import "../../styles/Products.css"
import { useNavigate } from "react-router-dom";
import  IphonePage   from "./IphonePage.jsx";
import { useState } from "react"
import { useEffect } from "react";


export default function News() {
  
    const [airData, setAirData] = useState({});

useEffect(() => {
  async function fetchNews() {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2025-10-25&to=2025-10-25&sortBy=popularity&apiKey=298147a955cc47ca997a390b93d35c15"
    );
    const data = await response.json();
    console.log("Fetched new data:", data);

    sessionStorage.setItem("NewsAPIWasCalled", "YES");
    sessionStorage.setItem("newsJsonData", JSON.stringify(data));
    setAirData(data);
    console.log("New data added");
  }

  if (sessionStorage.getItem("NewsAPIWasCalled") === "YES") {
    console.log("news-api-not-fetched, already called");
    const stored = sessionStorage.getItem("newsJsonData");
    if (stored) setAirData(JSON.parse(stored)); // parse before setting
  } else {
    fetchNews(); // only call after defining
  }
}, []);
      

  const NewsList = [
    { id: 1, title: "Timezone", category: "Timezone confusion problems?", date: "2025-11-04", link:gotoIphonepage },
    { id: 2, title: "VAR system updated for fairer play", category: "Technology", date: "2025-11-04" },
    { id: 3, title: "New environmental rules for stadiums", category: "Sustainability", date: "2025-11-06" },
  ];

  const navigate = useNavigate();
 function gotoIphonepage(){
    navigate("/mainlist/news/iphone-news");
     console.log("navigated to iphone-page")
 }

  return (
    <div className="news-container">
      <h1 className="news-title">News Latest</h1>
      <p className="news-subtitle">See the most Recent published Aticles</p>

      <div className="news-grid">
        {NewsList.map((news, index) => (
          <div key={index} className="news-card" onClick={news.link}>
            <h3 className="news-news-title">{news.title}</h3>
            <p className="news-category">Category: {news.category}</p>
            <p className="news-date">Date: {news.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}