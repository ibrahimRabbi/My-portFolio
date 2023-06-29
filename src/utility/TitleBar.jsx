import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const TitleBar = ({title,subTitle}) => {
    return (
        <div data-aos="fade-right" className="lg:w-[40%] w-[80%] mx-auto text-center uppercase">
            <p className='font-semibold text-sm'>{subTitle}</p>
            <h1 className="title text-2xl lg:text-4xl font-semibold">{title}</h1>
            <hr className='border-purple-800 mt-3' />
        </div>
    );
};

export default TitleBar;