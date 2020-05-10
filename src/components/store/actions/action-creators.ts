import { UPDATE_WHO, UPDATE_WHAT, UPDATE_WHEN, UPDATE_WHERE, AUTHOR_UPDATE, 
    PUBLICATE_STORY, REMOVE_STORY, ERASE_SENTENCE } from "./types"

export type UpdateWhoType = {
    type: typeof UPDATE_WHO,
    payload: string
}
export type UpdateWhatType = {
    type: typeof UPDATE_WHAT,
    payload: string
}
export type UpdateWhenType = {
    type: typeof UPDATE_WHEN,
    payload: string
}
export type UpdateWhereType = {
    type: typeof UPDATE_WHERE,
    payload: string
}
export type UpdateAuthorType = {
    type: typeof AUTHOR_UPDATE,
    payload: string
}
export type EraseSentenceType = {
    type: typeof ERASE_SENTENCE
}
export type PublicateStoryType = {
    type: typeof PUBLICATE_STORY
}
export type RemoveStoryType = {
    type: typeof REMOVE_STORY,
    payload: number
}

export const updateWho = (who: string): UpdateWhoType => {
    return {
        type: UPDATE_WHO,
        payload: who
    }
}
export const updateWhat = (what: string): UpdateWhatType => {
    return {
        type: UPDATE_WHAT,
        payload: what
    }
}
export const updateWhen = (when: string): UpdateWhenType => {
    return {
        type: UPDATE_WHEN,
        payload: when
    }
}
export const updateWhere = (where: string): UpdateWhereType => {
    return {
        type: UPDATE_WHERE,
        payload: where
    }
}

export const updateAuthor = (author: string): UpdateAuthorType => {
    return {
        type: AUTHOR_UPDATE,
        payload: author
    }
}

export const eraseSentence = (): EraseSentenceType => {
    return {
        type: ERASE_SENTENCE
    }
}

export const publicateStory = (): PublicateStoryType => {
    return {
        type: PUBLICATE_STORY
    }
}

export const removeStory = (id: number): RemoveStoryType => {
    return {
        type: REMOVE_STORY,
        payload: id
    }
}