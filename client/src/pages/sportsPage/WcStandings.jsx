// src/pages/wcStandings.jsx
import "../../styles/Products.css";

export default function WcStandings() {
  const   WorldcupStandingList = [
    { id: 1, title: "Argentina vs Brazil kickoff time", region: "South America", date: "2025-11-12" },
    { id: 2, title: "England match rescheduled", region: "Europe", date: "2025-11-14" },
    { id: 3, title: "Japan morning match highlights", region: "Asia", date: "2025-11-15" },
  ];

  return (
    <div className="wc-standings-container">
      <h1 className="wc-standings-title">wcStandings</h1>
      <p className="wc-standings-subtitle">Timezone differences is confusing?</p>

      <div className="wc-standings-grid">
        { WorldcupStandingList.map((news) => (
          <div key={news.id} className="wc-standings-card">
            <h3 className="wc-standings-news-title">{news.title}</h3>
            <p className="wc-standings-region">Region: {news.region}</p>
            <p className="wc-standings-date">Date: {news.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}