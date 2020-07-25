import React, { Component } from 'react';
import quote from './quote.svg';
import github from './githubIcon.svg';
class App extends Component {
  state = {
    author: '',
    content: '',
    href: '',
    quoteArr: [],
    color: [
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
    ],
    activeColor: '',
  };

  componentDidMount() {
    fetch('https://api.quotable.io/quotes')
      .then((res) => res.json())
      .then((data) => {
        const { color } = this.state;
        let index = Math.floor(Math.random() * data.results.length);
        this.setState({
          author: data.results[index].author,
          content: data.results[index].content,
          quoteArr: [...data.results],
          activeColor: color[Math.floor(Math.random() * color.length)],
        });
      });
  }

  handleGenerate = (e) => {
    e.preventDefault();
    const { quoteArr, color } = this.state;
    let index = Math.floor(Math.random() * quoteArr.length);
    this.setState({
      author: quoteArr[index].author,
      content: quoteArr[index].content,
      activeColor: color[Math.floor(Math.random() * color.length)],
    });
  };

  handleTweet = (e) => {
    let authorStr = this.state.author.replace(/\s/g, '%20');
    let contentStr = this.state.content.replace(/\s/g, '%20');
    console.log(this.state.href);
    this.setState({
      href: `twitter.com/intent/tweet?text="${contentStr}"%20-%20${authorStr}`,
    });
  };

  render() {
    const { activeColor } = this.state;

    return (
      <div
        className="App"
        style={{
          backgroundColor: activeColor,
          transition: 'all 0.5s ease',
        }}
      >
        <header>
          <h1>Random Quote Generator</h1>
        </header>
        <div className="content-box" id="quote-box">
          <div className="quote">
            <h2
              id="text"
              style={{ color: activeColor, transition: 'all 0.5s ease' }}
            >
              <img src={quote} alt="quote" className="quoteSVG" />{' '}
              {this.state.content}
            </h2>
            <p
              id="author"
              style={{ color: activeColor, transition: 'all 1s ease' }}
            >
              - {this.state.author}
            </p>
          </div>
          <div className="buttons">
            <button
              onClick={this.handleGenerate}
              id="new-quote"
              style={{ backgroundColor: activeColor }}
            >
              Generate a Random Quote
            </button>
            <a
              href={this.state.href}
              onClick={this.handleTweet}
              rel="noopener noreferrer"
              id="tweet-quote"
              style={{ backgroundColor: activeColor }}
              target="_blank"
            >
              Tweet this Quote
            </a>
          </div>
        </div>
        <div className="credits">
          <p>Designed and Coded By</p>
          <a
            href="https://github.com/pomubry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github icon" />
            Bryan Taduran
          </a>
        </div>
      </div>
    );
  }
}

export default App;
