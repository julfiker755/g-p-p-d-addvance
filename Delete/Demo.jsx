import React, { useEffect, useState } from 'react';

const Demo = () => {
  const [product,setproduct]=useState([])
    useEffect(()=>{
      const getdata=async()=>{
        fetch('http://localhost:2020/product')
        .then(res=>res.json())
        .then(result=>setproduct(result))
      }
      getdata()
    },[])
  const handledelete=(id)=>{
   fetch(`http://localhost:2020/productdelete/${id}`, {
      method: "DELETE", // or 'PUT'
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
      if(result.success == true){
        const ramming=product.filter(pro=>pro._id !== id)
        setproduct(ramming)
      }
    })
  }
  
  return (
   <div className='max-w-7xl mx-auto'>
     <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4'>
     {product.map(pro=><div className='bg-[#383d38] text-white p-5 rounded-md' key={pro._id}>
        <h1>Name:{pro.name}</h1>
        <button onClick={()=>handledelete('64ca80c1bd99605cad76b69a')} className='btn btn-sm'>Delete</button>
      </div>)}
     </div>
   </div>
  );
};

export default Demo;