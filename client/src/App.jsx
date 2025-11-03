import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Products from "./pages/Products.jsx";
import GeneralInfos from "./pages/infoPage/MainInfoPg.jsx";
import TimezonePage from "./pages/infoPage/TimezonePage.jsx";
import  News  from "./pages/newsPage/MainNewsPg.jsx"
import TrendingNews from "./pages/newsPage/TrendingNewsPg.jsx";
import DocEvaluate from "./pages/docEvaluatePage/MainDocevPg.jsx";
import DocEvBasicsPage from "./pages/docEvaluatePage/DocEvBasicsPage.jsx";
import Home from "./pages/Home.jsx"
import Fitnesspage from "./pages/fitnessPage/MainFitnessPg.jsx";
import DocEvAgent from "./pages/agentsPage/DocEvAgent.jsx"
import About from "./components/About.jsx";
function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      
        <Routes>
          <Route path="/"  element={<Layout />} >
            <Route path="/" element={<Home />}/>
              <Route path="mainlist"  element={<Products />} />
                <Route path="mainlist/getInfo" element={<GeneralInfos />} />
                <Route path="mainlist/getInfo/timezone-am-pm" element={<TimezonePage />} /> 
                <Route path="mainlist/news" element={<News />} /> 
                   <Route path="mainlist/news/trending-news" element={<TrendingNews />} />
                    <Route path="mainlist/DocEvPage" element={<DocEvaluate />} /> 
                    <Route path="mainlist/DocEvPage/Evaluation-basics" element={<DocEvBasicsPage />} /> 
                    <Route path="mainlist/fitnessPage" element={<Fitnesspage />} />
                <Route path="/mainlist/Agents/Doc-Evaluation" element={< DocEvAgent/>} />
                  <Route path="/about" element={<About />} />
    
          </Route>
        </Routes>
      
    </Suspense>
  );
}

export default App;


//<Route path="sports" />
/**<Routes>
        <Route path="/" element={<Layout />}>
          <Route path="mainlist" element={<Products />}>
            <Route path="getInfo" element={<GeneralInfos />}>
              <Route path="timezone-am-pm" element={<TimezonePage />} />
            </Route>
          </Route>
        </Route>
      </Routes> */