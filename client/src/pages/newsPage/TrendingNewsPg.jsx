import "../../styles/Products.css";
import { useNavigate } from "react-router-dom";
import "../../styles/newsstyles/newsstyle.css"
export default function Newslist() {
 
    
    
  // Simulated news API response (shortened)
  const articles = [
    {
      source: { name: "CNET" },
      author: "Aaron Pruner",
      title: "Meta Will Close Down Its Messenger Apps on Mac and Windows",
      description: "You've got two more months until the apps are gone.",
      url: "https://www.cnet.com/tech/services-and-software/meta-is-shutting-down-its-mac-and-windows-messenger-apps-what-you-need-to-know/",
      urlToImage: "yimages-2197064855.jpg?auto=webp&fit=crop&height=675&width=1200",
      img:"../../../public/vite.svg",
      publishedAt: "2025-10-25T11:52:03Z",
      content: "Meta is discontinuing its desktop Messenger apps for Windows and Mac..."
    },
    {
      source: { name: "MacRumors" },
      author: "Mark Johnson",
      title: "Tim Cook Turns 65: What’s Next for Apple’s CEO?",
      description: "Talks are growing about who could be Cook’s successor...",
      url: "https://www.macrumors.com/article/tim-cook-successor/",
      urlToImage: "../",
      publishedAt: "2025-10-25T12:45:02Z",
      content: "Tim Cook's 65th birthday is next week, on Nov. 1..."
    },
     {
      source: { name: "CNN" },
      author: "",
      title: "Harvard Explosion",
      description: "Explosion at Harvard Medical School appears to have been intentional, authorities say \"NO ONE IS HURT\"",
      url: "https://www.cnn.com/2025/11/01/us/harvard-university-goldenson-explosion",
      urlToImage: "https://media.cnn.com/api/v1/images/stellar/prod/crop-01-harvard-suspect.jpg?c=original&q=w_834,c_fill/f_webp",
      img:"../../../public/vite.svg",
      publishedAt: "2025-11-1T11:52:03Z",
      content: "Meta is discontinuing its desktop Messenger apps for Windows and Mac..."
    },
  ];

  return (
    <div>
      <title>Trending and Hot News</title>
      <meta name="description" content="Your trusted source for comprehensive trending news and analysis. Read top stories and critical updates across technology, science, finance, and global events."></meta>
    <div className="news-container">
      <h1 className="news-title">Trending News</h1>
      <p className="news-subtitle">Stay updated with today’s trending stories and Hot news</p>
    <div className="news-list">
      <div className="news-grid">
        {articles.map((article, index) => (
          <div
            key={index}
            className="news-card"
            onClick={() => window.open(article.url, "_blank")}
          ><div className="news-image-container">
            {article.urlToImage && (
              <img src={article.urlToImage } alt={article.title} className="news-img" />
            )}
            </div>
            <h3 className="news-news-title">{article.title}</h3>
            <p className="news-category">Source: {article.source.name || "Unknown"}</p>
            <p className="news-date">
              Published: {new Date(article.publishedAt).toLocaleDateString()}
            </p>
            <p className="news-desc">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    <div>
      <div className="ad-box" style={{backgroundColor:"white"}}>More news at <a href="https//cnn.com">CNN</a></div>
    </div>
    </div>
  );
}