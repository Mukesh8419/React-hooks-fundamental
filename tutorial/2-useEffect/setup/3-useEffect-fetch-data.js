import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';
//second argument
const UseEffectFetchData = () => {
  const [users,setUsers]=useState([]);
  
const getUsers=async () =>{
  const response=await fetch(url);
  const users=await response.json();
 setUsers(users)//means setuser and pass users
  //console.log(users);
}

  useEffect(()=>{
getUsers()//getUsers invoked it.
  },[])
  
  
  return(
    <>
    <h3>github users</h3>
<ul className='users'>
{users.map((user)=>{
  //api me data--> id,login,avatar_url,html_url
const {id,login,avatar_url,html_url}=user;
  return(//list item below li..
    <li key={id}>
    <img src={avatar_url} alt={login}/>
    <div>
    <h4>{login}</h4>
    <a href={html_url}>profile</a>
    </div>
    </li>
  )
})}
</ul>     
     </>
  )
};

export default UseEffectFetchData;
