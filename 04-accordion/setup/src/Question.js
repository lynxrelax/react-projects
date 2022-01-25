import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({question}) => {
  const [more,setMore] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{question.title}</h4>
        <button className='btn' onClick={() =>{setMore(!more)}}>
          {more? <AiOutlineMinus />:<AiOutlinePlus />}
        </button>
      </header>
      {more && <p>{question.info}</p>}
    </article>
    
  );
};

export default Question;
