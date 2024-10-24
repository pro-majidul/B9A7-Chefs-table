import PropTypes from 'prop-types';
const Recepi = ({ recepi ,handelCookes }) => {
    return (
        <div>
            <div className="card bg-base-100 border shadow-xl">
                <figure className='px-4 pt-4'>
                    <img className='h-60 w-full rounded-xl'
                        src={recepi.receip_image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recepi.receip_name}</h2>
                    <p className='text-gray-400 pb-2'>{recepi.short_description}</p>
                    <hr />
                    <h3 className='text-lg font-medium pt-3'>Ingredienst : {recepi.ingredients.length}</h3>
                    <ul className='ml-10 pb-3 list-disc text-gray-600'>
                        {recepi.ingredients.map((item, dx) => <li key={dx}>{item}</li>)}
                    </ul>
                    <hr />
                    <div className='flex items-center justify-between py-2 text-gray-500'>
                        <div className='flex gap-2 items-center'>
                            <i className="fa-regular fa-clock"></i>
                            <p>{recepi.preparing_time} Min</p>
                        </div>
                        <div className='flex items-center gap-2 '>
                        <i className="fa-solid fa-fire-flame-curved"></i>
                            <p>{recepi.calories} Calories</p>
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        <button onClick={()=>handelCookes(recepi)} className="btn bg-[#0BE58A] rounded-3xl">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Recepi.propTypes = {
    recepi: PropTypes.object.isRequired,
    handelCookes:PropTypes.func.isRequired
}
export default Recepi;