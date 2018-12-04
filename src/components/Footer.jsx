import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
    background-color: ${props => props.theme.primary};
    height: 6rem;
    text-align: center;
    display: flex;
`;

const LinkHolder = styled.div`
    align-items: center;
    margin: auto;
`;

const ProfileLink = styled.i`
    color: white;
    padding: 1rem;
    font-size: 1.5rem;
    &:hover {
        cursor: pointer;
    }
`;

const Footer = () => {
    return (
        <FooterStyles>
            <LinkHolder>
                <ExternalLink link="https://stackoverflow.com/users/7012762/lewtur" icon="fa-stack-overflow" />
                <ExternalLink link="https://github.com/lewtur" icon="fa-github" />
                <ExternalLink link="https://linkedin.com" icon="fa-linkedin" />
            </LinkHolder>
        </FooterStyles>
    );
}

const ExternalLink = ({ link, icon }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <ProfileLink className={`fab ${icon}`} />
        </a>
    );
}

export default Footer;