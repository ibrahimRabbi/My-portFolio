import { FaGithub, } from 'react-icons/fa'
import { MdTravelExplore } from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
 

const ShocaseCard = ({obj}) => {
    const { name, about, technologies, liveLink, clientCode, serverCode, photos } = obj
     const arry = []

    photos.forEach(v => {
        arry.push({ original: v, thumbnail: v })
   })
      
    const images =  arry

    return (
        <div data-aos="fade-down-right" className=" mt-8 lg:mt-16 grid lg:grid-cols-2 gap-5 lg:gap-11">
            <ImageGallery items={images} />
            <div data-aos="fade-down-left" className="lg:p-5">
                <h1 className="text-xl lg:text-2xl font-semibold">{name}</h1>
                <hr className="w-[35%] mt-1" />
                <p className="text-gray-800 mt-2">{about}</p>
                <div className="flex gap-2 items-center mt-1">
                    <p className="font-semibold lg:text-lg text-sm">technologies: </p>
                    <div className="space-y-2">
                        {
                            technologies.map(v => <button key={Math.random()} className="text-gray-900 text-sm cursor-text font-semibold ml-2 bg-slate-50 px-2 rounded-xl shadow-xl">{v}</button>)
                         }
                    </div>
                </div>
                <div className="flex mt-8 gap-2 lg:gap-5 text-[10px] lg:text-md">
                <a className="flex items-center gap-1 bg-yellow-400 font-semibold p-2 rounded-xl" href={clientCode}><FaGithub />Client side code</a>
                    <a className="flex items-center gap-1 bg-yellow-400 font-semibold p-2 rounded-xl" href={serverCode}><FaGithub />Server side code</a>
                    <a className="flex items-center gap-1 bg-yellow-400 font-semibold p-2 rounded-xl" href={liveLink}>Live Demo <MdTravelExplore /></a>
                </div>
            </div>
        </div>
    );
};

export default ShocaseCard;