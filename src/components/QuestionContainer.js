import { useState } from "react"

export default function QuestionContainer({data}){
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)


    function handleAnswer(x){
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
                <div className="score-div"> You scored {score} out of {data.length} </div>
            ) : (
                <>
                <div className='question-div'>
                    <div className='question-count'>
                        <span>Question {currentQuestion + 1}</span>/{data.length}
                    </div>
                    <div className='question-text'>{data[currentQuestion].questionText}</div>
                </div>
                <div className='answer-div'>
                    {data[currentQuestion].answerOptions.map((x, i) => 
                        <button 
                            key={i} 
                            onClick={() => handleAnswer(x.isCorrect)}
                            className={x === true ? "correct" : "incorrect"}
                        
                        >{x.answerText}</button>
                    )}
                </div>
            </>
            )
        }

        </div>
    )
}