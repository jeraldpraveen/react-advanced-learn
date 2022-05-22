import React from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Jerald",
    text: "Learning React Is Fun",
  },
  {
    id: "q2",
    author: "Praveen",
    text: "React Is Great",
  },
];

const QuoteDetail = () => {
  const params = useParams();

  var quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    quote = {};
    quote.id = "empty";
    quote.author = "";
    quote.text = "No Quote Found";
  }

  return (
    <React.Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetail;
