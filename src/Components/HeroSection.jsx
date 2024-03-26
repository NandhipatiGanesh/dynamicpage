import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {
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

  return (
    <>
    <section className="main-content">
      <div className='submain-container'>
        <h2 className='h2-content'>Experienced website <br /> developers</h2>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            {response && (
              <div  className="submain-container">
                <p className='response-para'>{response.description}</p>
                
              </div>
            )}
          </>
        )}
        <div> 
          <button className='button-type-1'>Get started</button>
          <button className='button-type-2'>Our services</button>
        </div>
        <div className="hero-image">
          <img src="https://assets-global.website-files.com/64e61e9bfaf90bd7fd8ac398/64e67053b4aff97d5c0a243c_hero-image-home-v1-devtech-x-webflow-template-p-1080.png" alt="Hero Image" />
        </div>
      </div>
    </section>
    
    </>
    
  );
}

export default App;
