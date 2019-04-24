import React, { Component } from 'react'
import { Todo } from './types'

type Props = {
  deleteItem: (key: string) => void,
  entries: Todo[]
}

class TodoItems extends Component<Props> {
  createTasks = (item: Todo) => {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems
