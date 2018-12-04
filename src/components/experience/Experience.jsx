import React from 'react';
import styled from 'styled-components';
import data from '../../data/experience.json';
import Job from './Job.jsx';

const ExperienceStyles = styled.section`
    background-color: white;
    text-align: center;
`;

const Experience = () => {
    const jobs = data.jobs;
    const jobComponents = jobs.map(job => {
        return <Job
            workplace={job.workplace}
            title={job.title}
            stay={job.stay}
            image={job.image}
        />;
    })

    return (
        <ExperienceStyles id="experience">
            <h2>Experience</h2>
            {jobComponents}
        </ExperienceStyles>
    );
}

export default Experience;