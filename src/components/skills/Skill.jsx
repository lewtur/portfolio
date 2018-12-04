import React from 'react';
import styled from 'styled-components';
import SkillProficiency from './SkillProficiency';

const SkillStyles = styled.div`
    padding: 1rem 3rem;
    font-size: 0.9rem;
    color: #5f5f5f;
    &:hover {
        color: black;
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