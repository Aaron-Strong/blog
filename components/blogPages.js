// TODO: For scaleability reasons it's probaaaably best to seperate content and url names in the future
// It's not very effiecent that the user is downloading every page just to view the blog directory

import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light";
import xml from "react-syntax-highlighter/dist/languages/xml";
import customStyle from "./customStyle";
registerLanguage("http", xml);

const pageArray = [];

const helloWorldCode1 =
  "<div>\r\n    <h2>Hello World</h2>\r\n    <p>This is me just testing the blog page works as intended :pogchamp:</p>\r\n    <p>Works pretty nicely imo</p>\r\n    <p>Here's some syntax highlighting...</p>\r\n</div>";
const helloWorldContent = (
  <div>
    <h2>Hello World</h2>
    <p>This is me just testing the blog page works as intended :pogchamp:</p>
    <p>Works pretty nicely imo</p>
    <p>Here's some syntax highlighting...</p>
    <SyntaxHighlighter
      language="html"
      style={customStyle}
      customStyle={{
        background: "none",
        textAlign: "left"
      }}
    >
      {helloWorldCode1}
    </SyntaxHighlighter>
    <p>...And here is it overflowing (scrolldown)</p>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <p>See, works pretty damn well</p>
    <a href="https://github.com/MilkyMiku/blog">
      All code for the blog can be found here
    </a>
    <p>[More to come soon™]</p>
  </div>
);

const helloWorld = {
  content: helloWorldContent,
  name: "Hello-World",
  url: "hello-world"
};
pageArray.push(helloWorld);

const chillTunesContent = (
  <div>
    <h3>Tunes I chill to </h3>
    <p>
      <a href="https://s.put.re/tqdVeTk.webm">
        Noname 1 (Piano with dope beats)
      </a>
    </p>
    <p>
      <a href="https://soundcloud.com/neydah/night-sky">night-sky(VaporWave)</a>
    </p>
  </div>
);

const chillTunes = {
  content: chillTunesContent,
  name: "Chill-Tunes",
  url: "chill-tunes"
};
pageArray.push(chillTunes);

// Keep blog ordered chronologically
pageArray.reverse();

export default pageArray;
