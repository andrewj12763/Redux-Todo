import {ADD} from "../actions"

// pass todo array and action through a function and build a switch statment 
export default (todos = [], action) => {
    switch (action.type) {
        // case for add as an action type
        case ADD:
        // console.log('added');
        const todosNew= [...todos, action.payload];
        // return the new todos 
        return todosNew;
        default:
        todos = ['somthing']

    }
};