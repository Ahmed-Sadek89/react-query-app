import React, { useState } from "react";
import { useQuery } from "react-query";
import Vehicles from "./People";

const fetchPeople = async (page)=>{
    const res = await fetch(`https://swapi.dev/api/vehicles/?page=${page}`);
    return res.json();
}



const AllVehicles = () => {
    const [ page, setPage ] = useState(1)
    const {
         data,
         status 
        } = useQuery(['Vehicles', page],
                () => fetchPeople(page),
                {
                keepPreviousData: true,
                }
            );
    return(
        <div className='AllVehicles'>
           {
               status === 'error' && 
               <p className='status'>something went wrong</p>
           }
           {
               status === 'loading' &&
               <p className='status'>loading...</p>
           }
           {
               status === 'success' &&
               (
               <>
                <button className='prev-next'
                    onClick={()=> setPage(old => Math.max( old -1 ,1 ))}
                    disabled={page === 1}    
                >
                        prev
                </button>

                <button className='prev-next'
                    onClick={ ()=> setPage( page + 1 )}
                    disabled={page >= data.count / 10}
                >
                    next
                </button>

                <>
                    {
                        data.results.map( vehicles =>
                            <Vehicles key={vehicles.name} people={vehicles} /> 
                        )
                    }
                </>
               </>)
           }
           
        </div>
     );
}
 
export default AllVehicles;