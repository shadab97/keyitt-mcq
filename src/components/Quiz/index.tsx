'use client'
import React from 'react'
import useQuiz from './useQuiz'
import ProgressBar from '../ProgressBar'
import BorderCard from '../bordered-card'
import RatingForQuestion from '../StarRating'

const Quiz = () => {
    const { option, question, result, message, progress, currentQuestion, currentQuestionIndex, markedAnswerIndex, handleMarkAnswer, handleSetCurrentQuestionIndex } = useQuiz()
    if (progress === 100) {
        return (
            <div className='flex flex-col justify-center items-center mt-8'>
                <BorderCard>
                    <p className=' text-6xl'>Completed</p>
                    <p className=' text-6xl'>Your Score is {result}%</p>
                </BorderCard>
                <button
                    onClick={() => {
                        handleSetCurrentQuestionIndex(0)
                    }}
                    className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Play Again
                </button>
            </div>
        )
    }

    return (
        <div className="flex mt-8 justify-center mx-auto flex-col max-w-lg w-[90%]" >

            <ProgressBar width={progress} />
            <div className="flex flex-col space-y-4">
                <h2 className="my-4">Question {currentQuestionIndex + 1} of {question.length}</h2>
                <p>
                    <span className="mr-2">Category:</span>
                    {decodeURIComponent(currentQuestion?.category)}</p>
                <div>
                    <span className="mr-2">Rating:</span>
                    <RatingForQuestion label={currentQuestion?.difficulty} />
                </div>
                <div className="flex flex-col items-start justify-start">
                    <p className="text-left my-4">
                        <span className="mr-2">Question:</span>
                        {decodeURIComponent(currentQuestion?.question)}
                    </p>
                    <div className="grid grid-cols-2 gap-4 w-full mt-4">
                        {
                            option?.map((each) =>
                                <button
                                    disabled={message !== '' && markedAnswerIndex !== each ? true : false}
                                    onClick={() => { handleMarkAnswer(decodeURIComponent(each), each) }}
                                    key={each}
                                    className={` disabled:bg-slate-400 disabled:cursor-not-allowed cursor-pointer rounded-md enabled:bg-gradient-to-r  from-pink-500 via-red-500 to-yellow-500 p-1`}>
                                    <div className={`p-4 disabled:bg-slate-400 bg-black h-full text-white`}>
                                        <h1 className="text-lg font-bold text-center">{decodeURIComponent(each)}</h1>
                                    </div>
                                </button>
                            )
                        }
                    </div>
                    <div className='text-white text-center w-full text-2xl my-4'>
                        {message}
                    </div>
                    <div className="my-4 flex justify-center gap-4 w-full items-center">
                        <button
                            onClick={() => {
                                handleSetCurrentQuestionIndex(0)
                            }}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Reset
                        </button>
                        {
                            message !== '' && <button
                                disabled={currentQuestionIndex < (question.length - 1) ? false : true}
                                onClick={() => {
                                    handleSetCurrentQuestionIndex(currentQuestionIndex + 1)
                                }} className="bg-blue-500 disabled:cursor-not-allowed hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Next Question
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Quiz