import './App.css';
import React, { useEffect, useState } from 'react';

let iteration = 0;
function App() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
      const interval = setInterval(() => {
        let randColor = Math.floor(Math.random()*16777215).toString(16);
        let item = {
          id: iteration++,
          value: `#${randColor}`
        }
        setNumbers(oldList => [...oldList, item])
      }, 100);
     
      return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <section className='container-fluid'>
        <div className='row col-12'>
        {
          numbers.map((x) => {
            return (
            <React.Fragment>
              <div className='col-1 px-2 py-2'>
                <div className='card px-4 py-4 fade-in' style={{backgroundColor: `${x.value}`}}>
                  {x.id}
                </div>
              </div>
            </React.Fragment>
            )
          })
        }
        </div>
      </section>

    </div>
  );
}

export default App;
