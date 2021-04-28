import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value//ex :e.target.value
// React
// value, onChange

const ControlledInputs = () => {
const [firstName,setFirstName]=useState('')
const [email,setEmail]=useState('')
const [people,setPeople]=useState([])
  
  
  const handleSubmit = (e) => {
    e.preventDefault();//The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    // console.log(firstName,email);
    if(firstName && email){//user submit value
      //by creating new object//property nad value matches
      const person={id:new Date().getTime().toString(),
      firstName,email};
      setPeople((people)=>{
        return [...people,person];//spread opr.
      })
      setFirstName('');
      setEmail('');
      // console.log(person);
    }
    else{//user submit empty value
      console.log('empty values');
    }
  }
  
  return( 
  <>
  <article>
<form className="form" onSubmit={handleSubmit}>
<div className="form-control">
<label htmlFor="firstName">Name:</label>
<input 
type="text" 
id="firstName" 
name="firstName"
value={firstName}
onChange={(e)=>setFirstName(e.target.value)}
/>
</div>

<div className="form-control">
<label htmlFor="email">Email:</label>
<input 
type="text" 
id="email" 
name="email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
</div>
<button type='submit' /*onClick={handleSubmit}*/>
add person
</button>
 </form>
{
people.map((person,index)=>{
  const {id,firstName,email}=person;//destructuring
return <div className="item" key={id}>
<h4>{firstName}</h4>
<p>{email}</p>
</div>
})
}
  </article>
  </>
  )
};

export default ControlledInputs;
