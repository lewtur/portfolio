import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../localAssets/lakes.jpg';

const Parallax = styled.div`
    background-image: url('${BackgroundImage}');
    height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Intro = () => {
    return ( 
        <>
            <Parallax />
        </>
     );
}
 
export default Intro;