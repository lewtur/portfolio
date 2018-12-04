import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import theme from './theme';

class App extends Component {
    render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <Header />
                </ThemeProvider>
            </div>
        );
    }
}

export default App;
