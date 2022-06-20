import { useState } from "react"

export default function QuestionContainer({data}){
    const [answer, setAnswer] = useState('')
    console.log(data)
    return(
        <div>
            {answer ? (
                <div> You scored 0 our of {data.length}</div>
            ) : (
                <>
                <div className='question-section'>
                    <div className='question-count'>
                        <span>Question 1</span>/{data.length}
                    </div>
                    <div className='question-text'>This is where the question text should go</div>
                </div>
                <div className='answer-section'>
                    <button>Answer 1</button>
                    <button>Answer 2</button>
                    <button>Answer 3</button>
                    <button>Answer 4</button>
                </div>
            </>
            )
        
        }

        </div>
    )
}