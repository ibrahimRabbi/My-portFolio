import { Outlet } from "react-router-dom";
import Navber from "../navbar/Navber";

 
 
const Layout = () => {
    return (
        <section>
            <Navber />
            <Outlet/>
        </section>
    );
};

export default Layout;