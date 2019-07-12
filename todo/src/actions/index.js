export const ADD = "ADD"

// build action and add ADD as a type
export const add = input => {
    return {
        type: ADD,
        payload: input
    }
}