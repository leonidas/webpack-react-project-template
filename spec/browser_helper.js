import {remote} from 'webdriverio';

const client = remote({
    desiredCapabilities: {
        browserName: 'chrome'
    }
});

var browser = null;

beforeAll(done => browser = client.init().then(done));
afterAll(done => browser.endAll().then(done));

export default function getBrowser() { return browser; }