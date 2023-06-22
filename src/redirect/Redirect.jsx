import { FaHome, FaUserGraduate, FaBriefcase, FaPencilRuler } from 'react-icons/fa'
 

const Redirect = () => {
    return (
        <div className="text-2xl sticky bottom-6 w-[280px] rounded-xl px-16 py-4  bg-slate-800 bg-opacity-40 back mx-auto z-10">
            <ul className='flex gap-10 justify-center'>
                <li className='text-orange-500'><a href=""><FaHome/></a></li>
                <li className='text-orange-500'><a href=""><FaUserGraduate/></a></li>
                <li className='text-orange-500'><a href=""><FaPencilRuler/></a></li>
                <li className='text-orange-500'><a href=""><FaBriefcase/></a></li>
            </ul>
        </div>
    );
};

export default Redirect;