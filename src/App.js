import React, {Component} from 'react';
import AppProvider from './component/AppProvider';
import './App.css';
import NavbarBeforeLogin from './component/Navbar';
import NavbarAfterLogin from './component/NavbarAfterlogin';

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={NavbarBeforeLogin}/>
                    <Route exact path="/home" component={NavbarAfterLogin}/>
                </Switch>
            </Router>
        // <AppProvider>     <div className="App" style={{paddingTop:'4.7rem'}}
        // justify="center">         <Navbar />     </div> </AppProvider>
        );
    }
}

export default App;