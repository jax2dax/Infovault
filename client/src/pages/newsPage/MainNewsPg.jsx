
import "../../styles/Products.css"
import { useNavigate } from "react-router-dom";
import  IphonePage   from "./TrendingNewsPg.jsx";
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
    { id: 1, title: "Trending and Hot", category: "Trending", date: "2025-11-04", link:gotoIphonepage },
    { id: 2, title: "Celebrity Updates", category: "Entertainment", date: "2025-11-04", link:redirect2 },
    { id: 3, title: "Political Crisis", category: "Politics", date: "2025-11-03",link:redirect3 },
  ];

  const navigate = useNavigate();
 function gotoIphonepage(){
    navigate("/mainlist/news/trending-news");
     console.log("navigated to iphone-page")
 }
 /*** */
 function redirect2(){()=>{window.open()}}
 function redirect3(){()=>{window.open()}}

  return (
    <div className="news-container">
      <title>Breaking News & Trending Stories Today | Entertainment, Tech, & Global Updates</title>
      <meta name="description" content="Get the latest breaking news and today's top trending stories in one place. Your source for current affairs, entertainment, technology, and global updates."></meta>
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