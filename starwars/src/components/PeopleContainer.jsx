import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ListOfPeople from './ListOfPeople';

const PeopleContainer = () => {
    const [people, setPeople] = useState();

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://swapi.co/api/people/'
        })
            .then(response => {
                console.log('This is what we get back from the API:', response.data.results)
                setPeople(response.data.results)

            })
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <ListOfPeople
                people={people}
            />
        </>
    )
};



export default PeopleContainer;

