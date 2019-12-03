import React from 'react';
import People from "./People";


const ListOfPeople = (props) => {

// 'method determines whether the passed value is an Array'
    if (!Array.isArray(props.people)) {
        return (
            <section>
                <p>Loading...</p>
            </section> 
        )
    }


    else {
        return (
            <>
                {props.people.map(eachPeople => (
                    <People
                        key={eachPeople.birth_year}
                        eachPeople={eachPeople}
                    />
                ))}
            </>
        )
    }


}

export default ListOfPeople