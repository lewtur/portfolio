import React, { Component, Suspense, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import theme from './theme';
import Intro from './components/Intro';
import Footer from './components/Footer';
const Experience = lazy(() => import('./components/Experience'));

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <>
                    <Header />
                    <Intro />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Experience />
                    </Suspense>
                    <Footer />
                </>
            </ThemeProvider>
        );
    }
}

export default App;
