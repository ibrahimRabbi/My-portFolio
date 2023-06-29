import { TypeAnimation } from 'react-type-animation';
import { FiFileText } from 'react-icons/fi'
 
const Banner = () => {
    return (
        <section className='mt-24 lg:px-5'>
            <div className='lg:w-1/2  text-center mx-auto'>
                <h1 className='lg:text-4xl text-[24px] font-semibold '>Hi!..<span className='text-red-800'>Im Ibrahim Rabbi</span> </h1>
                <TypeAnimation 
                    sequence={[
                        'I am a Front end Developer....',
                        1000,
                        'I am a Backend Developer....',
                        1000,
                        'I am a Mern Stack Developer....',
                        1000,
                    ]}
                    speed={50}
                    style={{ fontSize: '20px' }}
                    repeat={Infinity}
                />
                <p className='text-sm font-semibold text-gray-700'>I am a Mern Stack Developer. this is my portfolio website. here have been some full stack projects and included of my BioGraPhy..so lets explore it</p>
            <div className='flex justify-center mt-4 gap-4'>
                <a href='../../public/Ibrahim-resume-M.pdf' download className='bg-amber-400 p-2 rounded-lg font-semibold flex items-center gap-1'>View Resume<FiFileText/></a>
                    <a href='#contract' className='bg-amber-400 p-2 rounded-lg font-semibold'>Get in Touch</a>
            </div>
           </div>
       </section>
    );
};

export default Banner