import React, { useEffect,useState }  from 'react'
import { Questions } from '../data'


const Game = () => {
    const [perguntas, setPerguntas] = useState(Questions)
    const [questionNum, setQuestionNum] = useState(4)
    const [quest, setQuest] = useState(1)
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * perguntas.length))
    const [right, setRight] = useState(0)
    let time = 1
    let quizTimeInMinutes = time * 60 * 60
    let quizTime= quizTimeInMinutes/60
    
    useEffect(() => {
        setPerguntas(perguntas)
        
    }, [perguntas]);
    const startCountDown = () => {
        let quizTimer = setInterval(() => {

            if (quizTime<=0) {
                clearInterval(quizTimer);
                let v = document.getElementById("q");
                v.style.display = 'none'
                let p = document.getElementById("p");
                p.style.display = 'none'
                let vv = document.getElementById("qw");
                vv.style.display = 'block'
            } else {
                quizTime --
                let second = Math.floor(quizTime % 60);
                let minute = Math.floor(quizTime / 60) % 60
                document.getElementById("count-down").innerHTML=`Time| ${minute} :${second}`
            }
        },1000
        )
    }
    //startCountDown();

   
    const randoms = (v) => {
        let newArr = perguntas.filter(x => x.id !== v)
        setPerguntas(newArr)
        return newArr.length - 1
    }

    const handleAnswer = e => {

             if (questionNum !== quest) {
                if (e.target.value === perguntas[randomNumber].Correct) {
                    setRight(right + 1)
                }
                setQuest(quest + 1);

            } else {
                if (e.target.value === perguntas[randomNumber].Correct) setRight(right + 1)
                let v = document.getElementById("q");
                v.style.display = 'none'
                let p = document.getElementById("p");
                p.style.display = 'none'
                let vv = document.getElementById("qw");
                vv.style.display = 'block'
        }
        setRandomNumber(randoms(perguntas[randomNumber].id))
       
        
    }
    const restart = () => {
        let v = document.getElementById("q");
        v.style.display = 'block'
        let p = document.getElementById("p");
        p.style.display = 'block'
        let vv = document.getElementById("qw");
        vv.style.display = 'none'
        setPerguntas(Questions)
        setRandomNumber(Math.floor(Math.random() * perguntas.length))
        setRight(0)
        setQuest(1);
        
    }
    
    
    return (
        <>
            <div  className="row justify-content-center points">
                <div id="p" className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
                    <span className='col-md-6'>{quest} of {questionNum} questions </span>
                    <span id="count-down" className='col-md-6 text-right bg-success'></span>
                </div>
            </div>
            <div className="row justify-content-center ">
               
                <div id="q" className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
                    <h1 className='text-center'>{perguntas[randomNumber].question}</h1>
                    <hr className='bg-dark' />
                    <button onClick={(e) => handleAnswer(e)} className='btn btn-outline-secondary btnRespond btn-lg btn-block' value={perguntas[randomNumber].AnswerOne}>
                        {perguntas[randomNumber].AnswerOne}</button>
                    <button onClick={(e) => handleAnswer(e)} className='btn btn-outline-secondary btnRespond btn-lg btn-block' value={perguntas[randomNumber].AnswerTwo}>
                        {perguntas[randomNumber].AnswerTwo}</button>
                    <button onClick={(e) => handleAnswer(e)} className='btn btn-outline-secondary btnRespond btn-lg btn-block' value={perguntas[randomNumber].AnswerThree}>
                        {perguntas[randomNumber].AnswerThree}</button>
                    <button onClick={(e) => handleAnswer(e)} className='btn btn-outline-secondary btnRespond btn-lg btn-block' value={perguntas[randomNumber].AnswerFour}>
                        {perguntas[randomNumber].AnswerFour}</button>
                </div>
                <div id="qw" className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded points">
                   
                    <p>{((right * 100) / questionNum) === 100 ? "You got all answers right" : ((right * 100) / questionNum) >= 50 ? `You got ${right} answer right of ${questionNum} questions`: "That was bad man! Try again" }</p>
                    <button onClick={(e)=>restart(e)} className='btn btn-success'>Restart</button>
                </div>
            </div>
 
        </>
    )
}

export default Game