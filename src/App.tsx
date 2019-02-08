import React, {Component} from 'react';

import PortfolioPage from "./PortfolioPage";
import sectionConfigs from "./sectionConfigs";

import './css/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <PortfolioPage sectionConfigs={sectionConfigs}/>
            </div>
        );
    }
}

export default App;
