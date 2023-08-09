import React from 'react'
import { selectedDifficulty } from '../Quiz/interface'
import { levelObject } from '@/constant/data'

const RatingForQuestion = ({ label }: selectedDifficulty) => [1, 2, 3].map((each) => <span key={each} className={`${each <= levelObject[label] ? 'text-green-600' : ''}`}>★</span>)
export default RatingForQuestion