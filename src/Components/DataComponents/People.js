import React from "react";


const People = (props) => {
    return(
        <div>
                <h6>{props.people.name}</h6>
                <p>
                    <span>gender</span>
                    <span>{props.people.gender}</span>
                </p>
                <p>
                    <span>birth_year</span>
                    <span>{props.people.birth_year}</span>
                </p>
      </div>
     );
}
 
export default People;