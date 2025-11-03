import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
export default function Layouts(){
    return(
        <div className="layout">
            <Navbar />
            <Outlet />
        </div>
    )
}

/**outelt is the children elemnts get rendered,
 *  everythng put in here iwll be default loaded




        <Routes>
          <Route path="/"  element={<Layout />} >     //the outlet enables the other Routes to go in based on Layouts even tough Layouts is also a Route with element={layout}
              <Route path="prod"  element={<Products />} />
          </Route>
        </Routes>
      



 *  */