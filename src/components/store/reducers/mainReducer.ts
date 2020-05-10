import { UPDATE_WHO, UPDATE_WHAT, UPDATE_WHEN, UPDATE_WHERE, 
    PUBLICATE_STORY, AUTHOR_UPDATE, REMOVE_STORY, ERASE_SENTENCE } from "../actions/types"
import { UpdateWhoType, UpdateWhatType, UpdateWhenType, UpdateWhereType, UpdateAuthorType, EraseSentenceType, PublicateStoryType, RemoveStoryType } from "../actions/action-creators"

type InitialStateType = typeof initialState

export type SentenceType = {
    who: string,
    what: string,
    when: string,
    where: string,
    author: string
}
export type PublishedType = {
    id: number
    text: string
    author: string
}
type ActionsType = UpdateWhoType | UpdateWhatType | UpdateWhenType | UpdateWhereType |
    UpdateAuthorType | EraseSentenceType | PublicateStoryType | RemoveStoryType

const initialState = {
    sentence: {
        who: "Jack",
        what: "built a house",
        when: "today",
        where: "in the forest",
        author: "Stranger"
    } as SentenceType,
    published: [
        {
            id: 0,
            text: "John Galt invented the perpetual motion machine some time ago in one book",
            author: "Anton Cheremnykh"
        },
        {
            id: 1,
            text: "Kim Jong-un didn't celebrate his grandfather's Bday last time in Pyongyang",
            author: "Anton Cheremnykh"
        }

    ] as Array<PublishedType>

}

const Reducer = (state = initialState, action: ActionsType): InitialStateType => {
    let idPublCount = state.published.length
    switch (action.type) {
        case UPDATE_WHO:
            return {
                ...state,
                sentence: {
                    ...state.sentence,
                    who: action.payload
                }
            }
        case UPDATE_WHAT:
            return {
                ...state,
                sentence: {
                    ...state.sentence,
                    what: action.payload
                }
            }
        case UPDATE_WHEN:
            return {
                ...state,
                sentence: {
                    ...state.sentence,
                    when: action.payload
                }
            }
        case UPDATE_WHERE:
            return {
                ...state,
                sentence: {
                    ...state.sentence,
                    where: action.payload
                }
            }
        case AUTHOR_UPDATE:
            return {
                ...state,
                sentence: {
                    ...state.sentence,
                    author: action.payload
                }
            }
        case PUBLICATE_STORY:
            const { who, what, when, where, author } = state.sentence
            let first = who.toString()
            let second = what.toString()
            let third = when.toString()
            let forth = where.toString()
            let by = author.toString()
            let text = `${first} ${second} ${third} ${forth}`
            return {
                ...state,
                published: [...state.published, {
                    id: idPublCount,
                    text,
                    author: by
                }]
            }
        case ERASE_SENTENCE:
            return {
                ...state,
                sentence: {
                    who: "",
                    what: "",
                    when: "",
                    where: "",
                    author: "Stranger"
                }
            }

        case REMOVE_STORY:
            return {
                ...state,
                published: state.published.filter(({id}) => id !== action.payload)
            }
        default:
            return state
    }
}

export default Reducer