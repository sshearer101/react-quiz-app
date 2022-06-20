import { useState } from "react"
import Question from "./Question"

export default function QuestionContainer({data}){
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)


    function handleAnswer(x){
        console.log(x === true)
        if(x){
            setScore(score + 1)
        }
        const nextQuestion = currentQuestion + 1
        if(nextQuestion < data.length){
            setCurrentQuestion(nextQuestion)
        }
        else{
            setShowScore(true)
        }
    }



    return(
        <div>
                { showScore  ? (
                <div> You scored {score} out of {data.length} </div>
            ) : (
                <>
                <div className='question-section'>
                    <div className='question-count'>
                        <span>Question {currentQuestion + 1}</span>/{data.length}
                    </div>
                    <div className='question-text'>{data[currentQuestion].questionText}</div>
                </div>
                <div className='answer-section'>
                    {data[currentQuestion].answerOptions.map((x) => 
                        <button onClick={() => handleAnswer(x.isCorrect)}>{x.answerText}</button>
                    )}
                </div>
            </>
            )
        }

        </div>
    )
}