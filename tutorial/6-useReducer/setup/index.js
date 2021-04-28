import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
//2. below point.1. alternate sol.useReducer -->refactor
const reducer=(state,action)=>{
  
if(action.type==='ADD_ITEM'){//at the end add this line
  const newPeople=[...state.people,action.payload]
  return{
    ...state,
  people:newPeople,//[],//data,
  isModalOpen:true,
  modalContent:'item added'
  }
}
  if(action.type==='NO_VALUE'){
    return {
      ...state,
    isModalOpen:true,
    modalContent:'please enter value'};
  
}
throw new Error('no matching action type')
}
//initial state
const defaultState={
  people:[],//data,//[],
  isModalOpen:false,//true,
  modalContent:'',
}


 const Index = () => {
  const [name,setName]=useState('');
  const [state,dispatch]=useReducer(reducer,defaultState)//initial state
  const handleSubmit=(e)=>{
     e.preventDefault();
     if(name){//for submit the form use newItem....and grab the name
     const newItem={id:new Date().getTime().toString(),name}
       dispatch({type:'ADD_ITEM' ,payload:newItem})
       setName('')
     }
     else{
       dispatch({type:'RANDOM'})
     }
  }
  return(
     <>
     {state.isModalOpen && (<Modal modalContent={state.modal}/>)}
     <form onSubmit={handleSubmit} className="form">
     <div>
    <input 
    type="text" 
    value={name} 
    onChange={(e)=>setName(e.target.value)}/>
    </div> 
<button type='submit'>add </button>
     </form>
     {state.people.map((person)=>{
       return <div key={person.id}>
       <h4>{person.name}</h4>

       </div>
     })}
     </>
  )
}

export default Index;














//1.useReducer-UseState setup
// const Index = () => {
//   const [name,setName]=useState('');
//   const [people,setPeople]=useState(data);//data array
//   const [showModal,setShowModal]=useState(false)
  
//   const handleSubmit=(e)=>{
//      e.preventDefault();
//      if(name){
// setShowModal(true);
// //pass new people inside array
// setPeople([...people,{id:new Date().getTime()
// .toString(),name}])
// setName('')//setName store empty string
//      }
//      else{
//        setShowModal(true)
//      }
//   }
//   return(
//      <>
//      {showModal && <Modal/>}
//      <form onSubmit={handleSubmit} className="form">
//      <div>
//     <input 
//     type="text" 
//     value={name} 
//     onChange={(e)=>setName(e.target.value)}/>
//     </div> 
// <button type='submit'>add </button>
//      </form>
//      {people.map((person)=>{
//        return <div key={person.id}>
//        <h4>{person.name}</h4>
//        </div>
//      })}
//      </>
//   )
// }

// export default Index;
