import TitleBar from "../utility/TitleBar";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { FaGithub, } from 'react-icons/fa'
import { MdTravelExplore } from 'react-icons/md'


const ShowCase1 = () => {

    const images = [
        {
            original: 'https://i.ibb.co/Tb65BZK/Screenshot-15.png',
            thumbnail: 'https://i.ibb.co/Tb65BZK/Screenshot-15.png',
        },
        {
            original: 'https://i.ibb.co/NTGgvHs/Screenshot-17.png',
            thumbnail: 'https://i.ibb.co/NTGgvHs/Screenshot-17.png',
        },
        {
            original: 'https://i.ibb.co/sJNMtQ2/Screenshot-18.png',
            thumbnail: 'https://i.ibb.co/sJNMtQ2/Screenshot-18.png',
        },
        {
            original: 'https://i.ibb.co/f9sgnJF/Screenshot-21.png',
            thumbnail: 'https://i.ibb.co/f9sgnJF/Screenshot-21.png',
        },
    ];


    return (
       
            
            <div className="mt-16 grid grid-cols-2 gap-11">
                <ImageGallery items={images} />
                

                <div className="p-5">
                    <h1 className="text-2xl font-semibold">Photo School</h1>
                    <hr className="w-[35%] mt-1"/>
                    <p className="text-gray-800">this is full stack photography related course platfrom Application.in this application has been itragation payment getway,JWT authorization... and has a Admin Pannle and instructors pannle. this application more user friendly Interface for browse</p>
                    <div className="flex gap-2 items-center mt-1">
                        <p className="font-semibold text-lg">technologies: </p>
                        <div className="space-y-2">
                            <button className="text-gray-900 text-sm cursor-text font-semibold ml-2 bg-slate-50 px-2 rounded-xl shadow-xl">React</button>
                            <button className="text-gray-900 text-sm cursor-text font-semibold ml-2 bg-slate-50 px-2 rounded-xl shadow-xl">MongoDB</button>
                            <button className="text-gray-900 text-sm cursor-text font-semibold ml-2 bg-slate-50 px-2 rounded-xl shadow-xl">Express</button>
                            <button className="text-gray-900 text-sm cursor-text font-semibold ml-2 bg-slate-50 px-2 rounded-xl shadow-xl">Tailwind</button>
                            <button className="text-gray-900 text-sm cursor-text font-semibold ml-2 bg-slate-50 px-2 rounded-xl shadow-xl">Firebase Authentication</button>
                            <button className="text-gray-900 text-sm cursor-text font-semibold ml-2 bg-slate-50 px-2 rounded-xl shadow-xl">Css</button>
                        </div>
                    </div>
                    <div className="flex mt-8 gap-5 text-md">
                    <a className="flex items-center gap-1 bg-yellow-400 font-semibold p-2 rounded-xl" href="https://github.com/ibrahimRabbi/photo-school-client"><FaGithub />Client side code</a>
                    <a className="flex items-center gap-1 bg-yellow-400 font-semibold p-2 rounded-xl" href="https://github.com/ibrahimRabbi/photo-school-server"><FaGithub />Server side code</a>
                    <a className="flex items-center gap-1 bg-yellow-400 font-semibold p-2 rounded-xl" href="https://photo-school-2f7ad.web.app/">Live Demo <MdTravelExplore /></a>
                    </div>
                </div>

               
            </div>
       
    );
};

export default ShowCase1;