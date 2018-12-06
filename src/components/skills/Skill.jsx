import React from 'react';
import styled from 'styled-components';
import SkillProficiency from './SkillProficiency';

const SkillStyles = styled.div`
   padding: 2rem 1rem;
    font-size: 0.9rem;
    color: #5f5f5f;
    &:hover {
        color: black;
    }

    @media ${props => props.theme.breakpoint.sm} {
        padding: 1rem 3rem;
    }
`;

const Skill = ({ logo, name, proficiency }) => {
    return (
        <SkillStyles>
            <i className={`logo fab fa-${logo}`}></i>
            <div>{name}</div>
            <SkillProficiency stars={proficiency} />
        </SkillStyles>
    );
}

export default Skill;