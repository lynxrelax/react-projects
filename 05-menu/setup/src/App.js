import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const allCategories = ['all',...new Set(items.map((item)=>item.category))];
  const changeCate =(category)=>{
    if (category==='all'){
      setMenu(items);
      return;
    }
    const newMenu = items.filter((item)=>item.category === category);
    setMenu(newMenu);
  };
  const [menu,setMenu] = useState(items);
  return (
    <main>
      <article className='menu'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'/>
          <div className='btn-container'><Categories categories={allCategories} changeCate={changeCate}/></div>
        </div>
        <div className='section-center'>
          {menu.map((item)=>{
            return(<Menu key={item.id} {...item}/>)
          })}
        </div>
      </article>      
    </main>
  );
}

export default App;
