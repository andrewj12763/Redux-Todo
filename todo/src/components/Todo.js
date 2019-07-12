import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from '../actions';
import DisplayTodos from "./DisplayTodos";


// build todo component to add new todos to the list
class Todo extends Component {
    
    handleInputChange = e => {
            this.setState({ [e.target.name]: e.target.value });
            // console.log(e.target.value)
            return e.target.value;
          };
        

    render() {
        console.log('passed todo', this.props)
        return(
            // build submit form for onlick adding the text to array
            <div>
                <input type="text" placeholder="Add todo" name="todo" onChange={this.handleInputChange} />
                <button onClick={() => this.props.add(this.state.todo)}  >Submit</button>
                <DisplayTodos  todoList={this.props.todos}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

export default connect(mapStateToProps, { add })(Todo);