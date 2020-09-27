import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [fullName,setfullName]=useState({ 
    fname: "",
    lname: "",
    email: "",
    phone: "",

  });


    const inputEvent = (event) =>{
      console.log(event.target.value); 
      console.log(event.target.name ); 

      //const value = event.target.value;
      //const name = event.target.name;
        const{value,name}=event.target;
      
      setfullName((preValue) =>{
        //console.log(preValue);
        if(name ==='fName'){
          return{
            fname: value,
            lname: preValue.lname,
            email:preValue.email,
            phone:preValue.phone,
          };
      }else if(name ==='lName'){
          return{
            fname: preValue.fname,
            lname:  value,
            email:preValue.email,
           phone:preValue.phone,
      };
      }else if(name ==='email'){
        return{
          fname: preValue.fname,
          lname: preValue.lanme,
          email: value,
          phone:preValue.phone,
         };
      }else if(name ==='phone'){
        return{ 
          fname: preValue.fname,
          lname:  preValue.lname,
          email:preValue.email,
          phone:value, 
        };
      }
    });
  };

const onSubmits = (event) => {
  event.preventDefault();
  alert=("Sucessfully Submited");
};
  


  return(
  <>
    <div className="main_div">
    <form onSubmit={onSubmits}>
    <div>

      <h1>Hello,{fullName.fname} {fullName.lName}</h1>
      <p>{fullName.email}</p>
      <p>{fullName.phone}</p>
      
       <input type="text" 
      placeholder="EnterYouName"  
      name="fName" 
      onChange={inputEvent} 
      value={fullName.fname}
       />
      

      <br/>

      <input type="text"
       placeholder="EnterEmail" 
       name="email" 
       onChange={inputEvent} 
       value={fullName.email}
       autoComplete="off"
        />

      <input type="number" 
       placeholder="EnterYourNumber" 
       name="phone" 
       onChange={inputEvent} 
       value={fullName.phone}
        /> 



      <button type="submit"> Clicked Me 👍</button>
      </div>
      </form>
    </div>
  </>
  );
};

export default App;

//<!-----------------------------------Notes-------------------->
/*
1).const [name,setName]=useState();  =>   By useState now we can show our Value by side of Hello,{value}
2).const inputEvent =(event)         =>  its written becoz by this now we can licked on click button
3).console.log(event.target.value);  =>   is written becoz its show our vlaue which we typed in Input  
4).setName(event.target.value);      =>  When user type anyValue in inputEvent fuction then its render in useSate Update module "setName"

*/