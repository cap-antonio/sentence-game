import React from 'react'
import { connect } from 'react-redux'
import InputForms from '../form/InputForm'
import Title from '../title/title'
import Sentences from '../sentences/Sentences'
import { updateWho, updateWhat, updateWhen, updateWhere, eraseSentence, 
    publicateStory, removeStory, updateAuthor } from '../store/actions/action-creators'

class SentenceGame extends React.Component {
    
    render() {
        const {who, what, when, where} = this.props.sentence
        const {updateWho, updateWhat, updateWhen, updateWhere, 
            publicateStory, updateAuthor, eraseSentence} = this.props
        return (
            <React.Fragment>
                <Title />
                <InputForms who = {who} what = {what} when = {when} where = {where} 
                    updateWho = {updateWho} updateWhat = {updateWhat} 
                    updateWhen = {updateWhen} updateWhere = {updateWhere} 
                    updateAuthor = {updateAuthor} publicateStory = {publicateStory} 
                    eraseSentence = {eraseSentence}/>
                <Sentences published = {this.props.published} removeStory = {this.props.removeStory} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sentence: state.sentencePage.sentence,
        published: state.sentencePage.published
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateWho: (value) => dispatch(updateWho(value)),
//         updateWhat: (value) => dispatch(updateWhat(value)),
//         updateWhen: (value) => dispatch(updateWhen(value)),
//         updateWhere: (value) => dispatch(updateWhere(value)),
//         updateAuthor: (value) => dispatch(updateAuthor(value)),
//         publicateStory: () => dispatch(publicateStory()),
//         removeStory: (value) => dispatch(removeStory(value))
//     }
// }

export default connect(mapStateToProps, {updateWho, updateWhat, updateWhen, updateWhere, 
    updateAuthor, eraseSentence, publicateStory, removeStory})(SentenceGame)