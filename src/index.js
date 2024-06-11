import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import style from "./indexStyles.module.css";

let users_familyMovchkos = [
  {
      password : "Pol&8!",
      answers : [12,34,56,78,2,3,4],
      age : 10,
      class : 5,
      phoneNumber : "+380963213304",
  
      mainInfo : {
          name : "Petro",
          surname : "Movchko",
          result : null,
          value_result : "",
      },
  },
  {
      password : "Pol&9!",
      answers : [15,31,52,73,2,3,4],
      age : 10,
      class : 5,
      phoneNumber : "+380963913304",
  
      mainInfo : {
          name : "Roman",
          surname : "Movchko",
          result : null,
          value_result : "",
      },
  },
  {
      password : "Pol&10!",
      answers : [12,39,76,74,2,54,4],
      age : 10,
      class : 5,
      phoneNumber : "+380963313304",
  
      mainInfo : {
          name : "Sviat",
          surname : "Movchko",
          result : null,
          value_result : "",
      },
  },
]

let correctAnswers = [
  {
      answer : 12,
      mark : 1,
  },
  {
      answer : 30,
      mark : 1,
  },
  {
      answer : 56,
      mark : 2,
  },
  {
      answer : 26,
      mark : 2,
  },
  {
      answer : 16,
      mark : 2,
  },
  {
      answer : 3,
      mark : 3,
  },
  {
      answer : 4,
      mark : 3,
  },
]

function calculateResult (answers,correctAnswers) {
  let sum = 0
  for ( let i=0; i<answers.length; i++) {
      if ( correctAnswers[i].answer === answers[i]) {
          sum += correctAnswers[i].mark
      }
  }
  return sum
}

for ( let i=0; i<users_familyMovchkos.length; i++) {
  users_familyMovchkos[i].mainInfo.result= calculateResult(users_familyMovchkos[i].answers,correctAnswers)
  if (users_familyMovchkos[i].mainInfo.result>=7){
    users_familyMovchkos[i].mainInfo.value_result = "Хороший результат!"
  }
  else{
    users_familyMovchkos[i].mainInfo.value_result = "Поганий результат!"
  }
}

function Component(props){
  function callback( ){
    alert(props.param.mainInfo.value_result)
  }
  return(
    <>
    <div className={style.Mov_div}>
    <h1 className={style.Movchko_h1_style} onClick={callback}> {props.param.mainInfo.name}  {props.param.mainInfo.surname} </h1>   <h2 className={style.Movchko_h2_style}> набрав {props.param.mainInfo.result} </h2>
    </div>
    </>
  )
}
function Component1(props){
  let Movchky = users_familyMovchkos.map( (user) => (<Component param={user}/>));
  return(
    <>
    <div>
    <h1 className={style.results}>Результати Сім'ї Мовчків:</h1>
    {Movchky}
    </div>
    </>
  )
}

function App() {
    return (
        <div>
        <Component1 param={users_familyMovchkos}/>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);
reportWebVitals();
