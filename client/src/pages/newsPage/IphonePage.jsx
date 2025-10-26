import "../../styles/Products.css";
import { useNavigate } from "react-router-dom";

export default function IphonePage() {
 
    
    
  // Simulated news API response (shortened)
  const articles = [
    {
      source: { name: "CNET" },
      author: "Aaron Pruner",
      title: "Meta Will Close Down Its Messenger Apps on Mac and Windows",
      description: "You've got two more months until the apps are gone.",
      url: "https://www.cnet.com/tech/services-and-software/meta-will-close-down-its-messenger-apps-on-mac-and-windows/",
      urlToImage: "https://www.cnet.com/a/img/resize/71fb9dc5790367bc759187d82bde927278651679/hub/2025/10/16/4c219a1c-0555-41aa-a82a-2665810504ea/meta-facebook-messenger-logo-gettyimages-2197064855.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2025-10-25T11:52:03Z",
      content: "Meta is discontinuing its desktop Messenger apps for Windows and Mac..."
    },
    {
      source: { name: "MacRumors" },
      author: "Mark Johnson",
      title: "Tim Cook Turns 65: What’s Next for Apple’s CEO?",
      description: "Talks are growing about who could be Cook’s successor...",
      url: "https://www.macrumors.com/article/tim-cook-successor/",
      urlToImage: "https://images.macrumors.com/article/2025/10/timcook.jpg",
      publishedAt: "2025-10-25T12:45:02Z",
      content: "Tim Cook's 65th birthday is next week, on Nov. 1..."
    }
  ];

  return (
    <div className="info-container">
      <h1 className="info-title">Latest Tech News</h1>
      <p className="info-subtitle">Stay updated with today’s trending stories</p>

      <div className="info-grid">
        {articles.map((article, index) => (
          <div
            key={index}
            className="info-card"
            onClick={() => window.open(article.url, "_blank")}
          >
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="info-img" />
            )}
            <h3 className="info-news-title">{article.title}</h3>
            <p className="info-category">Source: {article.source.name || "Unknown"}</p>
            <p className="info-date">
              Published: {new Date(article.publishedAt).toLocaleDateString()}
            </p>
            <p className="info-desc">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}