import { FaLinkedin,FaGithub,FaFacebook } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs'
import './navbar.css'
import { Link } from 'react-router-dom';
const Navber = () => {
    return (
        <nav>
            <div className='flex justify-between px-5'>
                <h1 className='title text-2xl font-semibold'>Ibrahim EXYZ...</h1>
                <ul className='flex gap-5 text-2xl'>
                    <li className='text-'><Link to='https://github.com/ibrahimRabbi?tab=repositories'><FaGithub /></Link></li>
                    <li className='text-cyan-600'><a href="https://www.linkedin.com/in/ibrahim-rabbi-mern/"><FaLinkedin /></a></li>
                    <li className='text-pink-700'><a href="https://www.instagram.com/ibrahim_rabbi_/"><BsInstagram /></a></li>
                    <li className='text-cyan-600'><a href="https://www.facebook.com/ebrahimrabby"><FaFacebook /></a></li>
                </ul>
            </div>
            <hr className='mt-5'/>
        </nav>
    );
};

export default Navber;