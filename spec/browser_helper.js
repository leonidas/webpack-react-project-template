import {remote} from 'webdriverio';

const client = remote({
    desiredCapabilities: {
        browserName: 'chrome'
    }
});

export default client;