import React from 'react';
import styled from 'styled-components';
import data from '../data/bio';

const BioStyles = styled.section`
    p {
        line-height: 3rem;
        font-size: 1rem;

        @media ${props => props.theme.breakpoint.md} {
            padding: 4rem 15%;
            font-size: 1.5rem;
        }

        @media ${props => props.theme.breakpoint.lg} {
            padding: 4rem 20%;
        }
    }
`;

const Bio = () => {
    return ( 
        <BioStyles>
            <h2 id="bio" className="wow fadeIn">Bio</h2>
            <p>{data.bio.split('').map((char, index) => <span className="wow fadeIn" data-wow-delay={`${index}ms`} key={`${index}-bio`}>{char}</span>)}</p>
        </BioStyles>
     );
}
 
export default Bio;