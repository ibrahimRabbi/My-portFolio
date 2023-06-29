import { useEffect,useState } from 'react';
import TitleBar from '../utility/TitleBar';
import ShocaseCard from './ShocaseCard';
 
 

const AllShowCase = () => {

    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch('https://ibrahim-s.vercel.app')
            .then(res => res.json())
        .then(res=>setData(res))
    }, [])
    
    return (
        <section className=' mt-16 lg:mt-28'>
            <TitleBar title="My Projects" subTitle='lets see my Projects' />
            {
                data.map(value => <ShocaseCard key={Math.random()} obj={value} />)
            }
        </section>
    );
};

export default AllShowCase;