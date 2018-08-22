import React, { Component } from 'react';

import './App.css';
import Navbar from './component/Navbar';
// import Branda from './pages/Beranda';

const AppContext = React.createContext();

class AppProvider extends Component {
    state = {
        order:{},
        orderItem:[],
        message: 'sedang pakai react context'
    }
    render() {
        return <AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>
    }
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
        console.log(process.env)
    }
    render() {
        return (
            <AppProvider>
                <div className="App" style={{paddingTop:'4.7rem'}} justify="center">
                    <Navbar />
                    {/* <Content /> */}
                    <AppContext.Consumer>
                    {(context) => context.message}
                    </AppContext.Consumer>
                    {/* <Branda /> */}
                </div>
            </AppProvider>
        );
    }
}

export default App;
