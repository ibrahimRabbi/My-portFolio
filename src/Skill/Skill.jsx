import TitleBar from "../utility/TitleBar";
import SkillCard from "./SkillCard";

 

const Skill = () => {
    return (
        <section className="mt-24">
            <TitleBar title='My skill and Tools' subTitle='what skills i have' />
            
            <div className="mt-11">
                <h1 className="text-2xl font-semibold text-gray-800 ">Skills</h1>
                <hr className="lg:w-[10%] w-24" />
            </div>
            <div className="grid lg:grid-cols-5 grid-cols-2 gap-5 lg:gap-10 lg:px-5 mt-5">
                <SkillCard img='https://i.ibb.co/R3Z6b2G/js.png' name='JavaScript' shadowColor='shadow-yellow-400'/>
                <SkillCard img='https://i.ibb.co/zP4jxFC/structure.png' name='React js' shadowColor='shadow-cyan-600'/>
                <SkillCard img='https://i.ibb.co/yW8Rn7N/nextjs-256x153.png' name='Next js' shadowColor='shadow-gray-800'/>
                <SkillCard img='https://i.ibb.co/zhq1k4H/node-js.png' name='node js' shadowColor='shadow-green-600'/>
                <SkillCard img='https://i.ibb.co/JyB6dQf/icons8-express-js-50.png' name='Express js' shadowColor='shadow-green-600'/>
                <SkillCard img='https://i.ibb.co/FYLXBFL/database-storage.png' name='MongoDB' shadowColor='shadow-green-500'/>
                <SkillCard img='https://i.ibb.co/KjLDWgg/pngwing-com-4.png' name='Firebase' shadowColor='shadow-yellow-300'/>
                <SkillCard img='https://i.ibb.co/NS9kF4C/icons8-rest-api-48.png' name='Rest API' shadowColor='shadow-gray-500'/>
                <SkillCard img='https://i.ibb.co/p3KpYkC/pngwing-com.png' name='Tailwind' shadowColor='shadow-teal-500'/>
                <SkillCard img='https://i.ibb.co/rppX7Y1/pngwing-com-1.png' name='Bootstrap' shadowColor='shadow-purple-500'/>
                <SkillCard img='https://i.ibb.co/W3ThgvF/html-5.png' name='HTML' shadowColor='shadow-orange-500'/>
                <SkillCard img='https://i.ibb.co/7QnRVq8/css-3.png' name='CSS' shadowColor='shadow-blue-500'/>
            </div>
            <div className="mt-11">
                <h1 className="text-2xl font-semibold text-gray-800 ">Tools</h1>
                <hr className="lg:w-[10%] w-24" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-10 lg:px-5 mt-5">
                <SkillCard img='https://i.ibb.co/4m1CfMB/pngwing-com-2.png' name='Git' shadowColor='shadow-orange-300' />
                <SkillCard img='https://i.ibb.co/859fLfX/github.png' name='Github' shadowColor='shadow-cyan-500' />
                <SkillCard img='https://i.ibb.co/PxjWbWL/pngwing-com-3.png' name='Vercel' shadowColor='shadow-gray-800' />
                <SkillCard img='https://i.ibb.co/JqtpwXJ/visual-studio.png' name='Visual Studio' shadowColor='shadow-teal-500' />
            </div>
        </section>
    );
};

export default Skill;