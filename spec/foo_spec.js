import getBrowser from './browser_helper';


describe("foo", () => {
  it("should", (done) => {
    getBrowser()
      .url('http://localhost:8080')
      .getText('#root')
      .then(text => {
        expect(text).toContain("bork");
      })
      .then(done);
  });
});
