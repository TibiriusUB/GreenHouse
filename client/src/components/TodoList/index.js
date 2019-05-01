import React, { Component } from "react";
import TodoItems from "../TodoItems";
import "./style.css";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    };

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        };
        console.log(this.state.items);
        e.preventDefault();
    };

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }

    

    render() {
        return (
            <div className="jumbotron bg-success todoListMain col-md-6 offset-3 ">
                <div className="header form-group form-inline">
                    <label>To-Do List</label>
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} className="grow form-control input-lg" placeholder="What Does Your Garden Need?">
                        </input>
                        <button className="btn btn-outline-light  my-2 my-sm-0 btn-lg" type="submit" >Grow</button>
                    </form>
                </div>
                <br></br>
                <div>
                    <TodoItems entries={this.state.items} 
                                delete={this.deleteItem}/>
                </div>

            </div>
        );
    }
}

export default TodoList;