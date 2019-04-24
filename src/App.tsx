import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoItems from './TodoItems'
import { Todo } from './types'

type Props = {}
type State = {
  items: Todo[],
  currentItem: Todo
}

class App extends Component<Props, State> {
  inputElement: React.RefObject<HTMLInputElement> = React.createRef()

  constructor(props: Props) {
    super(props)
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
      },
    }
  }

  deleteItem = (key: string) => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now().toString() }
    this.setState({
      currentItem,
    })
  }
  addItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }
  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    )
  }
}

export default App
