import { useEffect, useState, useRef } from 'react';

function App() {
  const [quote, setQuote] = useState();
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    generateQuote();
  }, []);

  async function generateQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random', {
        method: 'GET',
      });
      const data = await response.json();
      setQuote(data.content);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center flex-col font-mooli gap-10 mx-3">
      <h1 className="text-4xl">Quote Generator</h1>
      <div className="max-w-2xl">{quote}</div>
      <button
        onClick={generateQuote}
        className="bg-slate-200 text-slate-700 font-bold px-3 py-1 rounded-md shadow-md"
      >
        Generate new quote
      </button>
    </div>
  );
}

export default App;
