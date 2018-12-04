import React from 'react';
import styled from 'styled-components';
import data from '../../data/skills.json';
import Skill from './Skill';

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

        @media ${props => props.theme.breakpoint.md} {
            padding-left: 6rem;
            padding-right: 6rem
        }

        @media ${props => props.theme.breakpoint.lg} {
            padding-left: 12rem;
            padding-right: 12rem
        }
    }
`;

const Skills = () => {
    const skills = data.skills;

    return (
        <SkillsStyles id="skills">
            <h2 className="wow fadeIn">Skills</h2>
            <div className="skills-holder">
                {skills.map((skill, index) =>
                    <div key={skill.name} className="wow fadeIn" data-wow-delay={`${index * 50}ms`}>
                        <Skill
                            name={skill.name}
                            logo={skill.logo}
                            proficiency={skill.proficiency}
                        />
                    </div>
                )}
            </div>
        </SkillsStyles>
    );
}

export default Skills;