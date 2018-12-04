import React from 'react';
import styled from 'styled-components';
import data from '../data/skills.json';

const SkillsStyles = styled.section`
    text-align: center;

    .logo {
        font-size: 5rem;
        padding-bottom: 0.3rem;
    }

    .skills-holder {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-left: 12rem;
        padding-right: 12rem
    }
`;

const Skill = styled.div`
    padding: 1rem 3rem;
    font-size: 0.9rem;
    color: grey;
    &:hover {
        color: black;
    }
`;

const Skills = () => {
    const skills = data.skills;

    const skillComponents = skills.map(skill => {
        return (
            <Skill>
                <i className={`logo fab fa-${skill.logo}`}></i>
                <div>{skill.name}</div>
                <SkillProficiency stars={skill.proficiency} />
            </Skill>
        );
    })

    return (
        <SkillsStyles>
            <h2 id="skills">Skills</h2>
            <div className="skills-holder">
                {skillComponents}
            </div>
        </SkillsStyles>
    );
}

const SkillProficiency = ({ stars }) => {
    const fullStars = stars;
    const emptyStars = 5 - stars;

    return (
        <div>
            {[...Array(fullStars)].map((e, i) => <i key={i} className="fas fa-star"></i>)}
            {[...Array(emptyStars)].map((e, i) => <i key={5 + i} className="far fa-star"></i>)}
        </div>
    );
}

export default Skills;