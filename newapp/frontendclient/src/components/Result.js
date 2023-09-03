import React from 'react'
import '../styles/Result.css';
import { Link } from 'react-router-dom';


import ResultTable from './ResultTable';

export default function Result() {
    function onRestart(){
        // dispatch(resetAllAction())
        // dispatch(resetResultAction())
    }

  return (
    <div className='container'>
       <h1 className='title text-light'>Quiz App</h1>


       <div className='result flex-center'>
        <div className='flex'>
            <span> Username</span>
            <span className='bold'>Daily tution</span>
        </div>
        <div className='flex'>
            <span> Total Quiz Points:</span>
            <span className='bold'>50</span>
        </div>
        <div className='flex'>
            <span> Total Questions:</span>
            <span className='bold'>11</span>
        </div>
        <div className='flex'>
            <span> Total Attempts:</span>
            <span className='bold'>05</span>
        </div>
        <div className='flex'>
            <span> Total Earned Points:</span>
            <span className='bold'>30</span>
        </div>
        <div className='flex'>
            <span> Quiz Result:</span>
            <span className='bold'>Congrats You have passed!</span>
        </div>

       </div>
   
   
       <div className="start">
            <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
        </div>



        <div className="container">
            <ResultTable />

        </div>


        
    </div>
  )
}
