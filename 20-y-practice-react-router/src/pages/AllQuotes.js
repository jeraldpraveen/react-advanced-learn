import React from "react";
import QuoteList from "../components/quotes/QuoteList";

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

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
