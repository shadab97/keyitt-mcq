import React, { useMemo, useState } from 'react'
import data from '../../constant/data'
import { shuffleArray } from '@/helpers';
import { Iquestion } from './interface';



const useQuiz = () => {
    const [question, setQuestion] = useState<Iquestion[]>(data);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [markedAnswerIndex, setMarkedAnswerIndex] = useState(-1)
    const [isFinished, setIsFinished] = useState(false)
    const currentQuestion = question[currentQuestionIndex] as Iquestion;
    const progress = Math.ceil(((currentQuestionIndex === 0 ? 0 : currentQuestionIndex + 1) / question?.length) * 100) as number;
    const [message, setMessage] = useState('')
    const handleSetCurrentQuestionIndex = (index: number) => {
        setMessage('')
        setCurrentQuestionIndex(index)
    }
    const handleFinished = (val: boolean) => {
        setIsFinished(val)
    }
    const [result, setResult] = useState(0)

    const handleMarkAnswer = (ans: string, each: number) => {
        setMarkedAnswerIndex(each)
        if (decodeURIComponent(currentQuestion.correct_answer) === ans) {
            setMessage('Correct Answer')
            setResult((res) => res + 1)
        } else {
            setMessage('Incorrect Answer! try Again')
        }
    }

    const option = useMemo(() => {
        return shuffleArray([currentQuestion?.correct_answer, ...currentQuestion?.incorrect_answers])
    }, [currentQuestion])

    return {
        result: Math.ceil((result / question.length) * 100),
        option,
        isFinished,
        handleFinished,
        message,
        question,
        progress,
        currentQuestion,
        handleMarkAnswer,
        markedAnswerIndex,
        currentQuestionIndex,
        handleSetCurrentQuestionIndex
    }
}

export default useQuiz