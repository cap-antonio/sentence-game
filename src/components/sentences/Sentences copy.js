import React from 'react'
import OneCard from './OneCard'

import './CardContainer.css'

const Sentences = ({ published, removeStory }) => {
    if(published.length === 0) {
        return null
    }
    const arrayOfSentences = published.map((oneSentense) =>
        <OneCard key={oneSentense.id} text={oneSentense.text} author={oneSentense.author} 
            removeStory = {() => removeStory(oneSentense.id)} />)
    return (
        <div className="container">
            <hr />
            <div className="row">
                {arrayOfSentences}
            </div>
        </div>
    )
}

export default Sentences