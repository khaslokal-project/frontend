import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
// import Branda from './pages/Beranda';

class App extends Component {
    render() {
        return (
            <div className="App" style={{paddingTop:'4.7rem'}} justify="center">
                <Navbar />
                {/* <Branda /> */}
            </div>
        );
    }
}

export default App;
