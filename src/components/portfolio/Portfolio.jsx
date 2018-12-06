import React from 'react';
import styled from 'styled-components';
import PortfolioItem from './PortfolioItem';
import data from '../../data/portfolio.json';

const PortfolioStyles = styled.section`
    
`;

const PortfolioItemsHolder = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media ${props => props.theme.breakpoint.md} {
        flex-direction: row;
    }
`;

const Portfolio = () => {
    const portfolioItems = data.portfolio.map((item, index) => (
        <div className="wow fadeIn" data-wow-delay={`${(index + 1) * 100}ms`} key={item.name}>
            <PortfolioItem
                name={item.name}
                url={item.url}
                logo={item.logo}
            />
        </div>
    ));

    return (
        <PortfolioStyles id="portfolio">
            <h2 className="wow fadeIn">Portfolio</h2>
            <PortfolioItemsHolder>
                {portfolioItems}
            </PortfolioItemsHolder>
        </PortfolioStyles>
    );
}

export default Portfolio;