import React, {Component} from "react";

class InputTodo extends React.Component {
    state = {
        title: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        //console.log('Hello');
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.title.trim()) {
            this.props.addTodoProps(this.state.title);
            this.setState({title: ""});
        } else {
            alert("Please write item")
        }
        //console.log(this.state.title);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input 
                    type="text" 
                    className="input-text"
                    placeholder="Add Todo..."
                    name="title" 
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <button className="input-submit">Submit</button>
            </form>
        )
    }

}

export default InputTodo