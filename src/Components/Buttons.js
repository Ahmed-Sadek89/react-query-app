import React from "react";


const Buttons = (props) => {
    return(
        <div className='AllButton'>
            <button onClick={() => props.setData('People') } >People</button>
            <button onClick={() => props.setData('Vehicles') } >Vehicles</button>
        </div>
     );
}
 
export default Buttons;