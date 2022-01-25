import React, { useState } from 'react';
import data from './data';
import Question from './Question';
function App() {
  return(
    <main>
      <div className='container'>
        <h4>Questions And Answers About Login</h4>
        <section className='info'>
          {data.map((q)=><Question question = {q} />)}
        </section>
      </div>
    </main>
    );
}

export default App;
