import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [personid,setPersonid]=useState(0);
  const [people,setPeople] = useState(data);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (personid < 0) {
      setPersonid(lastIndex);
    }
    if (personid > lastIndex) {
      setPersonid(0);
    }
  }, [personid, people]);
  useEffect(()=>{
    let slider = setInterval(()=>{setPersonid(personid+1)},3000);
    return ()=>{clearInterval(slider)}
    },[personid])
  return (
    <section className='section'>
      <div className='title'>
        <h2><span>/</span>review</h2>
      </div>
      <div className='section-center'>
        {people.map((person,index)=>{
          const{id, image,title,name, quote} = person;
          let position ='nextSlide';
          if(index=== personid){
            position='activeSlide';
          }
          if(index === personid-1 || personid===0 & index===people.length-1){
            position='lastSlide';
          }
          return(
          <article className={position} key={id}>
            <img src={image} alt={name} className='person-img'/>
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
          );
        })}

        <button className='prev' onClick={()=>setPersonid(personid-1)}><FiChevronLeft/></button>
        <button className='next' onClick={()=>setPersonid(personid+1)}><FiChevronRight/></button>
      </div>
    </section>
  );
}

export default App;
