import React, { Component } from 'react';
import AppProvider from './component/AppProvider';
import './App.css';
import Navbar from './component/Navbar';

class App extends Component {

    render() {
        return (
            <AppProvider>
                <div className="App" style={{paddingTop:'4.7rem'}} justify="center">
                    <Navbar />
                </div>
            </AppProvider>
        );
    }
}

export default App;