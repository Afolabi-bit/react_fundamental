import React, { useState } from 'react';
import List from './List';
import data from "./data"



function App() {
  const clearUsers = () => {
    setPeople([]);
  }

  const [people, setPeople] = useState(data)
  return (
    <React.Fragment>
      <main>
        <section className='container'>
          <h3>5 Birthdays Today</h3>
          <List users={people}/>
          <button className='btn' onClick={() => clearUsers()}>Clear All</button>
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
