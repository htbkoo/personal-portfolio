import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../../components/App';
import { overrideGoogleAnalyticsRelatedProcessEnv } from "../../utils/utils";

describe('<App/>', function () {
    it('renders without crashing', () => {
        overrideGoogleAnalyticsRelatedProcessEnv({ trackingEnabled: "false" });

        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});