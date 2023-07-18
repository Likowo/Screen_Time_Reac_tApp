
import { queryAllByDisplayValue } from '@testing-library/react';
import './App.css';
// step 1----------------------------------------Imports
// import days from './models/days';
import {useState,useEffect} from 'react';


function App() {
  // step 2: -------------{Declare What Hooks Are Needed}---------Set initial State in a component using useState NB. Components are like fxns that takes an HTML  or Markup. They can be seen as the features you want to update with new information when the app is in use. E.g in the Screen Time App, we want the user to put in  the current day and in return will get a response state if it's Screen time or No Screen time. Thus user Day is the feature want to update when ever a new day is entered. Then we can use the useEffect hook to update the initial state
    // --destructing an array of objects --> const [day, setDay]= useState({day:`Monday`, screenTime:`No Screen Time` } )

  const [day, setDay]= useState(``);
  const [response, setResponse] = useState(``);
  const[count, setCount] = useState(0);
  // 3: ----- Global Variable that may Affect the state // Declare What State is Needed and the Functions that will Change Them

  let resp = [
    `No Screen Time`,
    // `No Screen Time`,
    // `No Screen Time`,
    // `No Screen Time`,
    // `Yes Screen Time!!`,
    // `Yes Screen Time!!`,
    `Yes Screen Time!!`,
  ];
  
  // let dayOfTheWeek = [
  //   `Monday`,
  //   `Tuesday`,
  //   `Wednesday`,
  //   `Thursday`,
  //   `Friday`,
  //   `Saturday`,
  //   `Sunday`,
  //   ];


 //4:(Functions)-----  Declare What Functions Are Needed and how they specifically change the State i.e. Declare a fxn to update the initial useState features which are day and response

 const changeMultipleThings= () =>{
  let firstday = prompt(`What Day is Today?`);
  setDay(firstday);
  changeResponse()
 };


 const changeResponse = () => {
  if( day === `Friday`|| day === `Saturday`|| day === `Sunday` ){
    setResponse(`Yes Screen Time!!`);
  }else if( day === `Monday`|| day === `Tuesday`|| day === `Wednesday` || day === `Wednesday`){
    setResponse(`No Screen Time!!`);
  } else{
    setResponse(` `)
  }

 };

 // 5: (using the Hook Functions) --- {Renders a Function and Changes state *when Necessary* before the application loads (or) re-renders}; In this project I an using the useEffect hook with synthax; useEffect(()=>{},[]) hint: it's like a method with a call back function

 useEffect(()=>{
  // setResponse(response);
  return() => {
    setResponse(response)
  }
 },[day])

  return (
    // 6: Render What the User Sees in Real-Time 
    // NB: When you open the App.js, start by Creating the structure of the page within return. In this project I began with a parent div with className, App ; an h1 and h2- header, input tag for question "what day is today', and a child div having a button that returns response to the input e.g " Today is Monday. No Screen Time"
    <div className="App">
     <h1> Screen Time or No Screen Time App </h1>
     <h3> How to Play: Click the <strong>Change Day</strong> button to enter current day, <br/>to see if you can have Screen Time! </h3>
     <h2>Day of the Week is:  {day}, {response}</h2>
     <button onClick={() => {changeMultipleThings()}}> Change Day </button>
     <br/>
     {/* <h2>Screen Time?: {response}</h2>
  <button onClick={changeCount}> Press Me </button> */}

    </div>
  );
}

export default App;

//=================================================
    {/* <h2> Day of the Week is ( Screen Time!!) </h2>
    <h3>How to Play: Type in today's day and press the button to see if you can have screen time </h3>
     <input //use the attributes below to set up the box for user to enter the current day of the week)
        type="text"
         name='day' 
         placeholder=" What Day is Today?"
        /> */}
