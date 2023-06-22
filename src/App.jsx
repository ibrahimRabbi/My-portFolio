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
    <div className="back border w-[85%] mx-auto  rounded-xl p-6">
      <RouterProvider router={router} />
      <Redirect/>
    </div>
  )
}

export default App
