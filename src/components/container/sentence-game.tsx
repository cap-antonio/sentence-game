import React from 'react'
import { connect } from 'react-redux'
import InputForms from '../form/InputForm'
import Title from '../title/title'
import Sentences from '../sentences/Sentences'
import { updateWho, updateWhat, updateWhen, updateWhere, eraseSentence, 
    publicateStory, removeStory, updateAuthor } from '../store/actions/action-creators'
import { SentenceType, PublishedType } from '../store/reducers/mainReducer'
import { AppStateType } from '../store/reducers/rootReducer'

type MapStateToPropsType = {
    sentence: SentenceType,
    published: Array<PublishedType>
}
type mapDispatchToPropsType = {
    updateWho: (value: string) => void, 
    updateWhat: (value: string) => void, 
    updateWhen: (value: string) => void, 
    updateWhere: (value: string) => void, 
    updateAuthor: (value: string) => void, 
    eraseSentence: () => void, 
    publicateStory: () => void, 
    removeStory: (value: number) => void
}
type PropsType = MapStateToPropsType & mapDispatchToPropsType

class SentenceGame extends React.Component<PropsType> {
    render() {
        const {who, what, when, where} = this.props.sentence
        const {updateWho, updateWhat, updateWhen, updateWhere, 
            publicateStory, updateAuthor, eraseSentence} = this.props
        return (
            <React.Fragment>
                <Title />
                <InputForms updateWho = {updateWho} updateWhat = {updateWhat} 
                    updateWhen = {updateWhen} updateWhere = {updateWhere} 
                    updateAuthor = {updateAuthor} publicateStory = {publicateStory} 
                    eraseSentence = {eraseSentence}/>
                <Sentences published = {this.props.published} removeStory = {this.props.removeStory} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
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