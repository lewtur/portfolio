import React from 'react';
import styled from 'styled-components';

const JobStyles = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    padding-bottom: 4rem;
    align-items: center;

    @media ${props => props.theme.breakpoint.sm} {
        flex-direction: row;
        padding-bottom: 2.5rem;
    }

    img {
        width: 15rem;
    }

    .workplace {
        font-size: 1.2rem;
        font-weight: bold;
    }

    .title {
        font-size: 1rem;
        font-style: italic;
    }
`;

const DetailsHolder = styled.div`
    text-align: left;
    width: 100%;
    padding-left: 1rem;

    @media ${props => props.theme.breakpoint.sm} {
        width: 30%;
    }
`;

const Job = ({ workplace, title, stay, image }) => {
    return (
        <JobStyles>
            <div><img src={`../assets/${image}`} alt={`${workplace} logo`} /></div>
            <DetailsHolder>
                <div className="workplace">{workplace}</div>
                <div className="title">{title}</div>
                <div className="stay">{stay}</div>
            </DetailsHolder>
        </JobStyles>
    );
}

export default Job;