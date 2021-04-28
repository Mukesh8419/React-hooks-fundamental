import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)
const PersonContext=React.createContext();
//two components-Provider,Consumer



const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{removePerson,people}}>
      <h3>Context API/useContext</h3>
      {/* <List people={people} removePerson={removePerson} /> 
      we pass above 'people' and 'remove'* and remove from the list*/}
      <List/>
    </PersonContext.Provider>
  );
};

//const List = ({people}) => {// use people.map()
  //if above line remove than use mainData and mainData.people.map()
const List = () => {
   const mainData=useContext(PersonContext)

  return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
      
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, }) => {
//useContext
 const {removePerson}=useContext(PersonContext)

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
