import React, { useState } from 'react';
import data from './data';
function App() {
  const[paraamt,setParaamt] = useState(0);
  const[para,setPara] = useState([])
  const handleSubmit = (amt)=> {
    amt.preventDefault();
    let amount = parseInt(paraamt);
    if(paraamt<=0){
      amount = 1
    }
    if (paraamt>8){
      amount = 8
    }
    setPara(data.slice(0,amount))
  };
  return (
    <section className='section-center'>
      <h3>Tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraph:</label>
        <input type='number' 
        name='amount' 
        id='amount' 
        value={paraamt} 
        onChange={(amt)=>{setParaamt(amt.target.value)}}/>
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {para.map((pa,index)=>{
          return <p key={index}>{pa}</p>
        })}
      </article>
    </section>
    )
}

export default App;
