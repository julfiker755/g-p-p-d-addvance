import React, { useState } from 'react';

const Demo = () => {
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const handlefrom=(e)=>{
   e.preventDefault()
  //  console.log()
   fetch("http://localhost:2020/data", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,email}),
    })
    .then(res=>res.json())
    .then(result=>console.log(result.message))

   
  
  }
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content   flex-col">
      <div className="card flex-shrink-0 w-full lg:w-96 max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input onChange={(e)=>setname(e.target.value)} type="text"  className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input onChange={(e)=>setemail(e.target.value)} type="text"  className="input input-bordered" />
          </div>
          <div className="form-control mt-6">
            <button onClick={handlefrom} className="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Demo;