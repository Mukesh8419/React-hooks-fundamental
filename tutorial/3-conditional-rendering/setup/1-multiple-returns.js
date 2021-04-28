import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';//QuincyLarsons add 's' technically call user doesn't exit give Error...
const MultipleReturns = () => {
 
 const [isLoading,setIsLoading]=useState(true);//(true)or()//return Loading...
 const [isError,setIsError]=useState(false)
 const [user,setUser]=useState('default user')
 
 
 useEffect(()=>{
  //  setIsLoading(true);
   fetch(url)
   .then((resp)=>{ //resp.json())
   if(resp.status>=200 && resp.status<=299){
   return resp.json();
   }
   else{
     setIsLoading(false);
     setIsError(true)
     throw new Error(resp.statusText)
   }
   })
   .then((user)=>{
     const {login} =user;//destructring
     setUser(login);
     setIsLoading(false);
   })
   .catch(error=>console.log(error))
 },[])
 
 
 
 if(isLoading){
  return(
    <div>
     <h1>Loading...</h1>;
   </div>
  );
 }

  if(isError){
    return(
      <div>
      <h1>Error...</h1>
      </div>
    )
  }
  return( 
    <div>
  <h2>{user}</h2>
  </div>
  )
};

export default MultipleReturns;
