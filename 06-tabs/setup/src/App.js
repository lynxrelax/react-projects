import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading,setLoading] = useState(true);
  const [joblist,setJoblist] = useState([]);
  const [jobid,setJobid] = useState(0);

  const  fetchData = async() => {
    const data = await fetch(url);
    const joblist = await data.json();
    setJoblist(joblist)
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[]);
  if (loading) {
  return (
    <section className='section loading'>
      <h1>loading...</h1>
    </section>
  );};
  // order matters..
  const {title,company,dates,duties}  = joblist[jobid];
  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'/>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {joblist.map(
            (job,index)=>
            {return (<button 
              key={job.id} 
              className = {`job-btn ${ index === jobid && `active-btn`}`}
              onClick={()=>setJobid(index)}>
                {job.company}
              </button>)}
          )}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
            <div className="job-desc">
              <p>{duties}</p>
            </div>
        </article>
      </div>
      <button className='btn'>
      more info
      </button>
    </section> 
  );
};

export default App;
