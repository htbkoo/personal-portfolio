import React, {Component} from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';

import PortfolioPage from "./PortfolioPage";
import sectionConfigs from "./sectionConfigs";
import {theme} from "./services/MuiThemeFactory";

import './css/App.css';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <PortfolioPage sectionConfigs={sectionConfigs}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
