import React  from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';

function BelowHero(){
    const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:1920/');
        setResponse(res.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

    return(
        <>
        <section className="below-hero">
            <div className="below-hero-div">
                <div className="below-hero-div-left"> 
                <h2>We are an agile team of passionate developers</h2>
                {error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            {response && (
              <div>
                <p className='response-insights'>{response.insights}</p>
              </div>
            )}
          </>
        )}
                 </div>
                <div className="below-hero-div-right"> 
                <img  src=" https://assets-global.website-files.com/64e61e9bfaf90bd7fd8ac398/64e7b44cf3e9b6a939d83100_team-of-developers-image-1-devtech-x-webflow-template-p-500.png"/></div>
            </div>
        </section>
        </>
    )
}
export default BelowHero;
