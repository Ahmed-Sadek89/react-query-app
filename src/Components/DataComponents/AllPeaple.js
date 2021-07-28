import React, { useState } from "react";
import { useQuery } from "react-query";
import People from "./People";

const fetchPeople = async (page)=>{
    const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    return res.json();
}



const AllPeaple = () => {
    const [ page, setPage ] = useState(1)
    const {
         data,
         status 
        } = useQuery(['Peaple', page],
                () => fetchPeople(page),
                {
                keepPreviousData: true,
                }
            );
    return(
        <div className='AllPeople'>
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
                        data.results.map( people =>
                            <People key={people.name} people={people} /> 
                        )
                    }
                </>
               </>)
           }
           
        </div>
     );
}
 
export default AllPeaple;