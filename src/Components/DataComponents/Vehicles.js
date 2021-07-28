import React from "react";


const Vehicles = (props) => {
    return(
        <div>
                <h6>{props.vehicles.name}</h6>
                <p>
                    <span>gender</span>
                    <span>{props.vehicles.gender}</span>
                </p>
                <p>
                    <span>birth_year</span>
                    <span>{props.vehicles.birth_year}</span>
                </p>
      </div>
     );
}
 
export default Vehicles;