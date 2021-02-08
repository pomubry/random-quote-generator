import { useEffect, useState } from 'react';

// Icons
import { FaQuoteLeft, FaGithub, FaTwitter } from 'react-icons/fa';
import { BsArrowClockwise } from 'react-icons/bs';

const color = [
  '#ED4C67',
  '#F79F1F',
  '#1289A7',
  '#D980FA',
  '#B53471',
  '#EE5A24',
  '#009432',
  '#0652DD',
  '#9980FA',
  '#833471',
  '#EA2027',
  '#5758BB',
];

// Function to get a random color
const randomColor = () => color[Math.floor(Math.random() * color.length)];

const App = () => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [href, setHref] = useState('');
  const [quoteArr, setQuoteArr] = useState([]);
  const [activeColor, setActiveColor] = useState('');
  const [opacity, setOpacity] = useState(0);
  const [transition, setTransition] = useState('all 1s ease');

  // Fetch quotes from a REST API & store it in state
  useEffect(() => {
    fetch('https://api.quotable.io/quotes?limit=50&maxLength=200')
      .then((res) => res.json())
      .then((data) => {
        let index = Math.floor(Math.random() * data.results.length);
        const { author, content } = data.results[index];

        setAuthor(author);
        setContent(content);
        setQuoteArr([...data.results]);
        setActiveColor(randomColor);
        setOpacity(1);
      });
  }, []);

  // Get a random quote that was saved on the state.
  const handleGenerate = (e) => {
    e.preventDefault();
    let index = Math.floor(Math.random() * quoteArr.length);
    const { author, content } = quoteArr[index];

    setAuthor(author);
    setContent(content);
    setActiveColor(randomColor);
    setOpacity(0);
    setTransition('none');

    setTimeout(() => {
      setOpacity(1);
      setTransition('all .25s ease');
    }, 250);
  };

  // Tweet Handler
  const handleTweet = (e) => {
    // Replace whitespace with %20
    let authorStr = author.replace(/\s/g, '%20');
    let contentStr = content.replace(/\s/g, '%20');

    setHref(
      `https://twitter.com/intent/tweet?text="${contentStr}"%20-%20${authorStr}`
    );
  };

  // Only for setting initial background
  const generalTransition = {
    backgroundColor: activeColor,
    transition: 'all 1s ease',
  };

  return (
    <div className="App" style={generalTransition}>
      <header>
        <h1>Random Quote Generator</h1>
      </header>

      {/* The entire Quote Box */}
      <div className="content-box" id="quote-box">
        <div className="quote">
          {/* Quote */}
          <h2
            id="text"
            style={{
              color: activeColor,
              transition: transition,
              opacity: `${opacity}`,
            }}
          >
            <FaQuoteLeft />
            {content}
          </h2>

          {/* Author */}
          <p
            id="author"
            style={{
              color: activeColor,
              transition: transition,
              opacity: `${opacity}`,
            }}
          >
            - {author}
          </p>
        </div>

        {/* Tweet and Random Quote Buttons */}
        <div className="buttons">
          <button
            onClick={handleGenerate}
            id="new-quote"
            style={generalTransition}
          >
            <BsArrowClockwise /> Generate a Random Quote
          </button>
          <a
            href={href}
            onClick={handleTweet}
            rel="noopener noreferrer"
            id="tweet-quote"
            style={generalTransition}
            target="_blank"
          >
            <FaTwitter /> Tweet this Quote
          </a>
        </div>
      </div>

      {/* Profile Link */}
      <div className="credits">
        <p>Designed and Coded By</p>
        <a
          href="https://github.com/pomubry"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          Bryan Taduran
        </a>
      </div>
    </div>
  );
};

export default App;
