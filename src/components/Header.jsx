import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
    background-color: ${props => props.theme.primary};
    color: white;
    padding: 1rem 0rem 0rem 2rem;
`;

const Name = styled.h1`
    font-weight: bold;
    font-size: 1.5rem;
    margin: 0;
`;

const TagLine = styled.div`
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: normal;
    letter-spacing: 0.3rem;
    padding-bottom: 1rem;
`;

const Header = () => {
    return ( 
        <HeaderStyles>
            <Name>Lewis Turner</Name>
            <TagLine>Software Developer</TagLine>
        </HeaderStyles>
    );
}
 
export default Header;