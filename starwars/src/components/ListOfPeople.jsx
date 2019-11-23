import React from 'react';
import People from "./People";


const ListOfPeople = (props) => {
    console.log('Look at the props of the List of People:', props.localStateVariable, props)


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