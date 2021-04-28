import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  //   const [age, setAge] = useState('');
  //imp. above ke lye soln.  for dynamically use declare object line below
  const [person,setPerson]=useState({firstName:'',email:'',age:''})
  const [people, setPeople] = useState([]);


const handleChange =(e)=>{
  //use 2 property(dynamic property) it.
  const name=e.target.name;
  const value=e.target.value;
  //copy all the value first below
  //[name]:value means [name]=value
  setPerson({...person,[name]:value});        //firstName:value})

}
const handleSubmit =(e) =>{
  e.preventDefault();
// check 3 times below
  if(person.firstName && person.email && person.age){
    //copy person value from above the state//ex. const [person,setPerson]
  const newPerson={...person,id:new Date().getTime().toString()};
 //setPeople content array[]
 setPeople([...people,newPerson]);
  //setPerson content empty string object{}
setPerson({firstName:'',email:'',age:''});
  }
};
  return (
    <>
      <article>
        <form className='form' >
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='text'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>
        </article>

        <article>

        {people.map((person, index) => {
          const { id, firstName, email,age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>

            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
