import React, { useEffect } from 'react';
import Questions from './Questions';

import { moveNextQuestion, movePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';


//redux store inport
import { useSelector, useDispatch} from 'react-redux'


export default function Quiz() {
  
  
  const state = useSelector(state => state);
  const {queue , trace}  = useSelector(state => state.questions);
  const dispatch = useDispatch()

  useEffect(() => {
     console.log(state)
  })

   
   //Next button evt handler
    function onNext(){
        console.log('On next click')
        //goes to the next question
        
        if(trace < queue.length){
          dispatch(moveNextQuestion());

          dispatch(PushAnswer(1))

        }


  
    }
  // Prev button evt handler  
    function onPrev(){
      console.log('On onPrev click')
      if(trace > 0){
        dispatch(movePrevQuestion());
      }

    }

  
  return (
    <div className='container'>
        <h1 className='title text-light'> Quiz app</h1>

        <Questions  />
    
        
        <div className='grid'>
            <button className='btn prev' onClick={onPrev}>Prev</button> 
            <button className='btn next' onClick={onNext}>Next</button>
        </div>

    </div>
  )
}
