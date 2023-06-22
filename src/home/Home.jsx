import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../contactMe/Contact";
import AllShowCase from "../showCase/AllShowCase";
import Skill from "../Skill/Skill";

 

const Home = () => {
    return (
        <section>
            <Banner />
            <About />
            <Skill />
            <AllShowCase />
            <Contact/>
        </section>
    );
};

export default Home;