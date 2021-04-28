import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
const [text,setText]=useState('');//useState('peter');->{text && <h1>hello world</h1>}//here text find than return Hello world
  const [isError,setIsError]=useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  return( 
    <>
<h1>{text || 'john doe'}</h1>
<button className='btn' 
onClick={()=>setIsError(!isError)}
>
toggle error
</button>
{/* {!isError && <h1> Error...</h1>} */}

{isError && <h1> Error...</h1>}
{isError ?(
  <p>ther is an error...</p>
):(
  <div>
  <h2>there is no error</h2>
  </div>

)}
</>
  )
  };

//1.ShortCircuit

//   const ShortCircuit = () => {
// const [text,setText]=useState('');//useState('peter');->{text && <h1>hello world</h1>}//here text find than return Hello world
//   const firstValue = text || 'hello world';
//   const secondValue = text && 'hello world';
// // console.log(secondValue);
//   return( 
//     <>
// <h1>{text || 'john doe'}</h1>
// <button className='btn'>toggle error</button>

// {text && <h1>hello world </h1>}
// {!text && <h1>hello world </h1>}
// </>
//   )
//   };


export default ShortCircuit;
