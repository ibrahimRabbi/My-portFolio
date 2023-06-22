 

const TitleBar = ({title,subTitle}) => {
    return (
        <div className="w-[40%] mx-auto text-center uppercase">
            <p className='font-semibold'>{subTitle}</p>
            <h1 className="title text-4xl font-semibold">{title}</h1>
            <hr className='border-purple-800 mt-3' />
        </div>
    );
};

export default TitleBar;