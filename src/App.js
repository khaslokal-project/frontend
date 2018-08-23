import React, {Component} from 'react';
import './App.css';
import AppProvider from './component/AppProvider'
import {HashRouter, Switch, Route} from 'react-router-dom'
import NavbarBeforeLogin from './component/Navbar';
import NavbarAfterLogin from './component/NavbarAfterlogin';
import {HashRouter, Switch, Route} from 'react-router-dom'

class App extends Component {

    render() {
        return (
            <AppProvider>     
                <div className="App" style={{paddingTop:'4.7rem'}} justify="center">         
                <HashRouter>
                <Switch>
                    <Route exact path="/" component={NavbarBeforeLogin}/>
                    <Route exact path="/home" component={NavbarAfterLogin}/>
                </Switch>
                </HashRouter>   
                </div> 
            </AppProvider>
        );
    }
}

export default App;