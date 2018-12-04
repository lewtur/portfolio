import React from 'react';

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

export default SkillProficiency;