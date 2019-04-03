import ReactGA from 'react-ga';

const reactGA = jest.genMockFromModule<typeof ReactGA>('react-ga');

let interactions = emptyInteractions();

reactGA.initialize = function (trackingCode) {
    console.debug(`initialize with trackingCode: "${trackingCode}"`);
    interactions.initialize.push(trackingCode);
};

reactGA.pageview = function (path) {
    console.debug(`pageview with path: "${path}"`);
    interactions.pageView.push(path);
};

(reactGA as any).__resetInteractionCount = function () {
    interactions = emptyInteractions();
};

function emptyInteractions() {
    return {
        initialize: [] as string[],
        pageView: [] as string[],
    }
}

// noinspection JSUnusedGlobalSymbols
export default reactGA;