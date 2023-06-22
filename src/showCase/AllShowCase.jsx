 
import TitleBar from '../utility/TitleBar';
import ShowCase1 from './ShowCase1';
import ShowCase2 from './ShowCase2';
import ShowCase3 from './ShowCase3';

const AllShowCase = () => {
    return (
        <section className='mt-28'>
            <TitleBar title="My Projects" subTitle='lets see my Projects' />
            <ShowCase1/>
            <ShowCase2 />
            <ShowCase3/>
        </section>
    );
};

export default AllShowCase;