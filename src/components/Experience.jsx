import React from 'react';
import styled from 'styled-components';
import data from '../data/experience.json';

const ExperienceStyles = styled.div`
    background-color: white;
`;

const Experience = () => {
    return ( 
        <ExperienceStyles>
            {data.experience.map(job => <div>{job.workplace}</div>)}
        </ExperienceStyles>
     );
}
 
export default Experience;