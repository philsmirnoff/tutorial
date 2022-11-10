import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };
  return (
    <QuoteForm onAddQuoteForm={addQuoteHandler} />
  )
}

export default NewQuote
