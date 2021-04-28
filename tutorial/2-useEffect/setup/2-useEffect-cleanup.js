import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize]=useState(window.innerWidth);
  console.log(size);//size depend on our browser tab how much small or big scroll left/right...
  
  const checkSize=()=>{
    setSize(window.innerWidth)
  }

useEffect(()=>{
  console.log('useEffect')//3.useEffect
  window.addEventListener('resize',checkSize)
//returning a fn.
  return () =>{
  console.log('cleanup');//2.cleanup
  window.removeEventListener('resize',checkSize);
}
},[])//blank array
console.log('render');//1.render

  return( 
  <>
  <h1>window</h1>
  <h2>{size}PX</h2>
  </>
  )};

export default UseEffectCleanup;
