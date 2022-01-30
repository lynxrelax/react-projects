import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'


const getLocalStorage = ()=>{
  let list = localStorage.getItem('list')
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return []
  }
};

function App() {
  const [alert,setAlert] = useState({show:false,msg:'',type:''});
  const [list,setList] = useState(getLocalStorage);
  const [name,setName] = useState('');
  const [isEditing,setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (!name){
      setAlert({show:true,msg:'please enter name',type:'danger'})
    }
    else if(name && isEditing){
      setList(list.map((item)=>{
        if(item.id === editID){
        return {...item,title:name}
        }
        return item
      }))
      setName('')
      setEditID(null)
      setIsEditing(false)
      setAlert({show:true,msg:'item edited',type:'success'})
    }
    else{
      const newItem = {id: new Date().getTime().toString(),title:name};
      setList([...list,newItem])
      setName('')
      return setAlert({show:true,msg:'new item added',type:'success'})}
    
  }
  const showAlert = (show=false,type='',msg='')=>{
    setAlert({show,type,msg})
  };
  const clearList = () =>{
    showAlert(true,'danger','empty list')
    setList([]);
  };
  const removeItem =(id)=>{
    showAlert(true,'success','item removed')
    setList(list.filter((item)=>item.id !==id))
  };
  const editItem = (id)=>{
    const specificItem = list.find((item)=>item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title)
  };
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))
  },[list])
  return(
    <main>
      <div className='section'>
        <div className='section-center'>
          {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
          <form className='grocery-form'>
            <h3>grocery bud</h3>
            <div className='form-control'>
              <input className='grocery'
              placeholder='e.g.eggs'
              type='text'
              value={name}
              onChange={(e)=>setName(e.target.value)}
              />
              <button className='submit-btn' onClick={handleSubmit}>{isEditing? 'Edit':'Submit'}</button>
            </div>
            {list.length>0 &&             
            <div className='grocery-container'>
                <List items={list} removeItem={removeItem} editItem={editItem}/>
                <button className='clear-btn' onClick={clearList}>clear-items</button>
            </div>}

          </form>
        </div>
      </div>
    </main>
  )
}

export default App
