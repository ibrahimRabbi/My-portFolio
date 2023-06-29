import Layout from "./Layout/Layout"
import Redirect from "./redirect/Redirect"
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./home/Home"
 
 
 
function App() {

  const  router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element :  <Home/>
        }
        
      ]
    }
  ])


  return (
    <section className="relative">
      <img className="absolute lg:w-[120px] w-[80px] lg:right-36 right-11 top-36 animate-pulse"   src="https://i.ibb.co/yk3Y3By/pngwing-com.png" alt="" />

      <img className="absolute lg:w-[120px] w-[80px] lg:left-44 left-10 top-28 animate-bounce transition"   src="https://i.ibb.co/WPVrKkj/Lovepik-com-401028564-five-pointed-star.png" alt="" />

      <img className="absolute left-1/2 top-96 animate-spin duration-700" width={130} src="https://i.ibb.co/JHZ2btJ/pngwing-com-1.png" alt="" />

      <div className="back sticky z-10 border lg:w-[85%] w-[95%] mx-auto rounded-xl p-6"> 
        <RouterProvider router={router} />
        <Redirect />  
      </div>
      
    </section>
  )
}

export default App
