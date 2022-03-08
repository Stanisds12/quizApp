import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const history=useNavigate()
    const btnClick = () => {
        history("/game")
    }
    return (
        <>
            <div className="row justify-content-center welcome">
                <div className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
                    <h1 className='text-center'>Welcome To QUIZAPP</h1>
                    <hr className='bg-dark' />
                    <p className='text-center'>
                        I hope you enjoy the experience and may you have fun.
                        Please Inicialize when ready.
                    </p>
                    <button onClick={(e)=>btnClick(e)} className='btn btn-success btn-lg btn-block'>Begin</button>
                </div>
            </div>
            
        </>
    );
}

export default Welcome;
