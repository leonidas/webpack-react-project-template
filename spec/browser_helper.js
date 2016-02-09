import {remote} from 'webdriverio';

const client = remote({
    desiredCapabilities: {
        browserName: 'chrome'
    }
});

beforeAll(done => browser = client.init().then(done));
afterAll(done => browser.endAll().then(done));

export var browser = null;
