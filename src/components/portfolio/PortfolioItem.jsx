import React from 'react';
import styled from 'styled-components';

const PortfolioItemStyles = styled.div`

    padding: 1rem;
    font-size: 1rem;
    display: flex;
    justify-content: center;

    &:hover {
        opacity: 0.8;
    }

    a {
        text-decoration: none;
        color: black;
    }

    img {
        width: 20rem;
    }
`;

const PortfolioItem = ({ name, url, logo }) => {
    return (
        <PortfolioItemStyles>
            <a href={url} target="_blank" rel="noopener noreferrer" title={name}>
                <img src={`../assets/${logo}`} alt={`${name} company logo`} title={`${name} company logo`} />
                <div><strong>{name}</strong></div>
            </a>

        </PortfolioItemStyles>
    );
}

export default PortfolioItem;