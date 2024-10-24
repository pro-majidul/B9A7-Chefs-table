import PropTypes from 'prop-types';
const Sidebar = ({ cookes ,handelPreparedRecepy,calores,times ,prepareRecepi , handelTimeCalores}) => {
    return (
        <div className="md:w-1/3 border rounded-xl px-1 py-4 text-gray-600">
            <h3 className='text-center text-2xl text-black font-medium pb-3'> Want to Cook: {cookes.length}</h3>
            <hr />
            {/* want to cook table */}

            <div className="overflow-x-hidden pb-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cookes.map((cook, idx)=> <tr className='hover' key={idx}>
                            <th>{idx +1}</th>
                            <td>{cook.receip_name}</td>
                            <td>{cook.preparing_time} Min</td>
                            <td>{cook.calories}</td>
                            <td><button
                            onClick={()=>{
                                handelPreparedRecepy(cook.receip_id)
                                handelTimeCalores(cook.preparing_time , cook.calories)
                            }}
                             className='bg-[#0BE58A] px-2 py-2 rounded-xl hover:bg-gray-600 hover:text-white'>Preapering</button></td>
                        </tr>)
                        }


                    </tbody>
                </table>
            </div>

             {/*Current Cook table */}
             <h3 className='text-center text-2xl text-black font-medium pb-3'> Current Cook: {prepareRecepi.length}</h3>
             <hr />
             <div className="overflow-x-hidden pb-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {prepareRecepi.map((recepy, idx)=> <tr className='hover' key={idx}>
                            <th>{idx +1}</th>
                            <td>{recepy.receip_name}</td>
                            <td>{recepy.preparing_time} Min</td>
                            <td>{recepy.calories}</td>
                           
                        </tr>)
                        }
                        <tr>
                            <th></th>
                           
                            <th>Total time : {times} Min</th>
                            <th>Total Calory : {calores} calory</th>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    );
};
Sidebar.propTypes = {
    cookes: PropTypes.array.isRequired,
    handelPreparedRecepy:PropTypes.func.isRequired,
    prepareRecepi :PropTypes.array.isRequired,
    handelTimeCalores: PropTypes.func.isRequired,
    calores:PropTypes.number.isRequired,
    times : PropTypes.number.isRequired
}
export default Sidebar;