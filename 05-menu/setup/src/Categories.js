import React from 'react';

const Categories = ({categories, changeCate}) => {
  return (
    <h2>{categories.map(
      (category,index)=>
      <button 
      className='filter-btn'
      key = {index}
      onClick={()=>changeCate(category)}>
        {category}
      </button>)}
    </h2>
  );
};

export default Categories;
