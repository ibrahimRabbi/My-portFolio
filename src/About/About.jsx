 import '../navbar/navbar.css'
import TitleBar from '../utility/TitleBar';
import { FaMedal, FaFolderOpen, FaTelegramPlane, } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'
import { BsTelephoneOutboundFill } from 'react-icons/bs'
import { MdOutlineMail } from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

 const About = () => {
    return (
        <section className="mt-28">
            <TitleBar title='Aboute Me' subTitle='Get to Know' />
            
            <div className="flex flex-col-reverse lg:flex-row space-y-8 lg:justify-evenly items-center lg:mt-10 ">

                <img data-aos="flip-right" className="w-[80%] lg:w-[220px] rounded-2xl shadow-xl"   src="https://i.ibb.co/72zJz92/DSC-0883.jpg" alt="" />


                <div className="lg:w-1/2 w-[100%]">

                    <div className='grid grid-cols-2 gap-7'>
                        <div className='border bg-slate-200 shadow-xl p-8 rounded-xl text-center'>
                            <FaMedal className='text-4xl mx-auto'/>
                            <h1 className='lg:text-2xl text-xl mt-2'>Experience</h1>
                            <span className='font-semibold'>1.5+ year experience</span>
                        </div>
                        <div className='border bg-slate-200 shadow-xl p-8 rounded-xl text-center'>
                            <FaFolderOpen className='text-4xl mx-auto' />
                            <h1 className='lg:text-2xl text-xl mt-2'>Projects</h1>
                            <span className='font-semibold'>10+ projects i have</span>
                        </div>
                    </div>

                    <p className='mt-5 text-gray-700'>Welcome to my portfolio! <strong>I'm ibrahim Rabbi</strong>, a MERN developer with a strong passion for crafting interactive and scalable web applications. With expertise in MongoDB, Express.js, React.js, and Node.js, I strive to create seamless user experiences and bring innovative ideas to life.</p>

                    <div className='flex lg:flex-nowrap flex-wrap gap-4 mt-2 font-semibold text-[12px]'>
                        <p className='flex items-center gap-1 bg-slate-50 text-cyan-600 p-2 rounded-xl bg-opacity-40'><ImLocation/> : Dhaka,Bangladesh</p>
                        <p className='flex items-center gap-1 bg-red-600 bg-opacity-50 text-slate-50 p-2 rounded-xl'><BsTelephoneOutboundFill />  :(+880) 1986711517</p>
                        <p className='flex items-center gap-1 bg-amber-500 bg-opacity-50 text-slate-50 p-2 rounded-xl'><MdOutlineMail/> : ibrahimrabbihere@gmail.com </p>
                    </div>
                    <a href='#contract' className='bg-yellow-400 p-2 lg:mb-0 mb-5 lg:w-[23%] w-[50%] lg:ms-0 mx-auto  rounded-lg font-semibold mt-8 flex items-center gap-1'>Send Email <FaTelegramPlane/></a>
                </div>


            </div>
       </section>
    );
 };
 
 export default About;