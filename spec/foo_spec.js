import {browser} from './browser_helper';


describe("foo", () => {
  it("should", async function() {
    var text = await browser
      .url('http://localhost:8080')
      .getText('#root');

    expect(text).toContain("bork");
  });
});
