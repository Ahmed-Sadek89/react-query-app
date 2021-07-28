import React from "react";
import AllPeaple from "./DataComponents/AllPeaple";
import AllVehicles from "./DataComponents/AllVehicles";

const Data = (props) => {
    return(
        <div className='AllData'>
            <h4>{props.data}</h4>
            {props.data === 'People' ? <AllPeaple/> : <AllVehicles/> }
        </div>
     );
}
 
export default Data;