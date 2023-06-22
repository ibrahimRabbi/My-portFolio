 

const SkillCard = ({ img, name, shadowColor }) => {
    return (
        <div className={`bg-slate-100 shadow-lg rounded-xl flex items-center gap-1 p-3 font-semibold ${shadowColor}`}>
            <img width={50} className='rounded-xl' src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default SkillCard;