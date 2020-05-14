import React from 'react'
import { FaTimesCircle } from "react-icons/fa";

import './CardContainer.css'

type OneCardPropsType = {
    text: string,
    author: string,
    removeStory: () => void
}

const OneCard: React.FC<OneCardPropsType> = ({ text, author, removeStory }) => {
    const onRemove = () => {
        removeStory()
    }
    return (
        <div className="col-md-4 col-sm-6 col-9">
            <div className="card" >
                <div className="card-body">
                    <p className="card-text">
                        {text}
                    </p>
                </div>
                <div className="card-footer">
                    {`by ${author}`}
                    <button type="button"
                        className="btn btn-sm float-right">
                            <FaTimesCircle className="icon" onClick = {onRemove} />
                    </button>
                    
                </div>
            </div>
        </div>

    )
}

export default OneCard