import React from 'react'
import OneCard from './OneCard'

import './CardContainer.css'
import { PublishedType } from '../store/reducers/mainReducer'

type SentencesPropsType = {
    published: Array<PublishedType>,
    removeStory: (value: number) => void
}

const Sentences: React.FC<SentencesPropsType> = ({ published, removeStory }) => {
    if(published.length === 0) {
        return null
    }
    const arrayOfSentences = published.map((oneSentense) =>
        <OneCard key={oneSentense.id} text={oneSentense.text} author={oneSentense.author} 
            removeStory = {() => removeStory(oneSentense.id)} />)
    return (
        <div className="container">
            <hr />
            <div className="row justify-content-center">
                {arrayOfSentences}
            </div>
        </div>
    )
}

export default Sentences