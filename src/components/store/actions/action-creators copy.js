import { UPDATE_WHO, UPDATE_WHAT, UPDATE_WHEN, UPDATE_WHERE, AUTHOR_UPDATE, 
    PUBLICATE_STORY, REMOVE_STORY, ERASE_SENTENCE } from "./types"

export const updateWho = (who) => {
    return {
        type: UPDATE_WHO,
        payload: who
    }
}
export const updateWhat = (what) => {
    return {
        type: UPDATE_WHAT,
        payload: what
    }
}
export const updateWhen = (when) => {
    return {
        type: UPDATE_WHEN,
        payload: when
    }
}
export const updateWhere = (where) => {
    return {
        type: UPDATE_WHERE,
        payload: where
    }
}

export const updateAuthor = (author) => {
    return {
        type: AUTHOR_UPDATE,
        payload: author
    }
}

export const eraseSentence = () => {
    return {
        type: ERASE_SENTENCE
    }
}

export const publicateStory = () => {
    return {
        type: PUBLICATE_STORY
    }
}

export const removeStory = (id) => {
    return {
        type: REMOVE_STORY,
        payload: id
    }
}