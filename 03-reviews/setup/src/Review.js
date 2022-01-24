import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [id, setId] = useState(0);
  const review = people[id];
  const checkNumber = (num) =>{
    if(num > people.length-1){
      return 0;
    }
    if(num < 0 ){
      return people.length -1
    }
    return num;
  };
  const prevPerson = () =>{
    setId((id) =>{
      let newId = id - 1;
      return checkNumber(newId);
    }) 
  };
  const nextPerson = () =>{
    setId((id) =>{
    let newId = id + 1;
    return checkNumber(newId);
    }) 
  };
  const randomNumber =()=>{
    let randomNum = Math.floor(Math.random()*people.length)
    if (randomNum === id) {
      randomNum = id + 1
    }
    setId(checkNumber(randomNum))
  };
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={review.image} className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{review.name}</h4>
      <p className='job'>{review.job}</p>
      <p className='info'>{review.text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}><FaChevronLeft/></button>
        <button className='next-btn' onClick={nextPerson}><FaChevronRight/></button>
      </div>
      <button className='random-btn' onClick={randomNumber}>Surprise Me</button>
    </article>
  );
};

export default Review;
