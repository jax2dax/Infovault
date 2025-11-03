import "../styles/Products.css"
import { useNavigate } from "react-router-dom";
export default function Products() {
  const products = [
    { id: 1, name: 'Information', category: 'Education, learn and ask', price: '~299', stock: 45 ,link:gotoInfo},
    { id: 2, name: 'News and Trends', category: 'News', price: '~149', stock: 23 ,link:getSport},
    { id: 3, name: 'Sport', category: 'Sports', price: '~499', stock: 12 },
    { id: 4, name: 'Document Evaluation', category: 'Apostille, Educational documents Evaluation', price: '~79', stock: 67 ,link:gotoDocEvaluation},
    { id: 5, name: 'Fitness', category: 'Health', price: '~499', stock: 12 , link:gotofitness},
  ];
  /*Filtering out coosen //agents */
  /*const agentchosenIds = [1, 4, ]; //choose any IDs you want
  const agentProducts = products.filter(p => agentchosenIds.includes(p.id));*/
 const agentProducts =[
   { id: 3, name: 'Document Evaluation Assistant', category: 'Agent and Assistant', price: '-', stock: "", link:gotoAgentDocEV },

 ];
  


  /* ONCLICKS */
       /*navigates to the Route <Route path="/gotoInfo" element={<gotoInfo>}*/ 
  const navigate = useNavigate();

  function gotoInfo(){navigate("/mainlist/getInfo");console.log("navigated to /getinfo")}
  function getSport(){navigate("/mainlist/news")}
  function gotoDocEvaluation(){navigate("/mainlist/DocEvPage")}
   function gotofitness(){navigate("/mainlist/fitnessPage")}
   /********** */
   function gotoAgentDocEV(){navigate("/mainlist/Agents/Doc-Evaluation")}
  /********** */

  return (
    <>
    <div className="products-container">
      <title>General Knowledge & Expert Resources | News, Fitness, Tech & Document Evaluation</title>
      <meta name="description" content="Access a comprehensive range of resources, including the latest news, fitness guides, sports updates, and expert document and credential evaluation services."></meta>
      <h1 className="products-title">Main List</h1>
      <p className="products-subtitle">
        Browse, explore pages.
      </p>
      
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={product.link} >
            <div className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <div className="product-info">
                <span className="product-price">{product.price}</span>
                <span className="product-stock">Queue: {product.stock}</span>
            </div>
          </div>
        ))}
      </div>

    </div>

    {/**agent */}
    <div className="agents-container">
      <h1 className="agents-title">Agents and Assistants</h1>
      <p className="agents-subtitle">
       Access a free AI assistant for personalized answers to your questions.
      </p>

      <div className="agent-grid">
        {
          agentProducts.map((product)=>(
            <div key={product.id} className="agent-card" onClick={product.link}>
                 <div className="agent-image" />
                  <h3 className="agent-name">{product.name}</h3>
                  <p className="agent-category">{product.category}</p>
                  <div className="agent-info">
                  <span className="agent-price">{product.price}</span>
                  <span className="agent-stock">Value: {product.stock}</span>
                </div>
            </div>
          ))
        }
        
      </div>
      </div>
    </>
  );
}

/*
the link:infor with out the "()" is important, it is not the same as infor(): -this excutes when page renders
, the otherone waits for calls, and allso you can add custom function to each of the arrays you are entering just make sure it is
 product.link not  product"s".link, product is alrasy mapped 

 -useNavigate to go to somewhere when clicked 
 import { useNavigate } from "react-router-dom"
 const navigat= useNavigate();

 
 */