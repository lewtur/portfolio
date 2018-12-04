import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import WOW from 'wowjs';
import Header from './components/Header';
import theme from './theme';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Bio from './components/Bio';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';

class App extends Component {

    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <>
                    <Header />
                    <Intro />
                    <Bio />
                    <Skills />
                    <Experience />
                    <Portfolio />
                    <Footer />
                </>
            </ThemeProvider>
        );
    }
}

export default App;
