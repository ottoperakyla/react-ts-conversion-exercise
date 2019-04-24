import React, { Component } from 'react'
import { Todo } from './types'

type Props = {
  inputElement: React.RefObject<HTMLInputElement>,
  addItem: React.FormEventHandler<HTMLFormElement>,
  handleInput: React.ChangeEventHandler<HTMLInputElement>,
  currentItem: Todo
}

class TodoList extends Component<Props> {
  componentDidUpdate() {
    if (this.props.inputElement.current) {
      this.props.inputElement.current.focus()
    }
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList
