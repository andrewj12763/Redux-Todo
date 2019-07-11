import React from 'react';
import todos from '../reducers';
import { connect } from 'react-redux';


const DisplayTodos = props => {
    console.log('display', props.todoList)
    return (
        <div className="list">
            <ul>

                {
                    (props.todoList === undefined)
                 ? <div>Add to the Todo List here</div>
                  : <ul>
                      {props.todoList.map(todo => {
                    return(
                        <li>{todo}</li>
                    )
                })}
                  </ul>
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

export default connect(mapStateToProps, {todos})(DisplayTodos);