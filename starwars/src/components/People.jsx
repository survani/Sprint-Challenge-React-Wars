import React from 'react';
import { TextContainer, NameTextStyle } from './StyleComponents/CardStyles'


const People = props => {


    return (
        <TextContainer>
            <NameTextStyle>{props.eachPeople.name}</NameTextStyle>
            <NameTextStyle>{props.eachPeople.gender}</NameTextStyle>
            <NameTextStyle>{props.eachPeople.height}</NameTextStyle>
            <NameTextStyle>{props.eachPeople.mass}</NameTextStyle>
            <NameTextStyle>{props.eachPeople.birth_year}</NameTextStyle>
        </TextContainer>
    );
}


export default People;

