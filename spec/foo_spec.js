import client from './browser_helper';


describe("foo", () => {
  var browser = null;

  beforeAll(done => browser = client.init().then(done));
  afterAll(done => browser.endAll().then(done));

  it("should", (done) => {
    browser
      .url('http://localhost:8080')
      .getText('#root')
      .then(text => {
        expect(text).toContain("bork");
      })
      .then(done);
  });
});
