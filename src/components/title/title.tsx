import React from 'react'
import './title.css'

const Title = () => {
    return (
        <React.Fragment>
            <h3>Hey ho<span className = "colored">!</span></h3>
            <h5 className = "body">Let's write some <span className = "ss">Short Stories...</span>
                <span className = "colored">*</span></h5>
            <p className = "ps">
                <span className = "colored">*</span>
                yeah, like Hemingway but more fun or based on facts maybe</p>
        </React.Fragment>
    )
}

export default Title

