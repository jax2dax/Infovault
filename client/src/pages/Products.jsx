import "../styles/Products.css"
import { useNavigate } from "react-router-dom";
export default function Products() {
  const products = [
    { id: 1, name: 'Information', category: 'Education, learn and ask', price: '~299', stock: 45 ,link:gotoInfo},
    { id: 2, name: 'News', category: 'Accessories', price: '~149', stock: 23 ,link:getSport},
    { id: 3, name: 'Sport', category: 'Tools', price: '~499', stock: 12 },
    { id: 4, name: 'Document Evaluation', category: 'Apostille, Educational documents Evaluation', price: '~79', stock: 67 ,link:gotoDocEvaluation},
  ];

  /* ONCLICKS */
       /*navigates to the Route <Route path="/gotoInfo" element={<gotoInfo>}*/ 
  const navigate = useNavigate();

  function gotoInfo(){navigate("/mainlist/getInfo");console.log("navigated to /getinfo")}
  function getSport(){navigate("/mainlist/news")}
  function gotoDocEvaluation(){navigate("/mainlist/DocEvPage")}
  /********** */

  return (
    <div className="products-container">
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
                <span className="product-stock">Stock: {product.stock}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
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