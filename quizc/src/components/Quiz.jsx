import React, { useState } from 'react'
import quizQuestion from  '../resources/quizQuestion.json'

export default function Quiz() {
    const [qno,setQno] = useState(0);

    console.log(quizQuestion)

    const {question,optionA,optionB,optionC,optionD,answer} = quizQuestion[qno];

    const prevQ = () =>{
        qno >0 ?
        setQno(qno - 1)
        : setQno(0)
    }
    const nextQ = () =>{
        qno <14 ?
        setQno( qno + 1) : setQno(14)
    }
    const reset = ()=>{
        let resp = confirm("Are you sure you want to quit?");
        //=  prompt("Are you sure you want to quit? ( y/n )");
        resp ? setQno(0) : ""
    }

    console.log(answer)
  return (
    <div className='main'>
    <h2 className='title'>Question</h2>
    <h5>{qno+1} of 15</h5>
    <p className='question'>{question}</p>
    <div className='container'>
        <div className='group'>
            <button className='option'>{optionA}</button>
            <button className='option'>{optionB}</button>
        </div>
        <div className='group'>
            <button className='option'>{optionC}</button>
            <button className='option'>{optionD}</button>
        </div>
    </div>
    <div className="buttons">
        <button id='previous' onClick={prevQ}>Previous</button>
        <button id='next' onClick={nextQ}>Next</button>
        <button id='quit' onClick={reset}>Quit</button>
    </div>
  </div>
  )
}
