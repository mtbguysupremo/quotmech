import { cleanup } from '@testing-library/react';
import React, {useEffect, useState} from 'react';
import './App.scss';

let quoteDB = "https://type.fit/api/quotes"

function App() {
  const [quote, setQuote] = useState("Booyah");
  const [author, setAuthor] = useState('Me :)');
  const [randomNumber, setRandomNumber] = useState(0);
  const [quotesArray, setQuotesArray] = useState(null)

const fetchQuotes = async (url) => {
  const response = await fetch(quoteDB)
  const parsedJSON = await response.json()
  setQuotesArray(parsedJSON)
  console.log(parsedJSON)
}

useEffect(() => {
fetchQuotes()
}, [quoteDB])

 // const ourquotesArray = [{quote:"ayy" , author:"lmao" }, {quote: "yo momma", author: "MTVs 2000 persona"}]

  
const getRandomQuote = () => {
  let randomInteger = Math.floor(quotesArray.length * Math.random())
  setRandomNumber(randomInteger)
  setQuote(quotesArray[randomInteger].text)
  setAuthor(quotesArray[randomInteger].author)
  }
  return (
    <div className="App">
      <div id="quote-box">
          <h1>Random Number: {randomNumber}</h1>
        <button id="new-quote" onClick={() => getRandomQuote()}>Change quote!</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet">tweet</a>
        <p id="text">
          "{quote}"
        </p>
        <p id="author">- {author}</p>
        </div>
    </div>
  );
}

export default App;
